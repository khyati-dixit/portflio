import React, { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    const onMove = (e) => {
      el.style.opacity = "1";
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };
    const onLeave = () => (el.style.opacity = "0");
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 w-[420px] h-[420px] rounded-full pointer-events-none z-[1] opacity-0 transition-opacity duration-300"
      style={{
        background:
          "radial-gradient(circle, rgba(255,184,35,0.16), transparent 70%)",
        transform: "translate(-50%,-50%)",
      }}
    />
  );
}
