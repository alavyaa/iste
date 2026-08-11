import { useEffect, useState } from "react";
import MemberCard from "./components/MemberCard";
import PixelRevealImage from "./components/PixelRevealImage";

import isteLogo from "./assets/iste.png";
import footerLogo from "./assets/iste_footer.png";

import aditya from "./assets/images/aditya.jpeg";
import alavya from "./assets/images/alavya.jpeg";
import anmol from "./assets/images/anmol.jpeg";
import Hrithik from "./assets/images/Hrithik.jpeg";
import Darshi from "./assets/images/Darshi.jpeg";
import Adil from "./assets/images/Adil.jpeg";
import arnab from "./assets/images/arnab.jpeg";
import arpan from "./assets/images/arpan.jpeg";




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
import lakshay1 from "./assets/images/lakshay1.jpeg";

import Mahi from "./assets/images/Mahi.jpeg";

import manish from "./assets/images/manish.jpeg";
import member from "./assets/images/member.jpeg";

import navin from "./assets/images/navin.jpeg";

import prachi from "./assets/images/prachi.jpeg";
import pragati from "./assets/images/pragati.jpeg";

import pranjal from "./assets/images/pranjal.jpeg";
import pratyush from "./assets/images/pratyush.jpeg";
import priyansh from "./assets/images/priyansh.png";

import ranjeet from "./assets/images/ranjeet.jpeg";
import ritu from "./assets/images/ritu.jpeg";

import samriti from "./assets/images/samriti.jpeg";
import shaurya from "./assets/images/shaurya.jpeg";
import shivangi from "./assets/images/shivangi.jpeg";
import sanya from "./assets/images/Sanya.jpeg";
import sran from "./assets/images/sran.jpeg";
import kastab from "./assets/images/kastab.jpeg";

import vashu from "./assets/images/vashu.jpeg";

import Nav from "./components/Nav";
import Footer from "./components/Footer";



interface LeadershipMember {
  label: string;
  name: string;
  title: string;
  description: string;
  image: string;
  linkedin?: string;
  compact?: boolean;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

interface Department {
  name: string;
  tag: string;
  members: TeamMember[];
}



const leadershipData: LeadershipMember[] = [];

const departmentsData: Department[] = [
  {
    name: "Leadership",
    tag: "LEADERSHIP",
    members: [
      {
        name: "Dr. Anamol Gautam",
        role: "ISTE CONVEYOR",
        image: anmol ,
        linkedin: "https://www.linkedin.com/in/dr-anamol-gautam-b2953062/",
      },
      {
        name: "Sanya Batra",
        role: "Faculty Coordinator",
        image: sanya ,
        linkedin: "https://www.linkedin.com/in/sanyabatra0607/",
      },
    ],
  },
  {
    name: "Core Team",
    tag: "CORE_OPS",
    members: [
       {
          name: "HRITHIK",
          role: "PRESIDENT",
          image: Hrithik ,
       },
      {
        name: "PRANJAL",
        role: "CORE MEMBER",
        image: pranjal ,
      },
       {
         name: "ARPAN",
         role: "CORE MEMBER",
         image: arpan ,
       },
       {
         name: "KASTAB",
         role: "CORE MEMBER",
         image: kastab ,
       },
    ],
  },
  {
    name: "Documentation",
    tag: "DOCS_DIVISION",
    members: [
      {
        name: "NAVIN",
        role: "CORE MEMBER",
        image: navin ,
      },
      {
        name: "ARNAB",
        role: "CORE MEMBER",
        image: arnab ,
      },
    ],
  },
  {
    name: "Technical Team",
    tag: "TECH_DIVISION",
    members: [
      {
        name: "SHAURYA",
        role: "CORE MEMBER",
        image: shaurya,
      },
      {
        name: "ALAVYA",
        role: "CORE MEMBER",
        image: alavya,
      },
       {
        name: "VISHWAS",
        role: "CORE MEMBER",
        image: vashu ,
      },
       {
        name: "HAMZAUL",
        role: "CORE MEMBER",
        image: hamza ,
      },
       {
        name: "KESHAV",
        role: "CORE MEMBER",
        image: keshav ,
      },
       {
        name: "KUSHIKA",
        role: "CORE MEMBER",
        image: kushika ,
      },
       {
        name: "KHUSHBOO",
        role: "CORE MEMBER",
        image: khushboo ,
      },
    ],
  },
  {
    name: "Design Team",
    tag: "PIXEL_MAGES",
    members: [
      {
        name: "DARSHI",
        role: "CORE MEMBER",
        image: Darshi ,
      },
      {
        name: "KHUSHI",
        role: "CORE MEMBER",
        image: khushi ,
      },
    ],
  },
  {
    name: "Logistics Team",
    tag: "LORE_KEEPERS",
    members: [
      {
        name: "MD. ADIL",
        role: "CORE MEMBER",
        image: Adil ,
      },
      {
        name: "RITU",
        role: "CORE MEMBER",
        image: ritu ,
      },
      {
        name: "SAMRITI",
        role: "CORE MEMBER",
        image: samriti ,
      },
    ],
  },
  {
    name: "Event Team",
    tag: "HERALD_SQUAD",
    members: [
      {
        name: "RANJEET",
        role: "CORE MEMBER",
        image: ranjeet ,
      },
       {
         name: "DURGESH",
         role: "CORE MEMBER",
         image: durgesh ,
       },
       {
        name: "MANISH",
        role: "CORE MEMBER",
        image: manish ,
      },
       {
        name: "PRIYANSH",
        role: "CORE MEMBER",
        image: priyansh ,
      },
        {
          name: "HIMANSHU",
          role: "CORE MEMBER",
          image: himanshu ,
        },
        {
          name: "GAURAV",
        role: "CORE MEMBER",
        image: gaurav ,
      },
       {
         name: "PRATYUSH",
         role: "CORE MEMBER",
         image: pratyush ,
       },
    ],
  },
  {
    name: "Marketing",
    tag: "BRAND_SQUAD",
    members: [
      {
        name: "ADITYA",
        role: "CORE MEMBER",
        image: aditya ,
      },
      {
        name: "LAKSHAY",
        role: "CORE MEMBER",
        image: lakshay ,
      },
      {
        name: "MAHI",
        role: "CORE MEMBER",
        image: Mahi ,
      },
      {
        name: "SHIVANGI",
        role: "CORE MEMBER",
        image: shivangi ,
      },
      {
        name: "PRACHII",
        role: "CORE MEMBER",
        image: prachi ,
      },
      {
        name: "PRAGATI",
        role: "CORE MEMBER",
        image: pragati ,
      },
      {
        name: "SRAN",
        role: "CORE MEMBER",
        image: sran ,
      },
      {
        name: "JAGRITI",
        role: "CORE MEMBER",
        image: jagriti ,
      },
      {
        name: "LAKSHAY CHOUDHARY",
        role: "CORE MEMBER",
        image: lakshay1 ,
      },
    ],
  },
];


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



interface LeadershipSectionProps {
  member: LeadershipMember;
  index: number;
}

const LeadershipSection: React.FC<LeadershipSectionProps> = ({
  member,
  index,
}) => {
  const isReversed = index % 2 !== 0;

  if (member.compact) {
    return (
      <div
        className={`flex flex-row gap-4 md:gap-6 items-center border border-slate-700/50 bg-[#131c31]/80 p-4 sm:p-5 rounded-sm relative overflow-hidden group transition-all duration-500 hover:border-[#00ffc8]/30`}
      >
        <div className="w-28 h-28 sm:w-36 sm:h-36 flex-shrink-0">
          <div className="relative w-full h-full border border-slate-700/60 rounded-sm overflow-hidden bg-[#0a1020]">
            <PixelRevealImage
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
              pixelSize={16}
              revealDuration={700}
            />
            <div className="h-1 bg-gradient-to-r from-[#00ffc8] via-[#00e5ff] to-transparent" />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center gap-2">
          <h3
            className="text-white text-base sm:text-lg font-bold tracking-wide"
            style={{ fontFamily: '"Press Start 2P", "Courier New", monospace' }}
          >
            {member.name}
          </h3>
          <div className="flex items-center gap-3">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 rounded-sm border border-slate-700/60 text-slate-400 hover:text-[#2ee892] hover:border-[#2ee892]/40 transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            )}
            <span
              className="text-[#00ffc8] text-[10px] sm:text-xs tracking-widest uppercase"
              style={{ fontFamily: '"Press Start 2P", "Courier New", monospace' }}
            >
              {member.title}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } gap-6 md:gap-10 items-center border border-slate-700/50 bg-[#131c31]/80 p-5 sm:p-6 md:p-8 rounded-sm relative overflow-hidden group transition-all duration-500 hover:border-[#00ffc8]/30`}
    >
    
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00ffc8]/50" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00ffc8]/50" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00ffc8]/50" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00ffc8]/50" />

  
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }}
      />

     
      <div className="w-full md:w-2/5 flex-shrink-0">
        <div className="relative border border-slate-700/60 rounded-sm overflow-hidden bg-[#0a1020]">
        
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
          
          <div className="h-1 bg-gradient-to-r from-[#00ffc8] via-[#00e5ff] to-transparent" />
        </div>
      </div>

      
      <div className="w-full md:w-3/5 flex flex-col justify-center">
        
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


        <h3
          className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-wide mb-1"
          style={{ fontFamily: '"Press Start 2P", "Courier New", monospace' }}
        >
          {member.name}
        </h3>


        <p
          className="text-[#00ffc8] text-[10px] sm:text-xs tracking-widest uppercase mb-4"
          style={{ fontFamily: '"Press Start 2P", "Courier New", monospace' }}
        >
          {member.title}
        </p>
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-8 h-8 rounded-sm border border-slate-700/60 text-slate-400 hover:text-[#2ee892] hover:border-[#2ee892]/40 transition-colors mb-4"
            aria-label="LinkedIn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        )}

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

        <p
          className="text-slate-400 text-xs sm:text-sm leading-relaxed tracking-wide"
          style={{ fontFamily: '"Courier New", monospace' }}
        >
          {member.description}
        </p>

        <div className="mt-5 flex items-center gap-3">
          <span className="text-[#39ff14] text-[9px] tracking-widest uppercase"
            style={{ fontFamily: '"Press Start 2P", "Courier New", monospace' }}
          >
            online
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
      
      <div className="flex items-center gap-4 mb-6 sm:mb-8">
       
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

      
        <div className="h-px flex-1 bg-gradient-to-r from-[#00ffc8]/30 via-slate-700/50 to-transparent" />
      </div>

   
      <h3
        className="text-white text-base sm:text-lg md:text-xl tracking-wide mb-6 sm:mb-8"
        style={{ fontFamily: '"Press Start 2P", "Courier New", monospace' }}
      >
        {department.name}
      </h3>

   
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {department.members.map((member, memberIndex) => (
          <MemberCard
            key={memberIndex}
            name={member.name}
            role={member.role}
            image={member.image}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </div>
  );
};



const TeamPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
   
    window.scrollTo(0, 0);
  
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <Nav />
    <div className="min-h-screen bg-[#0b1121] text-white relative overflow-hidden">
      
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

      
      <FloatingPixels />

     
      <div
        className="fixed inset-0 pointer-events-none z-[1] opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)",
        }}
      />

      
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          
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

          
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 tracking-wide"
            style={{
              fontFamily: '"Press Start 2P", "Courier New", monospace',
              animation: "fadeSlideUp 0.8s ease forwards",
            }}
          >
            Meet the Guild
          </h1>

        
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

       
        <div className="space-y-14 sm:space-y-16 md:space-y-20">
          {departmentsData.map((department, index) => (
            <DepartmentSection
              key={index}
              department={department}
              index={index}
            />
          ))}
        </div>

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

      <Footer />
  </>
  );
};

export default TeamPage;
