import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import isteLogo from "../assets/iste.png";
const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

 const links = [
  { label: "About", href: "/#about" },
  { label: "Events", href: "/#events" },
  { label: "Team", href: "/team" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled
          ? "bg-[#07090d]/90 backdrop-blur border-b-4 border-[#0a0d14]"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">


        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={isteLogo}
            alt="ISTE Logo"
            className="w-10 h-10 object-contain"
          />

          <div className="leading-none">
            <div className="h-pixel text-[11px] text-[#2ee892]">
              ISTE
            </div>
            <div className="h-mono text-[#4be1ff] text-sm">
              build · learn · innovate
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1">
         {links.map((link) =>
  link.href === "/team" ? (
    <Link
      key={link.label}
      to="/team"
      className="h-pixel text-[10px] px-3 py-2 text-white/80 hover:text-[#2ee892] transition-colors"
    >
      {link.label}
    </Link>
  ) : (
    <a
      key={link.label}
      href={link.href}
      className="h-pixel text-[10px] px-3 py-2 text-white/80 hover:text-[#2ee892] transition-colors"
    >
      {link.label}
    </a>
  )
)}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden h-pixel text-[10px] px-3 py-2 border-4 border-[#2ee892] text-[#2ee892]"
          aria-label="Toggle menu"
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>

{open && (
  <div className="md:hidden bg-[#0d1118] border-t-4 border-[#0a0d14]">
    <div className="px-4 py-4 flex flex-col gap-2">
      {links.map((link) =>
        link.href === "/team" ? (
          <Link
            key={link.label}
            to="/team"
            onClick={() => setOpen(false)}
            className="h-pixel text-[10px] py-3 px-3 border-4 border-[#1f2740] text-white/90 hover:border-[#2ee892] hover:text-[#2ee892]"
          >
            {link.label}
          </Link>
        ) : (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setOpen(false)}
            className="h-pixel text-[10px] py-3 px-3 border-4 border-[#1f2740] text-white/90 hover:border-[#2ee892] hover:text-[#2ee892]"
          >
            {link.label}
          </a>
        )
      )}
    </div>
  </div>
)}

           </header>
  );
};

export default Nav;
