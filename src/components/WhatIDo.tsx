import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO" id="what-i-do">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {/* 1. ANALYZE & SQL */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>ANALYZE & SQL</h3>
              <h4>Data Analysis & MySQL Databases</h4>
              <p>
                Extracting actionable business insights from 50K+ transactional records using MySQL queries, aggregations, joins, date-time functions, and performance indexing.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">MySQL</div>
                <div className="what-tags">SQL Joins</div>
                <div className="what-tags">Subqueries</div>
                <div className="what-tags">Aggregations</div>
                <div className="what-tags">Date & Time Functions</div>
                <div className="what-tags">Indexing</div>
                <div className="what-tags">MongoDB</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* 2. BI & DASHBOARDING */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>BI & DASHBOARDING</h3>
              <h4>Power BI & Business Intelligence</h4>
              <p>
                Developing interactive Power BI dashboards, authoring custom DAX measures, dynamic KPI cards, and building relational data models for performance tracking.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Power BI</div>
                <div className="what-tags">DAX</div>
                <div className="what-tags">Data Modeling</div>
                <div className="what-tags">KPI Cards</div>
                <div className="what-tags">Interactive Visuals</div>
                <div className="what-tags">Branch Analytics</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* 3. EXCEL & SPREADSHEETS */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>EXCEL & SPREADSHEETS</h3>
              <h4>Advanced Excel & Pivot Analysis</h4>
              <p>
                Data cleaning, sanitization, and structured analysis using Excel Pivot Tables, dynamic lookup functions, data validation, and executive summary dashboards.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Advanced Excel</div>
                <div className="what-tags">Pivot Tables</div>
                <div className="what-tags">Lookup Functions</div>
                <div className="what-tags">Data Cleaning</div>
                <div className="what-tags">Executive Dashboards</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* 4. PYTHON & STATISTICS */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 3)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>PYTHON & STATISTICS</h3>
              <h4>Data Science & Analytics</h4>
              <p>
                Performing exploratory data analysis (EDA), array manipulation, statistical visualization, probability distributions, hypothesis testing, and correlation analysis.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">Pandas</div>
                <div className="what-tags">NumPy</div>
                <div className="what-tags">Matplotlib</div>
                <div className="what-tags">Seaborn</div>
                <div className="what-tags">Hypothesis Testing</div>
                <div className="what-tags">Correlation</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container && sibling.classList.contains("what-content")) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
