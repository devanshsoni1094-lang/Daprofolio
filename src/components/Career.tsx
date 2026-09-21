import "./styles/Career.css";
import { portfolioData } from "../data/portfolioData";
import { MdArrowOutward } from "react-icons/md";

const Career = () => {
  const { experiences, education, profile } = portfolioData;

  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">

          {/* Codec Technologies */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <a
                  href={profile.contact.codecCertificate}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <h4 style={{ display: "inline-flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
                    {experiences[0].role} <MdArrowOutward style={{ fontSize: "16px", color: "var(--accentColor)" }} />
                  </h4>
                </a>
                <a
                  href={profile.contact.codecOfferLetter}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <h5 style={{ cursor: "pointer" }}>{experiences[0].company}</h5>
                </a>
                <div style={{ marginTop: "10px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <a
                    href={profile.contact.codecOfferLetter}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 500,
                        padding: "4px 12px",
                        borderRadius: "14px",
                        backgroundColor: "rgba(168, 124, 255, 0.2)",
                        color: "#d8c2ff",
                        border: "1px solid rgba(168, 124, 255, 0.4)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        cursor: "pointer",
                        transition: "0.3s",
                      }}
                    >
                      📄 Offer Letter <MdArrowOutward style={{ fontSize: "12px" }} />
                    </span>
                  </a>
                  <a
                    href={profile.contact.codecCertificate}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 500,
                        padding: "4px 12px",
                        borderRadius: "14px",
                        backgroundColor: "rgba(0, 240, 255, 0.15)",
                        color: "#8effff",
                        border: "1px solid rgba(0, 240, 255, 0.4)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        cursor: "pointer",
                        transition: "0.3s",
                      }}
                    >
                      🏆 Completion Certificate <MdArrowOutward style={{ fontSize: "12px" }} />
                    </span>
                  </a>
                </div>
              </div>
              <h3>MAR 2026 – APR 2026</h3>
            </div>
            <div>
              <p style={{ width: "100%", marginBottom: "10px", lineHeight: "1.6" }}>
                Analyzed approximately 50K rows of pizza sales data using Excel and MySQL to answer assigned sales and performance questions.
              </p>
              <ul style={{ margin: "0", paddingLeft: "18px", color: "rgba(255, 255, 255, 0.75)", fontSize: "15px", lineHeight: "1.7" }}>
                {experiences[0].bullets.map((bullet, idx) => (
                  <li key={idx} style={{ marginBottom: "6px" }}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Imarticus Learning */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <a
                  href="#work"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <h4 style={{ display: "inline-flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
                    {experiences[1].role} <MdArrowOutward style={{ fontSize: "16px", color: "var(--accentColor)" }} />
                  </h4>
                </a>
                <a
                  href="#work"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <h5 style={{ cursor: "pointer" }}>{experiences[1].company}</h5>
                </a>
                <div style={{ marginTop: "10px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <a href="#work" style={{ textDecoration: "none" }}>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 500,
                        padding: "4px 12px",
                        borderRadius: "14px",
                        backgroundColor: "rgba(0, 240, 255, 0.15)",
                        color: "#7ceeff",
                        border: "1px solid rgba(0, 240, 255, 0.3)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        cursor: "pointer",
                      }}
                    >
                      📊 Supermarket Sales Project <MdArrowOutward style={{ fontSize: "12px" }} />
                    </span>
                  </a>
                  <span
                    style={{
                      fontSize: "12px",
                      padding: "4px 12px",
                      borderRadius: "14px",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "rgba(255, 255, 255, 0.8)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    4-Member Team
                  </span>
                </div>
              </div>
              <h3>JUN 2026 – JUL 2026</h3>
            </div>
            <div>
              <p style={{ width: "100%", marginBottom: "10px", lineHeight: "1.6" }}>
                Analyzed a Supermarket Sales dataset using SQL, Excel, and Power BI to answer assigned business questions and evaluate sales performance.
              </p>
              <ul style={{ margin: "0", paddingLeft: "18px", color: "rgba(255, 255, 255, 0.75)", fontSize: "15px", lineHeight: "1.7" }}>
                {experiences[1].bullets.map((bullet, idx) => (
                  <li key={idx} style={{ marginBottom: "6px" }}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <a
                  href="https://vit.edu.in"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <h4 style={{ display: "inline-flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
                    {education.degree} <MdArrowOutward style={{ fontSize: "16px", color: "var(--accentColor)" }} />
                  </h4>
                </a>
                <a
                  href="https://vit.edu.in"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <h5 style={{ cursor: "pointer" }}>{education.institution}</h5>
                </a>
                <div style={{ marginTop: "10px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      padding: "4px 12px",
                      borderRadius: "14px",
                      backgroundColor: "rgba(168, 124, 255, 0.2)",
                      color: "#cbb1ff",
                      border: "1px solid rgba(168, 124, 255, 0.4)",
                    }}
                  >
                    CGPA: {education.cgpa}
                  </span>
                  <a href="#certifications" style={{ textDecoration: "none" }}>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 500,
                        padding: "4px 12px",
                        borderRadius: "14px",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        color: "#fff",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        cursor: "pointer",
                      }}
                    >
                      🎓 View Certifications <MdArrowOutward style={{ fontSize: "12px" }} />
                    </span>
                  </a>
                </div>
              </div>
              <h3>{education.timeline}</h3>
            </div>
            <div>
              <p style={{ width: "100%", marginBottom: "8px", fontWeight: 400, color: "#fff" }}>
                Honours: <span style={{ color: "#a87cff" }}>{education.honours}</span> | Minor: <span style={{ color: "#7ceeff" }}>{education.minor}</span>
              </p>
              <p style={{ width: "100%", color: "rgba(255, 255, 255, 0.75)", fontSize: "15px", lineHeight: "1.6" }}>
                Undergraduate engineering program focusing on advanced analytical thinking, database architectures, machine learning fundamentals, and quantitative problem solving.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
