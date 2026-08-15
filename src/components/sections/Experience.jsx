import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import GlassCard from "../ui/GlassCard.jsx";
import { useTheme } from "../../context/ThemeContext";

const ROLES = [
  {
    role: "Senior Software Developer",
    company: "Cybage Software",
    tag: "Current",
    bullets: [
      "Enterprise Next.js development",
      "Led CI/CD pipeline migration",
      "Release coordination across teams",
      "Team leadership & mentorship",
      "Performance optimization at scale",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Publicis Groupe",
    bullets: [
      "Responsive UI development",
      "UX improvements across product lines",
      "Agile collaboration with design & QA",
    ],
  },
  {
    role: "Software Developer",
    company: "Value Coders",
    bullets: [
      "Web application development",
      "Delivery across client projects",
      "UI implementation from design specs",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
  },
};

const bulletFade = {
  hidden: { opacity: 0, x: -8 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: 0.15 + i * 0.06, ease: "easeOut" },
  }),
};

export default function Experience() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Theme-aware tokens — text-primary/secondary and the tag's bg-accent/20
  // combo are tuned for the light palette and lose contrast on dark.
  const textStrong = isDark ? "#F7F1DC" : "var(--primary)";
  const textSecondary = isDark ? "#E8C87A" : "var(--secondary)";
  const textMuted = isDark ? "rgba(247,241,220,0.62)" : "var(--text-muted)";
  const nodeBg = isDark ? "#121919" : "var(--surface)";
  const tagBg = isDark ? "rgba(255,184,35,0.18)" : "rgba(255,184,35,0.2)";
  const tagBorder = isDark ? "rgba(255,184,35,0.4)" : "transparent";

  return (
    <section id="experience" className="pt-16 pb-28 md:pt-20 md:pb-32">
      <div className="max-w-[1180px] mx-auto px-8">
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
            Experience
          </span>
          <h2
            style={{ color: textStrong }}
            className="font-display text-[clamp(28px,4vw,44px)] mb-4 leading-tight tracking-tight"
          >
            Six years,{" "}
            <span className="text-accent italic font-medium">three</span> teams.
          </h2>
          <p
            style={{ color: textMuted }}
            className="max-w-[560px] text-base mb-14 leading-relaxed"
          >
            A chronological look at where I&apos;ve built — most recent role
            first.
          </p>
        </motion.div>

        <div className="relative pl-10">
          {/* animated timeline line */}
          <motion.div
            className="absolute left-[9px] top-1.5 w-0.5 rounded-full origin-top"
            style={{
              background:
                "linear-gradient(180deg, var(--accent), var(--secondary) 50%, var(--primary))",
            }}
            initial={{ scaleY: 0, height: "100%" }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.1, ease: [0.2, 0.7, 0.2, 1] }}
          />

          <div className="space-y-10 md:space-y-12">
            {ROLES.map((r, i) => (
              <motion.div
                key={r.company}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.12 }}
                className="relative"
              >
                {/* timeline node */}
                <motion.div
                  style={{ background: nodeBg }}
                  className="absolute -left-10 top-1 w-5 h-5 rounded-full border-2 border-accent flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.12 + 0.3,
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full bg-accent"
                    animate={
                      r.tag ? { scale: [1, 1.4, 1], opacity: [1, 0.6, 1] } : {}
                    }
                    transition={
                      r.tag
                        ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        : {}
                    }
                  />
                </motion.div>

                <motion.div
                  whileHover={{ y: -4, scale: 1.005 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <GlassCard className="p-7 md:p-8 transition-shadow duration-300 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)]">
                    <div className="flex justify-between items-start flex-wrap gap-2.5 mb-3.5">
                      <div>
                        <div
                          style={{ color: textStrong }}
                          className="text-xl md:text-[22px] font-display mb-1 tracking-tight"
                        >
                          {r.role}
                        </div>
                        <div
                          style={{ color: textSecondary }}
                          className="font-mono text-[13px] tracking-wide uppercase"
                        >
                          {r.company}
                        </div>
                      </div>
                      {r.tag && (
                        <motion.span
                          style={{
                            color: textStrong,
                            background: tagBg,
                            borderColor: tagBorder,
                          }}
                          className="font-mono text-[11.5px] border px-3 py-1.5 rounded-full whitespace-nowrap"
                          animate={{
                            boxShadow: [
                              "0 0 0px rgba(0,0,0,0)",
                              "0 0 12px var(--accent)",
                              "0 0 0px rgba(0,0,0,0)",
                            ],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          {r.tag}
                        </motion.span>
                      )}
                    </div>
                    <ul className="grid gap-2.5">
                      {r.bullets.map((b, bi) => (
                        <motion.li
                          key={b}
                          custom={bi}
                          variants={bulletFade}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.4 }}
                          style={{ color: textMuted }}
                          className="flex gap-2.5 text-[14.5px] items-start leading-relaxed"
                        >
                          <ArrowRight
                            className="w-3.5 h-3.5 mt-1 flex-shrink-0"
                            style={{ color: textSecondary }}
                          />
                          {b}
                        </motion.li>
                      ))}
                    </ul>
                  </GlassCard>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
