import React from "react";
import { portfolioData } from "../data/portfolioData";
import { GlassesIcon } from "../components/GlassesIcon";
import { Sparkles, ArrowUpRight } from "lucide-react";

export const About: React.FC = () => {
  const { profile } = portfolioData;

  const journeySteps = [
    { title: "Student (2023–2027)", desc: "B.Tech EXTC at Vidyalankar Institute of Technology (CGPA 7.5/10, Next Gen Data Science Honours, CS Minor)." },
    { title: "Data Analyst Internships", desc: "Hands-on dataset analysis at Codec Technologies & Imarticus Learning using SQL, Excel, and Power BI." },
    { title: "Hinglish Educator", desc: "Teaching Python, SQL, and Data Analytics to Indian engineering students via YouTube tutorials." },
    { title: "Data Analyst / Aspiring Data Scientist", desc: "Building practical data solutions, ready for entry-level and internship roles." },
  ];

  return (
    <div className="space-y-16 pb-20 pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* PAGE HEADER */}
      <div className="text-left space-y-3 border-b-4 border-darkText pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sunflower border-2 border-darkText text-xs font-extrabold font-heading text-darkText shadow-[2px_2px_0px_#1A1A1A]">
          <GlassesIcon size={14} />
          <span>ABOUT ME</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-darkText tracking-tight">
          Communicator <span className="text-crimson">+</span> Technologist
        </h1>
        <p className="text-lg text-darkText/80 font-medium max-w-3xl">
          Bridging technical data analytics, database engineering, and intuitive Hindi-English communication.
        </p>
      </div>

      {/* BIO & CHARACTER CROP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Story & Academic Bio */}
        <div className="lg:col-span-7 text-left space-y-6">
          
          <div className="brand-card p-6 sm:p-8 space-y-4">
            <h2 className="text-2xl font-extrabold font-heading text-darkText">
              Academic Background & Direction
            </h2>

            <p className="text-base text-darkText/90 font-normal leading-relaxed">
              I am a final-year Electronics and Telecommunication Engineering (EXTC) student at <strong>Vidyalankar Institute of Technology, Mumbai</strong> (2023–2027) with a <strong>CGPA of 7.5/10</strong>. 
            </p>

            <p className="text-base text-darkText/90 font-normal leading-relaxed">
              My academic curriculum is augmented by an <strong>Honours degree in Next Gen Data Science</strong> and a <strong>Minor in Computer Science</strong>. My long-term aspiration is focused on <strong>Machine Learning Engineering and Data Science</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-heading text-xs font-bold">
              <div className="p-3 bg-sunflower/30 rounded-xl border-2 border-darkText">
                🎓 Vidyalankar Institute of Tech
              </div>
              <div className="p-3 bg-sunflower/30 rounded-xl border-2 border-darkText">
                🌟 Next Gen Data Science Honours
              </div>
              <div className="p-3 bg-sunflower/30 rounded-xl border-2 border-darkText">
                💻 Computer Science Minor
              </div>
              <div className="p-3 bg-sunflower/30 rounded-xl border-2 border-darkText">
                📈 CGPA: 7.5 / 10
              </div>
            </div>
          </div>

          {/* DEDICATED CALLOUT BLOCK: HINGLISH YOUTUBE EDUCATOR */}
          <div className="brand-card-yellow p-6 sm:p-8 space-y-4 text-left">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-crimson font-heading font-extrabold text-sm uppercase">
                <svg className="w-6 h-6 fill-crimson" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                <span>COMMUNICATOR DIFFERENTIATOR</span>
              </div>
              <span className="text-xs font-mono font-bold text-darkText bg-white px-2.5 py-1 rounded-full border border-darkText">
                HINGLISH EDUCATOR
              </span>
            </div>

            <h3 className="text-2xl font-extrabold font-heading text-darkText">
              Teaching Data Science in Hinglish 🎥
            </h3>

            <p className="text-sm sm:text-base text-darkText/90 font-medium leading-relaxed">
              {profile.youtubeChannel.description}
            </p>

            <a
              href={profile.youtubeChannel.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-extrabold font-heading text-white bg-crimson hover:bg-crimson-hover rounded-xl border-2 border-darkText shadow-[3px_3px_0px_#1A1A1A] transition-all"
            >
              <span>Watch The Channel</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Right Side: Secondary Character Crop & Journey Timeline */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Secondary Mascot Crop */}
          <div className="brand-card p-6 text-center space-y-4 bg-sunflower/10">
            <div className="w-48 h-48 mx-auto rounded-full border-4 border-darkText overflow-hidden shadow-[6px_6px_0px_#1A1A1A]">
              <img
                src="/images/devansh_character.jpg"
                alt="Devansh Mascot Narrating Story"
                className="w-full h-full object-cover object-top scale-125 translate-y-2"
              />
            </div>
            <div className="text-sm font-extrabold font-heading text-darkText">
              "Data analysis is about clarity and story."
            </div>
          </div>

          {/* Journey Mini-Timeline */}
          <div className="brand-card p-6 space-y-4 text-left">
            <h3 className="text-lg font-extrabold font-heading text-darkText flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-crimson" />
              <span>Journey Timeline</span>
            </h3>

            <div className="space-y-4 relative pl-4 border-l-2 border-darkText">
              {journeySteps.map((step, idx) => (
                <div key={idx} className="relative space-y-1">
                  <div className="absolute -left-[23px] top-1 w-3.5 h-3.5 rounded-full bg-sunflower border-2 border-darkText" />
                  <div className="text-xs font-extrabold font-heading text-crimson">{step.title}</div>
                  <p className="text-xs text-darkText/80 font-medium">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default About;
