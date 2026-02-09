import { useEffect, useRef, useState } from "preact/hooks";
import { useSignal } from "@preact/signals";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playlist, setPlaylist] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isPlaying = useSignal(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  
  // Audio Analysis State
  const intensity = useSignal(0);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    fetch("/api/audio")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          // Shuffle playlist
          const shuffled = [...data].sort(() => Math.random() - 0.5);
          setPlaylist(shuffled);
        }
      });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const initAnalyser = () => {
    if (analyserRef.current || !audioRef.current) return;
    
    try {
      const AudioContextClass = globalThis.AudioContext;
      const audioCtx = new AudioContextClass();
      const source = audioCtx.createMediaElementSource(audioRef.current);
      const analyser = audioCtx.createAnalyser();
      
      analyser.fftSize = 256;
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
      analyserRef.current = analyser;

      const analyze = () => {
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteFrequencyData(dataArray);
        
        let sum = 0;
        for (let i = 0; i < bufferLength; i++) {
          sum += dataArray[i];
        }
        const average = sum / bufferLength;
        intensity.value = average / 255; // Normalized 0-1
        
        animationFrameRef.current = requestAnimationFrame(analyze);
      };
      
      analyze();
    } catch (err) {
      console.error("Audio analysis failed:", err);
    }
  };

  const togglePlay = () => {
    if (!audioRef.current || playlist.length === 0) return;
    
    if (isPlaying.value) {
      audioRef.current.pause();
    } else {
      initAnalyser();
      audioRef.current.play().catch(console.error);
    }
    isPlaying.value = !isPlaying.value;
    setHasStarted(true);
  };

  const nextTrack = () => {
    const nextIdx = (currentIndex + 1) % playlist.length;
    setCurrentIndex(nextIdx);
    if (isPlaying.value) {
      setTimeout(() => audioRef.current?.play(), 0);
    }
  };

  const prevTrack = () => {
    const prevIdx = (currentIndex - 1 + playlist.length) % playlist.length;
    setCurrentIndex(prevIdx);
    if (isPlaying.value) {
      setTimeout(() => audioRef.current?.play(), 0);
    }
  };

  // Minimized View
  // We will control visibility with CSS classes for smooth transitions
  return (
    <div class="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-4">
      {/* Dynamic Musical Notes - Only visible when expanded and playing */}
      <div 
        class={`absolute inset-x-0 bottom-full pointer-events-none flex justify-center h-48 w-full overflow-visible transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}
      >
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            class="absolute bottom-0 text-cyan-400/40"
            style={{
              opacity: isPlaying.value && intensity.value > (i / 15) * 0.7 ? 0.6 : 0,
              left: `${50 + Math.sin(i * 0.8) * 80}px`,
              animation: isPlaying.value ? `note-float-dynamic ${2.5 + (i % 4) * 0.5}s linear infinite` : 'none',
              animationDelay: `${i * 0.25}s`,
              transform: `scale(${0.6 + intensity.value * 0.6})`,
              "--tx": `${(i % 2 === 0 ? 1 : -1) * (20 + i * 5)}px`,
              "--rot": `${(i % 2 === 0 ? 1 : -1) * (20 + i * 10)}deg`,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          </div>
        ))}
      </div>

      {/* Expanded Player */}
      <div 
        class={`
          relative flex items-center gap-2 md:gap-4 bg-white/5 backdrop-blur-xl border border-white/10 p-3 md:p-4 rounded-2xl shadow-2xl 
          transition-all duration-500 origin-bottom-right
          group-hover:bg-white/10 group-hover:border-white/20
          ${isExpanded ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-8 pointer-events-none absolute'}
        `}
      >
        <audio
          ref={audioRef}
          src={playlist[currentIndex]}
          onEnded={nextTrack}
          crossOrigin="anonymous"
        />
        
        {/* Track Title */}
        {hasStarted && playlist.length > 0 && (
          <div class="flex flex-col w-24 md:w-32 overflow-hidden relative group/text">
            <span class="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 leading-none mb-1">Playing</span>
            <div class="relative w-full h-5 overflow-hidden">
               <div class="flex whitespace-nowrap absolute animate-marquee group-hover/text:paused w-max">
                <span class="text-[10px] md:text-[11px] font-medium text-white/60 align-middle pr-8">
                  {playlist[currentIndex].split('/').pop()?.replace(/\.[^/.]+$/, "")}
                </span>
                <span class="text-[10px] md:text-[11px] font-medium text-white/60 align-middle pr-8">
                  {playlist[currentIndex].split('/').pop()?.replace(/\.[^/.]+$/, "")}
                </span>
              </div>
            </div>
          </div>
        )}

        <div class="flex items-center gap-1 md:gap-2">
          <button
            type="button"
            onClick={prevTrack}
            class="p-1 md:p-2 text-white/40 hover:text-white transition-colors"
            title="Previous"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" class="md:w-4 md:h-4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="19 20 9 12 19 4 19 20"></polygon>
              <line x1="5" y1="19" x2="5" y2="5"></line>
            </svg>
          </button>

          <button
            type="button"
            onClick={togglePlay}
            class="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-cyan-500 rounded-xl text-black hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/20"
            title={isPlaying.value ? "Pause" : "Play"}
          >
            {isPlaying.value ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="md:w-5 md:h-5">
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="ml-1 md:w-5 md:h-5">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            )}
          </button>

          <button
            type="button"
            onClick={nextTrack}
            class="p-1 md:p-2 text-white/40 hover:text-white transition-colors"
            title="Next"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" class="md:w-4 md:h-4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="5 4 15 12 5 20 5 4"></polygon>
              <line x1="19" y1="5" x2="19" y2="19"></line>
            </svg>
          </button>
        </div>

        {/* Integrated Minimize Button (Divider + Icon) */}
        <div class="w-px h-6 md:h-8 bg-white/10 mx-1"></div>
        <button 
          type="button"
          onClick={() => setIsExpanded(false)}
          className="p-1 md:p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-all"
          title="Minimize"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" class="md:w-4 md:h-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </button>
      </div>

      {/* Minimized Button */}
      <div 
        class={`
            absolute bottom-0 right-0
            transition-all duration-500 ease-in-out origin-center
            ${!isExpanded ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-90 pointer-events-none'}
        `}
      >
        <button
          type="button"
          onClick={() => setIsExpanded(true)}
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-cyan-500/20 backdrop-blur-md border border-cyan-500/50 rounded-full text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all shadow-lg hover:shadow-cyan-500/50 animate-pulse"
          title="Open Music Player"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="md:w-6 md:h-6">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
