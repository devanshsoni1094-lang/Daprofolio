import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { GlassesIcon } from "../components/GlassesIcon";
import { Mail, Phone, GraduationCap, Award, Send, CheckCircle2, ShieldCheck } from "lucide-react";

export const Contact: React.FC = () => {
  const { profile, education, certifications } = portfolioData;

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all required fields.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20 pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* PAGE HEADER */}
      <div className="text-left space-y-3 border-b-4 border-darkText pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sunflower border-2 border-darkText text-xs font-extrabold font-heading text-darkText shadow-[2px_2px_0px_#1A1A1A]">
          <GlassesIcon size={14} />
          <span>CONTACT & CREDENTIALS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-darkText tracking-tight">
          Let's build something with data <span className="text-crimson">→</span>
        </h1>
        <p className="text-lg text-darkText/80 font-medium max-w-3xl">
          Open for Data Analyst internships, entry-level opportunities, and data engineering projects.
        </p>
      </div>

      {/* CONTACT & MASCOT FORM SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Contact Cards & Mascot Crop */}
        <div className="lg:col-span-6 space-y-6 text-left">
          
          {/* Mascot Crop "Let's Talk" */}
          <div className="brand-card-yellow p-6 flex items-center gap-5">
            <div className="w-24 h-24 rounded-full border-3 border-darkText bg-white overflow-hidden shadow-[4px_4px_0px_#1A1A1A] shrink-0">
              <img
                src="/images/devansh_character.jpg"
                alt="Devansh Mascot Let's Talk"
                className="w-full h-full object-cover object-top scale-125 translate-y-1"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-extrabold font-heading text-darkText">"Let's talk data!"</h3>
              <p className="text-xs font-bold text-darkText/80">
                Send a direct email, call, or reach out on LinkedIn.
              </p>
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={`mailto:${profile.contact.email}`}
              className="brand-card p-4 flex items-center gap-3 hover:bg-sunflower/20 transition-all"
            >
              <div className="p-2.5 rounded-xl bg-sunflower border-2 border-darkText font-bold text-darkText">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="text-[10px] font-mono font-bold text-crimson uppercase">Email Direct</div>
                <div className="text-xs font-bold text-darkText font-mono">{profile.contact.email}</div>
              </div>
            </a>

            <a
              href={`tel:${profile.contact.phone}`}
              className="brand-card p-4 flex items-center gap-3 hover:bg-sunflower/20 transition-all"
            >
              <div className="p-2.5 rounded-xl bg-sunflower border-2 border-darkText font-bold text-darkText">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="text-[10px] font-mono font-bold text-crimson uppercase">Phone</div>
                <div className="text-xs font-bold text-darkText font-mono">{profile.contact.phone}</div>
              </div>
            </a>

            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="brand-card p-4 flex items-center gap-3 hover:bg-sunflower/20 transition-all"
            >
              <div className="p-2.5 rounded-xl bg-sunflower border-2 border-darkText font-bold text-darkText">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </div>
              <div className="space-y-0.5">
                <div className="text-[10px] font-mono font-bold text-crimson uppercase">LinkedIn</div>
                <div className="text-xs font-bold text-darkText font-mono">Profile Link</div>
              </div>
            </a>

            <a
              href={profile.contact.github}
              target="_blank"
              rel="noreferrer"
              className="brand-card p-4 flex items-center gap-3 hover:bg-sunflower/20 transition-all"
            >
              <div className="p-2.5 rounded-xl bg-sunflower border-2 border-darkText font-bold text-darkText">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
              </div>
              <div className="space-y-0.5">
                <div className="text-[10px] font-mono font-bold text-crimson uppercase">GitHub</div>
                <div className="text-xs font-bold text-darkText font-mono">Repositories</div>
              </div>
            </a>
          </div>

        </div>

        {/* Right Column: Simple Contact Form */}
        <div className="lg:col-span-6">
          <div className="brand-card p-6 sm:p-8 text-left space-y-5">
            <h3 className="text-2xl font-extrabold font-heading text-darkText">Send a Message</h3>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-sunflower/30 border-2 border-darkText text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-crimson mx-auto" />
                <h4 className="text-xl font-extrabold font-heading text-darkText">Thank You!</h4>
                <p className="text-xs font-bold text-darkText/80">
                  Your message structure has been received cleanly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs font-extrabold font-heading text-crimson underline"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 rounded-xl bg-crimson/10 border-2 border-crimson text-crimson text-xs font-bold font-mono">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-mono font-bold text-darkText uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Recruiter / Hiring Manager"
                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-darkText text-darkText text-sm font-medium focus:outline-none focus:bg-sunflower/20 shadow-[2px_2px_0px_#1A1A1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-darkText uppercase mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-darkText text-darkText text-sm font-medium focus:outline-none focus:bg-sunflower/20 shadow-[2px_2px_0px_#1A1A1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-darkText uppercase mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Discuss an internship, opportunity, or analytical project..."
                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-darkText text-darkText text-sm font-medium focus:outline-none focus:bg-sunflower/20 shadow-[2px_2px_0px_#1A1A1A] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-crimson hover:bg-crimson-hover text-white font-extrabold font-heading text-sm border-2 border-darkText shadow-[4px_4px_0px_#1A1A1A] transition-all flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

      {/* SUPPORTING SECTION 1: EDUCATION BLOCK */}
      <div className="space-y-6 text-left pt-8 border-t-4 border-darkText">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-sunflower border-2 border-darkText shadow-[3px_3px_0px_#1A1A1A]">
            <GraduationCap className="w-6 h-6 text-darkText" />
          </div>
          <h2 className="text-3xl font-extrabold font-heading text-darkText">Education</h2>
        </div>

        <div className="brand-card p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-darkText pb-4">
            <div>
              <span className="text-xs font-mono font-bold text-crimson uppercase">{education.institution}</span>
              <h3 className="text-2xl font-extrabold font-heading text-darkText">{education.degree}</h3>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-sunflower border-2 border-darkText text-xs font-extrabold font-heading text-darkText shadow-[2px_2px_0px_#1A1A1A] shrink-0">
              {education.timeline}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-extrabold font-heading pt-2">
            <div className="p-3 bg-sunflower/30 rounded-xl border-2 border-darkText">
              🌟 Honours: {education.honours}
            </div>
            <div className="p-3 bg-sunflower/30 rounded-xl border-2 border-darkText">
              💻 Minor: {education.minor}
            </div>
            <div className="p-3 bg-sunflower/30 rounded-xl border-2 border-darkText">
              📈 CGPA: {education.cgpa}
            </div>
          </div>
        </div>
      </div>

      {/* SUPPORTING SECTION 2: CERTIFICATIONS BLOCK */}
      <div className="space-y-6 text-left pt-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-sunflower border-2 border-darkText shadow-[3px_3px_0px_#1A1A1A]">
            <Award className="w-6 h-6 text-darkText" />
          </div>
          <h2 className="text-3xl font-extrabold font-heading text-darkText">Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div key={cert.id} className="brand-card p-6 flex flex-col justify-between space-y-4 hover:bg-sunflower/20">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-crimson uppercase">{cert.issuer}</span>
                  {cert.grade && (
                    <span className="px-2 py-0.5 rounded-lg bg-sunflower border border-darkText text-[11px] font-mono font-bold">
                      {cert.grade}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-extrabold font-heading text-darkText">{cert.name}</h3>
                <p className="text-xs text-darkText/80 font-medium leading-relaxed">{cert.description}</p>
              </div>

              <div className="pt-3 border-t border-darkText/20 flex items-center gap-1 text-[11px] font-mono font-bold text-darkText/70">
                <ShieldCheck className="w-4 h-4 text-crimson" />
                <span>Verified Credential</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Contact;
