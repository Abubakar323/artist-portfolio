import { artistInfo } from "../data/portfolioData";
import { Instagram, Mail } from "lucide-react";

export default function Footer() {
  const links = ["Home", "About", "Portfolio", "Services"];

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#121214] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Column - Left Aligned on all screens */}
          <div className="text-left">
            <h3 className="font-aston text-3xl text-white font-light mb-4">
              Eman Arshad
            </h3>
            <p className="font-body text-white/40 text-sm leading-relaxed max-w-sm md:max-w-none">
              {artistInfo.tagline}
            </p>
          </div>

          {/* Quick links Column - Updated to Purple-Cyan */}
          <div className="flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-left">
            <h4 className="font-body text-xs tracking-[0.3em] uppercase mb-5 w-full" style={{ color: "rgb(var(--c-primary-500))" }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 items-center md:items-start w-full">
              {links.map((link) => (
                <li key={link} className="w-full text-center md:text-left">
                  <button
                    onClick={() => scrollTo(link)}
                    className="font-body text-sm text-white/50 hover:text-purple-400 transition-colors tracking-wide block w-full md:w-auto"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Column - Updated to Purple-Cyan */}
          <div className="flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-left">
            <h4 className="font-body text-xs tracking-[0.3em] uppercase mb-5 w-full" style={{ color: "rgb(var(--c-primary-500))" }}>
              Connect
            </h4>
            <div className="flex flex-col gap-3 mb-6 items-center md:items-start w-full">
              <a
                href={`mailto:${artistInfo.email}`}
                className="font-body text-sm text-white/50 hover:text-purple-400 transition-colors flex items-center justify-center md:justify-start gap-2 w-full md:w-auto"
              >
                <Mail size={14} className="text-purple-400/50 flex-shrink-0" />
                <span>{artistInfo.email}</span>
              </a>
              <a
                href={artistInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="font-body text-sm text-white/50 hover:text-purple-400 transition-colors flex items-center justify-center md:justify-start gap-2 w-full md:w-auto"
              >
                <Instagram size={14} className="text-purple-400/50 flex-shrink-0" />
                <span>Instagram</span>
              </a>
            </div>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-purple-500 text-purple-400 px-6 py-2 text-xs tracking-[0.2em] uppercase font-body hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400 hover:text-white transition-all duration-300 mx-auto md:mx-0 rounded-lg"
            >
              Commission Artwork
            </button>
          </div>
        </div>

        {/* Bottom bar - Updated to Purple-Cyan */}
        <div className="border-t border-white/10 pt-8 flex flex-col justify-center items-center gap-4 text-center">
          <p className="font-body text-white/25 text-xs tracking-wide">
            © {new Date().getFullYear()} . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}