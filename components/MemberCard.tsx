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
    <div class="group relative bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20">
      <div class="flex flex-col gap-6">
        <div class="flex justify-between items-start">
          <div class={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase ${props.role.color} text-white`}>
            {props.role.name}
          </div>
          <div class="text-white/30 font-mono text-sm leading-none pt-1">
            {props.nim}
          </div>
        </div>

        {props.profileImg && (
          <div class="relative w-24 h-24 mb-2">
            <div class="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-indigo-500 rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
            <div class="relative w-full h-full rounded-2xl overflow-hidden border border-white/10">
              <img
                src={props.profileImg}
                alt={props.name}
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        )}

        <div>
          <h3 class="text-3xl font-bold text-white mb-2 leading-tight group-hover:text-cyan-400 transition-colors">
            {props.name}
          </h3>
          <p class="text-cyan-500/80 font-medium text-sm">
            Hobby: {props.hobby}
          </p>
        </div>

        <p class="text-white/60 leading-relaxed min-h-[5rem]">
          {props.description}
        </p>

        <div class="pt-6 border-t border-white/5">
          <h4 class="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">
            CV Details
          </h4>
          <ul class="space-y-3">
            {props.cvDetails.map((detail) => (
              <li class="text-sm text-white/70 flex items-start gap-3">
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
