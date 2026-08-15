import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, ArrowRight, Send } from "lucide-react";
import GlassCard from "../ui/GlassCard.jsx";
import { useTheme } from "../../context/ThemeContext";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -20 },
  show: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.1 + i * 0.1,
      ease: [0.2, 0.7, 0.2, 1],
    },
  }),
};

const CONTACT_INFO = [
  { icon: Mail, label: "EMAIL", value: "khyatidxt@gamil.com" },
  {
    icon: Linkedin,
    label: "LINKEDIN",
    value: "linkedin.com/in/khyati-dixit-607b28199/",
  },
  { icon: MapPin, label: "LOCATION", value: "India · Remote-friendly" },
];

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Theme-aware tokens — text-primary/muted and the bg-accent/20 icon
  // circles are tuned for the light palette and lose contrast on dark.
  const textStrong = isDark ? "#F7F1DC" : "var(--primary)";
  const textSecondary = isDark ? "#E8C87A" : "var(--secondary)";
  const textMuted = isDark ? "rgba(247,241,220,0.62)" : "var(--text-muted)";
  const iconBg = isDark ? "rgba(255,184,35,0.16)" : "var(--accent)/20";
  const inputBg = isDark ? "rgba(247,241,220,0.06)" : "var(--surface)";
  const inputBorder = isDark ? "rgba(247,241,220,0.16)" : "var(--border)";
  const inputText = isDark ? "#F7F1DC" : "var(--text)";

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = form.subject || "Portfolio inquiry";
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:khyatidxt@gamil.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="pt-16 pb-28 md:pt-20 md:pb-32">
      <div className="max-w-[1180px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span
            style={{ color: textSecondary }}
            className="inline-flex items-center gap-2.5 font-mono text-[12.5px] tracking-[0.14em] uppercase mb-4.5 before:content-[''] before:w-5.5 before:h-px before:bg-accent"
          >
            Contact
          </span>
          <h2
            style={{ color: textStrong }}
            className="font-display text-[clamp(28px,4vw,44px)] mb-6 leading-tight tracking-tight"
          >
            Let&apos;s talk about your{" "}
            <span className="text-accent italic font-medium">next build</span>.
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <GlassCard
              style={{ color: textStrong }}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full mb-7 font-mono text-[12.5px]"
            >
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3f9d4c] opacity-75" />
                <span className="relative inline-flex rounded-full w-2 h-2 bg-[#3f9d4c]" />
              </span>
              Open to new opportunities
            </GlassCard>
          </motion.div>

          <p style={{ color: textMuted }} className="text-base leading-relaxed">
            Reach out for full-time roles, contract work, or just to talk
            frontend architecture.
          </p>

          <div className="grid gap-3.5 mt-9">
            {CONTACT_INFO.map((c, i) => (
              <motion.div
                key={c.label}
                custom={i}
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <GlassCard className="flex items-center gap-4 px-5 py-5">
                  <div
                    style={{ background: iconBg }}
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <c.icon
                      className="w-[18px] h-[18px]"
                      style={{ color: textStrong }}
                    />
                  </div>
                  <span className="min-w-0">
                    <span
                      style={{ color: textMuted }}
                      className="block font-mono text-[11px] tracking-[0.1em] mb-1"
                    >
                      {c.label}
                    </span>
                    <span
                      style={{ color: textStrong }}
                      className="block text-[15px] font-medium truncate"
                    >
                      {c.value}
                    </span>
                  </span>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.15 }}
          onSubmit={handleSubmit}
          className="glass-card p-9"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="name"
                style={{ color: textMuted }}
                className="block font-mono text-[11.5px] mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                style={{
                  background: inputBg,
                  borderColor: inputBorder,
                  color: inputText,
                }}
                className="w-full px-4 py-3.5 rounded-xl border focus:border-accent focus:ring-4 focus:ring-[var(--ring)] outline-none transition-all duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                style={{ color: textMuted }}
                className="block font-mono text-[11.5px] mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                style={{
                  background: inputBg,
                  borderColor: inputBorder,
                  color: inputText,
                }}
                className="w-full px-4 py-3.5 rounded-xl border focus:border-accent focus:ring-4 focus:ring-[var(--ring)] outline-none transition-all duration-300"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="subject"
              style={{ color: textMuted }}
              className="block font-mono text-[11.5px] mb-2"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              style={{
                background: inputBg,
                borderColor: inputBorder,
                color: inputText,
              }}
              className="w-full px-4 py-3.5 rounded-xl border focus:border-accent focus:ring-4 focus:ring-[var(--ring)] outline-none transition-all duration-300"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              style={{ color: textMuted }}
              className="block font-mono text-[11.5px] mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about the role or project..."
              rows={5}
              style={{
                background: inputBg,
                borderColor: inputBorder,
                color: inputText,
              }}
              className="w-full px-4 py-3.5 rounded-xl border focus:border-accent focus:ring-4 focus:ring-[var(--ring)] outline-none transition-all duration-300 resize-y"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{
              y: -3,
              boxShadow: "0 12px 24px -8px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-full flex items-center justify-center gap-2.5 bg-accent text-[#2b1c00] font-semibold text-[14.5px] py-4 rounded-full"
          >
            Send message <ArrowRight className="w-4 h-4" />
          </motion.button>
          <p
            style={{ color: textMuted }}
            className="text-[12.5px] mt-3.5 leading-relaxed"
          >
            Submitting opens your email client with this message pre-filled —
            nothing is sent from this page.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
