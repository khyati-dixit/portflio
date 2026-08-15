import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[var(--bg)]"
        >
          <div className="flex flex-col items-center gap-3.5 font-display text-[15px] tracking-[0.3em] uppercase text-primary">
            KD
            <div className="w-[120px] h-[2px] bg-[var(--border)] rounded-full overflow-hidden relative">
              <motion.div
                className="h-full w-[40%] bg-accent absolute"
                animate={{ x: ["-100%", "150%", "300%"] }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
