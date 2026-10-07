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
            const projectUrl = project.liveLink || project.githubLink || "#";
            const isLive = Boolean(project.liveLink);

            return (
              <a
                key={project.id}
                href={projectUrl}
                target="_blank"
                rel="noreferrer"
                className="work-single-card"
              >
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
                  <MdArrowOutward className="work-arrow-icon" />
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

                <div className="work-card-footer">
                  {isLive ? (
                    <span className="work-github-button work-live-button">
                      <FaGlobe /> Visit nuronova.vercel.app <MdArrowOutward />
                    </span>
                  ) : (
                    <span className="work-github-button">
                      <FaGithub /> View Project on GitHub <MdArrowOutward />
                    </span>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
