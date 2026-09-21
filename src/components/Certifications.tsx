import React, { useState } from "react";
import { portfolioData, CertificationItem } from "../data/portfolioData";
import { Award, ShieldCheck, ExternalLink, X } from "lucide-react";
import "./styles/Certifications.css";

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-header">
        <h3>CREDENTIALS & SPECIALIZATIONS</h3>
        <h2>Certifications</h2>
        <p>
          Verified technical coursework and domain credentials in Relational Databases, Data Analytics, and Data Science.
        </p>
      </div>

      <div className="certifications-grid">
        {portfolioData.certifications.map((cert) => (
          <div key={cert.id} className="cert-card">
            <div>
              <div className="cert-top">
                <div className="cert-icon">
                  <Award size={22} />
                </div>
                {cert.grade && <span className="cert-grade">{cert.grade}</span>}
              </div>

              <div className="cert-info">
                <h4>{cert.issuer}</h4>
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <h3 style={{ display: "inline-flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
                      {cert.name} <ExternalLink size={16} style={{ color: "var(--accentColor)" }} />
                    </h3>
                  </a>
                ) : (
                  <h3>{cert.name}</h3>
                )}
                {cert.year && (
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", margin: "4px 0 10px 0" }}>
                    Completed: {cert.year}
                  </p>
                )}
              </div>

              <p className="cert-desc">{cert.description}</p>
            </div>

            <div className="cert-footer">
              <span className="cert-verified">
                <ShieldCheck size={16} />
                <span>Verified Credential</span>
              </span>
              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-btn"
                  style={{ textDecoration: "none" }}
                >
                  <span>View Certificate</span>
                  <ExternalLink size={14} />
                </a>
              ) : (
                <button
                  className="cert-btn"
                  onClick={() => setSelectedCert(cert)}
                >
                  <span>View Details</span>
                  <ExternalLink size={14} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedCert(null)}>
              <X size={18} />
            </button>

            <div className="modal-header">
              <div className="cert-icon">
                <Award size={26} />
              </div>
              <div>
                <span>{selectedCert.issuer}</span>
                <h3>{selectedCert.name}</h3>
              </div>
            </div>

            <div className="modal-body">
              {selectedCert.grade && (
                <p style={{ margin: "0 0 10px 0" }}>
                  <strong>Grade / Performance:</strong>{" "}
                  <span style={{ color: "#7ceeff" }}>{selectedCert.grade}</span>
                </p>
              )}
              {selectedCert.year && (
                <p style={{ margin: "0 0 10px 0" }}>
                  <strong>Completion Year:</strong> {selectedCert.year}
                </p>
              )}
              <p style={{ margin: "0 0 12px 0", lineHeight: "1.6" }}>
                {selectedCert.description}
              </p>

              {selectedCert.topics && selectedCert.topics.length > 0 && (
                <div>
                  <strong style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>
                    Key Competencies Covered:
                  </strong>
                  <div className="modal-topic-list">
                    {selectedCert.topics.map((topic, i) => (
                      <span key={i} className="modal-topic-tag">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>
                Official Credential · {selectedCert.issuer}
              </span>
              {selectedCert.link ? (
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: "linear-gradient(135deg, #a87cff, #7f40ff)",
                    color: "#fff",
                    textDecoration: "none",
                    padding: "8px 20px",
                    borderRadius: "10px",
                    fontWeight: 600,
                    fontSize: "13px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  View Certificate <ExternalLink size={14} />
                </a>
              ) : (
                <button
                  style={{
                    background: "linear-gradient(135deg, #a87cff, #7f40ff)",
                    color: "#fff",
                    border: "none",
                    padding: "8px 20px",
                    borderRadius: "10px",
                    fontWeight: 600,
                    fontSize: "13px",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedCert(null)}
                >
                  Done
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
