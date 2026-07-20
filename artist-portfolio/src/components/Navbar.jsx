// // import { useState, useEffect } from "react";
// // import { Menu, X } from "lucide-react";
// // import { artistInfo } from "../data/portfolioData";

// // export default function Navbar() {
// //   const [open, setOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => setScrolled(window.scrollY > 40);
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   const links = ["Home", "About", "Portfolio", "Services"];

// //   const scrollTo = (id) => {
// //     setOpen(false);
// //     const el = document.getElementById(id.toLowerCase());
// //     if (el) el.scrollIntoView({ behavior: "smooth" });
// //   };

// //   return (
// //     <nav
// //       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
// //         scrolled
// //           ? "bg-ink/95 backdrop-blur-md shadow-lg py-3"
// //           : "bg-transparent py-5"
// //       }`}
// //     >
// //       <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
// //         {/* Logo */}
// //         <button
// //           onClick={() => scrollTo("home")}
// //           className="font-display text-2xl font-light tracking-widest text-parchment hover:text-gold transition-colors duration-300"
// //         >
// //           {artistInfo.name}
// //         </button>

// //         {/* Desktop links */}
// //         <ul className="hidden md:flex items-center gap-8">
// //           {links.map((link) => (
// //             <li key={link}>
// //               <button
// //                 onClick={() => scrollTo(link)}
// //                 className="font-body text-sm tracking-[0.15em] uppercase text-parchment/70 hover:text-gold transition-colors duration-300 relative group"
// //               >
// //                 {link}
// //                 <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
// //               </button>
// //             </li>
// //           ))}
// //         </ul>

// //         {/* Hire Me CTA */}
// //         <button
// //           onClick={() => scrollTo("contact")}
// //           className="hidden md:block border border-gold text-gold px-5 py-2 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-ink transition-all duration-300"
// //         >
// //           Hire Me
// //         </button>

// //         {/* Mobile toggle */}
// //         <button
// //           className="md:hidden text-parchment"
// //           onClick={() => setOpen(!open)}
// //         >
// //           {open ? <X size={24} /> : <Menu size={24} />}
// //         </button>
// //       </div>

// //       {/* Mobile menu */}
// //       <div
// //         className={`md:hidden overflow-hidden transition-all duration-400 ${
// //           open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
// //         } bg-ink/98 backdrop-blur-md`}
// //       >
// //         <ul className="flex flex-col py-6 px-6 gap-5">
// //           {links.map((link) => (
// //             <li key={link}>
// //               <button
// //                 onClick={() => scrollTo(link)}
// //                 className="font-body text-sm tracking-[0.2em] uppercase text-parchment/80 hover:text-gold transition-colors w-full text-left"
// //               >
// //                 {link}
// //               </button>
// //             </li>
// //           ))}
// //           <li>
// //             <button
// //               onClick={() => scrollTo("contact")}
// //               className="border border-gold text-gold px-5 py-2 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-ink transition-all duration-300 mt-2"
// //             >
// //               Hire Me
// //             </button>
// //           </li>
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // }





// // import { useState, useEffect } from "react";
// // import { Menu, X } from "lucide-react";
// // import { artistInfo } from "../data/portfolioData";

// // export default function Navbar() {
// //   const [open, setOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => setScrolled(window.scrollY > 40);
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   const links = ["Home", "About", "Portfolio", "Services"];

// //   const scrollTo = (id) => {
// //     setOpen(false);
// //     const el = document.getElementById(id.toLowerCase());
// //     if (el) el.scrollIntoView({ behavior: "smooth" });
// //   };

// //   return (
// //     <nav
// //       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
// //         scrolled
// //           ? "bg-ink/95 backdrop-blur-md shadow-lg py-3"
// //           : "bg-transparent py-5"
// //       }`}
// //     >
// //       <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
// //         {/* Logo Image */}
// //         <button
// //           onClick={() => scrollTo("home")}
// //           className="flex items-center focus:outline-none"
// //         >
// //           <img 
// //             src="/images/logo.png" 
// //             alt={`${artistInfo.name} Logo`} 
// //             className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105" 
// //           />
// //         </button>

// //         {/* Desktop links */}
// //         <ul className="hidden md:flex items-center gap-8">
// //           {links.map((link) => (
// //             <li key={link}>
// //               <button
// //                 onClick={() => scrollTo(link)}
// //                 className="font-body text-sm tracking-[0.15em] uppercase text-parchment/70 hover:text-gold transition-colors duration-300 relative group"
// //               >
// //                 {link}
// //                 <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
// //               </button>
// //             </li>
// //           ))}
// //         </ul>

// //         {/* Hire Me CTA */}
// //         <button
// //           onClick={() => scrollTo("contact")}
// //           className="hidden md:block border border-gold text-gold px-5 py-2 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-ink transition-all duration-300"
// //         >
// //           {" "}
// //           Hire Me{" "}
// //         </button>

// //         {/* Mobile toggle */}
// //         <button
// //           className="md:hidden text-parchment"
// //           onClick={() => setOpen(!open)}
// //         >
// //           {open ? <X size={24} /> : <Menu size={24} />}
// //         </button>
// //       </div>

// //       {/* Mobile menu */}
// //       <div
// //         className={`md:hidden overflow-hidden transition-all duration-400 ${
// //           open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
// //         } bg-ink/98 backdrop-blur-md`}
// //       >
// //         <ul className="flex flex-col py-6 px-6 gap-5">
// //           {links.map((link) => (
// //             <li key={link}>
// //               <button
// //                 onClick={() => scrollTo(link)}
// //                 className="font-body text-sm tracking-[0.2em] uppercase text-parchment/80 hover:text-gold transition-colors w-full text-left"
// //               >
// //                 {link}
// //               </button>
// //             </li>
// //           ))}
// //           <li>
// //             <button
// //               onClick={() => scrollTo("contact")}
// //               className="border border-gold text-gold px-5 py-2 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-ink transition-all duration-300 mt-2"
// //             >
// //               Hire Me
// //             </button>
// //           </li>
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // }












// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { artistInfo } from "../data/portfolioData";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const links = ["Home", "About", "Portfolio", "Services"];

//   const scrollTo = (id) => {
//     setOpen(false);
//     const el = document.getElementById(id.toLowerCase());
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         scrolled
//           ? "bg-ink/95 backdrop-blur-md shadow-lg py-3"
//           : "bg-transparent py-5"
//       }`}
//     >
//       <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
//         {/* Logo Image Wrapper with locked height */}
//         <button
//           onClick={() => scrollTo("home")}
//           className="flex items-center focus:outline-none h-10 shrink-0"
//         >
//           <img 
//             src="/images/logo.png" 
//             alt={`${artistInfo.name} Logo`} 
//             className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105" 
//           />
//         </button>

//         {/* Desktop links */}
//         <ul className="hidden md:flex items-center gap-8">
//           {links.map((link) => (
//             <li key={link}>
//               <button
//                 onClick={() => scrollTo(link)}
//                 className="font-body text-sm tracking-[0.15em] uppercase text-parchment/70 hover:text-gold transition-colors duration-300 relative group"
//               >
//                 {link}
//                 <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Hire Me CTA */}
//         <button
//           onClick={() => scrollTo("contact")}
//           className="hidden md:block border border-gold text-gold px-5 py-2 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-ink transition-all duration-300"
//         >
//           {" "}
//           Hire Me{" "}
//         </button>

//         {/* Mobile toggle */}
//         <button
//           className="md:hidden text-parchment"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile menu */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-400 ${
//           open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//         } bg-ink/98 backdrop-blur-md`}
//       >
//         <ul className="flex flex-col py-6 px-6 gap-5">
//           {links.map((link) => (
//             <li key={link}>
//               <button
//                 onClick={() => scrollTo(link)}
//                 className="font-body text-sm tracking-[0.2em] uppercase text-parchment/80 hover:text-gold transition-colors w-full text-left"
//               >
//                 {link}
//               </button>
//             </li>
//           ))}
//           <li>
//             <button
//               onClick={() => scrollTo("contact")}
//               className="border border-gold text-gold px-5 py-2 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-ink transition-all duration-300 mt-2"
//             >
//               Hire Me
//             </button>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }








import { useState, useEffect, useRef } from "react";
import { Menu, X, Palette, Check } from "lucide-react";
import { artistInfo } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const themeMenuRef = useRef(null);
  const { theme, setTheme, themes } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the theme dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(e.target)) {
        setThemeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = ["Home", "About", "Portfolio", "Services"];

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Image */}
        <button
          onClick={() => scrollTo("home")}
          className="relative z-20 flex items-center shrink-0 focus:outline-none"
        >
          <img
            src="/images/logo.png"
            alt={`${artistInfo.name} Logo`}
            className="h-10 sm:h-12 w-auto max-h-12 object-contain transition-transform duration-300 hover:scale-105"
          />
        </button>

        {/* Desktop links - Updated to Purple-Cyan */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="font-body text-sm tracking-[0.15em] uppercase text-white/70 hover:text-purple-400 transition-colors duration-300 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Theme switcher */}
          <div className="relative" ref={themeMenuRef}>
            <button
              onClick={() => setThemeOpen(!themeOpen)}
              aria-label="Change theme color"
              aria-expanded={themeOpen}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-purple-500/40 text-purple-400 hover:bg-purple-500/10 transition-colors duration-300"
            >
              <Palette size={17} />
            </button>

            <div
              className={`absolute right-0 mt-3 w-52 origin-top-right bg-[#0a0a0c] border border-white/10 rounded-xl shadow-xl shadow-black/40 transition-all duration-200 ${
                themeOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <p className="px-4 pt-3 pb-2 text-[10px] tracking-[0.2em] uppercase text-white/40 font-body">
                Theme Color
              </p>
              <ul className="pb-2">
                {themes.map((t) => (
                  <li key={t.id}>
                    <button
                      onClick={() => {
                        setTheme(t.id);
                        setThemeOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors duration-200 font-body"
                    >
                      <span
                        className="w-4 h-4 rounded-full flex-shrink-0 border border-white/20"
                        style={{
                          background: `linear-gradient(135deg, ${t.swatch}, ${t.swatch2})`,
                        }}
                      />
                      <span className="flex-1 text-left">{t.name}</span>
                      {theme === t.id && (
                        <Check size={14} className="text-purple-400" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hire Me CTA - Updated to Purple-Cyan */}
          <button
            onClick={() => scrollTo("contact")}
            className="hidden md:block border border-purple-500 text-purple-400 px-5 py-2 text-xs tracking-[0.2em] uppercase font-body hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400 hover:text-white transition-all duration-300 rounded-lg"
          >
            Hire Me
          </button>

          {/* Mobile toggle - Updated to Purple-Cyan */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu - Updated to Purple-Cyan */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[#050505]/98 backdrop-blur-md`}
      >
        <ul className="flex flex-col py-6 px-6 gap-5">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="font-body text-sm tracking-[0.2em] uppercase text-white/80 hover:text-purple-400 transition-colors w-full text-left"
              >
                {link}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollTo("contact")}
              className="border border-purple-500 text-purple-400 px-5 py-2 text-xs tracking-[0.2em] uppercase font-body hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400 hover:text-white transition-all duration-300 mt-2 rounded-lg"
            >
              Hire Me
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}