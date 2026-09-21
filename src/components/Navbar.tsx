import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { portfolioData } from "../data/portfolioData";
import "./styles/Navbar.css";

export const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      const handleClick = (e: MouseEvent) => {
        const sectionId = element.getAttribute("data-href");
        if (sectionId) {
          e.preventDefault();
          const target = document.querySelector(sectionId);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
      };
      element.addEventListener("click", handleClick);
    });
  }, []);

  const { profile } = portfolioData;

  return (
    <>
      <header className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          {profile.name.toUpperCase()}
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#what-i-do" href="#what-i-do">
              <HoverLinks text="WHAT I DO" />
            </a>
          </li>
          <li>
            <a data-href="#career" href="#career">
              <HoverLinks text="CAREER" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#certifications" href="#certifications">
              <HoverLinks text="CERTIFICATIONS" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </header>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
