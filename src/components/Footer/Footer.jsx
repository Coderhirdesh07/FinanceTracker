import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4 text-center">
        <ul className="flex flex-col sm:flex-row justify-center gap-6 text-sm mb-4">
          <li>
            <Link
              to="/about"
              className="hover:text-white transition-colors duration-200"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-white transition-colors duration-200"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className="hover:text-white transition-colors duration-200"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex justify-center gap-4 mt-4 text-xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          © {new Date().getFullYear()} Your Name. Built with React & Tailwind
          CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
