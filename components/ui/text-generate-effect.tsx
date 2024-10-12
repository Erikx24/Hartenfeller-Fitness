"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.15),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const customClass =
            idx === 0 || idx === 3 ? "text-hf-350" : "text-hf-90"; // Erstes und viertes Wort rot
  
          return (
            <div key={word + idx} style={{ display: 'inline' }}> {/* Inline-Style, um die Wörter in einer Reihe anzuzeigen */}
              <motion.span
                className={`opacity-0 ${customClass}`}
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
                initial={{ opacity: 0 }} // Initiale Opazität
                animate={{ opacity: 1 }} // Animation auf Opazität 1
                transition={{ duration: 0.5, delay: idx * 0.2 }} // Verzögerung basierend auf dem Index
              >
                {word}{" "}
              </motion.span>
              {idx === 2 && <br />} {/* Zeilenumbruch nach dem dritten Wort */}
            </div>
          );
        })}
      </motion.div>
    );
  };

return (
  <div className={cn("font-bold", className)}>
    <div className="mt-4">
      <div className=" ">
        {renderWords()}
      </div>
    </div>
  </div>
);
};
