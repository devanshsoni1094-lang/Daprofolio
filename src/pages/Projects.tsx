import React, { useState } from "react";
import { portfolioData, ProjectData } from "../data/portfolioData";
import { GlassesIcon } from "../components/GlassesIcon";
import { Sparkles, X, ChevronRight } from "lucide-react";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <div className="space-y-16 pb-20 pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* PAGE HEADER */}
      <div className="text-left space-y-3 border-b-4 border-darkText pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sunflower border-2 border-darkText text-xs font-extrabold font-heading text-darkText shadow-[2px_2px_0px_#1A1A1A]">
          <GlassesIcon size={14} />
          <span>PORTFOLIO PROJECTS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-darkText tracking-tight">
          Data Projects <span className="text-crimson">&</span> Analytical Case Studies
        </h1>
        <p className="text-lg text-darkText/80 font-medium max-w-3xl">
          Practical analytical explorations built with MySQL, Excel dashboards, and statistical models.
        </p>
      </div>

      {/* PROJECTS CARD GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        
        {/* Main Pizza Sales Project Card */}
        {portfolioData.projects.map((proj) => (
          <div key={proj.id} className="brand-card p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:bg-sunflower/10 group">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-xl bg-sunflower border-2 border-darkText text-xs font-extrabold font-heading text-darkText shadow-[2px_2px_0px_#1A1A1A]">
                  {proj.tools}
                </span>
                <span className="text-xs font-mono font-bold text-crimson">
                  {proj.datasetSize}
                </span>
              </div>

              <h2 className="text-2xl font-extrabold font-heading text-darkText group-hover:text-crimson transition-colors">
                {proj.title}
              </h2>

              <p className="text-sm text-darkText/90 font-medium leading-relaxed">
                {proj.description}
              </p>

              {/* Calculated Metrics Badges */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono font-bold text-darkText uppercase">Calculated KPIs:</div>
                <div className="flex flex-wrap gap-2">
                  {proj.calculatedMetrics.map((m) => (
                    <span key={m} className="px-2.5 py-1 rounded-lg bg-white border-2 border-darkText text-xs font-bold text-darkText shadow-[2px_2px_0px_#1A1A1A]">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4 border-t-2 border-darkText flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-darkText/70">50,000+ Sales Records</span>
              <button
                onClick={() => setSelectedProject(proj)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-extrabold font-heading text-white bg-crimson hover:bg-crimson-hover rounded-xl border-2 border-darkText shadow-[3px_3px_0px_#1A1A1A] transition-all"
              >
                <span>View Full Case Study</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        ))}

        {/* Placeholder Future Project Card 1 */}
        <div className="brand-card p-6 sm:p-8 flex flex-col justify-between space-y-4 opacity-75 bg-sunflower/20 border-dashed">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white border-2 border-darkText text-xs font-bold font-mono">
              <Sparkles className="w-3.5 h-3.5 text-crimson" />
              <span>Upcoming Project</span>
            </div>
            <h3 className="text-xl font-extrabold font-heading text-darkText">
              Supermarket Sales BI Dashboard
            </h3>
            <p className="text-xs text-darkText/80 font-medium">
              Comprehensive Power BI & SQL transactional dataset analysis featuring DAX measures, customer demographics, and temporal trend visualizations.
            </p>
          </div>
          <div className="pt-4 border-t-2 border-darkText text-xs font-bold font-heading text-crimson">
            More projects coming soon...
          </div>
        </div>

        {/* Placeholder Future Project Card 2 */}
        <div className="brand-card p-6 sm:p-8 flex flex-col justify-between space-y-4 opacity-75 bg-sunflower/20 border-dashed">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white border-2 border-darkText text-xs font-bold font-mono">
              <Sparkles className="w-3.5 h-3.5 text-crimson" />
              <span>Upcoming Project</span>
            </div>
            <h3 className="text-xl font-extrabold font-heading text-darkText">
              Python Exploratory Data Analysis
            </h3>
            <p className="text-xs text-darkText/80 font-medium">
              Statistical inference, distribution evaluation, and exploratory data analysis using Pandas, NumPy, Matplotlib & Seaborn.
            </p>
          </div>
          <div className="pt-4 border-t-2 border-darkText text-xs font-bold font-heading text-crimson">
            More projects coming soon...
          </div>
        </div>

      </div>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-darkText/80 backdrop-blur-md">
          <div className="brand-card max-w-2xl w-full p-6 sm:p-8 space-y-6 text-left relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-sunflower border-2 border-darkText font-bold text-darkText"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 border-b-2 border-darkText pb-4">
              <span className="px-3 py-1 rounded-xl bg-sunflower border-2 border-darkText text-xs font-extrabold font-heading text-darkText">
                {selectedProject.tools}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-darkText">
                {selectedProject.title}
              </h2>
            </div>

            <div className="space-y-4 text-sm text-darkText font-medium">
              <div className="p-4 bg-sunflower/30 rounded-xl border-2 border-darkText space-y-1">
                <div className="font-bold text-xs uppercase font-mono text-crimson">Problem Statement:</div>
                <div>{selectedProject.details.problem}</div>
              </div>

              <div className="p-4 bg-white rounded-xl border-2 border-darkText space-y-1">
                <div className="font-bold text-xs uppercase font-mono text-crimson">Data Cleaning & Preparation:</div>
                <div>{selectedProject.details.cleaning}</div>
              </div>

              <div className="p-4 bg-white rounded-xl border-2 border-darkText space-y-1">
                <div className="font-bold text-xs uppercase font-mono text-crimson">MySQL Analysis:</div>
                <div>{selectedProject.details.analysis}</div>
              </div>

              <div className="p-4 bg-sunflower/30 rounded-xl border-2 border-darkText space-y-1">
                <div className="font-bold text-xs uppercase font-mono text-crimson">Dashboard Outcome:</div>
                <div>{selectedProject.details.outcome}</div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 text-xs font-extrabold font-heading text-white bg-crimson rounded-xl border-2 border-darkText shadow-[3px_3px_0px_#1A1A1A]"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Projects;
