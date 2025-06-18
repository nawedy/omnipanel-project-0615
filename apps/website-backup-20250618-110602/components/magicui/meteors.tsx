"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  angle?: number;
  className?: string;
}

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    [],
  );

  useEffect(() => {
    const generateStyles = () => {
      return [...new Array(number)].map(() => ({
        "--angle": -angle + "deg",
        top: "-5%",
        left: `${Math.floor(Math.random() * 100)}%`,
        animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
        animationDuration:
          Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) +
          "s",
      }));
    };

    // Generate initial styles
    setMeteorStyles(generateStyles());

    // Regenerate on window resize
    const handleResize = () => {
      setMeteorStyles(generateStyles());
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
    
    // Return empty cleanup function for server-side rendering
    return () => {};
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          style={{ ...style }}
          className={cn(
            "pointer-events-none absolute size-px rotate-[var(--angle)] animate-meteor rounded-full bg-zinc-400 shadow-[0_0_0_1px_#ffffff05]",
            className,
          )}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[5px] -translate-y-1/2 bg-gradient-to-r from-zinc-400 to-transparent opacity-60" />
        </span>
      ))}
    </>
  );
};
