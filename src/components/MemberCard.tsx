import PixelRevealImage from "./PixelRevealImage";

interface MemberCardProps {
  name: string;
  role: string;
  image: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, role, image }) => {
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
        <p
          className="text-[#00ffc8] text-[8px] sm:text-[9px] mt-1.5 tracking-wider uppercase truncate"
          style={{ fontFamily: '"Press Start 2P", "Courier New", monospace' }}
        >
          {role}
        </p>

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
