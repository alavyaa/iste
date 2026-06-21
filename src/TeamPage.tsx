import { useEffect, useState } from "react";
import MemberCard from "./components/MemberCard";
import PixelRevealImage from "./components/PixelRevealImage";
import aditya from "./assets/images/aditya.jpeg";
import AG from "./assets/images/AG.jpeg";
import alavya from "./assets/images/alavya.jpeg";
import anmol from "./assets/images/anmol.jpeg";

import arnab from "./assets/images/arnab.jpeg";
import arpan from "./assets/images/arpan.jpeg";
import arsh from "./assets/images/arsh-dhaliwal.webp";



import durgesh from "./assets/images/durgesh.png";

import gaurav from "./assets/images/gaurav.jpeg";

import hamza from "./assets/images/hamza.jpeg";
import himanshu from "./assets/images/himanshu.jpeg";

import jagriti from "./assets/images/jagriti.jpeg";

import keshav from "./assets/images/keshav.jpeg";
import khushboo from "./assets/images/khushboo.jpeg";
import khushi from "./assets/images/khushi.png";
import kushika from "./assets/images/kushika.jpeg";

import lakshay from "./assets/images/lakshay.jpeg";

import manish from "./assets/images/manish.jpeg";
import member from "./assets/images/member.jpeg";

import navin from "./assets/images/navin.jpeg";

import pranjal from "./assets/images/pranjal.jpeg";
import pratyush from "./assets/images/pratyush.jpeg";
import priyansh from "./assets/images/priyansh.jpeg";

import ranjeet from "./assets/images/ranjeet.jpeg";
import ritu from "./assets/images/ritu.jpeg";

import sajjan from "./assets/images/sajjan.jpeg";
import samriti from "./assets/images/samriti.jpeg";
import sarika from "./assets/images/sarika.jpeg";
import shaurya from "./assets/images/shaurya.jpeg";

import tanuja from "./assets/images/tanuja.jpeg";

import vashu from "./assets/images/vashu.jpeg";
import vc from "./assets/images/vc.jpeg";

// ─── INTERFACES ─────────────────────────────────────────────

interface LeadershipMember {
  label: string;
  name: string;
  title: string;
  description: string;
  image: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface Department {
  name: string;
  tag: string;
  members: TeamMember[];
}

// ─── SAMPLE DATA ────────────────────────────────────────────

const leadershipData: LeadershipMember[] = [
{
label: "Managing Director",
name: "Arsh Dhaliwal",
title: "Managing Director, CGC University Mohali",
description:
"With a strong commitment to academic excellence, innovation, and student growth, the Managing Director plays a defining role in nurturing an ecosystem where initiatives like ISTE can thrive with vision and impact.",
image: arsh ,
},

{
label: "Vice Chancellor",
name: "Dr. Vinay Goyal",
title: "Vice Chancellor, CGC University Mohali",
description:
"The Vice Chancellor shapes the academic direction of the institution, empowering students with research opportunities, technical exposure, and a forward-looking educational environment.",
image: vc ,
},

{
label: "Pro Vice Chancellor",
name: "Dr. Anish Gupta",
title: "Pro Vice Chancellor, CGC University Mohali",
description:
"The Pro Vice Chancellor strengthens academic operations, institutional planning, and student-centered development, ensuring high-quality execution of ambitious educational and technical initiatives.",
image: AG ,
},

{
label: "Principal (CCE)",
name: "Dr. Sajjan Singh",
title: "Principal",
description:
"The Principal contributes through academic discipline, institutional excellence, and student empowerment, encouraging participation in transformative experiences and technical innovation.",
image: sajjan ,
},

{
label: "Head of Department (Applied Science)",
name: "Dr. Anmol Gautam",
title: "Head of Department",
description:
"The Head of Department provides technical mentorship, academic guidance, and departmental leadership, supporting students in executing ideas that bridge creativity, innovation, and real-world relevance.",
image: anmol ,
},
];

const departmentsData: Department[] = [
  {
    name: "Core Team",
    tag: "CORE_OPS",
    members: [
      {
        name: "Aarav Patel",
        role: "Core Coordinator",
        image: member ,
      },
      {
        name: "Sneha Iyer",
        role: "Core Coordinator",
        image: member ,
      },
    ],
  },
  {
    name: "Technical Team",
    tag: "TECH_DIVISION",
    members: [
      {
        name: "Rohan Mehta",
        role: "Bot Tamer / Tech Lead",
        image: member,
      },
      {
        name: "Ishita Verma",
        role: "Dev Ops Ninja",
        image: member ,
      },
    ],
  },
  {
    name: "Design Team",
    tag: "PIXEL_MAGES",
    members: [
      {
        name: "Sara Khan",
        role: "Pixel Mage / Designer",
        image: member ,
      },
      {
        name: "Arjun Das",
        role: "UI Alchemist",
        image: member ,
      },
    ],
  },
  {
    name: "Content Team",
    tag: "LORE_KEEPERS",
    members: [
      {
        name: "Diya Sharma",
        role: "Lore Keeper",
        image: member ,
      },
      {
        name: "Kabir Singh",
        role: "Scroll Writer",
        image: member ,
      },
    ],
  },
  {
    name: "PR Team",
    tag: "HERALD_SQUAD",
    members: [
      {
        name: "Meera Nair",
        role: "Innovation Scout",
        image: member ,
      },
      {
        name: "Vikram Joshi",
        role: "Outreach Knight",
        image: member ,
      },
    ],
  },
];

// ─── FLOATING PIXELS COMPONENT ──────────────────────────────

const FloatingPixels: React.FC = () => {
  const [pixels] = useState(() =>
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.3 + 0.05,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
    }))
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {pixels.map((pixel) => (
        <div
          key={pixel.id}
          className="absolute rounded-none bg-[#00ffc8]"
          style={{
            left: `${pixel.x}%`,
            top: `${pixel.y}%`,
            width: `${pixel.size}px`,
            height: `${pixel.size}px`,
            opacity: pixel.opacity,
            animation: `floatPixel ${pixel.duration}s ease-in-out ${pixel.delay}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
};

// ─── LEADERSHIP SECTION COMPONENT ───────────────────────────

interface LeadershipSectionProps {
  member: LeadershipMember;
  index: number;
}

const LeadershipSection: React.FC<LeadershipSectionProps> = ({
  member,
  index,
}) => {
  const isReversed = index % 2 !== 0;

  return (
    <div
      className={`flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } gap-6 md:gap-10 items-center border border-slate-700/50 bg-[#131c31]/80 p-5 sm:p-6 md:p-8 rounded-sm relative overflow-hidden group transition-all duration-500 hover:border-[#00ffc8]/30`}
    >
      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00ffc8]/50" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00ffc8]/50" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00ffc8]/50" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00ffc8]/50" />

      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }}
      />

      {/* Image */}
      <div className="w-full md:w-2/5 flex-shrink-0">
        <div className="relative border border-slate-700/60 rounded-sm overflow-hidden bg-[#0a1020]">
          {/* Image label */}
          <div className="absolute top-0 left-0 z-20 bg-[#0a1020]/90 border-r border-b border-slate-700/60 px-2 py-1">
            <span
              className="text-[8px] text-[#00ffc8] tracking-widest"
              style={{
                fontFamily: '"Press Start 2P", "Courier New", monospace',
              }}
            >
              {member.label}
            </span>
          </div>
          <PixelRevealImage
            src={member.image}
            alt={member.name}
            className="w-full aspect-[4/5] sm:aspect-square"
            pixelSize={16}
            revealDuration={700}
          />
          {/* Bottom decorative bar */}
          <div className="h-1 bg-gradient-to-r from-[#00ffc8] via-[#00e5ff] to-transparent" />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-3/5 flex flex-col justify-center">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 mb-3">
          <div className="w-1.5 h-1.5 bg-[#39ff14] animate-pulse" />
          <span
            className="text-[9px] text-[#39ff14] tracking-[0.2em] uppercase"
            style={{
              fontFamily: '"Press Start 2P", "Courier New", monospace',
            }}
          >
            {member.label}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#39ff14]/30 to-transparent ml-2" />
        </div>

        {/* Name */}
        <h3
          className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-wide mb-1"
          style={{ fontFamily: '"Press Start 2P", "Courier New", monospace' }}
        >
          {member.name}
        </h3>

        {/* Title */}
        <p
          className="text-[#00ffc8] text-[10px] sm:text-xs tracking-widest uppercase mb-4"
          style={{ fontFamily: '"Press Start 2P", "Courier New", monospace' }}
        >
          {member.title}
        </p>

        {/* Divider */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="w-1 h-px"
              style={{
                backgroundColor:
                  i % 2 === 0
                    ? "rgba(0, 255, 200, 0.3)"
                    : "transparent",
              }}
            />
          ))}
        </div>

        {/* Description */}
        <p
          className="text-slate-400 text-xs sm:text-sm leading-relaxed tracking-wide"
          style={{ fontFamily: '"Courier New", monospace' }}
        >
          {member.description}
        </p>

        {/* Status bar */}
        <div className="mt-5 flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="text-pink-500 text-sm">♥</span>
            <span
              className="text-pink-400 text-[9px] tracking-widest uppercase"
              style={{
                fontFamily: '"Press Start 2P", "Courier New", monospace',
              }}
            >
              online
            </span>
          </span>
          <div className="h-3 w-px bg-slate-700" />
          <span
            className="text-slate-500 text-[8px] tracking-widest uppercase"
            style={{
              fontFamily: '"Press Start 2P", "Courier New", monospace',
            }}
          >
            class: {member.label.toLowerCase()}
          </span>
        </div>
      </div>
    </div>
  );
};

// ─── DEPARTMENT SECTION ─────────────────────────────────────

interface DepartmentSectionProps {
  department: Department;
  index: number;
}

const DepartmentSection: React.FC<DepartmentSectionProps> = ({
  department,
  index,
}) => {
  return (
    <div className="relative">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6 sm:mb-8">
        {/* Index tag */}
        <div className="border border-[#00ffc8]/40 px-3 py-1.5 bg-[#0a1020] rounded-sm flex-shrink-0">
          <span
            className="text-[#00ffc8] text-[9px] sm:text-[10px] tracking-widest"
            style={{
              fontFamily: '"Press Start 2P", "Courier New", monospace',
            }}
          >
            {String(index + 1).padStart(2, "0")}_{department.tag}
          </span>
        </div>

        {/* Line */}
        <div className="h-px flex-1 bg-gradient-to-r from-[#00ffc8]/30 via-slate-700/50 to-transparent" />
      </div>

      {/* Department Name */}
      <h3
        className="text-white text-base sm:text-lg md:text-xl tracking-wide mb-6 sm:mb-8"
        style={{ fontFamily: '"Press Start 2P", "Courier New", monospace' }}
      >
        {department.name}
      </h3>

      {/* Members Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {department.members.map((member, memberIndex) => (
          <MemberCard
            key={memberIndex}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

// ─── MAIN TEAM PAGE ─────────────────────────────────────────

const TeamPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1121] text-white relative overflow-hidden">
      {/* Inject keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

        @keyframes floatPixel {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-5px); }
          75% { transform: translateY(-30px) translateX(15px); }
          100% { transform: translateY(-5px) translateX(-10px); }
        }

        @keyframes glitchLine {
          0%, 100% { transform: translateX(0); }
          10% { transform: translateX(-2px); }
          20% { transform: translateX(2px); }
          30% { transform: translateX(0); }
        }

        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        @keyframes scanline {
          0% { top: -10%; }
          100% { top: 110%; }
        }
      `}</style>

      {/* Floating pixels background */}
      <FloatingPixels />

      {/* Scanline effect overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)",
        }}
      />

      {/* Main content */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        {/* ─── PAGE HEADER ───────────────────────────────── */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          {/* Quest tag */}
          <div className="inline-flex items-center justify-center mb-6">
            <div className="border border-[#00ffc8]/60 px-4 py-2 bg-[#0a1020]/80 rounded-sm">
              <span
                className="text-[#00ffc8] text-[10px] sm:text-xs tracking-[0.25em]"
                style={{
                  fontFamily: '"Press Start 2P", "Courier New", monospace',
                }}
              >
                🏆 QUEST_04
              </span>
            </div>
          </div>

          {/* Title */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 tracking-wide"
            style={{
              fontFamily: '"Press Start 2P", "Courier New", monospace',
              animation: "fadeSlideUp 0.8s ease forwards",
            }}
          >
            Meet the Guild
          </h1>

          {/* Subtitle */}
          <p
            className="text-slate-400 text-xs sm:text-sm tracking-wider max-w-xl mx-auto"
            style={{
              fontFamily: '"Courier New", monospace',
              animation: "fadeSlideUp 0.8s ease 0.2s forwards",
            }}
          >
            The players behind every quest, event, and innovation.
            <br />
            Each with their own class.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-none"
                style={{
                  backgroundColor:
                    i === 2 ? "#00ffc8" : "rgba(0, 255, 200, 0.2)",
                  animation:
                    i === 2 ? "blink 1.5s step-end infinite" : "none",
                }}
              />
            ))}
          </div>
        </div>

        {/* ─── LEADERSHIP SECTION ────────────────────────── */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          {/* Section Tag */}
          <div className="flex items-center gap-4 mb-8 sm:mb-10">
            <div className="border border-[#00e5ff]/40 px-3 py-1.5 bg-[#0a1020] rounded-sm">
              <span
                className="text-[#00e5ff] text-[9px] sm:text-[10px] tracking-widest"
                style={{
                  fontFamily: '"Press Start 2P", "Courier New", monospace',
                }}
              >
                LEADERSHIP
              </span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-[#00e5ff]/30 via-slate-700/50 to-transparent" />
          </div>

          <div className="space-y-6 sm:space-y-8">
            {leadershipData.map((member, index) => (
              <LeadershipSection key={index} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* ─── TEAM DEPARTMENTS ──────────────────────────── */}
        <div className="space-y-14 sm:space-y-16 md:space-y-20">
          {departmentsData.map((department, index) => (
            <DepartmentSection
              key={index}
              department={department}
              index={index}
            />
          ))}
        </div>

        {/* ─── FOOTER DECORATION ─────────────────────────── */}
        <div className="mt-16 sm:mt-20 md:mt-24 text-center">
          <div className="flex items-center justify-center gap-1.5 mb-4">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="w-1 h-px"
                style={{
                  backgroundColor:
                    i % 3 === 0
                      ? "rgba(0, 255, 200, 0.3)"
                      : "rgba(100, 116, 139, 0.15)",
                }}
              />
            ))}
          </div>
          <p
            className="text-slate-600 text-[8px] sm:text-[9px] tracking-[0.3em] uppercase"
            style={{
              fontFamily: '"Press Start 2P", "Courier New", monospace',
            }}
          >
            end_of_roster
            <span style={{ animation: "blink 1s step-end infinite" }}>_</span>
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="w-1 h-px"
                style={{
                  backgroundColor:
                    i % 3 === 0
                      ? "rgba(0, 255, 200, 0.3)"
                      : "rgba(100, 116, 139, 0.15)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
