import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function FloatingBadge({ icon: Icon, label, className = "", delay = 0 }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const textColor = isDark ? "#F7F1DC" : "var(--primary)";

  return (
    <div
      className={`glass-card absolute z-[3] flex items-center gap-2 px-3.5 py-2 rounded-full font-mono text-[12.5px] animate-floaty ${className}`}
      style={{ animationDelay: `${delay}s`, color: textColor }}
    >
      <Icon className="w-3.5 h-3.5 text-accent" />
      {label}
    </div>
  );
}