import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Wrench, Sparkles, ArrowUpRight } from "lucide-react";
import GlassCard from "../ui/GlassCard";
import { useTheme } from "../../context/ThemeContext";

const frontend = [
  "React",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Redux Toolkit",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
];
const engineering = [
  "REST APIs",
  "Performance",
  "Accessibility",
  "Responsive UI",
  "Unit Testing",
  "CI/CD",
];
const tools = ["Git", "GitHub", "Vite", "VS Code", "Framer Motion", "Figma"];
const learning = [
  "Copilot Studio",
  "Azure AI",
  "Agentic AI",
  "Prompt Engineering",
];
const featured = [
  "React",
  "JavaScript",
  "Redux",
  "Tailwind",
  "Git",
  "REST APIs",
  "Vite",
  "Framer Motion",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Theme-aware tokens — .skill-pill / .skill-row / .featured-pill and the
  // text-heading/text-body/text-primary classes are tuned for the light
  // palette, so pills washed out pale and text lost contrast in dark mode.
  const textStrong = isDark ? "#F7F1DC" : "var(--primary)";
  const textMuted = isDark
    ? "rgba(247,241,220,0.62)"
    : "var(--text-body, var(--text-muted))";
  const iconBoxBg = isDark ? "rgba(247,241,220,0.08)" : "var(--primary)/10";
  const iconBoxBgSecondary = isDark
    ? "rgba(232,200,122,0.14)"
    : "var(--secondary)/15";
  const iconBoxBgAccent = isDark ? "rgba(255,184,35,0.16)" : "var(--accent)/20";
  const pillBg = isDark ? "rgba(247,241,220,0.06)" : "#FBF6E8";
  const pillBorder = isDark ? "rgba(247,241,220,0.14)" : "var(--border)";
  const rowBg = isDark ? "rgba(247,241,220,0.04)" : "rgba(0,0,0,0.02)";
  const badgeBg = isDark ? "rgba(247,241,220,0.06)" : "rgba(255,255,255,0.6)";
  const badgeBorder = isDark ? "rgba(247,241,220,0.16)" : "var(--primary)/15";
  const ringBorder = isDark ? "rgba(247,241,220,0.12)" : "var(--primary)/10";

  return (
    <section id="skills" className="relative overflow-hidden py-24 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 70, 0], y: [0, -50, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-primary/10 blur-[130px]"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-accent/15 blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <motion.span
            variants={item}
            style={{
              background: badgeBg,
              borderColor: badgeBorder,
              color: textStrong,
            }}
            className="inline-flex items-center gap-2 rounded-full border backdrop-blur-xl px-5 py-2 text-xs tracking-[0.28em] uppercase"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Skills & Expertise
          </motion.span>

          <motion.h2
            variants={item}
            style={{ color: textStrong }}
            className="mt-8 font-display text-[clamp(42px,6vw,72px)] leading-[1.05]"
          >
            Technology that powers
            <br />
            <span className="italic text-accent">
              beautiful digital products.
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            style={{ color: textMuted }}
            className="mt-8 max-w-2xl text-lg leading-9"
          >
            From enterprise frontend engineering to modern tooling, I build
            scalable applications focused on performance, accessibility and
            exceptional user experience.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-6 mt-16"
        >
          {/* Frontend */}
          <motion.div variants={item}>
            <GlassCard className="group h-full p-8 rounded-[32px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(18,93,83,.15)]">
              <div className="flex items-center gap-4 mb-8">
                <div
                  style={{ background: iconBoxBg }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition"
                >
                  <Code2 className="w-7 h-7" style={{ color: textStrong }} />
                </div>
                <div>
                  <p
                    style={{ color: textStrong }}
                    className="uppercase tracking-[0.25em] text-xs"
                  >
                    Interface
                  </p>
                  <h3
                    style={{ color: textStrong }}
                    className="font-display text-3xl"
                  >
                    Frontend
                  </h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {frontend.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ y: -4, scale: 1.05 }}
                    style={{
                      background: pillBg,
                      borderColor: pillBorder,
                      color: textStrong,
                    }}
                    className="px-4 py-2.5 rounded-full border text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Engineering */}
          <motion.div variants={item}>
            <GlassCard className="group h-full p-8 rounded-[32px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(18,93,83,.15)]">
              <div className="flex items-center gap-4 mb-8">
                <div
                  style={{ background: iconBoxBgSecondary }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition"
                >
                  <Cpu className="w-7 h-7" style={{ color: textStrong }} />
                </div>
                <div>
                  <p
                    style={{ color: textStrong }}
                    className="uppercase tracking-[0.25em] text-xs"
                  >
                    Engineering
                  </p>
                  <h3
                    style={{ color: textStrong }}
                    className="font-display text-3xl"
                  >
                    Architecture
                  </h3>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {engineering.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ x: 5 }}
                    style={{ background: rowBg, color: textStrong }}
                    className="flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    {skill}
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Tools */}
          <motion.div variants={item}>
            <GlassCard className="group h-full p-8 rounded-[32px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(18,93,83,.15)]">
              <div className="flex items-center gap-4 mb-8">
                <div
                  style={{ background: iconBoxBg }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition"
                >
                  <Wrench className="w-7 h-7" style={{ color: textStrong }} />
                </div>
                <div>
                  <p
                    style={{ color: textStrong }}
                    className="uppercase tracking-[0.25em] text-xs"
                  >
                    Workflow
                  </p>
                  <h3
                    style={{ color: textStrong }}
                    className="font-display text-3xl"
                  >
                    Tools
                  </h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool}
                    whileHover={{
                      y: -8,
                      scale: 1.06,
                      rotate: index % 2 === 0 ? 2 : -2,
                    }}
                    transition={{ type: "spring", stiffness: 320 }}
                    style={{
                      background: pillBg,
                      borderColor: pillBorder,
                      color: textStrong,
                    }}
                    className="flex items-center gap-2.5 rounded-full border px-5 py-3 text-sm font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0" />
                    {tool}
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Learning */}
          <motion.div variants={item}>
            <GlassCard className="group relative overflow-hidden h-full p-8 rounded-[32px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(18,93,83,.15)]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                style={{ borderColor: ringBorder }}
                className="absolute -right-16 -top-16 w-48 h-48 rounded-full border"
              />
              <div className="flex items-center gap-4 mb-8">
                <div
                  style={{ background: iconBoxBgAccent }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                >
                  <Sparkles className="w-7 h-7" style={{ color: textStrong }} />
                </div>
                <div>
                  <p
                    style={{ color: textStrong }}
                    className="uppercase tracking-[0.25em] text-xs"
                  >
                    Exploring
                  </p>
                  <h3
                    style={{ color: textStrong }}
                    className="font-display text-3xl"
                  >
                    Currently Learning
                  </h3>
                </div>
              </div>
              <div className="space-y-4">
                {learning.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ x: 8 }}
                    style={{ borderColor: ringBorder }}
                    className="flex items-center justify-between rounded-2xl border px-5 py-4"
                  >
                    <span style={{ color: textStrong }} className="font-medium">
                      {skill}
                    </span>
                    <ArrowUpRight
                      className="w-4 h-4"
                      style={{ color: textStrong }}
                    />
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>

        {/* Featured Technologies */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20"
        >
          <motion.div
            variants={item}
            className="flex items-center justify-between flex-wrap gap-4 mb-10"
          >
            <div>
              <p
                style={{ color: textStrong }}
                className="uppercase tracking-[0.25em] text-xs mb-2"
              >
                Daily Stack
              </p>
              <h3
                style={{ color: textStrong }}
                className="font-display text-4xl"
              >
                Featured Technologies
              </h3>
            </div>
            <div
              style={{
                background: `linear-gradient(to right, ${isDark ? "rgba(247,241,220,0.25)" : "var(--primary)"}, transparent)`,
              }}
              className="h-px flex-1 ml-8 hidden lg:block"
            />
          </motion.div>

          <motion.div variants={container} className="flex flex-wrap gap-4">
            {featured.map((skill, index) => (
              <motion.div
                key={skill}
                variants={item}
                whileHover={{
                  y: -8,
                  scale: 1.06,
                  rotate: index % 2 === 0 ? 2 : -2,
                }}
                transition={{ type: "spring", stiffness: 320 }}
                style={{
                  background: pillBg,
                  borderColor: pillBorder,
                  color: textStrong,
                }}
                className="flex items-center gap-2.5 rounded-full border px-5 py-3 text-sm font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0" />
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
