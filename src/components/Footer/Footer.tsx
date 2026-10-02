import { ArrowUpRight } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="react-challenge-footer">
      <div className="footer-content">
        <nav className="footer-links" aria-label="Social links">
          <a
            href="https://frontend-lab-inky.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Frontend Lab portfolio"
          >
            Portfolio <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/kanan-mehta-93770157/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile"
          >
            LinkedIn <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <a
            href="https://github.com/kanan-mehta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
          >
            GitHub <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
