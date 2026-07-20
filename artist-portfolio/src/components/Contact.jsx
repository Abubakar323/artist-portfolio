import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Instagram, Send, CheckCircle } from "lucide-react";
import { artistInfo } from "../data/portfolioData";

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    // Simulated send — wire up to EmailJS or Formspree for real email
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 1500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-28 bg-ink-light overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="reveal"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease" }}
          >
            <p className="font-body text-gold tracking-[0.4em] text-xs uppercase mb-3">
              ✦ Let's Create Together ✦
            </p>
          </div>
          <div
            className="reveal"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease" }}
          >
            <h2 className="font-display text-5xl md:text-6xl font-light text-parchment">
              Get In Touch
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: info */}
          <div className="flex flex-col gap-8">
            <div
              className="reveal"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease" }}
            >
              <p className="font-body text-parchment/60 leading-relaxed text-[15px]">
                Interested in commissioning a piece or have questions about my work?
                I'd love to hear from you. Fill out the form or reach out directly.
              </p>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-5">
              {[
                { icon: Mail, label: "Email", value: artistInfo.email, href: `mailto:${artistInfo.email}` },
                { icon: Phone, label: "Phone / WhatsApp", value: artistInfo.phone, href: `https://wa.me/${artistInfo.phone.replace(/\s+/g, "").replace("+", "")}` },
                { icon: MapPin, label: "Location", value: artistInfo.location, href: null },
                { icon: Instagram, label: "Instagram", value: "@yourhandle", href: artistInfo.instagram },
              ].map((item, i) => (
                <div
                  key={i}
                  className="reveal flex items-start gap-4 group"
                  style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease" }}
                >
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                    <item.icon size={16} className="text-gold group-hover:text-ink transition-colors" />
                  </div>
                  <div>
                    <p className="font-body text-parchment/30 text-xs tracking-[0.2em] uppercase mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-body text-parchment/80 text-sm hover:text-gold transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-body text-parchment/80 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Arabic quote */}
            <div
              className="reveal border-l-2 border-gold pl-6 mt-4"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease" }}
            >

              <p className="font-body text-parchment/30 text-xs italic tracking-wide">
                "Art is the soul of life"
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div
            className="reveal"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease" }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-body text-xs tracking-[0.2em] uppercase text-parchment/40">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="bg-transparent border border-parchment/15 px-4 py-3 text-parchment font-body text-sm focus:outline-none focus:border-gold transition-colors"
                    placeholder="Full name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-body text-xs tracking-[0.2em] uppercase text-parchment/40">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="bg-transparent border border-parchment/15 px-4 py-3 text-parchment font-body text-sm focus:outline-none focus:border-gold transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-body text-xs tracking-[0.2em] uppercase text-parchment/40">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="bg-transparent border border-parchment/15 px-4 py-3 text-parchment font-body text-sm focus:outline-none focus:border-gold transition-colors"
                  placeholder="Commission, inquiry, collaboration..."
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-body text-xs tracking-[0.2em] uppercase text-parchment/40">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-transparent border border-parchment/15 px-4 py-3 text-parchment font-body text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Tell me about your project, the type of artwork you'd like, any references, size preferences..."
                />
              </div>

              <button
                type="submit"
                disabled={sending || sent}
                className={`flex items-center justify-center gap-3 py-4 text-xs tracking-[0.25em] uppercase font-body font-medium transition-all duration-300 mt-2 ${
                  sent
                    ? "bg-green-700 text-parchment"
                    : "bg-gold text-ink hover:bg-gold-light disabled:opacity-70"
                }`}
              >
                {sent ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : sending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={14} />
                    Send Message
                  </>
                )}
              </button>

              <p className="font-body text-parchment/25 text-xs text-center">
                I typically respond within 24–48 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
