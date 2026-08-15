import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(document.documentElement.scrollTop > 500);
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-7 right-7 z-[90] w-[46px] h-[46px] rounded-full bg-primary text-[var(--bg)] shadow-soft-sm flex items-center justify-center transition-all duration-300 ${
        show
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible translate-y-2"
      }`}
    >
      <ArrowUp className="w-[18px] h-[18px]" />
    </button>
  );
}
