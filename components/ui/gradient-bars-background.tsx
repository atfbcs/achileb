"use client";

import React, { useEffect, useState } from "react";

interface GradientBarsProps {
  numBars?: number;
  gradientFrom?: string;
  gradientTo?: string;
  gradientFromDark?: string;
  gradientToDark?: string;
  animationDuration?: number;
  className?: string;
}

const GradientBars: React.FC<GradientBarsProps> = ({
  numBars = 15,
  gradientFrom = "rgba(0, 0, 0, 0.03)",
  gradientTo = "transparent",
  gradientFromDark = "rgba(255, 255, 255, 0.05)",
  gradientToDark = "transparent",
  animationDuration = 2,
  className = "",
}) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(media.matches);

    const update = () => setIsDark(media.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const currentGradientFrom = isDark ? gradientFromDark : gradientFrom;
  const currentGradientTo = isDark ? gradientToDark : gradientTo;
  const calculateHeight = (index: number, total: number) => {
    const position = index / (total - 1);
    const maxHeight = 100;
    const minHeight = 30;

    const center = 0.5;
    const distanceFromCenter = Math.abs(position - center);
    const heightPercentage = Math.pow(distanceFromCenter * 2, 1.2);

    return minHeight + (maxHeight - minHeight) * heightPercentage;
  };

  return (
    <>
      <style>{`
        @keyframes pulseBar {
          0% { transform: scaleY(var(--initial-scale)); }
          100% { transform: scaleY(calc(var(--initial-scale) * 0.7)); }
        }
      `}</style>

      <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
        <div
          className="flex h-full"
          style={{
            width: "100%",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          {Array.from({ length: numBars }).map((_, index) => {
            const height = calculateHeight(index, numBars);
            return (
              <div
                key={index}
                style={{
                  flex: `1 0 calc(100% / ${numBars})`,
                  maxWidth: `calc(100% / ${numBars})`,
                  height: "100%",
                  background: `linear-gradient(to top, ${currentGradientFrom}, ${currentGradientTo})`,
                  transform: `scaleY(${height / 100})`,
                  transformOrigin: "bottom",
                  transition: "transform 0.5s ease-in-out",
                  animation: `pulseBar ${animationDuration}s ease-in-out infinite alternate`,
                  animationDelay: `${index * 0.1}s`,
                  outline: "1px solid rgba(0, 0, 0, 0)",
                  boxSizing: "border-box",
                  // @ts-ignore
                  "--initial-scale": height / 100,
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

interface GradientBarsBackgroundProps {
  numBars?: number;
  gradientFrom?: string;
  gradientTo?: string;
  gradientFromDark?: string;
  gradientToDark?: string;
  animationDuration?: number;
  className?: string;
}

export function GradientBarsBackground({
  numBars = 7,
  gradientFrom = "rgba(0, 0, 0, 0.03)",
  gradientTo = "transparent",
  gradientFromDark = "rgba(255, 255, 255, 0.05)",
  gradientToDark = "transparent",
  animationDuration = 3,
  className = "",
}: GradientBarsBackgroundProps) {
  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`}>
      <GradientBars
        numBars={numBars}
        gradientFrom={gradientFrom}
        gradientTo={gradientTo}
        gradientFromDark={gradientFromDark}
        gradientToDark={gradientToDark}
        animationDuration={animationDuration}
      />
    </div>
  );
}

