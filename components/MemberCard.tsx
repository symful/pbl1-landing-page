export interface MemberRole {
  name: string;
  color: string; // Tailwind bg color class, e.g., 'bg-blue-500'
}

export interface MemberProps {
  name: string;
  nim: string;
  hobby: string;
  description: string;
  role: MemberRole;
  cvDetails: string[];
  profileImg?: string;
}

export default function MemberCard(props: MemberProps) {
  return (
    <div class="group relative bg-[#0a0a0b] border border-white/5 p-8 rounded-[2rem] transition-all duration-500 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
      {/* Background Glow */}
      <div class="absolute -top-24 -right-24 w-48 h-48 bg-white/5 blur-[80px] rounded-full group-hover:bg-cyan-500/10 transition-colors duration-700" />
      
      <div class="relative flex flex-col gap-8">
        {/* Header Section */}
        <div class="flex items-center gap-6">
          {props.profileImg ? (
            <div class="relative shrink-0">
              <div class="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-2xl blur-md group-hover:opacity-100 opacity-50 transition-opacity" />
              <div class="relative w-20 h-20 rounded-2xl overflow-hidden border border-white/10 ring-1 ring-white/5 shadow-2xl">
                <img
                  src={props.profileImg}
                  alt={props.name}
                  class="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
              </div>
            </div>
          ) : (
            <div class="relative shrink-0 w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20 text-2xl font-black">
              {props.name.charAt(0)}
            </div>
          )}

          <div class="flex-1 min-w-0">
            <div class={`inline-block px-3 py-1 rounded-full text-[9px] font-black tracking-[0.15em] uppercase mb-2 ${props.role.color} text-white shadow-lg`}>
              {props.role.name}
            </div>
            <h3 class="text-2xl font-bold text-white tracking-tight leading-none truncate group-hover:text-cyan-400 transition-colors">
              {props.name}
            </h3>
            <div class="mt-2 flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span class="text-[10px] font-mono text-white/30 uppercase tracking-widest leading-none">
                REF: {props.nim}
              </span>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div class="space-y-3">
          <div class="text-[11px] font-black text-cyan-500/50 uppercase tracking-[0.2em]">Personal Brief</div>
          <p class="text-white/60 text-sm leading-relaxed font-medium">
            {props.description}
          </p>
          <div class="pt-2 flex items-center gap-3">
            <span class="text-[10px] font-bold text-white/20 uppercase tracking-widest">Hobby</span>
            <span class="text-xs text-white/80 font-semibold">{props.hobby}</span>
          </div>
        </div>

        {/* Expertise Section */}
        <div class="pt-6 border-t border-white/5">
          <ul class="grid grid-cols-1 gap-3">
            {props.cvDetails.slice(0, 3).map((detail) => (
              <li class="group/item flex items-center gap-3">
                <div class="w-1 h-1 rounded-full bg-white/10 group-hover/item:bg-cyan-500 transition-colors" />
                <span class="text-xs text-white/40 group-hover/item:text-white/80 transition-colors">
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
