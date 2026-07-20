import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, PenTool, Brush, Feather, ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  // Mouse position state tracking
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Framer Motion values for 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for lag-free 3D tilt
  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Text content
  const textLines = [
    { text: "WHERE", highlight: false },
    { text: "CREATIVITY", highlight: false },
    { text: "MEETS", highlight: false },
    { text: "PERFECTION.", highlight: true }
  ];

  return (
    <section 
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full overflow-hidden bg-[#050505] font-['Inter'] flex items-center"
    >
      {/* MASH PATTERN BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.18]" style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 30px,
              rgba(255,255,255,0.15) 30px,
              rgba(255,255,255,0.15) 31px,
              transparent 31px,
              transparent 60px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 30px,
              rgb(var(--c-secondary-500)/0.2) 30px,
              rgb(var(--c-secondary-500)/0.2) 31px,
              transparent 31px,
              transparent 60px
            )
          `,
          backgroundSize: '80px 80px, 80px 80px'
        }} />

        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 1.5px, transparent 1.5px),
            radial-gradient(circle at 50% 50%, rgb(var(--c-primary-500)/0.25) 1px, transparent 1px)
          `,
          backgroundSize: '35px 35px, 45px 45px',
          backgroundPosition: '0 0, 20px 20px'
        }} />

        <div className="absolute inset-0 opacity-[0.12]" style={{
          backgroundImage: `
            linear-gradient(60deg, transparent 70%, rgba(255,255,255,0.12) 70%, rgba(255,255,255,0.12) 73%, transparent 73%),
            linear-gradient(-60deg, transparent 70%, rgb(var(--c-secondary-500)/0.15) 70%, rgb(var(--c-secondary-500)/0.15) 73%, transparent 73%),
            linear-gradient(0deg, transparent 80%, rgba(255,255,255,0.08) 80%, rgba(255,255,255,0.08) 83%, transparent 83%),
            linear-gradient(90deg, transparent 80%, rgb(var(--c-primary-500)/0.12) 80%, rgb(var(--c-primary-500)/0.12) 83%, transparent 83%)
          `,
          backgroundSize: '50px 50px, 50px 50px, 25px 25px, 25px 25px'
        }} />

        <div className="absolute inset-0 opacity-[0.1]" style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              rgba(255,255,255,0.1) 20px,
              rgba(255,255,255,0.1) 21px,
              transparent 21px,
              transparent 40px
            )
          `,
          backgroundSize: '40px 40px'
        }} />

        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `
            radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.08) 0%, transparent 60%),
            radial-gradient(ellipse at 70% 50%, rgb(var(--c-secondary-500)/0.1) 0%, transparent 60%)
          `,
          backgroundSize: '200px 200px, 200px 200px',
          backgroundPosition: '0 0, 100px 0'
        }} />
      </div>

      {/* Background Aurora Effect */}
      <DynamicBackground mouseX={mousePosition.x} mouseY={mousePosition.y} />

      <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-6 pt-16 pb-8 lg:pt-20 lg:pb-0 lg:flex-row">
        
        {/* Left Column: Typography & Content */}
        <div className="flex w-full flex-col items-start justify-center lg:w-1/2 lg:pr-12">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={controls}
            variants={{
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, ease: 'easeOut' }
              }
            }}
            className="group mb-6 flex items-center gap-2.5 rounded-full border border-white/10 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 px-5 py-2 backdrop-blur-md"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="h-4 w-4 text-purple-400" />
            </motion.div>
            <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-xs font-semibold uppercase tracking-widest text-transparent">
              CONTEMPORARY ARTIST
            </span>
          </motion.div>

          {/* Heading */}
          <div className="mb-4 space-y-1 w-full">
            {textLines.map((line, index) => (
              <div key={index} className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%", rotate: 2 }}
                  animate={controls}
                  variants={{
                    visible: { 
                      y: 0, 
                      rotate: 0,
                      transition: { 
                        duration: 1, 
                        delay: index * 0.12,
                        ease: [0.16, 1, 0.3, 1] 
                      }
                    }
                  }}
                  className={`text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] leading-none ${
                    line.highlight 
                      ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent'
                      : 'text-white'
                  }`}
                >
                  {line.text}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.8, delay: 0.6, ease: 'easeOut' }
              }
            }}
            className="mb-8 max-w-lg text-base text-white/60 sm:text-lg leading-relaxed"
          >
            Transforming ideas into extraordinary works of art through innovation, craftsmanship, and artistic excellence.
          </motion.p>

          {/* Updated Responsive Row Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.8, delay: 0.8, ease: 'easeOut' }
              }
            }}
            className="flex flex-row items-center gap-3 w-full sm:w-auto"
          >
            {/* Explore Gallery Button */}
            <motion.button
              onClick={() => scrollToSection("portfolio")}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 0 40px rgb(var(--c-primary-500)/0.3)'
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-4 py-3.5 sm:px-8 sm:py-4 font-semibold text-white text-sm sm:text-base shadow-lg shadow-purple-500/10 transition-all duration-300 flex flex-1 sm:flex-none items-center justify-center cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                Explore Gallery
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.button>

            {/* View Profile Button */}
            <motion.button
              onClick={() => scrollToSection("about")}
              whileHover={{ 
                scale: 1.03,
                borderColor: 'rgba(255,255,255,0.25)',
                backgroundColor: 'rgba(255,255,255,0.08)'
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 sm:px-8 sm:py-4 font-semibold text-white text-sm sm:text-base backdrop-blur-sm transition-all duration-300 flex flex-1 sm:flex-none items-center justify-center cursor-pointer whitespace-nowrap"
            >
              <span className="relative z-10">View Profile</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Right Column: Interactive 3D Art Frame */}
        <div className="relative mt-20 flex w-full items-center justify-center lg:mt-0 lg:w-1/2 px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={controls}
            variants={{
              visible: { 
                opacity: 1, 
                scale: 1,
                rotateY: 0,
                transition: { duration: 1.2, delay: 0.3, ease: 'easeOut' }
              }
            }}
            className="relative"
            style={{ perspective: '1200px' }}
          >
            {/* Orbital Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="absolute h-[320px] w-[320px] md:h-[468px] md:w-[468px] rounded-full border border-purple-500/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute h-[260px] w-[260px] md:h-[378px] md:w-[378px] rounded-full border border-cyan-500/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute h-[300px] w-[300px] md:h-[432px] md:w-[432px] rounded-full border border-dashed border-pink-500/5"
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* Interactive 3D Card Frame */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative transition-all duration-200 ease-out"
            >
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-3 backdrop-blur-md">
                <div className="relative h-[280px] w-[220px] overflow-hidden rounded-2xl sm:h-[360px] sm:w-[288px] md:h-[450px] md:w-[360px]">
                  <img
                    src="https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?w=800&auto=format&fit=crop&q=80"
                    alt="Artistic Creation"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-cyan-500/10" />
                  <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_60px_rgb(var(--c-primary-500)/0.15)]" />
                </div>
              </div>

              {/* Updated Floating Info Cards - Responsive coordinates prevent overflow */}
              <FloatingInfoCard
                className="absolute -left-4 top-4 sm:-left-10 sm:top-12 md:-left-14 md:top-16"
                delay={0.8}
                icon={PenTool}
                title="Artworks"
                value="200+"
                gradient="from-purple-500 to-pink-500"
              />
              
              <FloatingInfoCard
                className="absolute -right-4 top-1/3 sm:-right-10 md:-right-14"
                delay={1.0}
                icon={Brush}
                title="Projects"
                value="150+"
                gradient="from-cyan-500 to-blue-500"
              />
              
              <FloatingInfoCard
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 sm:-bottom-6 sm:left-1/4 sm:translate-x-0"
                delay={1.2}
                icon={Feather}
                title="Clients"
                value="80+"
                gradient="from-pink-500 to-purple-500"
              />
            </motion.div>

            {/* Decorative Orbs */}
            <FloatingOrb className="absolute -left-10 -top-10 sm:-left-20 sm:-top-20 h-24 w-24 sm:h-36 sm:w-36 bg-purple-500/10" delay={0.5} />
            <FloatingOrb className="absolute -right-10 bottom-8 sm:-right-20 sm:bottom-16 h-20 w-20 sm:h-32 sm:w-32 bg-cyan-500/10" delay={1.5} />
          </motion.div>
        </div>
      </div>

      {/* Scroll Progress Ring */}
      <ScrollIndicator />
    </section>
  );
};

/* Helper Components */

const DynamicBackground = ({ mouseX, mouseY }) => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Animated Aurora Glows */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgb(var(--c-primary-500)/0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 70%, rgb(var(--c-secondary-500)/0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(236,72,153,0.1) 0%, transparent 60%)',
            'radial-gradient(circle at 20% 30%, rgb(var(--c-primary-500)/0.2) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Interactive Cursor Spotlight */}
      <motion.div
        className="absolute h-[600px] w-[600px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgb(var(--c-primary-500)/0.08), transparent 60%)',
          left: mouseX - 300,
          top: mouseY - 300,
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Grid */}
      <div className="absolute inset-0" style={{ perspective: '1000px' }}>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px',
      }} />

      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.15, 0.6, 0.15],
          }}
          transition={{
            duration: 6 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

const FloatingInfoCard = ({ className, delay, icon: Icon, title, value, gradient }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      whileHover={{ 
        scale: 1.05,
        borderColor: 'rgba(255,255,255,0.25)',
        boxShadow: '0 15px 35px rgba(255,255,255,0.05)'
      }}
      style={{ transformStyle: 'preserve-3d', translateZ: '50px' }}
      className={`min-w-[95px] sm:min-w-[120px] rounded-xl border border-white/10 bg-black/75 p-2.5 sm:p-4 backdrop-blur-md transition-colors duration-300 ${className}`}
    >
      <div className="flex items-center gap-1.5 sm:gap-2">
        <div className={`rounded-lg bg-gradient-to-br ${gradient} p-1 sm:p-1.5`}>
          <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white" />
        </div>
        <p className="text-[8px] sm:text-[10px] font-bold tracking-wider uppercase text-white/40">{title}</p>
      </div>
      <p className="mt-1 text-sm sm:text-lg font-bold text-white">{value}</p>
    </motion.div>
  );
};

const FloatingOrb = ({ className, delay }) => {
  return (
    <motion.div
      className={`rounded-full blur-3xl ${className}`}
      animate={{
        y: [0, -15, 0],
        x: [0, 10, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  );
};

const ScrollIndicator = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2"
    >
      <div className="relative flex flex-col items-center gap-1.5">
        <svg className="h-8 w-8 -rotate-90">
          <circle
            cx="16"
            cy="16"
            r="13"
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="2"
          />
          <circle
            cx="16"
            cy="16"
            r="13"
            fill="none"
            stroke="url(#scrollGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={81.6} 
            strokeDashoffset={81.6 - (81.6 * progress) / 100}
          />
          <defs>
            <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(var(--c-primary-500))" />
              <stop offset="100%" stopColor="rgb(var(--c-secondary-500))" />
            </linearGradient>
          </defs>
        </svg>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-4 w-4 text-white/40" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;