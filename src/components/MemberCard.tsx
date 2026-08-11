import PixelRevealImage from "./PixelRevealImage";

interface MemberCardProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, role, image, linkedin }) => {
  return (
    <div className="group relative border border-slate-700/60 bg-[#131c31] rounded-sm overflow-hidden transition-all duration-300 hover:border-[#00ffc8]/50 hover:shadow-[0_0_20px_rgba(0,255,200,0.08)]">
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00ffc8]/40 z-10" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00ffc8]/40 z-10" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00ffc8]/40 z-10" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00ffc8]/40 z-10" />

      <div className="relative w-full aspect-square overflow-hidden bg-[#0a1020]">
        <PixelRevealImage
          src={image}
          alt={name}
          className="w-full h-full"
          pixelSize={14}
          revealDuration={500}
        />

        <div className="absolute top-2 right-2 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse" />
          <span
            className="text-[9px] text-[#39ff14] uppercase tracking-widest"
            style={{ fontFamily: '"Press Start 2P", "Courier New", monospace' }}
          >
            online
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ffc8]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-3 pt-2.5 border-t border-slate-700/40 border-dashed">
        <h3
          className="text-white text-[11px] sm:text-xs font-bold tracking-wide truncate"
          style={{ fontFamily: '"Press Start 2P", "Courier New", monospace' }}
        >
          {name}
        </h3>
        <div className="flex items-center justify-between gap-2">
          <p
            className="text-[#00ffc8] text-[8px] sm:text-[9px] tracking-wider uppercase truncate"
            style={{ fontFamily: '"Press Start 2P", "Courier New", monospace' }}
          >
            {role}
          </p>
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 rounded-sm border border-slate-700/60 text-slate-400 hover:text-[#2ee892] hover:border-[#2ee892]/40 transition-colors flex-shrink-0"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          )}
        </div>

        <div className="mt-2.5 flex gap-0.5">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="h-0.5 flex-1 transition-colors duration-300"
              style={{
                backgroundColor:
                  i < 14
                    ? "rgba(0, 255, 200, 0.3)"
                    : "rgba(100, 116, 139, 0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
