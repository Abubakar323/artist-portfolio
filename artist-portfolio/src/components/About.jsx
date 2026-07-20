// import { useEffect, useRef } from "react";
// import { artistInfo } from "../data/portfolioData";

// export default function About() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.querySelectorAll(".reveal").forEach((el, i) => {
//               setTimeout(() => {
//                 el.style.opacity = "1";
//                 el.style.transform = "translateY(0)";
//               }, i * 150);
//             });
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="about" ref={sectionRef} className="py-28 bg-parchment-light overflow-hidden">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Section label */}
//         <div
//           className="reveal"
//           style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease" }}
//         >
//           <p className="font-body text-gold tracking-[0.4em] text-xs uppercase text-center mb-3">
//             ✦ The Artist ✦
//           </p>
//         </div>

//         <div
//           className="reveal"
//           style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease" }}
//         >
//           <h2 className="font-display text-5xl md:text-6xl font-light text-ink text-center mb-16">
//             About Me
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           {/* Left: image placeholder */}
//           <div
//             className="reveal relative"
//             style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease" }}
//           >
//             {/* Main photo frame */}
//             <div className="relative">
//               <div className="absolute -top-4 -left-4 w-full h-full border border-gold/40" />
//               <div className="bg-ink-light aspect-[4/5] overflow-hidden relative">
//                 {/* Replace this div with an <img> tag for your actual photo */}
//                 <div className="w-full h-full bg-gradient-to-br from-ink-soft to-ink flex flex-col items-center justify-center gap-4">
//                   <span className="font-arabic text-7xl text-gold/40">فنان</span>
//                   <p className="font-body text-parchment/30 text-xs tracking-[0.3em] uppercase">
//                     Your Photo Here
//                   </p>
//                   {/* TO ADD YOUR PHOTO:
//                       Replace this entire inner div with:
//                       <img src="/images/your-photo.jpg" alt="Artist" className="w-full h-full object-cover" />
//                   */}
//                 </div>
//               </div>
//               {/* Gold corner accents */}
//               <div className="absolute bottom-0 right-0 w-20 h-20 bg-gold flex items-center justify-center">
//                 <span className="font-arabic text-2xl text-ink">✦</span>
//               </div>
//             </div>
//           </div>

//           {/* Right: text */}
//           <div className="flex flex-col gap-8">
//             <div
//               className="reveal"
//               style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease" }}
//             >
//               <h3 className="font-display text-3xl font-light text-ink mb-4">
//                 Crafting Art with{" "}
//                 <span className="italic text-gold">Soul & Precision</span>
//               </h3>
//               <p className="font-body text-ink/70 leading-relaxed text-[15px]">
//                 {artistInfo.bio}
//               </p>
//             </div>

//             <div
//               className="reveal"
//               style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease" }}
//             >
//               <p className="font-body text-ink/70 leading-relaxed text-[15px]">
//                 {artistInfo.bio2}
//               </p>
//             </div>

//             {/* Skills */}
//             <div
//               className="reveal"
//               style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease" }}
//             >
//               <div className="grid grid-cols-3 gap-4 pt-4 border-t border-ink/10">
//                 {[
//                   { label: "Paintings", icon: "🖌️" },
//                   { label: "Sketches", icon: "✏️" },
//                   { label: "Calligraphy", icon: "🖋️" },
//                 ].map((skill) => (
//                   <div
//                     key={skill.label}
//                     className="text-center p-4 border border-ink/10 hover:border-gold hover:bg-gold/5 transition-all duration-300 group"
//                   >
//                     <div className="text-2xl mb-2">{skill.icon}</div>
//                     <p className="font-body text-xs tracking-[0.15em] uppercase text-ink/60 group-hover:text-gold transition-colors">
//                       {skill.label}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* CTA */}
//             <div
//               className="reveal"
//               style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease" }}
//             >
//               <button
//                 onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
//                 className="bg-ink text-parchment px-8 py-3 text-xs tracking-[0.25em] uppercase font-body hover:bg-gold hover:text-ink transition-all duration-300 inline-block mt-2"
//               >
//                 Explore My Portfolio →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





// import { useEffect, useRef } from "react";
// import { Palette, Feather, Brush, ArrowRight } from "lucide-react";
// import { artistInfo } from "../data/portfolioData";

// export default function About() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.querySelectorAll(".reveal").forEach((el, i) => {
//               setTimeout(() => {
//                 el.classList.add("translate-y-0", "opacity-100");
//                 el.classList.remove("translate-y-10", "opacity-0");
//               }, i * 120);
//             });
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="about" ref={sectionRef} className="py-32 bg-parchment-light overflow-hidden relative">
//       {/* Subtle Background Art Accent */}
//       <div className="absolute right-0 top-1/4 font-arabic text-[20vw] text-ink/[0.01] pointer-events-none select-none">
//         آرٹ
//       </div>

//       <div className="max-w-6xl mx-auto px-6">
//         {/* Section Label */}
//         <div className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out text-center mb-4">
//           <p className="font-body text-gold tracking-[0.4em] text-xs uppercase">
//             ✦ The Creative Mind ✦
//           </p>
//         </div>

//         {/* Section Heading */}
//         <div className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out text-center mb-20">
//           <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-ink">
//             About The Artist
//           </h2>
//           <div className="w-12 h-px bg-gold/50 mx-auto mt-4" />
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
//           {/* Left: Premium Image Frames */}
//           <div className="lg:col-span-5 reveal opacity-0 translate-y-10 transition-all duration-700 ease-out relative h-[500px] w-full flex items-center">
//             {/* Background Decorative Accent Frame */}
//             <div className="absolute top-0 right-4 w-[80%] h-[75%] border border-gold/20 translate-x-4 -translate-y-4 pointer-events-none hidden sm:block" />
            
//             {/* Main Profile Image Frame */}
//             <div className="absolute left-0 w-[85%] h-[85%] border border-ink/10 p-2 bg-white shadow-xl z-10 group transition-transform duration-500 hover:scale-[1.01]">
//               <div className="w-full h-full bg-neutral-100 overflow-hidden relative">
//                 <img 
//                   src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600" 
//                   alt="Artist Portrait" 
//                   className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
//                 />
//                 <div className="absolute inset-0 bg-ink/5 pointer-events-none" />
//               </div>
//             </div>

//             {/* Accent Calligraphy Stamp/Label */}
//             <div className="absolute bottom-4 right-0 bg-ink text-gold px-6 py-6 shadow-2xl z-20 flex flex-col items-center justify-center min-w-[100px] animate-float">
//               <span className="font-arabic text-3xl leading-none mb-1">ایمان </span>
//               {/* <span className="font-body text-[9px] tracking-[0.2em] text-parchment/50 uppercase">Studio</span> */}
//             </div>
//           </div>

//           {/* Right: Premium Bio Content */}
//           <div className="lg:col-span-7 flex flex-col gap-8">
            
//             {/* Main Subheading & First Paragraph */}
//             <div className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out">
//               <h3 className="font-display text-2xl md:text-3xl font-light text-ink mb-5 leading-tight">
//                 Crafting Art with <span className="italic text-gold font-normal">Soul & Precision</span>
//               </h3>
//               <p className="font-body text-ink/75 leading-relaxed text-[15px] md:text-base">
//                 {artistInfo.bio || "Welcome to my creative sanctuary. With a deep respect for traditional techniques and a passion for contemporary design, I transform blank surfaces into poetic visual experiences."}
//               </p>
//             </div>

//             {/* Second Paragraph */}
//             <div className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out">
//               <p className="font-body text-ink/70 leading-relaxed text-[15px]">
//                 {artistInfo.bio2 || "Every stroke of the brush and curve of the pen is guided by years of practice and philosophical exploration. My work bridges the gap between ancient heritage and modern minimalism."}
//               </p>
//             </div>

//             {/* Professional Core Skills Grid */}
//             <div className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out pt-6 border-t border-ink/10">
//               <div className="grid grid-cols-3 gap-4">
//                 {[
//                   { label: "Paintings", icon: <Palette size={20} /> },
//                   { label: "Sketches", icon: <Brush size={20} /> },
//                   { label: "Calligraphy", icon: <Feather size={20} /> },
//                 ].map((skill) => (
//                   <div
//                     key={skill.label}
//                     className="flex flex-col items-center text-center p-5 border border-ink/5 bg-ink/[0.01] hover:border-gold hover:bg-gold/[0.03] transition-all duration-300 group rounded-none"
//                   >
//                     <div className="text-ink/40 group-hover:text-gold transition-colors duration-300 mb-3">
//                       {skill.icon}
//                     </div>
//                     <p className="font-body text-[11px] font-medium tracking-[0.15em] uppercase text-ink/70 group-hover:text-ink transition-colors">
//                       {skill.label}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Premium CTA Button */}
//             <div className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out pt-2">
//               <button
//                 onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
//                 className="group inline-flex items-center gap-3 bg-ink text-parchment px-8 py-4 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-ink transition-all duration-300"
//               >
//                 <span>Explore Portfolio</span>
//                 <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }








// import { useEffect, useRef, useState } from "react";
// import { Palette, Feather, Brush, ArrowRight, Award, Clock, Heart, User, MapPin, Sparkles, Quote } from "lucide-react";
// import { artistInfo } from "../data/portfolioData";

// export default function About() {
//   const sectionRef = useRef(null);
//   const [hoveredSkill, setHoveredSkill] = useState(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.querySelectorAll(".reveal").forEach((el, i) => {
//               setTimeout(() => {
//                 el.classList.add("translate-y-0", "opacity-100");
//                 el.classList.remove("translate-y-10", "opacity-0");
//               }, i * 100);
//             });
//           }
//         });
//       },
//       { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const stats = [
//     { value: "12+", label: "Years Experience", icon: <Award size={22} />, gradient: "from-amber-400 to-amber-600" },
//     { value: "156", label: "Artworks Created", icon: <Heart size={22} />, gradient: "from-rose-400 to-rose-600" },
//     { value: "28", label: "Exhibitions", icon: <Clock size={22} />, gradient: "from-indigo-400 to-indigo-600" },
//   ];

//   const skills = [
//     { label: "Oil Paintings", icon: <Palette size={24} />, desc: "Classical & Contemporary", percentage: 95 },
//     { label: "Charcoal Sketches", icon: <Brush size={24} />, desc: "Expressive & Detailed", percentage: 90 },
//     { label: "Calligraphy", icon: <Feather size={24} />, desc: "Arabic & Modern Scripts", percentage: 88 },
//   ];

//   const achievements = [
//     "Featured in 15+ International Art Magazines",
//     "Solo Exhibition at Louvre Abu Dhabi",
//     "Artist Residency at Venice Biennale",
//   ];

//   return (
//     <section
//       id="about"
//       ref={sectionRef}
//       className="relative min-h-screen bg-gradient-to-br from-[#faf7f2] via-[#f5f0e8] to-[#efe8df] overflow-hidden"
//     >
//       {/* Animated Background Particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-[10%] w-72 h-72 bg-amber-100/40 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 right-[5%] w-96 h-96 bg-stone-200/40 rounded-full blur-3xl animate-pulse delay-1000" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-50/30 rounded-full blur-3xl" />
//       </div>

//       {/* Decorative Line Art */}
//       <div className="absolute left-0 top-1/3 w-32 h-px bg-gradient-to-r from-transparent to-amber-300/30 rotate-90 origin-top-left" />
//       <div className="absolute right-0 bottom-1/3 w-32 h-px bg-gradient-to-l from-transparent to-amber-300/30 -rotate-90 origin-bottom-right" />

//       <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 z-10">
//         {/* Section Label with Ornament */}
//         <div className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out text-center mb-6">
//           <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm border border-amber-200/50">
//             <Sparkles size={14} className="text-amber-500" />
//             <p className="font-body text-amber-600 tracking-[0.2em] text-[11px] uppercase font-medium">
//               The Creative Journey
//             </p>
//             <Sparkles size={14} className="text-amber-500" />
//           </div>
//         </div>

//         {/* Main Heading */}
//         <div className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out text-center mb-16">
//           <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-stone-800 tracking-tight">
//             About The Artist
//           </h2>
//           <div className="flex justify-center gap-2 mt-6">
//             <div className="w-12 h-px bg-amber-400" />
//             <div className="w-3 h-px bg-amber-400" />
//             <div className="w-12 h-px bg-amber-400" />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
//           {/* Left Side - Image Gallery */}
//           <div className="lg:col-span-5 reveal opacity-0 translate-y-10 transition-all duration-700 ease-out relative">
//             {/* Main Image Frame */}
//             <div className="relative group">
//               {/* Decorative Frame */}
//               <div className="absolute -top-4 -left-4 w-full h-full border border-amber-300/40 pointer-events-none transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
//               <div className="absolute -bottom-4 -right-4 w-full h-full border border-stone-300/40 pointer-events-none transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
              
//               {/* Image Container */}
//               <div className="relative overflow-hidden shadow-2xl">
//                 <div className="aspect-[4/5] bg-gradient-to-br from-stone-100 to-stone-200 relative">
//                   <img
//                     src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800"
//                     alt="Artist Portrait"
//                     className="w-full h-full object-cover object-top grayscale-[15%] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
//                   />
//                   {/* Overlay Gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 </div>
//               </div>
//             </div>

//             {/* Floating Badges */}
//             <div className="absolute -bottom-6 -right-6 bg-white shadow-xl px-6 py-4 z-20 animate-float hidden md:block">
//               <div className="flex flex-col items-center">
//                 <span className="font-arabic text-4xl text-stone-800 leading-none">ایمان</span>
//                 <div className="w-8 h-px bg-amber-400 my-2" />
//                 <span className="font-body text-[9px] tracking-[0.3em] uppercase text-stone-400">Signature</span>
//               </div>
//             </div>

//             {/* Small Gallery Hint */}
//             <div className="absolute -top-8 -left-8 bg-amber-50/90 backdrop-blur-sm px-3 py-1.5 rounded-sm shadow-md hidden lg:flex items-center gap-2">
//               <div className="w-2 h-2 bg-amber-500 rounded-full" />
//               <span className="font-body text-[10px] tracking-wide text-stone-500">Featured Artist 2024</span>
//             </div>
//           </div>

//           {/* Right Side - Content */}
//           <div className="lg:col-span-7 flex flex-col gap-8">
            
//             {/* Quote / Philosophy */}
//             <div className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out">
//               <div className="flex gap-3 items-start">
//                 <Quote size={28} className="text-amber-400/60 shrink-0 mt-1" />
//                 <p className="font-display text-xl md:text-2xl text-stone-600 italic leading-relaxed">
//                   "Art is not what you see, but what you make others see through your unique perspective."
//                 </p>
//               </div>
//             </div>

//             {/* Bio Content */}
//             <div className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out space-y-5">
//               <h3 className="font-display text-3xl md:text-4xl font-light text-stone-800">
//                 Crafting <span className="text-amber-600 font-medium">Timeless Narratives</span>
//               </h3>
              
//               <div className="space-y-4 text-stone-600 leading-relaxed text-[15px] md:text-base">
//                 <p>
//                   {artistInfo.bio || "With over a decade of dedicated practice in visual arts, I've cultivated a distinctive style that harmoniously blends classical techniques with contemporary expression. Each piece I create carries a piece of my journey, inviting viewers into a world where emotion meets aesthetics."}
//                 </p>
//                 <p>
//                   {artistInfo.bio2 || "My artistic philosophy centers on the belief that authentic art transcends cultural boundaries. Drawing inspiration from Eastern calligraphy, Western abstraction, and the raw beauty of nature, I strive to create works that resonate on a universal level."}
//                 </p>
//               </div>
//             </div>

//             {/* Stats Row - Enhanced */}
//             <div className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out">
//               <div className="grid grid-cols-3 gap-4 md:gap-8 py-6">
//                 {stats.map((stat, idx) => (
//                   <div key={idx} className="text-center group cursor-default">
//                     <div className="w-12 h-12 mx-auto bg-gradient-to-br from-white to-stone-50 rounded-full flex items-center justify-center shadow-sm border border-stone-200 group-hover:border-amber-300 transition-all group-hover:shadow-md">
//                       <div className={`text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}>
//                         {stat.icon}
//                       </div>
//                     </div>
//                     <div className="font-display text-2xl md:text-3xl font-bold text-stone-800 mt-3 tracking-tight">
//                       {stat.value}
//                     </div>
//                     <div className="font-body text-[10px] tracking-[0.15em] uppercase text-stone-400 mt-1">
//                       {stat.label}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Skills with Progress Bars */}
//             <div className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out pt-4">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-8 h-px bg-amber-400" />
//                 <h4 className="font-body text-xs tracking-[0.3em] uppercase text-amber-600 font-medium">
//                   Core Expertise
//                 </h4>
//                 <div className="flex-1 h-px bg-stone-200" />
//               </div>
              
//               <div className="space-y-6">
//                 {skills.map((skill, idx) => (
//                   <div 
//                     key={idx}
//                     className="group cursor-default"
//                     onMouseEnter={() => setHoveredSkill(idx)}
//                     onMouseLeave={() => setHoveredSkill(null)}
//                   >
//                     <div className="flex items-center justify-between mb-2">
//                       <div className="flex items-center gap-3">
//                         <div className="text-stone-400 group-hover:text-amber-500 transition-colors">
//                           {skill.icon}
//                         </div>
//                         <span className="font-body text-sm font-medium text-stone-700">{skill.label}</span>
//                         <span className="font-body text-[10px] text-stone-400 hidden sm:inline">{skill.desc}</span>
//                       </div>
//                       <span className="font-body text-xs text-stone-500">{skill.percentage}%</span>
//                     </div>
//                     <div className="h-[2px] bg-stone-200 rounded-full overflow-hidden">
//                       <div 
//                         className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full transition-all duration-1000 ease-out"
//                         style={{ width: hoveredSkill === idx ? `${skill.percentage}%` : '0%' }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Achievements List */}
//             <div className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out pt-4">
//               <div className="flex items-center gap-3 mb-5">
//                 <div className="w-8 h-px bg-amber-400" />
//                 <h4 className="font-body text-xs tracking-[0.3em] uppercase text-amber-600 font-medium">
//                   Recognitions
//                 </h4>
//                 <div className="flex-1 h-px bg-stone-200" />
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 {achievements.map((achievement, idx) => (
//                   <div key={idx} className="flex items-center gap-2 text-stone-500">
//                     <div className="w-1 h-1 bg-amber-400 rounded-full" />
//                     <span className="font-body text-[12px]">{achievement}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* CTA Button - Premium */}
//             <div className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out pt-6">
//               <button
//                 onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
//                 className="group relative inline-flex items-center gap-4 bg-stone-900 text-amber-50 px-10 py-4 text-[11px] tracking-[0.25em] uppercase font-body font-semibold overflow-hidden transition-all duration-500 hover:pl-12 hover:pr-8 shadow-xl"
//               >
//                 <span className="relative z-10">Explore Portfolio</span>
//                 <ArrowRight size={14} className="relative z-10 transition-transform duration-300 group-hover:translate-x-2" />
//                 <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
//               </button>
              
//               {/* Decorative line under CTA */}
//               <div className="w-16 h-px bg-amber-400/50 mt-6" />
//             </div>

//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-8px); }
//         }
//         .animate-float {
//           animation: float 5s ease-in-out infinite;
//         }
//         @keyframes pulse {
//           0%, 100% { opacity: 0.3; transform: scale(1); }
//           50% { opacity: 0.5; transform: scale(1.05); }
//         }
//         .animate-pulse {
//           animation: pulse 8s ease-in-out infinite;
//         }
//         .delay-1000 {
//           animation-delay: 1s;
//         }
//       `}</style>
//     </section>
//   );
// }




import { useEffect, useRef, useState } from "react";
import { Palette, Feather, Brush, ArrowRight, Award, Clock, Heart, Sparkles, Quote, Calendar, MapPin, ExternalLink } from "lucide-react";
import { artistInfo } from "../data/portfolioData";

export default function About() {
  const sectionRef = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeTab, setActiveTab] = useState("story");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal-premium").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("translate-y-0", "opacity-100");
                el.classList.remove("translate-y-12", "opacity-0");
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "12+", label: "Years Practice", icon: <Award size={18} /> },
    { value: "150+", label: "Exhibited Works", icon: <Palette size={18} /> },
    { value: "25+", label: "Global Galleries", icon: <MapPin size={18} /> },
  ];

  const skills = [
    { label: "Arabic & Modern Calligraphy", icon: <Feather size={18} />, desc: "Traditional scripts & contemporary abstract layouts", percentage: 95 },
    { label: "Oil & Acrylic Mediums", icon: <Palette size={18} />, desc: "Fine-art realism with rich, layered textures", percentage: 90 },
    { label: "Charcoal & Mixed Media", icon: <Brush size={18} />, desc: "High-contrast expressive structures", percentage: 88 },
  ];

  const awards = [
    {
      title: "National Excellence Award in Calligraphy",
      organization: "National Heritage & Culture Division",
      date: "Dec 2025",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600", 
      desc: "Honored for pioneering contemporary fusion in classical Arabic scripts."
    },
    {
      title: "HEC NRPU Research Artwork Grant",
      organization: "Higher Education Commission",
      date: "March 2026",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600",
      desc: "Awarded for exceptional visual contribution to the Cultural Preservation Initiative."
    },
    {
      title: "International Artist Residency Winner",
      organization: "Venice Biennale Foundation",
      date: "Sept 2024",
      image: "https://images.unsplash.com/photo-1547891654-e66ed7edd96c?q=80&w=600",
      desc: "Selected among global visual artists for the prestigious 3-month Italian workshop."
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="about-premium-scope relative min-h-screen bg-[#faf9f6] text-stone-800 overflow-hidden selection:bg-amber-100 selection:text-amber-900"
    >
      {/* Injecting Premium Google Fonts locally for this component scope only */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Montserrat:wght@300;400;500;600&display=swap');
        
        .about-premium-scope {
          font-family: 'Montserrat', sans-serif !important;
        }
        .about-premium-scope .font-premium-serif {
          font-family: 'Cinzel', serif !important;
        }
      `}</style>

      {/* Structural Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f3ede2] rounded-full blur-[140px] opacity-70 translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ebe2d5] rounded-full blur-[120px] opacity-50 -translate-x-1/4 translate-y-1/4" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-36 z-10">
        
        {/* Header Block (Centered, Refined & Minimal) */}
        <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-1000 ease-out mb-24 text-center border-b border-stone-200/60 pb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <Sparkles size={11} className="text-amber-600 animate-pulse" />
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-semibold text-amber-700">
              The Profile
            </span>
            <Sparkles size={11} className="text-amber-600 animate-pulse" />
          </div>
          
          <h2 className="font-premium-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-widest text-stone-900 uppercase">
            Behind the <span className="italic font-normal text-amber-700 lowercase">Canvas</span>
          </h2>
          
          {/* Elegant Centered Accent Divider Line */}
          <div className="flex justify-center gap-1.5 mt-5">
            <div className="w-8 h-[1px] bg-amber-600/30" />
            <div className="w-1.5 h-[1px] bg-amber-600/60" />
            <div className="w-8 h-[1px] bg-amber-600/30" />
          </div>
        </div>

        {/* Main Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Fixed Luxury Framed Portrait */}
          <div className="lg:col-span-5 reveal-premium opacity-0 translate-y-12 transition-all duration-1000 ease-out sticky lg:top-24">
            <div className="relative p-3.5 bg-white border border-stone-200/80 shadow-xl rounded-sm group overflow-hidden">
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800"
                  alt="Eman - Artist Portrait"
                  className="w-full h-full object-cover object-top filter grayscale contrast-[1.03] hover:grayscale-0 transition-all duration-[1.2s] ease-in-out scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-950/5 opacity-100 group-hover:opacity-0 transition-opacity duration-700" />
              </div>
              
              {/* Premium Calligraphy Tag Badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#1c1a17] text-[#f5f0e8] px-7 py-4.5 shadow-2xl tracking-widest text-center border border-amber-500/20">
                <p className="text-2xl tracking-normal mb-1 text-amber-400 font-normal">ایمان</p>
                <div className="w-10 h-px bg-amber-500/30 mx-auto mb-1.5" />
                <p className="text-[8px] uppercase tracking-[0.45em] text-stone-400 font-medium">Signature</p>
              </div>
            </div>

             
          </div>

          {/* Right Column: Dynamic Curated Content Layout */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Interactive Concept Navigation Bar */}
            <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-1000 ease-out flex border-b border-stone-200/80 overflow-x-auto scrollbar-none">
              {["story", "expertise", "awards"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 px-6 text-[10px] md:text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 relative whitespace-nowrap ${
                    activeTab === tab ? "text-amber-800 font-semibold" : "text-stone-400 hover:text-stone-600"
                  }`}
                >
                  {tab === "story" ? "Biography" : tab === "expertise" ? "Core Skills" : "Honors & Awards"}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-700 transition-all duration-500" />
                  )}
                </button>
              ))}
            </div>

            {/* TAB 1: BIOGRAPHY & PHILOSOPHY */}
            {activeTab === "story" && (
              <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-700 space-y-8 dynamic-fade-in">
                <div className="border-l border-amber-600/40 pl-6 py-2 bg-gradient-to-r from-amber-50/20 to-transparent">
                  <Quote size={20} className="text-amber-700/40 mb-3" />
                  <p className="font-premium-serif text-base md:text-lg font-light italic leading-relaxed text-stone-700 tracking-wide">
                    "Art is not what you see, but what you make others see through your unique perspective. It is the silent language of the soul made visible."
                  </p>
                </div>

                <div className="space-y-5 text-stone-600 font-light tracking-wide leading-relaxed text-xs md:text-sm">
                  <p>
                    {artistInfo.bio || "With over a decade of dedicated commitment to fine arts, my work serves as an exploration of structural beauty and timeless elegance. I specialize in merging the structural precision of fine calligraphy with the flowing, emotional depths of contemporary fine art canvases."}
                  </p>
                  <p>
                    {artistInfo.bio2 || "Deeply rooted in natural aesthetics and minimalist layout philosophy, my designs prioritize breathing room, balance, and fine textures. Every master stroke is intentional, engineered to establish an enduring connection with the observer."}
                  </p>
                </div>

                {/* Counter Metric System */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-200/60">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="group p-4 bg-white border border-stone-100 rounded-sm hover:border-amber-200/60 hover:shadow-md transition-all duration-300">
                      <div className="text-amber-700 mb-2.5 opacity-80 group-hover:scale-105 transition-transform duration-300">{stat.icon}</div>
                      <div className="font-premium-serif text-xl md:text-2xl font-light text-stone-900 tracking-wide">{stat.value}</div>
                      <div className="text-[8px] uppercase tracking-[0.2em] text-stone-400 mt-1.5 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: SKILLS & PROGRESS */}
            {activeTab === "expertise" && (
              <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-700 space-y-6 dynamic-fade-in">
                <p className="text-stone-500 text-xs tracking-wide font-light mb-6">Technical precision and proficiency ratings across primary fine-art disciplines:</p>
                <div className="space-y-5">
                  {skills.map((skill, idx) => (
                    <div 
                      key={idx}
                      className="p-5 bg-white border border-stone-100 hover:border-stone-200 rounded-sm transition-all shadow-sm"
                      onMouseEnter={() => setHoveredSkill(idx)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-4">
                          <div className="text-amber-700/80 p-2 bg-amber-50 rounded-sm">{skill.icon}</div>
                          <div>
                            <h5 className="text-xs md:text-sm font-medium tracking-wide text-stone-800">{skill.label}</h5>
                            <p className="text-[11px] text-stone-400 font-light mt-1 tracking-wide">{skill.desc}</p>
                          </div>
                        </div>
                        <span className="text-[11px] font-medium text-stone-500 tracking-wider">{skill.percentage}%</span>
                      </div>
                      <div className="h-[2px] bg-stone-100 rounded-full overflow-hidden mt-4">
                        <div 
                          className="h-full bg-gradient-to-r from-amber-600 to-amber-700 transition-all duration-[1.5s] ease-out"
                          style={{ width: hoveredSkill === idx ? `${skill.percentage}%` : '20%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: AWARDS SECTION */}
            {activeTab === "awards" && (
              <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-700 space-y-6 dynamic-fade-in">
                <div className="grid grid-cols-1 gap-5">
                  {awards.map((award, idx) => (
                    <div 
                      key={idx} 
                      className="group flex flex-col md:flex-row items-stretch gap-5 bg-white border border-stone-200/80 p-4 shadow-sm hover:shadow-xl hover:border-amber-300/60 transition-all duration-500 rounded-sm"
                    >
                      {/* Award Image Thumbnail Frame */}
                      <div className="md:w-28 md:h-28 w-full h-40 shrink-0 overflow-hidden relative border border-stone-100 bg-stone-50">
                        <img 
                          src={award.image} 
                          alt={award.title} 
                          className="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute top-2 left-2 bg-stone-900/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ExternalLink size={10} />
                        </div>
                      </div>

                      {/* Award Info Content */}
                      <div className="flex flex-col justify-between py-0.5 flex-1">
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span className="inline-flex items-center gap-1.5 text-[9px] text-amber-700 font-semibold uppercase tracking-[0.15em]">
                              <Award size={11} /> {award.organization}
                            </span>
                            <span className="inline-flex items-center gap-1 text-[10px] text-stone-400 font-medium tracking-wide">
                              <Calendar size={10} /> {award.date}
                            </span>
                          </div>
                          <h4 className="font-premium-serif text-sm md:text-base font-medium text-stone-900 group-hover:text-amber-800 transition-colors duration-300 tracking-wide">
                            {award.title}
                          </h4>
                          <p className="text-[11px] md:text-xs text-stone-500 font-light mt-2 leading-relaxed tracking-wide">
                            {award.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Premium CTA Trigger Frame */}
            <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-1000 ease-out pt-6">
              <button
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative inline-flex items-center gap-4 bg-stone-900 text-amber-50 px-10 py-4 text-[10px] tracking-[0.3em] uppercase font-semibold overflow-hidden transition-all duration-500 hover:pl-12 hover:pr-8 shadow-xl hover:bg-stone-950"
              >
                <span className="relative z-10">Explore Collection</span>
                <ArrowRight size={13} className="relative z-10 transition-transform duration-300 group-hover:translate-x-2 text-amber-400" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-amber-700 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
              </button>
              <div className="w-12 h-px bg-amber-600/40 mt-8" />
            </div>

          </div>
        </div>
      </div>

      {/* Component Level Scope CSS */}
      <style jsx>{`
        .about-premium-scope .dynamic-fade-in {
          animation: aboutScopeFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes aboutScopeFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .py-4\\.5 {
          padding-top: 1.125rem;
          padding-bottom: 1.125rem;
        }
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}