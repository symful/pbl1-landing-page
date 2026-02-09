import { JSX } from "preact";

export interface MemberProps {
  name: {
    fullName: string;
    color: string; // Hex color
  };
  nim: string;
  hobby: string;
  description: string;
  role: {
    label: string;
    bg: string; // Hex color
    text: string; // Hex color
  };
  cv: {
    items: string[];
    color: string; // Hex color
  };
  theme: {
    primary: string; // Main accent hex color
    secondary: string; // Secondary accent hex
    cardBorderHover: string; // start hex
  };
  profileImg?: string;
}

export default function MemberCard(props: MemberProps) {
  const style = {
    "--theme-primary": props.theme.primary,
    "--theme-secondary": props.theme.secondary,
    "--card-border-hover": props.theme.cardBorderHover,
    "--name-color": props.name.color,
    "--role-bg": props.role.bg,
    "--role-text": props.role.text,
    "--cv-color": props.cv.color,
    "--accent-glow": `color-mix(in srgb, ${props.theme.primary}, transparent 92%)`,
    "--accent-hover": `color-mix(in srgb, ${props.theme.primary}, white 25%)`,
  } as JSX.CSSProperties;

  return (
    <div 
      id={`card-${props.nim}`}
      class="group relative bg-[#0a0a0b] border border-white/5 p-8 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden hover:border-[var(--card-border-hover)]"
      style={style}
    >
      {/* Background Glow */}
      <div 
        class="absolute -top-24 -right-24 w-48 h-48 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" 
        style={{ backgroundColor: 'var(--accent-glow)' }}
      />
      
      <div class="relative flex flex-col gap-8 text-white">
        {/* Header Section */}
        <div class="flex items-center gap-6">
          {props.profileImg ? (
            <div class="relative shrink-0">
              <div 
                class="absolute inset-0 rounded-2xl blur-md group-hover:opacity-100 opacity-50 transition-opacity" 
                style={{ backgroundColor: 'var(--accent-glow)' }}
              />
              <div class="relative w-20 h-20 rounded-2xl overflow-hidden border border-white/10 ring-1 ring-white/5 shadow-2xl">
                <img
                  src={props.profileImg}
                  alt={props.name.fullName}
                  class="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
              </div>
            </div>
          ) : (
            <div class="relative shrink-0 w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20 text-2xl font-black">
              {props.name.fullName.charAt(0)}
            </div>
          )}
 
          <div class="flex-1 min-w-0">
            <div 
              class={`inline-block px-3 py-1 rounded-full ${
                props.role.label.length > 25 ? "text-[7px]" : 
                props.role.label.length > 20 ? "text-[8px]" : "text-[9px]"
              } font-black tracking-[0.15em] uppercase mb-2 shadow-lg whitespace-nowrap`}
              style={{ backgroundColor: 'var(--role-bg)', color: 'var(--role-text)' }}
            >
              {props.role.label}
            </div>
            <h3 
              class={`${
                props.name.fullName.length > 25 ? "text-base" : 
                props.name.fullName.length > 20 ? "text-lg" : 
                props.name.fullName.length > 15 ? "text-xl" : "text-2xl"
              } font-bold break-words whitespace-normal tracking-tight leading-none transition-colors duration-300`}
              style={{ color: 'var(--name-color)' }}
            >
              {props.name.fullName}
            </h3>
            <div class="mt-2 flex items-center gap-2 h-4 text-white/30">
              <div class="w-1 h-1 rounded-full bg-current shrink-0" />
              <span class="text-[10px] font-mono uppercase tracking-widest leading-none">
                NIM: {props.nim}
              </span>
            </div>
          </div>
        </div>
 
        {/* Bio Section */}
        <div class="space-y-3">
          <div class="text-[11px] font-black opacity-50 uppercase tracking-[0.2em] transition-colors group-hover:text-[var(--accent-hover)]">Personal Brief</div>
          <p class="text-white/60 text-sm leading-relaxed font-medium">
            {props.description}
          </p>
          <div class="pt-2 flex items-center gap-3">
            <span class="text-[10px] font-bold text-white/20 uppercase tracking-widest transition-colors group-hover:text-white/40">Hobby</span>
            <span class="text-xs text-white/80 font-semibold">{props.hobby}</span>
          </div>
        </div>
 
        {/* Expertise Section */}
        <div class="pt-6 border-t border-white/5">
          <ul class="grid grid-cols-1 gap-3">
            {props.cv.items.slice(0, 3).map((detail) => (
              <li class="group/item flex items-center gap-3">
                <div 
                  class="w-1 h-1 rounded-full bg-white/10 transition-colors group-hover/item:bg-[var(--theme-primary)]" 
                />
                <span 
                  class="text-xs transition-colors"
                  style={{ color: 'var(--cv-color)' }}
                >
                  {detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
