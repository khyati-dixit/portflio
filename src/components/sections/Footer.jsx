import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight, ArrowUp } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const SOCIALS = [
  { href: "https://github.com/khyati-dixit", icon: Github, label: "GitHub" },
  {
    href: "https://linkedin.com/in/khyati-dixit-607b28199/",
    icon: Linkedin,
    label: "LinkedIn",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06, ease: [0.2, 0.7, 0.2, 1] },
  }),
};

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const year = new Date().getFullYear();

  // Theme-aware tokens — text-primary/border-[var(--border)]/bg-primary
  // are tuned for the light palette and nearly vanish on the dark footer.
  const textStrong = isDark ? "#F7F1DC" : "var(--primary)";
  const textMuted = isDark ? "rgba(247,241,220,0.6)" : "var(--text-muted)";
  const borderColor = isDark ? "rgba(247,241,220,0.18)" : "var(--border)";
  const backToTopBg = isDark ? "rgba(247,241,220,0.1)" : "var(--primary)";
  const backToTopText = isDark ? "#F7F1DC" : "#fbf6e3";

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer>
      {/* ---------- CTA banner ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
        className="relative max-w-[1180px] mx-8 xl:mx-auto rounded-[28px] px-6 sm:px-12 py-20 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0f2818 0%, #16351f 45%, #1c2e17 100%)",
          boxShadow: "0 30px 80px -20px rgba(0,0,0,0.5)",
        }}
      >
        {/* drifting glow orbs */}
        <motion.div
          className="absolute w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,184,35,0.28), transparent 65%)",
            top: "-15%",
            left: "-10%",
          }}
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[320px] h-[320px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,184,35,0.18), transparent 65%)",
            bottom: "-20%",
            right: "-5%",
          }}
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-[1] inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.14em] uppercase text-accent mb-5 px-3.5 py-1.5 rounded-full border border-[rgba(255,184,35,0.35)] bg-[rgba(255,184,35,0.08)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Let&apos;s build something
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-[1] font-display text-[clamp(30px,4.5vw,46px)] text-[#fbf6e3] mb-4.5 leading-tight tracking-tight"
        >
          Have a project{" "}
          <span className="text-accent italic font-medium">in mind</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="relative z-[1] text-[rgba(251,246,227,0.75)] mb-9 max-w-[440px] mx-auto leading-relaxed"
        >
          I&apos;m currently open to senior frontend roles and select contract
          engagements.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.26 }}
          whileHover={{
            y: -3,
            boxShadow: "0 16px 32px -10px rgba(255,184,35,0.5)",
          }}
          whileTap={{ scale: 0.97 }}
          className="relative z-[1] inline-flex items-center gap-2.5 bg-accent text-[#2b1c00] font-semibold text-[14.5px] px-7 py-4 rounded-full"
        >
          Start a conversation
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        </motion.a>
      </motion.div>

      {/* ---------- link row ---------- */}
      <div className="max-w-[1180px] mx-auto px-8 py-14 flex justify-between items-center flex-wrap gap-8">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ color: textStrong }}
          className="font-display font-bold text-[21px] tracking-tight"
        >
          Khyati<span className="text-accent">.</span>
        </motion.span>

        <nav className="flex gap-7 flex-wrap">
          {LINKS.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{ color: textMuted }}
              className="relative text-sm transition-colors duration-300 group"
              onMouseEnter={(e) => (e.currentTarget.style.color = textStrong)}
              onMouseLeave={(e) => (e.currentTarget.style.color = textMuted)}
            >
              {l.label}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        <div className="flex gap-3">
          {SOCIALS.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener"
              aria-label={s.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -4, rotate: -6 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              style={{ borderColor, color: textStrong }}
              className="w-[42px] h-[42px] rounded-full border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-[#2b1c00] transition-colors duration-300"
            >
              <s.icon className="w-[17px] h-[17px]" />
            </motion.a>
          ))}

          <motion.button
            onClick={scrollToTop}
            aria-label="Back to top"
            custom={SOCIALS.length}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            style={{ background: backToTopBg, color: backToTopText }}
            className="w-[42px] h-[42px] rounded-full flex items-center justify-center hover:bg-accent hover:text-[#2b1c00] transition-colors duration-300"
          >
            <ArrowUp className="w-[17px] h-[17px]" />
          </motion.button>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-8">
        <div style={{ background: borderColor }} className="h-px w-full mb-6" />
      </div>

      <p
        style={{ color: textMuted }}
        className="font-mono text-xs tracking-wide text-center pb-8"
      >
        © {year} Khyati Dixit. Built with React, Vite, Tailwind CSS &amp; Framer
        Motion.
      </p>
    </footer>
  );
}
