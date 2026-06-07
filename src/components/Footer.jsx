// import { color } from "framer-motion";
// import { artistInfo } from "../data/portfolioData";
// import { Instagram, Mail, Heart } from "lucide-react";

// export default function Footer() {
//   const links = ["Home", "About", "Portfolio", "Services"];

//   const scrollTo = (id) => {
//     const el = document.getElementById(id.toLowerCase());
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <footer className="bg-ink border-t border-parchment/10">
//       <div className="max-w-6xl mx-auto px-6 py-16">
//         <div className="grid md:grid-cols-3 gap-12 mb-12">
//           {/* Brand */}
//           <div>
//             <h3 className="font-aston text-3xl text-parchment font-light mb-4">
//               Eman Arshad  </h3>
//             <p className="font-body text-parchment/40 text-sm leading-relaxed mb-6">
//               {artistInfo.tagline}
//             </p>
//           </div>

//           {/* Quick links */}
//           <div>
//             <h4 className="font-body text-xs tracking-[0.3em] uppercase text-parchment/30 mb-5" style={{color:"red"}}>
//               Quick Links
//             </h4>
//             <ul className="flex flex-col gap-3">
//               {links.map((link) => (
//                 <li key={link}>
//                   <button
//                     onClick={() => scrollTo(link)}
//                     className="font-body text-sm text-parchment/50 hover:text-gold transition-colors tracking-wide"
//                   >
//                     {link}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact & Social */}
//           <div>
//             <h4 className="font-body text-xs tracking-[0.3em] uppercase text-parchment/30 mb-5">
//               Connect
//             </h4>
//             <div className="flex flex-col gap-3 mb-6">
//               <a
//                 href={`mailto:${artistInfo.email}`}
//                 className="font-body text-sm text-parchment/50 hover:text-gold transition-colors flex items-center gap-2"
//               >
//                 <Mail size={14} className="text-gold/50" />
//                 {artistInfo.email}
//               </a>
//               <a
//                 href={artistInfo.instagram}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="font-body text-sm text-parchment/50 hover:text-gold transition-colors flex items-center gap-2"
//               >
//                 <Instagram size={14} className="text-gold/50" />
//                 Instagram
//               </a>
//             </div>

//             <button
//               onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
//               className="border border-gold text-gold px-6 py-2 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-ink transition-all duration-300"
//             >
//               Commission Artwork
//             </button>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="border-t border-parchment/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
//           <p className="font-body text-parchment/25 text-xs tracking-wide">
//             © {new Date().getFullYear()} {artistInfo.name}. All rights reserved.
//           </p>
//           <p className="font-body text-parchment/20 text-xs flex items-center gap-1">
//             Crafted with <Heart size={10} className="text-rose-artist" fill="currentColor" /> for art
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }


// import { color } from "framer-motion";
// import { artistInfo } from "../data/portfolioData";
// import { Instagram, Mail, Heart } from "lucide-react";

// export default function Footer() {
//   const links = ["Home", "About", "Portfolio", "Services"];

//   const scrollTo = (id) => {
//     const el = document.getElementById(id.toLowerCase());
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <footer className="bg-ink border-t border-parchment/10">
//       <div className="max-w-6xl mx-auto px-6 py-16">
//         <div className="grid md:grid-cols-3 gap-12 mb-12">
//           {/* Brand */}
//           <div>
//             <h3 className="font-aston text-3xl text-parchment font-light mb-4">
//               Eman Arshad
//             </h3>
//             <p className="font-body text-parchment/40 text-sm leading-relaxed mb-6">
//               {artistInfo.tagline}
//             </p>
//           </div>

//           {/* Quick links */}
//           <div>
//             <h4 className="font-body text-xs tracking-[0.3em] uppercase mb-5" style={{ color: "#c9933a" }}>
//               Quick Links
//             </h4>
//             <ul className="flex flex-col gap-3">
//               {links.map((link) => (
//                 <li key={link}>
//                   <button
//                     onClick={() => scrollTo(link)}
//                     className="font-body text-sm text-parchment/50 hover:text-gold transition-colors tracking-wide"
//                   >
//                     {link}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact & Social */}
//           <div>
//             <h4 className="font-body text-xs tracking-[0.3em] uppercase mb-5" style={{ color: "#c9933a" }}>
//               Connect
//             </h4>
//             <div className="flex flex-col gap-3 mb-6">
//               <a
//                 href={`mailto:${artistInfo.email}`}
//                 className="font-body text-sm text-parchment/50 hover:text-gold transition-colors flex items-center gap-2"
//               >
//                 <Mail size={14} className="text-gold/50" />
//                 {artistInfo.email}
//               </a>
//               <a
//                 href={artistInfo.instagram}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="font-body text-sm text-parchment/50 hover:text-gold transition-colors flex items-center gap-2"
//               >
//                 <Instagram size={14} className="text-gold/50" />
//                 Instagram
//               </a>
//             </div>

//             <button
//               onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
//               className="border border-gold text-gold px-6 py-2 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-ink transition-all duration-300"
//             >
//               Commission Artwork
//             </button>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="border-t border-parchment/10 pt-8 flex flex-col sm:flex-row justify-center items-center gap-4 text-center">
//   <p className="font-body text-parchment/25 text-xs tracking-wide">
//     © {new Date().getFullYear()} {artistInfo.name}. All rights reserved.
//   </p>
// </div>
//       </div>
//     </footer>
//   );
// }




import { artistInfo } from "../data/portfolioData";
import { Instagram, Mail } from "lucide-react";

export default function Footer() {
  const links = ["Home", "About", "Portfolio", "Services"];

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-ink border-t border-parchment/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Column - Left Aligned on all screens as requested */}
          <div className="text-left">
            <h3 className="font-aston text-3xl text-parchment font-light mb-4">
              Eman Arshad
            </h3>
            <p className="font-body text-parchment/40 text-sm leading-relaxed max-w-sm md:max-w-none">
              {artistInfo.tagline}
            </p>
          </div>

          {/* Quick links Column - Centered on mobile, Left on desktop */}
          <div className="flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-left">
            <h4 className="font-body text-xs tracking-[0.3em] uppercase mb-5 w-full" style={{ color: "#c9933a" }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 items-center md:items-start w-full">
              {links.map((link) => (
                <li key={link} className="w-full text-center md:text-left">
                  <button
                    onClick={() => scrollTo(link)}
                    className="font-body text-sm text-parchment/50 hover:text-gold transition-colors tracking-wide block w-full md:w-auto"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Column - Centered on mobile, Left on desktop */}
          <div className="flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-left">
            <h4 className="font-body text-xs tracking-[0.3em] uppercase mb-5 w-full" style={{ color: "#c9933a" }}>
              Connect
            </h4>
            <div className="flex flex-col gap-3 mb-6 items-center md:items-start w-full">
              <a
                href={`mailto:${artistInfo.email}`}
                className="font-body text-sm text-parchment/50 hover:text-gold transition-colors flex items-center justify-center md:justify-start gap-2 w-full md:w-auto"
              >
                <Mail size={14} className="text-gold/50 flex-shrink-0" />
                <span>{artistInfo.email}</span>
              </a>
              <a
                href={artistInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="font-body text-sm text-parchment/50 hover:text-gold transition-colors flex items-center justify-center md:justify-start gap-2 w-full md:w-auto"
              >
                <Instagram size={14} className="text-gold/50 flex-shrink-0" />
                <span>Instagram</span>
              </a>
            </div>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-gold text-gold px-6 py-2 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-ink transition-all duration-300 mx-auto md:mx-0"
            >
              Commission Artwork
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-parchment/10 pt-8 flex flex-col justify-center items-center gap-4 text-center">
          <p className="font-body text-parchment/25 text-xs tracking-wide">
            © {new Date().getFullYear()} . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}