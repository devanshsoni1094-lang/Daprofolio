import React from "react";
import { portfolioData } from "../data/portfolioData";
import { GlassesIcon } from "../components/GlassesIcon";
import { Calendar, CheckCircle2, Award, Sparkles } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <div className="space-y-16 pb-20 pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* PAGE HEADER */}
      <div className="text-left space-y-3 border-b-4 border-darkText pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sunflower border-2 border-darkText text-xs font-extrabold font-heading text-darkText shadow-[2px_2px_0px_#1A1A1A]">
          <GlassesIcon size={14} />
          <span>CAREER TIMELINE</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-darkText tracking-tight">
          Work Experience <span className="text-crimson">&</span> Internships
        </h1>
        <p className="text-lg text-darkText/80 font-medium max-w-3xl">
          Hands-on analytical internships working with SQL databases, Excel pivot tables, and Power BI dashboards.
        </p>
      </div>

      {/* VERTICAL TIMELINE LAYOUT */}
      <div className="relative pl-6 sm:pl-10 space-y-12 border-l-4 border-darkText text-left">
        
        {portfolioData.experiences.map((exp, idx) => (
          <div key={exp.id} className="relative space-y-4">
            
            {/* Timeline Node Icon */}
            <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 rounded-full bg-sunflower border-3 border-darkText flex items-center justify-center font-extrabold font-heading text-xs shadow-[2px_2px_0px_#1A1A1A]">
              0{idx + 1}
            </div>

            {/* Experience Card */}
            <div className="brand-card p-6 sm:p-8 space-y-5 hover:bg-sunflower/10">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-darkText pb-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-crimson uppercase tracking-wider">{exp.company}</span>
                  <h2 className="text-2xl font-extrabold font-heading text-darkText">{exp.role}</h2>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sunflower border-2 border-darkText text-xs font-extrabold font-heading text-darkText shadow-[2px_2px_0px_#1A1A1A]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-2">
                {exp.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 rounded-xl bg-crimson text-white text-xs font-extrabold font-heading border-2 border-darkText shadow-[2px_2px_0px_#1A1A1A]"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Bullets */}
              <ul className="space-y-2.5 pt-2">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-darkText/90 font-medium leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-crimson shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Concurrent Unpaid Internships Note */}
              {exp.note && (
                <div className="p-3 bg-sunflower/20 rounded-xl border-2 border-darkText text-xs font-bold text-darkText flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-crimson shrink-0" />
                  <span>{exp.note}</span>
                </div>
              )}

              {/* Artifact Badges */}
              {exp.artifacts && exp.artifacts.length > 0 && (
                <div className="pt-2 flex items-center gap-2 text-xs font-mono font-bold text-darkText">
                  <Award className="w-4 h-4 text-crimson" />
                  <span>Document Artifacts:</span>
                  {exp.artifacts.map((art) => (
                    <span key={art} className="px-2.5 py-0.5 rounded-lg bg-white border border-darkText">
                      {art}
                    </span>
                  ))}
                </div>
              )}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Experience;
