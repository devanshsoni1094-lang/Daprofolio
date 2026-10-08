import "./styles/Work.css";
import { portfolioData } from "../data/portfolioData";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub, FaGlobe } from "react-icons/fa6";

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work & Projects</span>
        </h2>

        <div className="work-projects-grid">
          {portfolioData.projects.map((project) => {
            const isLive = Boolean(project.liveLink);

            return (
              <div key={project.id} className="work-single-card">
                <div className="work-single-header">
                  <span className="work-badge">
                    {isLive ? "🚀 Live Web Platform" : "📊 Featured Data Project"}
                  </span>
                  <span className="work-tools">
                    {project.tools} • {project.datasetSize}
                  </span>
                </div>

                <div className="work-single-title">
                  <h3>{project.title}</h3>
                  <div style={{ display: "flex", gap: "8px" }}>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        title="Live View"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        <MdArrowOutward className="work-arrow-icon" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="work-single-desc">{project.description}</p>

                <div className="work-metrics-grid">
                  {project.calculatedMetrics.map((metric, idx) => (
                    <div key={idx} className="work-metric-pill">
                      ⚡ {metric}
                    </div>
                  ))}
                </div>

                <div className="work-breakdown-list">
                  <h4>Key Highlights:</h4>
                  <ul>
                    {project.breakdowns.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="work-card-footer" style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "15px" }}>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="work-github-button work-live-button"
                      style={{ textDecoration: "none" }}
                    >
                      <FaGlobe /> Live View <MdArrowOutward />
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="work-github-button"
                      style={{ textDecoration: "none" }}
                    >
                      <FaGithub /> GitHub Repository <MdArrowOutward />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
