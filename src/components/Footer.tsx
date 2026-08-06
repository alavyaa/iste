import footerLogo from "../assets/iste_footer.png";
const Footer: React.FC = () => (
  <footer className="relative bg-[#07090d] border-t-4 border-[#0a0d14] py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 grid sm:grid-cols-3 gap-8">
      <div>
        <div className="h-pixel text-[11px] text-[#2ee892] mb-2">ISTE</div>
        <p className="h-mono text-white/60 text-sm">Building innovation block by block — one student, one commit, one quest at a time.</p>
      </div>
      <div>
      </div>
      <div>
        <div className="h-pixel text-[10px] text-[#ffcc4b] mb-3">LINKS</div>
        <ul className="space-y-1 text-white/70 text-sm">
          <li><a href="#events" className="h-mono hover:text-[#2ee892]">Events</a></li>
          <li><a href="#team" className="h-mono hover:text-[#2ee892]">Team</a></li>
          <li><a href="#contact" className="h-mono hover:text-[#2ee892]">Contact</a></li>
          <li><a href="#" className="h-mono hover:text-[#2ee892]">GitHub</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 pt-6 border-t-2 border-[#1f2740] flex flex-wrap items-center justify-between gap-3">
      <span className="h-mono text-white/50 text-sm">© 2026 ISTE Society. All XP reserved.</span>
      <span className="h-pixel text-[8px] text-white/40">PRESS [START] TO CONTINUE</span>
    </div>

    <div className="mt-8 flex justify-center">
      <div className="relative w-full max-w-7xl py-6 overflow-hidden">
        <img
          src={footerLogo}
          alt="ISTE"
          className="relative z-10 w-[95%] max-w-[1500px] mx-auto footer-main"
        />

        <img
          src={footerLogo}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-[95%] max-w-[1500px] mx-auto footer-glitch-red"
        />

        <img
          src={footerLogo}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-[95%] max-w-[1500px] mx-auto footer-glitch-blue"
        />
      </div>
    </div>

  </footer>
);

export default Footer;
