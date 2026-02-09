import KemalArdian from "../components/members/KemalArdian.tsx";
import MuhammadAkhtar from "../components/members/MuhammadAkhtar.tsx";
import HafizFauzan from "../components/members/HafizFauzan.tsx";
import DzikraAlguhfroon from "../components/members/DzikraAlguhfroon.tsx";
import FaturHanafi from "../components/members/FaturHanafi.tsx";

export default function Home() {
  return (
    <div class="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30">
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div class="absolute top-[20%] -right-[5%] w-[35%] h-[35%] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div class="absolute -bottom-[10%] left-[20%] w-[45%] h-[45%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <main class="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32">
        <header class="text-center mb-24">
          <div class="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/5 bg-white/5 backdrop-blur-md text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase">
            PBL1 Digital Showcase
          </div>
          <h1 class="text-6xl md:text-8xl font-black tracking-tight mb-8">
            MEET THE <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400">SQUAD</span>
          </h1>
          <p class="max-w-2xl mx-auto text-white/50 text-lg md:text-xl font-medium leading-relaxed">
            A collective of specialists engineering the next generation of digital experiences.
            Focused on innovation, research, and technical excellence.
          </p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <KemalArdian />
          <MuhammadAkhtar />
          <HafizFauzan />
          <DzikraAlguhfroon />
          <FaturHanafi />
        </div>
      </main>

      <footer class="relative z-10 border-t border-white/5 py-12">
        <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p class="text-white/30 text-sm font-medium tracking-wide">
            © 2026 THE SQUAD LABORATORY
          </p>
          <div class="flex gap-8 text-white/30 text-xs font-black tracking-widest uppercase">
            <span>PBL1 PROJECT</span>
            <span>DENO FRESH</span>
            <span>TAILWIND CSS</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
