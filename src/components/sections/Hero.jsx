import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Atom,
  Layers,
  Braces,
  Box,
  Sparkles,
} from "lucide-react";
import FloatingBadge from "../ui/FloatingBadge.jsx";
import profilePhoto from "../../assets/profile.jpg";
import { useTheme } from "../../context/ThemeContext";

const ROLES = [
  "Senior Software Developer",
  "React.js Developer",
  "Next.js Developer",
  "TypeScript Engineer",
  "UI Engineer",
];

function useTypewriter(words) {
  const [text, setText] = useState("");
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reduceMotion) {
      setText(words[0]);
      return;
    }
    let ri = 0;
    let ci = 0;
    let deleting = false;
    let timeout;

    const tick = () => {
      const word = words[ri];
      if (!deleting) {
        ci++;
        setText(word.slice(0, ci));
        if (ci === word.length) {
          deleting = true;
          timeout = setTimeout(tick, 1400);
          return;
        }
      } else {
        ci--;
        setText(word.slice(0, ci));
        if (ci === 0) {
          deleting = false;
          ri = (ri + 1) % words.length;
        }
      }
      timeout = setTimeout(tick, deleting ? 40 : 70);
    };
    tick();
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return text;
}

const textStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const textItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] },
  },
};

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Theme-aware text colors — text-primary/secondary read fine on the cream
  // light background but lose contrast on the dark background in dark mode.
  const textStrong = isDark ? "#F7F1DC" : "var(--primary)";
  const textSecondary = isDark ? "#E8C87A" : "var(--secondary)";
  const textMuted = isDark ? "rgba(247,241,220,0.65)" : "var(--text-muted)";
  const borderColor = isDark ? "rgba(247,241,220,0.18)" : "var(--border)";

  const roleText = useTypewriter(ROLES);
  const heroRef = useRef(null);
  const frameRef = useRef(null);

  // Scroll-linked parallax on the aurora backdrop and content
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const auroraY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.4]);

  // Cursor-reactive tilt on the photo frame
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 150, damping: 18 });
  const rotateY = useSpring(ry, { stiffness: 150, damping: 18 });

  const handleTilt = (e) => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion || !frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * 14);
    rx.set(py * -14);
  };
  const resetTilt = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-32 overflow-hidden"
    >
      <motion.div
        style={{ y: auroraY }}
        className="aurora-bg absolute -inset-y-[20%] -inset-x-[10%] z-0 animate-aurora pointer-events-none"
      />

      {/* subtle grain for depth, sits above aurora, below content */}
      <svg className="absolute inset-0 w-full h-full z-[1] pointer-events-none opacity-[0.035] mix-blend-multiply">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="max-w-[1320px] mx-auto px-6 lg:px-10 relative z-[2] grid grid-cols-1 lg:grid-cols-[1fr_0.92fr] items-center gap-y-16 lg:gap-x-28 xl:gap-x-36"
      >
        <motion.div variants={textStagger} initial="hidden" animate="show">
          <motion.div
            variants={textItem}
            className="font-mono text-sm flex items-center gap-2.5 mb-5"
            style={{ color: textSecondary }}
          >
            <span className="inline-block origin-[70%_70%] animate-[wave_2.4s_ease-in-out_infinite]">
              👋
            </span>
            Hello, I&apos;m
          </motion.div>

          <motion.h1
            variants={textItem}
            className="font-display text-[clamp(42px,6.4vw,74px)] leading-[1.08] font-semibold mb-4"
            style={{ color: textStrong }}
          >
            Khyati Dixit
          </motion.h1>

          <motion.div
            variants={textItem}
            className="font-mono text-[clamp(16px,2vw,21px)] h-[1.6em] flex items-center mb-6"
            style={{ color: textStrong }}
          >
            &gt;&nbsp;{roleText}
            <span className="inline-block w-[2px] h-[1em] bg-accent ml-0.5 animate-blink" />
          </motion.div>

          <motion.p
            variants={textItem}
            className="max-w-[560px] text-[17px] leading-8 mb-10"
            style={{ color: textMuted }}
          >
            I design and build{" "}
            <strong style={{ color: textStrong }}>enterprise-grade</strong> web
            applications with React.js and Next.js, six years of turning complex
            Travel &amp; Hospitality product requirements into fast, accessible
            interfaces.
          </motion.p>

          <motion.div
            variants={textItem}
            className="flex flex-wrap gap-5 mt-2 mb-14"
          >
            <motion.a
              whileHover={{
                y: -4,
                boxShadow: "0 18px 30px -12px rgba(255,184,35,0.55)",
              }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 bg-accent text-[#2b1c00] font-semibold text-[15px] px-9 py-[18px] rounded-full shadow-soft-sm transition-all duration-300"
            >
              Get in touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              href="/Resume-KD.pdf"
              download
              className="inline-flex items-center justify-center gap-3 border font-semibold text-[15px] px-9 py-[18px] rounded-full transition-all duration-300"
              style={{ borderColor, color: textStrong }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = isDark
                  ? "rgba(247,241,220,0.06)"
                  : "rgba(45,79,43,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              Download resume
            </motion.a>
          </motion.div>

          <motion.div variants={textItem} className="flex gap-3.5">
            <motion.a
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.94 }}
              href="https://github.com/khyati-dixit"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              className="w-[42px] h-[42px] rounded-full border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-[#2b1c00] transition-colors"
              style={{ borderColor, color: textStrong }}
            >
              <Github className="w-[17px] h-[17px]" />
            </motion.a>
            <motion.a
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.94 }}
              href="https://linkedin.com/in/khyati-dixit-607b28199/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              className="w-[42px] h-[42px] rounded-full border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-[#2b1c00] transition-colors"
              style={{ borderColor, color: textStrong }}
            >
              <Linkedin className="w-[17px] h-[17px]" />
            </motion.a>
            <motion.a
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.94 }}
              href="mailto:khyatidxt@gamil.com"
              aria-label="Email"
              className="w-[42px] h-[42px] rounded-full border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-[#2b1c00] transition-colors"
              style={{ borderColor, color: textStrong }}
            >
              <Mail className="w-[17px] h-[17px]" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Photo side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative flex items-center justify-center h-[460px] sm:h-[520px] order-first md:order-last"
        >
          {/* decorative blurred color blobs behind the photo */}
          <div className="absolute w-[260px] h-[260px] rounded-full bg-accent/35 blur-[70px] -top-6 -left-2 z-0" />
          <div className="absolute w-[240px] h-[240px] rounded-full bg-secondary/40 blur-[70px] bottom-0 right-0 z-0" />

          <div
            ref={frameRef}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
            className="relative z-[2]"
            style={{ perspective: 900 }}
          >
            <motion.div
              style={{ rotateX, rotateY }}
              className="relative w-[310px] sm:w-[350px] lg:w-[390px] rounded-[32px] shadow-soft"
            >
              <div
                className="rounded-[28px] p-[3px]"
                style={{
                  background:
                    "linear-gradient(150deg, var(--accent), var(--secondary), var(--primary))",
                }}
              >
                <div className="rounded-[26px] overflow-hidden bg-surface">
                  <img
                    src={profilePhoto}
                    alt="Khyati Dixit smiling, seated at a café table"
                    className="w-full h-[380px] sm:h-[430px] lg:h-[470px] object-cover block"
                  />
                </div>
              </div>

              {/* dashed rotating ring accent */}
              <div className="absolute -inset-3 rounded-[36px] border-[1.5px] border-dashed border-accent/45 animate-spinslow pointer-events-none" />

              {/* availability chip overlapping the bottom edge of the photo */}
              <div
                className="glass-card absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full font-mono text-[11.5px] whitespace-nowrap"
                style={{ color: textStrong }}
              >
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                Open to new roles
              </div>
            </motion.div>
          </div>

          <FloatingBadge
            icon={Atom}
            label="React.js"
            className="top-[2%] left-[-6%]"
            delay={0}
          />
          <FloatingBadge
            icon={Layers}
            label="Next.js"
            className="top-[10%] right-[-8%]"
            delay={0.6}
          />
          <FloatingBadge
            icon={Braces}
            label="TypeScript"
            className="bottom-[16%] left-[-10%]"
            delay={1.2}
          />
          <FloatingBadge
            icon={Box}
            label="Redux"
            className="bottom-[-2%] right-[-4%]"
            delay={1.8}
          />
        </motion.div>
      </motion.div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[11px] tracking-widest z-[2]"
        style={{ color: textMuted }}
      >
        <span>SCROLL</span>
        <span className="w-[5px] h-[5px] rounded-full bg-accent animate-dotdrop" />
      </div>
    </section>
  );
}
