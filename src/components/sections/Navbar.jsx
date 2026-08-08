import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  Menu,
  X,
  Download,
  ArrowUpRight,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isDark = theme === "dark";

  // Theme-aware colors — don't rely on --primary alone, it's tuned for the light cream bg
  const textStrong = isDark ? "#F7F1DC" : "var(--primary)";
  const textMuted = isDark ? "rgba(247,241,220,0.62)" : "var(--text-muted)";
  const pillBg = isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.2)";
  const iconBtnBg = isDark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.2)";
  const iconBtnBgHover = isDark ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.3)";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="fixed top-6 left-0 w-full z-[100] px-6 lg:px-10">

        <motion.div
          animate={{
            maxWidth: scrolled ? "1180px" : "1320px",
            y: scrolled ? -2 : 0,
          }}
          transition={{
            duration: .35,
            ease: "easeOut",
          }}
          className="mx-auto"
        >

          <div
            className="
            h-[74px]
            rounded-full
            flex
            items-center
            justify-between

            px-8
            lg:px-10

            backdrop-blur-2xl

            border

            transition-all

            duration-300
          "
            style={{
              background:
                theme === "dark"
                  ? "rgba(18,25,25,.75)"
                  : "rgba(255,248,228,.72)",

              borderColor:
                theme === "dark"
                  ? "rgba(255,255,255,.08)"
                  : "rgba(255,255,255,.45)",

              boxShadow: scrolled
                ? "0 18px 45px rgba(0,0,0,.15)"
                : "0 10px 30px rgba(0,0,0,.08)",
            }}
          >
            {/* LOGO */}

            
                         {/* LOGO */}
            <a
              href="#home"
              className="flex flex-col flex-shrink-0"
            >
              <span
                className="text-[30px] font-black tracking-tight"
                style={{ color: textStrong }}
              >
                Khyati
                <span className="text-accent">.</span>
              </span>
            </a>

            {/* DESKTOP NAV */}

            <nav
              className="
              hidden
              md:flex
              items-center
              gap-1
              rounded-full
              p-1
            "
              style={{ background: pillBg }}
            >
              
              {LINKS.map((item) => (
  <a
    key={item.id}
    href={`#${item.id}`}
    className="
      relative
      px-5
      py-3
      rounded-full
      text-[15px]
      font-medium
      transition-all
      duration-300
    "
    style={{
      color: active === item.id ? textStrong : textMuted,
    }}
    onMouseEnter={(e) => {
      if (active !== item.id) e.currentTarget.style.color = textStrong;
    }}
    onMouseLeave={(e) => {
      if (active !== item.id) e.currentTarget.style.color = textMuted;
    }}
  >
                  {active === item.id && (
                    <motion.span
                      layoutId="navbar-pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="
                        absolute
                        inset-0
                        rounded-full
                        bg-accent/20
                        border
                        border-primary/10
                      "
                    />
                  )}

                  <span className="relative z-10">
                    {item.label}
                  </span>
                </a>
              ))}
            </nav>

            {/* RIGHT SIDE */}

            <div className="flex items-center gap-4">

              {/* THEME */}

              <motion.button
                whileTap={{ scale: .94 }}
                whileHover={{ scale: 1.05 }}
                onClick={toggleTheme}
                className="
                w-11
                h-11

                rounded-full

                flex

                items-center

                justify-center

                transition
              "
                style={{ background: iconBtnBg }}
                onMouseEnter={(e) => (e.currentTarget.style.background = iconBtnBgHover)}
                onMouseLeave={(e) => (e.currentTarget.style.background = iconBtnBg)}
              >
                {theme === "dark" ? (
                  <Sun size={18} style={{ color: textStrong }} />
                ) : (
                  <Moon size={18} style={{ color: textStrong }} />
                )}
              </motion.button>

              {/* RESUME */}

              <motion.a
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: .98,
                }}
                href="/Resume.pdf"
                download
                className="
                hidden

                md:flex

                items-center

                gap-2

                rounded-full

                px-7

                py-3.5

                font-semibold

                text-white

                shadow-lg

                transition-all

                duration-300
              "
                style={{
                  background:
                    "linear-gradient(135deg,#2D4F2B,#708A58)",
                }}
              >
                <Download size={17} />

                Download Resume

                <ArrowUpRight size={16} />
              </motion.a>

              {/* MOBILE */}

              <button
                onClick={() => setMenuOpen(true)}
                className="
                md:hidden

                w-11

                h-11

                rounded-full

                flex

                items-center

                justify-center
              "
                style={{ background: iconBtnBg }}
              >
                <Menu style={{ color: textStrong }} />
              </button>

            </div>

          </div>

        </motion.div>

      </header>
            {/* ===========================
          MOBILE MENU
      ============================ */}

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[110] bg-black/40 backdrop-blur-sm"
            />

            {/* Drawer */}

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                fixed
                right-0
                top-0
                z-[120]
                h-full
                w-[86%]
                max-w-[420px]
                p-8

                flex
                flex-col

                backdrop-blur-3xl
              "
              style={{
                background:
                  theme === "dark"
                    ? "rgba(14,18,20,.96)"
                    : "rgba(255,248,228,.96)",
              }}
            >
              {/* HEADER */}

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-[32px] font-black" style={{ color: textStrong }}>
                    Khyati
                    <span className="text-accent">.</span>
                  </h2>

                  <p
                    className="uppercase tracking-[3px] text-xs mt-1"
                    style={{ color: textMuted }}
                  >
                    Senior Frontend Developer
                  </p>

                </div>

                <motion.button
                  whileTap={{ scale: .92 }}
                  whileHover={{ rotate: 90 }}
                  onClick={() => setMenuOpen(false)}
                  className="
                    h-11
                    w-11

                    rounded-full

                    flex

                    items-center

                    justify-center
                  "
                  style={{ background: iconBtnBg }}
                >
                  <X size={20} style={{ color: textStrong }} />
                </motion.button>

              </div>

              {/* NAVIGATION */}

              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.15,
                    },
                  },
                }}
                className="mt-16 flex flex-col"
              >
                {LINKS.map((item) => (

                  <motion.a
                    key={item.id}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: 40,
                      },
                      show: {
                        opacity: 1,
                        x: 0,
                      },
                    }}
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="
                      py-5

                      border-b

                      flex

                      items-center

                      justify-between

                      group
                    "
                    style={{ borderColor: isDark ? "rgba(247,241,220,0.12)" : "rgba(45,79,43,0.1)" }}
                  >

                    <span
                      className="text-[34px] font-bold transition-colors"
                      style={{ color: textStrong }}
                    >
                      {item.label}
                    </span>

                    <span className="text-sm" style={{ color: textMuted }}>
                      0{LINKS.indexOf(item) + 1}
                    </span>

                  </motion.a>

                ))}
              </motion.div>

              {/* FOOTER */}

              <div className="mt-auto">

                {/* Theme */}

                <div className="flex items-center justify-between mb-5">

                  <span className="font-medium" style={{ color: textStrong }}>
                    Appearance
                  </span>

                  <button
                    onClick={toggleTheme}
                    className="
                      w-14
                      h-8

                      rounded-full

                      flex

                      items-center

                      px-1
                    "
                    style={{ background: iconBtnBg }}
                  >
                    <motion.div
                      layout
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 28,
                      }}
                      className="
                        h-6
                        w-6

                        rounded-full

                        flex

                        items-center

                        justify-center
                      "
                      style={{
                        background: textStrong,
                        marginLeft: theme === "dark" ? "auto" : 0,
                      }}
                    >
                      {theme === "dark"
                        ? <Moon size={12} color={isDark ? "#121919" : "white"} />
                        : <Sun size={12} color="white" />
                      }
                    </motion.div>
                  </button>

                </div>

                {/* Resume */}

                <motion.a
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: .98,
                  }}
                  href="/Resume.pdf"
                  download
                  className="
                    w-full

                    flex

                    items-center

                    justify-center

                    gap-3

                    rounded-full

                    py-4

                    font-semibold

                    text-white
                  "
                  style={{
                    background:
                      "linear-gradient(135deg,#2D4F2B,#708A58)",
                  }}
                >
                  <Download size={18} />

                  Download Resume

                </motion.a>

              </div>

            </motion.aside>

          </>
        )}
      </AnimatePresence>

    </>
  );
}