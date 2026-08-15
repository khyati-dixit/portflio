import React from "react";
import { motion } from "framer-motion";
import { Globe2, Trophy, ArrowRight, Quote } from "lucide-react";
import GlassCard from "../ui/GlassCard.jsx";
import AnimatedCounter from "../ui/AnimatedCounter.jsx";
import { useTheme } from "../../context/ThemeContext";

const STATS = [
  { target: 6, suffix: "+", label: "Years experience" },
  { target: 3, suffix: "", label: "Engineering teams" },
  { target: 1, suffix: "", label: "Hackathon win" },
];

const SKILLS = [
  "React & Next.js",
  "Design systems",
  "Performance tuning",
  "CI/CD pipelines",
  "Agile leadership",
  "Accessibility",
];

const CAREER = [
  { company: "Cybage Software", note: "Current" },
  { company: "Publicis Groupe", note: "Prior" },
  { company: "Value Coders", note: "Prior" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const rise = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] },
  },
};
const lineDraw = {
  hidden: { scaleY: 0 },
  show: {
    scaleY: 1,
    transition: { duration: 0.9, ease: [0.2, 0.7, 0.2, 1], delay: 0.3 },
  },
};

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Theme-aware tokens — the old bg-[#FBF6E8] cards and text-primary/muted
  // classes were hardcoded for the light palette and lost contrast/blended
  // badly against the dark background.
  const cardBg = isDark ? "rgba(255,255,255,0.04)" : "#FBF6E8";
  const cardBorder = isDark ? "rgba(247,241,220,0.12)" : "var(--border)";
  const textStrong = isDark ? "#F7F1DC" : "var(--primary)";
  const textSecondary = isDark ? "#E8C87A" : "var(--secondary)";
  const textMuted = isDark ? "rgba(247,241,220,0.6)" : "var(--text-muted)";
  const dividerColor = isDark ? "rgba(247,241,220,0.14)" : "var(--border)";
  const pillHoverBg = isDark ? "rgba(247,241,220,0.08)" : "rgba(0,0,0,0.04)";
  const iconBgSecondary = isDark
    ? "rgba(232,200,122,0.16)"
    : "var(--secondary)/20";
  const iconBgAccent = isDark ? "rgba(255,184,35,0.18)" : "var(--accent)/20";

  return (
    <section id="about" className="relative py-28 md:py-32 overflow-hidden">
      <div className="absolute w-[320px] h-[320px] rounded-full bg-secondary/20 blur-[90px] -top-10 -left-24 pointer-events-none" />
      <div className="absolute w-[280px] h-[280px] rounded-full bg-accent/20 blur-[90px] bottom-0 -right-16 pointer-events-none" />

      <div className="max-w-[1180px] mx-auto px-8 grid grid-cols-12 gap-y-14 lg:gap-x-16 relative">
        {/* LEFT — narrative */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="col-span-12 lg:col-span-7"
        >
          <motion.span
            variants={rise}
            style={{ color: textSecondary }}
            className="inline-flex items-center gap-2.5 font-mono text-[12.5px] tracking-[0.14em] uppercase mb-5 before:content-[''] before:w-5.5 before:h-px before:bg-accent"
          >
            About
          </motion.span>

          <motion.h2
            variants={rise}
            style={{ textWrap: "balance", color: textStrong }}
            className="font-display text-[clamp(28px,3.6vw,42px)] mb-7 leading-[1.15]"
          >
            Building interfaces that hold up at{" "}
            <span className="text-accent italic font-medium">enterprise</span>{" "}
            scale.
          </motion.h2>

          <motion.p
            variants={rise}
            style={{ color: textMuted }}
            className="text-base leading-relaxed mb-8 max-w-[520px]"
          >
            I&apos;m a{" "}
            <strong style={{ color: textStrong }} className="font-semibold">
              Senior Software Developer
            </strong>{" "}
            with six-plus years building enterprise web applications in React
            and Next.js. My work sits at the intersection of clean architecture,
            performance and product craft.
          </motion.p>

          <motion.div
            variants={rise}
            className="relative pl-7 my-9 max-w-[500px]"
          >
            <Quote className="w-5 h-5 text-accent absolute left-0 top-1" />
            <blockquote
              style={{ color: textStrong }}
              className="font-display italic text-[19px] sm:text-[21px] leading-snug"
            >
              I care as much about the render tree as I do about the person
              waiting on it.
            </blockquote>
          </motion.div>

          <motion.p
            variants={rise}
            style={{ color: textMuted }}
            className="text-base leading-relaxed mb-9 max-w-[520px]"
          >
            Across roles at Cybage Software, Publicis Groupe and Value Coders,
            I&apos;ve led release coordination, migrated CI/CD pipelines and
            mentored teams through Agile delivery, keeping the everyday focus on
            interfaces that are fast, accessible and easy to maintain.
          </motion.p>

          <motion.a
            variants={rise}
            whileHover={{ x: 4 }}
            href="#experience"
            style={{ color: textStrong }}
            className="inline-flex items-center gap-2 font-mono text-[12.5px] border-b border-accent pb-0.5"
          >
            See the full experience timeline{" "}
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.a>
        </motion.div>

        {/* RIGHT — facts rail */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="col-span-12 lg:col-span-5 flex flex-col gap-5"
        >
          {/* Stat strip */}
          <motion.div
            variants={rise}
            style={{ background: cardBg, borderColor: cardBorder }}
            className="rounded-card shadow-soft-sm border border-t-[3px] border-t-accent p-6 flex items-stretch backdrop-blur-md"
          >
            {STATS.map((s, i) => (
              <React.Fragment key={s.label}>
                <div className="flex-1 text-center">
                  <div
                    style={{ color: textStrong }}
                    className="font-display text-[28px] sm:text-[32px] font-bold leading-none flex items-baseline justify-center gap-0.5"
                  >
                    <AnimatedCounter target={s.target} suffix={s.suffix} />
                  </div>
                  <div
                    style={{ color: textMuted }}
                    className="font-mono text-[10px] mt-2 tracking-wide uppercase leading-snug"
                  >
                    {s.label}
                  </div>
                </div>
                {i < STATS.length - 1 && (
                  <div
                    style={{ background: dividerColor }}
                    className="w-px mx-2"
                  />
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Focus + recognition */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div variants={rise} whileHover={{ y: -4 }}>
              <GlassCard className="h-full p-5 flex flex-col gap-3">
                <div
                  style={{ background: iconBgSecondary }}
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                >
                  <Globe2
                    className="w-[16px] h-[16px]"
                    style={{ color: textStrong }}
                  />
                </div>
                <div>
                  <p
                    style={{ color: textStrong }}
                    className="text-[13.5px] font-semibold mb-1 leading-snug"
                  >
                    Travel &amp; Hospitality
                  </p>
                  <p
                    style={{ color: textMuted }}
                    className="text-[12px] leading-snug"
                  >
                    Booking flows, itineraries, guest platforms
                  </p>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div variants={rise} whileHover={{ y: -4 }}>
              <GlassCard className="h-full p-5 flex flex-col gap-3">
                <div
                  style={{ background: iconBgAccent }}
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                >
                  <Trophy
                    className="w-[16px] h-[16px]"
                    style={{ color: textStrong }}
                  />
                </div>
                <div>
                  <p
                    style={{ color: textStrong }}
                    className="text-[13.5px] font-semibold mb-1 leading-snug"
                  >
                    Agentic AI Day
                  </p>
                  <p
                    style={{ color: textMuted }}
                    className="text-[12px] leading-snug"
                  >
                    Google Cloud hackathon placement
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </div>

          {/* Skill pills */}
          <motion.div
            variants={rise}
            style={{ background: cardBg, borderColor: cardBorder }}
            className="rounded-card shadow-soft-sm border p-6 backdrop-blur-md"
          >
            <p
              style={{ color: textMuted }}
              className="font-mono text-[10.5px] tracking-[0.14em] uppercase mb-4"
            >
              Core strengths
            </p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ y: -2, backgroundColor: pillHoverBg }}
                  style={{ borderColor: cardBorder, color: textStrong }}
                  className="px-3.5 py-1.5 rounded-full border text-[12.5px] font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Career timeline */}
          <motion.div
            variants={rise}
            style={{ background: cardBg, borderColor: cardBorder }}
            className="rounded-card shadow-soft-sm border p-6 backdrop-blur-md"
          >
            <p
              style={{ color: textMuted }}
              className="font-mono text-[10.5px] tracking-[0.14em] uppercase mb-5"
            >
              Career path
            </p>
            <div className="relative pl-6">
              <div
                style={{ background: dividerColor }}
                className="absolute left-[3px] top-1 bottom-1 w-px overflow-hidden"
              >
                <motion.div
                  variants={lineDraw}
                  style={{ transformOrigin: "top" }}
                  className="w-full h-full bg-accent"
                />
              </div>
              <div className="flex flex-col gap-5">
                {CAREER.map((c) => (
                  <div key={c.company} className="relative">
                    <span
                      style={{
                        boxShadow: `0 0 0 4px ${isDark ? "#121919" : "var(--surface)"}`,
                      }}
                      className="absolute -left-[27px] top-1.5 w-2 h-2 rounded-full bg-accent"
                    />
                    <p
                      style={{ color: textStrong }}
                      className="text-[14px] font-semibold leading-tight"
                    >
                      {c.company}
                    </p>
                    <p
                      style={{ color: textMuted }}
                      className="font-mono text-[10.5px] uppercase tracking-wide mt-0.5"
                    >
                      {c.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
