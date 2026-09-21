import React from "react";
import { Link } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";
import { GlassesIcon } from "../components/GlassesIcon";
import { ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";

export const Home: React.FC = () => {
  const { profile, quickStats, skillsPillars } = portfolioData;

  return (
    <div className="space-y-20 pb-20 pt-28">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sunflower border-2 border-darkText shadow-[3px_3px_0px_#1A1A1A] font-heading font-extrabold text-xs text-darkText uppercase tracking-wider">
              <GlassesIcon size={14} />
              <span>{profile.heroEyebrow}</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-darkText tracking-tight leading-[1.1]">
              Hi, I'm Devansh Soni <span className="inline-block animate-bounce">👋</span>
            </h1>

            {/* Subhead */}
            <p className="text-lg sm:text-xl text-darkText/80 font-medium max-w-2xl leading-relaxed">
              {profile.tagline}
            </p>

            {/* Two CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2.5 px-7 py-4 text-base font-extrabold font-heading text-white bg-crimson hover:bg-crimson-hover rounded-2xl border-3 border-darkText shadow-[5px_5px_0px_#1A1A1A] transition-all hover:translate-x-0.5 hover:translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href={`mailto:${profile.contact.email}`}
                className="inline-flex items-center gap-2.5 px-7 py-4 text-base font-extrabold font-heading text-darkText bg-white hover:bg-sunflower/40 rounded-2xl border-3 border-darkText shadow-[5px_5px_0px_#1A1A1A] transition-all"
              >
                <FileText className="w-5 h-5 text-crimson" />
                <span>Download Resume</span>
              </a>
            </div>

          </div>

          {/* Right Hero Column: Large Character Illustration */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              
              {/* Yellow Background Blob Glow */}
              <div className="absolute inset-0 rounded-full bg-sunflower border-4 border-darkText shadow-[8px_8px_0px_#1A1A1A] animate-pulse" />

              {/* Character Floating Image */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-darkText"
              >
                <img
                  src="/images/devansh_character.jpg"
                  alt="Devansh Soni 3D Pixar Avatar"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Badge Overlay */}
              <div className="absolute -bottom-4 -left-4 z-20 bg-white border-3 border-darkText rounded-2xl p-3 shadow-[4px_4px_0px_#1A1A1A] flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-extrabold font-heading text-darkText">
                  Open for Analyst Roles
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* STAT CARDS STRIP BELOW FOLD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {quickStats.map((stat, idx) => (
            <div
              key={idx}
              className="brand-card p-6 text-center space-y-1 hover:bg-sunflower/20"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-crimson">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-darkText font-heading uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 SKILL PILLARS PREVIEW ROW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-left space-y-2">
          <span className="text-xs font-mono font-bold text-crimson uppercase tracking-widest">
            // CORE COMPETENCIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-darkText">
            What I Bring To The Table
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsPillars.map((pillar: { name: string; desc: string; path: string }, idx: number) => (
            <div key={idx} className="brand-card p-6 flex flex-col justify-between space-y-4 text-left">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-sunflower border-2 border-darkText flex items-center justify-center font-bold text-darkText shadow-[3px_3px_0px_#1A1A1A]">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-extrabold font-heading text-darkText">
                  {pillar.name}
                </h3>
                <p className="text-sm text-darkText/80 font-medium leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <Link
                to={pillar.path}
                className="inline-flex items-center gap-1.5 text-xs font-extrabold font-heading text-crimson hover:underline pt-2"
              >
                <span>Explore Skills Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING CTA STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="brand-card-yellow p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-darkText">
            Want the full picture?
          </h2>
          <p className="text-base sm:text-lg text-darkText/90 font-medium max-w-xl mx-auto">
            Explore my educational journey, internship timeline, and detailed data analysis projects.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/about"
              className="px-6 py-3.5 text-sm font-extrabold font-heading text-white bg-crimson rounded-2xl border-3 border-darkText shadow-[4px_4px_0px_#1A1A1A]"
            >
              Read About Me
            </Link>
            <Link
              to="/projects"
              className="px-6 py-3.5 text-sm font-extrabold font-heading text-darkText bg-white rounded-2xl border-3 border-darkText shadow-[4px_4px_0px_#1A1A1A]"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
