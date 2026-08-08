import React, { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setPct(scrolled || 0);
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] z-[998] transition-[width] duration-100 ease-linear"
      style={{ width: `${pct}%`, background: "linear-gradient(90deg, var(--secondary), var(--accent))" }}
    />
  );
}
