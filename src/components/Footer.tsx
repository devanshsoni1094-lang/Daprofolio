import React from "react";
import { NavLink } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";
import { GlassesIcon } from "./GlassesIcon";
import { Mail, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  const { profile } = portfolioData;

  return (
    <footer className="bg-sunflower border-t-4 border-darkText pt-12 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b-2 border-darkText">
          
          {/* Brand & Mascot Peeking Crop */}
          <div className="md:col-span-5 flex items-center gap-4 text-left">
            {/* Mascot Peeking Circle */}
            <div className="relative w-20 h-20 rounded-full border-3 border-darkText bg-white overflow-hidden shadow-[4px_4px_0px_#1A1A1A] shrink-0">
              <img
                src="/images/devansh_character.jpg"
                alt="Devansh Mascot Peeking"
                className="w-full h-full object-cover object-top scale-110 translate-y-1"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 text-xl font-extrabold font-heading text-darkText">
                <span>Devansh Soni</span>
                <GlassesIcon size={16} />
              </div>
              <p className="text-xs font-bold text-darkText/80 mt-0.5">
                {profile.heroEyebrow}
              </p>
            </div>
          </div>

          {/* Quick Nav Repeat */}
          <div className="md:col-span-4 flex flex-wrap items-center justify-center gap-4 text-xs font-bold font-heading">
            <NavLink to="/" className="hover:text-crimson transition-colors">Home</NavLink>
            <NavLink to="/about" className="hover:text-crimson transition-colors">About</NavLink>
            <NavLink to="/skills" className="hover:text-crimson transition-colors">Skills</NavLink>
            <NavLink to="/experience" className="hover:text-crimson transition-colors">Experience</NavLink>
            <NavLink to="/projects" className="hover:text-crimson transition-colors">Projects</NavLink>
            <NavLink to="/contact" className="hover:text-crimson transition-colors">Contact</NavLink>
          </div>

          {/* Social Icons & Phone */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end gap-2 text-xs font-bold text-darkText">
            <div className="flex items-center gap-3">
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white border-2 border-darkText hover:bg-crimson hover:text-white transition-all shadow-[2px_2px_0px_#1A1A1A]"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white border-2 border-darkText hover:bg-crimson hover:text-white transition-all shadow-[2px_2px_0px_#1A1A1A]"
                title="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
              </a>
              <a
                href={`mailto:${profile.contact.email}`}
                className="p-2 rounded-full bg-white border-2 border-darkText hover:bg-crimson hover:text-white transition-all shadow-[2px_2px_0px_#1A1A1A]"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <span className="font-mono text-[11px] font-semibold">{profile.contact.phone}</span>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-bold text-darkText gap-2">
          <div>© 2026 Devansh Soni. All rights reserved.</div>
          <div className="flex items-center gap-1 font-mono text-[11px]">
            <span>Built with data, curiosity & code</span>
            <Heart className="w-3.5 h-3.5 text-crimson fill-crimson" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
