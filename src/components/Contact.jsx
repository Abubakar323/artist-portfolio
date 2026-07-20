import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Instagram, Send, CheckCircle, Loader2, X } from "lucide-react";
import { motion } from "framer-motion"; // Added Framer Motion
import { artistInfo } from "../data/portfolioData";

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch("https://formspree.io/f/xaqzwben", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (response.ok) {
        setSending(false);
        setForm({ name: "", email: "", subject: "", message: "" });
        showToast("Message sent successfully! ✨", "success");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      setSending(false);
      showToast("Something went wrong. Please try again.", "error");
    }
  };

  // Header Reveal Animation Configuration
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // Left Panel Animation (Slides from Left)
  const leftPanelVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }
    }
  };

  // Right Panel Animation (Slides from Right)
  const rightPanelVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
    }
  };

  return (
    <>
      {/* Toast Notification */}
      <div
        className={`fixed top-6 right-6 z-50 transition-all duration-500 transform ${
          toast.show
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <div
          className={`flex items-center gap-3 px-5 py-3 rounded-lg shadow-lg ${
            toast.type === "success"
              ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle size={20} />
          ) : (
            <X size={20} />
          )}
          <span className="font-body text-sm">{toast.message}</span>
        </div>
      </div>

      <section id="contact" ref={sectionRef} className="py-28 bg-[#050505] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headerVariants}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border rounded-full mb-4 border-purple-500/20 bg-transparent">
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-purple-400">
                ✦ Let's Create Together ✦
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-light text-white">
              Get In 
            <span className="text-gradient-purple"> Touch</span>

            </h2>
          </motion.div>

          {/* Grid Layout Container */}
          <div className="grid md:grid-cols-2 gap-16 overflow-hidden">
            
            {/* Left: Info Section - Slides in from Left */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={leftPanelVariants}
              className="flex flex-col gap-8"
            >
              <div>
                <p className="font-body text-white/60 leading-relaxed text-[15px]">
                  Interested in commissioning a piece or have questions about my work?
                  I'd love to hear from you. Fill out the form or reach out directly.
                </p>
              </div>

              {/* Contact Details */}
              <div className="flex flex-col gap-5">
                {[
                  { icon: Mail, label: "Email", value: artistInfo.email, href: `mailto:${artistInfo.email}` },
                  { icon: Phone, label: "Phone / WhatsApp", value: artistInfo.phone, href: `https://wa.me/${artistInfo.phone.replace(/\s+/g, "").replace("+", "")}` },
                  { icon: MapPin, label: "Location", value: artistInfo.location, href: null },
                  { icon: Instagram, label: "Instagram", value: "@yourhandle", href: artistInfo.instagram },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 border border-purple-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-400 group-hover:border-purple-500 transition-all duration-300">
                      <item.icon size={16} className="text-purple-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-body text-white/30 text-xs tracking-[0.2em] uppercase mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="font-body text-white/80 text-sm hover:text-purple-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-body text-white/80 text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Elegant Quote */}
              <div className="border-l-2 border-purple-500/40 pl-6 mt-4">
                <p className="font-body text-white/30 text-xs italic tracking-wide">
                  "Art is the soul of life"
                </p>
              </div>
            </motion.div>

            {/* Right: Form Section - Slides in from Right */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={rightPanelVariants}
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-body text-xs tracking-[0.2em] uppercase text-white/40">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      disabled={sending}
                      className="bg-transparent border border-white/15 px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Full name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-body text-xs tracking-[0.2em] uppercase text-white/40">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      disabled={sending}
                      className="bg-transparent border border-white/15 px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-body text-xs tracking-[0.2em] uppercase text-white/40">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    disabled={sending}
                    className="bg-transparent border border-white/15 px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Commission, inquiry, collaboration..."
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-body text-xs tracking-[0.2em] uppercase text-white/40">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    disabled={sending}
                    rows={6}
                    className="bg-transparent border border-white/15 px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-purple-500 transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell me about your project, the type of artwork you'd like, any references, size preferences..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="flex items-center justify-center gap-3 py-4 text-xs tracking-[0.25em] uppercase font-body font-medium transition-all duration-300 mt-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:from-purple-500 hover:to-cyan-400 disabled:opacity-70 disabled:cursor-not-allowed rounded-xl shadow-lg shadow-purple-500/20"
                >
                  {sending ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="font-body text-white/25 text-xs text-center">
                  I typically respond within 24–48 hours.
                </p>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}