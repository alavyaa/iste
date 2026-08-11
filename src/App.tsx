import React, { useEffect, useRef, useState } from "react";
import {
  PixelHero,
  PixelSun,
  PixelMoon,
  PixelTree,
  PixelCloud,
  PixelTrophy,
  PixelMedal,
  PixelCoin,
  PixelStar,
  PixelHeart,
  PixelIcon,
  PixelAvatar,
  PixelLandscape,
  CircuitPattern,
} from "./components/Pixel";
import isteLogo from "./assets/iste.png";
import isteVideo from "./assets/iste.mp4";
import footerLogo from "./assets/iste_footer.png";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const Particles: React.FC = () => {
  const dots = Array.from({ length: 28 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: 2 + Math.floor(Math.random() * 4),
    delay: Math.random() * 6,
    duration: 6 + Math.random() * 8,
    color: ["#2ee892", "#4be1ff", "#ffcc4b", "#ff5fa2"][i % 4],
  }));
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute pixelated animate-twinkle"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            background: d.color,
            boxShadow: `0 0 8px ${d.color}`,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
          }}
        />
      ))}
    </div>
  );
};


const Hero: React.FC = () => {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden pt-24 pb-12"
    >

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0d1118 0%, #13182a 30%, #1a2238 60%, #243049 100%)"
        }}
      />

      <div className="absolute top-28 right-[8%] sm:right-[12%] z-10 animate-float">
        <PixelSun size={5} />
      </div>

      <div className="absolute top-32 left-[5%] z-10 animate-drift opacity-90">
        <PixelCloud size={4} />
      </div>

      <div
        className="absolute top-44 left-[40%] z-10 animate-drift opacity-70"
        style={{ animationDelay: "1.5s" }}
      >
        <PixelCloud size={3} />
      </div>

      <div
        className="absolute top-24 left-[70%] z-10 animate-drift opacity-80"
        style={{ animationDelay: "3s" }}
      >
        <PixelCloud size={3} />
      </div>

      <div className="absolute bottom-[18%] left-[6%] z-10 opacity-80">
        <PixelTree size={4} />
      </div>

      <div className="absolute bottom-[18%] right-[8%] z-10 opacity-80">
        <PixelTree size={5} />
      </div>

      <div className="absolute bottom-[18%] left-[28%] z-10 opacity-60">
        <PixelTree size={3} />
      </div>

      <PixelLandscape className="absolute bottom-0 inset-x-0 h-[40%] z-0" />

      <div
        className="absolute bottom-[14%] left-[10%] z-20 animate-drift"
        style={{ animationDuration: "12s" }}
      >
        <PixelHero size={5} walking />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-2 border-4 border-[#2ee892] bg-[#0d1118]/80">
            <span className="w-2 h-2 bg-[#2ee892] animate-blink" />
            <span className="h-pixel text-[9px] text-[#2ee892]">
              CHAPTER_01 :: START_YOUR_JOURNEY
            </span>
          </div>

          <h1 className="h-pixel text-2xl sm:text-4xl md:text-5xl leading-[1.5] text-white mb-4">
            <span className="text-[#2ee892]">Build.</span>{" "}
            <span className="text-white">Learn.</span>
            <br />
            <span className="text-[#4be1ff]">Innovate.</span>
          </h1>

          <p className="h-mono text-xl sm:text-2xl text-white max-w-2xl mb-8">
            Welcome to ISTE — a community where creativity, technology,
            collaboration, and innovation come together to help students
            level up their skills and build the future.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="pixel-btn">
              ▶ Join ISTE
            </a>

            <a href="#events" className="pixel-btn pixel-btn--cyan">
              Explore Events
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 max-w-xl">
            {[
              { label: "MEMBERS", value: "30+", color: "#2ee892" },
              { label: "EVENTS", value: "10+", color: "#4be1ff" },
            ].map((s) => (
              <div key={s.label} className="pixel-card p-3 sm:p-4">
                <div className="h-pixel text-[8px] sm:text-[9px] text-white/60 mb-1">
                  {s.label}
                </div>

                <div
                  className="h-pixel text-base sm:text-xl"
                  style={{ color: s.color }}
                >
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
        <span className="h-pixel text-[8px] text-[#0d1118]">
          SCROLL
        </span>

        <div className="w-4 h-6 border-2 border-[#0d1118] relative">
          <span className="absolute top-1 left-1 w-1.5 h-1.5 bg-[#2ee892] animate-blink" />
        </div>
      </div>
    </section>
  );
};


const PromoVideo: React.FC = () => {
  return (
    <section className="w-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto object-cover"
      >
        <source src={isteVideo} type="video/mp4" />
      </video>
    </section>
  );
};

const About: React.FC = () => {
  const items = [
    { icon: "code", title: "Hackathon", desc: "Enter the arena, solve real-world quests, and level up your skills through innovation.", color: "#4be1ff" },
    { icon: "users", title: "Community Events", desc: "Engage in collaborative activities, team-building sessions, and fun tech gatherings.", color: "#4be1ff" },
    { icon: "innovation", title: "Workshops", desc: "Gain real-world experience with hands-on workshops in cutting-edge technologies.", color: "#ffcc4b" },
    { icon: "team", title: "Networking", desc: "Connect with peers, alumni, and industry professionals to build meaningful relationships.", color: "#ff5fa2" },
    { icon: "circuit", title: "Guidance Session", desc: "Connect with experienced mentors for valuable insights on careers, skills, and opportunities.", color: "#4be1ff" },
    { icon: "trophy", title: "Competitions", desc: "Challenge yourself through coding contests, quizzes, and technical competitions.", color: "#ffcc4b" }
  ] as const;

  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true">
        <CircuitPattern className="w-full h-full" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader kicker="QUEST_02" title="About the Society" subtitle="Six guilds. One mission. Infinite XP." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-12">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="pixel-card p-5 sm:p-6 card-tilt reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              
              <div className="absolute -bottom-3 left-8 w-6 h-6 bg-[#131826] border-r-4 border-b-4 border-[#0a0d14] rotate-45" />
              <div className="flex items-start gap-4">
                <div
                  className="shrink-0 p-2 border-4 border-[#0a0d14] bg-[#0d1118]"
                  style={{ boxShadow: `inset 0 0 0 2px ${it.color}33` }}
                >
                  <PixelIcon type={it.icon} size={4} />
                </div>
                <div className="min-w-0">
                  <div className="h-pixel text-[10px] mb-2" style={{ color: it.color }}>
                    {String(i + 1).padStart(2, "0")} / {it.title}
                  </div>
                  <h3 className="h-pixel text-sm text-white mb-2">{it.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{it.desc}</p>
                </div>
              </div>
             
              <div className="mt-5 pt-3 border-t-2 border-dashed border-[#1f2740] flex items-center justify-between">
                <span className="h-mono text-[#4be1ff] text-sm">▸ press start</span>
                <span className="h-pixel text-[8px] text-white/40">LV.{i + 2}</span>
              </div>
            </div>
          ))}
        </div>

        
        <div className="mt-12 max-w-4xl mx-auto reveal">
          <div className="pixel-card p-6 sm:p-8 relative">
            <div className="absolute -top-4 left-6 h-pixel text-[9px] px-3 py-1 bg-[#2ee892] text-[#07090d]">
              ◆ MISSION_BRIEFING
            </div>
            <p className="h-mono text-xl sm:text-2xl text-white/90 leading-snug">
              <span className="text-[#2ee892]">&gt;</span> ISTE is a student-led guild for builders, breakers, and dreamers.
              We craft workshops, host hackathons, and ship side-projects — together.
              <span className="inline-block w-3 h-5 align-middle bg-[#2ee892] ml-1 animate-blink" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Events: React.FC = () => {
  const events = [
    {
      title: "Coming Soon",
      tag: "HACKATHON",
      rarity: "Legendary",
      rarityColor: "#ffcc4b",
      date: "COMING SOON",
      reward: "+500 XP",
      desc: "Stay tuned for details.",
      icon: "rocket" as const,
      featured: true,
    },
    {
      title: "Monster Event",
      tag: "GAMING",
      rarity: "Legendary",
      rarityColor: "#ffcc4b",
      date: "AUG 19–20",
      reward: "+500 XP",
      desc: "BGMI game event. Squad up and dominate.",
      icon: "robot" as const,
    },
    {
      title: "GitHub Workshop",
      tag: "WORKSHOP",
      rarity: "Common",
      rarityColor: "#a3a3a3",
      date: "COMING SOON",
      reward: "+50 XP",
      desc: "Stay tuned for details.",
      icon: "code" as const,
    },
    {
      title: "Cybersec Workshop",
      tag: "WORKSHOP",
      rarity: "Common",
      rarityColor: "#a3a3a3",
      date: "COMING SOON",
      reward: "+50 XP",
      desc: "Stay tuned for details.",
      icon: "circuit" as const,
    },
    {
      title: "AI Workshop",
      tag: "WORKSHOP",
      rarity: "Common",
      rarityColor: "#a3a3a3",
      date: "COMING SOON",
      reward: "+50 XP",
      desc: "Stay tuned for details.",
      icon: "innovation" as const,
    },
    {
      title: "Web Dev Workshop",
      tag: "WORKSHOP",
      rarity: "Common",
      rarityColor: "#a3a3a3",
      date: "COMING SOON",
      reward: "+50 XP",
      desc: "Stay tuned for details.",
      icon: "users" as const,
    },
  ];

  return (
    <section id="events" className="relative py-20 sm:py-28 bg-[#0a0d14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader kicker="QUEST_03" title="Upcoming Events" subtitle="Choose your quest. Earn your XP." />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12">
          {events.map((e, i) => (
            <article
              key={e.title}
              className="pixel-card p-0 overflow-hidden card-tilt reveal group"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              
              <div
                className="relative h-48 overflow-hidden"
                style={{
                  background: e.title === "Monster Event" ? "#0a0d14" : `linear-gradient(135deg, ${e.rarityColor}22, transparent), repeating-linear-gradient(45deg, #131826 0 8px, #0d1118 8px 16px)`,
                }}
              >
                {e.title === "Monster Event" ? (
                  <img
                    src="/Gallery/monster event.png"
                    alt="Monster Event"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                ) : e.title === "GitHub Workshop" ? (
                  <img
                    src="/Gallery/github.png"
                    alt="GitHub Workshop"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : e.title === "Web Dev Workshop" ? (
                  <img
                    src="/Gallery/webd.png"
                    alt="Web Dev Workshop"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src="/Gallery/comingsoon.png"
                    alt="Coming Soon"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="h-pixel text-[8px] text-[#4be1ff]">{e.tag}</span>
                  <span className="h-pixel text-[8px] text-white/50">{e.date}</span>
                </div>
                <h3 className="h-pixel text-sm text-white mb-3 leading-snug">{e.title}</h3>
                <p className="h-pixel text-white/70 text-sm mb-4 leading-relaxed">{e.desc}</p>
                <div className="flex items-center justify-between pt-3 border-t-2 border-dashed border-[#1f2740]">
                  <span className="flex items-center gap-2 h-pixel text-[9px] text-[#ffcc4b]">
                    <PixelCoin size={3} /> {e.reward}
                  </span>
                  {e.title === "Monster Event" && (
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfWMj2WVqkcG0OtxLr0VXwym1nK9Q72f8U8A8UVqlftimzbdQ/viewform?usp=dialog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="animate-sparkle px-3 py-1 bg-[#2ee892] text-[#07090d] h-pixel text-[10px] font-bold border-2 border-[#2ee892] hover:bg-[#1fba78] transition-colors"
                    >
                      REGISTER NOW
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};



const Gallery: React.FC = () => {
  const items = [
    { title: "Hackathon 2025", tag: "EVENT", image: "/Gallery/hackathon.jpg",  icon: "robot" as const },
    { title: "Competition", tag: "COMPETITION", image: "/Gallery/competition.jpeg", icon: "robot" as const },
    { title: "Vault Heist", tag: "COMPETITION", grad: "linear-gradient(135deg,#4be1ff,#2ee892)", icon: "trophy" as const },
    { title: "Code Clash", tag: "WORKSHOP",image: "/Gallery/session.jpg", icon: "code" as const },
    { title: "Science Day", tag: "MEETUP", grad: "linear-gradient(135deg,#1aa3d6,#0a0d14)", icon: "innovation" as const },
    { title: "Project Expo", tag: "EXPO", grad: "linear-gradient(135deg,#ff5fa2,#4be1ff)", icon: "rocket" as const },
  ];

  return (
    <section id="gallery" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader kicker="QUEST_06" title="Gallery" subtitle="Frames from the journey. Hover to zoom." />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12">
          {items.map((it, i) => (
            <figure
              key={it.title}
              className="pixel-card p-3 card-tilt reveal group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden border-4 border-[#0a0d14]">
               <div className="absolute inset-0 overflow-hidden">
  <img
    src={it.image}
    alt={it.title}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />
  <div className="absolute inset-0 bg-black/25" />
                  
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.25) 1px, transparent 1px)",
                      backgroundSize: "8px 8px",
                    }}
                  />
                  <div className="relative scale-150 group-hover:scale-[2] transition-transform duration-500">
                    <PixelIcon type={it.icon} size={6} />
                  </div>
                  
                  <div className="absolute top-2 right-2 animate-twinkle"><PixelStar size={2} /></div>
                  <div className="absolute bottom-2 left-2 animate-twinkle" style={{ animationDelay: "0.6s" }}>
                    <PixelCoin size={3} />
                  </div>
                </div>
              </div>
              <figcaption className="flex items-center justify-between mt-3 px-1">
                <span className="h-pixel text-[9px] text-white">{it.title}</span>
                <span className="h-pixel text-[8px] text-[#4be1ff]">{it.tag}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};


const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

 

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !msg) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName("");
      setEmail("");
      setMsg("");
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#0a0d14]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader kicker="QUEST_07" title="Send a Transmission" subtitle="Open the terminal. Type your message. Press ENTER." />

        <div className="pixel-card p-0 mt-12 overflow-hidden scanlines relative">
          <div className="flex items-center justify-between px-4 py-2 bg-[#0d1118] border-b-4 border-[#0a0d14]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#ff5fa2]" />
              <span className="w-3 h-3 bg-[#ffcc4b]" />
              <span className="w-3 h-3 bg-[#2ee892]" />
            </div>
            <span className="h-pixel text-[9px] text-white/60">iste@terminal:~$</span>
            <span className="w-12" />
          </div>

          <div className="p-5 sm:p-8 bg-[#07090d] font-mono">
            <div className="h-mono text-[#2ee892] text-lg sm:text-xl mb-1">
              <span className="text-white/60">guest@iste</span>:<span className="text-[#4be1ff]">~</span>$ ./contact --new
            </div>
            <div className="h-mono text-white/60 text-base mb-6">
              [ok] terminal ready. fill the fields below to send a packet.
            </div>

            <form onSubmit={submit} className="space-y-5">
              <TerminalField
                label="NAME"
                value={name}
                onChange={setName}
                placeholder="enter your handle..."
                inputRef={inputRef}
              />
              <TerminalField
                label="EMAIL"
                value={email}
                onChange={setEmail}
                placeholder="player@domain.edu"
                type="email"
              />
              <TerminalField
                label="MESSAGE"
                value={msg}
                onChange={setMsg}
                placeholder="type your quest details..."
                multiline
              />

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button type="submit" className="pixel-btn">
                  ▶ TRANSMIT
                </button>
                <span className="h-mono text-[#4be1ff] text-base">
                  {sent ? (
                    <span className="text-[#2ee892]">[ok] packet delivered. +50 XP ✓</span>
                  ) : (
                    "press [ENTER] to send"
                  )}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const TerminalField: React.FC<{
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
  inputRef?: React.RefObject<HTMLInputElement | null>;
}> = ({ label, value, onChange, placeholder, type = "text", multiline, inputRef }) => {
  const [focused, setFocused] = useState(false);
  const common = `w-full bg-[#0d1118] text-white h-mono text-lg px-3 py-2 border-4 ${focused ? "border-[#2ee892]" : "border-[#1f2740]"
    } outline-none transition-colors`;
  return (
    <label className="block">
      <div className="h-pixel text-[9px] text-[#4be1ff] mb-2">
        <span className="text-[#2ee892]">$</span> {label}
      </div>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 h-mono text-[#2ee892] text-lg pointer-events-none">▸</span>
        {multiline ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={placeholder}
            rows={4}
            className={`${common} pl-7 resize-none`}
          />
        ) : (
          <input
            ref={inputRef}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={placeholder}
            className={`${common} pl-7`}
          />
        )}
      </div>
    </label>
  );
};

const SectionHeader: React.FC<{ kicker: string; title: string; subtitle: string }> = ({
  kicker,
  title,
  subtitle,
}) => (
  <div className="text-center reveal">
    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 border-4 border-[#2ee892] bg-[#0d1118]">
      <PixelCoin size={3} />
      <span className="h-pixel text-[9px] text-[#2ee892]">{kicker}</span>
    </div>
    <h2 className="h-pixel text-xl sm:text-3xl text-white mb-3 leading-[1.5]">{title}</h2>
    <p className="h-mono text-xl text-white/70 max-w-2xl mx-auto">{subtitle}</p>
  </div>
);

const App: React.FC = () => {

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#07090d] text-white overflow-x-hidden">
      <Particles />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <PromoVideo />
        <About />
        <Events />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
