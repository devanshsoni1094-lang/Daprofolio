import React from "react";
import { X, Award, ShieldCheck } from "lucide-react";
import { CertificationItem } from "../data/portfolioData";

interface Props {
  cert: CertificationItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<Props> = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="glass-card rounded-2xl max-w-lg w-full p-6 border border-surfaceBorder space-y-5 text-left relative shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-100 p-1.5 rounded-lg bg-surface border border-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-accent/10 border border-accent/30 text-accent">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono text-accent uppercase">{cert.issuer}</span>
            <h3 className="text-xl font-bold text-slate-100">{cert.name}</h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="space-y-3 font-mono text-xs bg-surface/60 p-4 rounded-xl border border-slate-800">
          {cert.year && (
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-500">Issued Year:</span>
              <span className="font-bold text-slate-100">{cert.year}</span>
            </div>
          )}
          {cert.grade && (
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-500">Grade / Performance:</span>
              <span className="font-bold text-emerald-400">{cert.grade}</span>
            </div>
          )}
          <div className="pt-2 border-t border-slate-800 text-slate-300 font-sans leading-relaxed text-sm">
            {cert.description}
          </div>
        </div>

        {/* Certificate Verification Badge */}
        <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
          <ShieldCheck className="w-4 h-4 shrink-0" />
          <span>Official credential issued directly by {cert.issuer}. Physical/digital certificate available upon request.</span>
        </div>

        {/* Footer */}
        <div className="flex justify-end pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-accent rounded-md"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
