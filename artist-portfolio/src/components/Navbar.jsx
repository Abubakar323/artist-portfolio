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
//         {/* Logo */}
//         <button
//           onClick={() => scrollTo("home")}
//           className="font-display text-2xl font-light tracking-widest text-parchment hover:text-gold transition-colors duration-300"
//         >
//           {artistInfo.name}
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
//           Hire Me
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





import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { artistInfo } from "../data/portfolioData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
          ? "bg-ink/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Image */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center focus:outline-none"
        >
          <img 
            src="/images/logo.png" 
            alt={`${artistInfo.name} Logo`} 
            className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105" 
          />
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="font-body text-sm tracking-[0.15em] uppercase text-parchment/70 hover:text-gold transition-colors duration-300 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        {/* Hire Me CTA */}
        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:block border border-gold text-gold px-5 py-2 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-ink transition-all duration-300"
        >
          {" "}
          Hire Me{" "}
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-parchment"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-ink/98 backdrop-blur-md`}
      >
        <ul className="flex flex-col py-6 px-6 gap-5">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="font-body text-sm tracking-[0.2em] uppercase text-parchment/80 hover:text-gold transition-colors w-full text-left"
              >
                {link}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollTo("contact")}
              className="border border-gold text-gold px-5 py-2 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-ink transition-all duration-300 mt-2"
            >
              Hire Me
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}