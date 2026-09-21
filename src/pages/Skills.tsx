import React from "react";
import { portfolioData } from "../data/portfolioData";
import { GlassesIcon } from "../components/GlassesIcon";
import { Code2, Database, LayoutDashboard, Calculator } from "lucide-react";
import { motion } from "framer-motion";

export const Skills: React.FC = () => {
  const getIcon = (cat: string) => {
    switch (cat) {
      case "Programming":
        return <Code2 className="w-6 h-6 text-crimson" />;
      case "SQL":
        return <Database className="w-6 h-6 text-darkText" />;
      case "BI & Tools":
        return <LayoutDashboard className="w-6 h-6 text-crimson" />;
      case "Statistics":
        return <Calculator className="w-6 h-6 text-darkText" />;
      default:
        return <Database className="w-6 h-6 text-crimson" />;
    }
  };

  return (
    <div className="space-y-16 pb-20 pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* PAGE HEADER */}
      <div className="text-left space-y-3 border-b-4 border-darkText pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sunflower border-2 border-darkText text-xs font-extrabold font-heading text-darkText shadow-[2px_2px_0px_#1A1A1A]">
          <GlassesIcon size={14} />
          <span>TECHNICAL SKILLS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-darkText tracking-tight">
          Tools, Libraries <span className="text-crimson">&</span> Concepts
        </h1>
        <p className="text-lg text-darkText/80 font-medium max-w-3xl">
          Categorized technical skills covering database query optimization, data manipulation, BI dashboarding, and statistics.
        </p>
      </div>

      {/* SKILLS CARDS & ANIMATED BARS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.skills.map((skill, idx) => (
          <div key={idx} className="brand-card p-6 sm:p-8 space-y-6 text-left hover:bg-sunflower/10">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-darkText pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-sunflower border-2 border-darkText shadow-[3px_3px_0px_#1A1A1A]">
                  {getIcon(skill.category)}
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold font-heading text-darkText">
                    {skill.category}
                  </h3>
                  <span className="text-xs font-mono font-bold text-crimson uppercase">
                    Primary: {skill.primary.join(", ")}
                  </span>
                </div>
              </div>
            </div>

            {/* Animated Proficiency Bar */}
            <div className="space-y-2 font-heading">
              <div className="flex justify-between text-xs font-extrabold text-darkText uppercase tracking-wider">
                <span>Skill Proficiency Confidence</span>
                <span className="text-crimson">{skill.level}%</span>
              </div>
              <div className="w-full h-4 bg-sunflower/30 rounded-full border-2 border-darkText overflow-hidden p-0.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full bg-crimson rounded-full"
                />
              </div>
            </div>

            {/* Supporting Concepts Badges */}
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold text-darkText uppercase">Key Libraries & Features:</div>
              <div className="flex flex-wrap gap-2">
                {skill.supporting.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-xl bg-white border-2 border-darkText text-xs font-bold font-mono text-darkText shadow-[2px_2px_0px_#1A1A1A]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-darkText/80 font-medium leading-relaxed pt-2 border-t border-darkText/20">
              {skill.description}
            </p>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Skills;
