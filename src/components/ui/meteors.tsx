// import { cn } from "@/lib/utils";
// import React from "react";

// export const Meteors = ({
//   number,
//   className,
// }: {
//   number?: number;
//   className?: string;
// }) => {
//   const meteors = new Array(number || 20).fill(true);
//   return (
//     <>
//       {meteors.map((el, idx) => (
//         <span
//           key={"meteor" + idx}
//           className={cn(
//             "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
//             "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
//             className
//           )}
//           style={{
//             top: 0,
//             left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
//             animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
//             animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
//           }}
//         ></span>
//       ))}
//     </>
//   );
// };

'use client';

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface MeteorProps {
  number?: number;
  className?: string;
}

export const Meteors = ({ number = 20, className }: MeteorProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<{
    left: string;
    animationDelay: string;
    animationDuration: string;
  }>>([]);

  useEffect(() => {
    // Generate meteor styles setelah komponen di-mount
    const styles = Array.from({ length: number }, () => ({
      left: `${Math.floor(Math.random() * (400 - -400) + -400)}px`,
      animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
      animationDuration: `${Math.floor(Math.random() * (10 - 2) + 2)}s`,
    }));
    setMeteorStyles(styles);
  }, [number]);

  if (meteorStyles.length === 0) {
    return null; // Tidak render apa-apa sampai styles dibuat
  }

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={`meteor-${idx}`}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: 0,
            ...style
          }}
        />
      ))}
    </>
  );
};