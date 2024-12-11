// "use client";
// import { useEffect } from "react";
// import { motion, stagger, useAnimate } from "framer-motion";
// import { cn } from "@/lib/utils";

// export const TextGenerateEffect = ({
//     words,
//     className,
//     filter = true,
//     duration = 0.5,
// }: {
//     words: string;
//     className?: string;
//     filter?: boolean;
//     duration?: number;
// }) => {
//     const [scope, animate] = useAnimate();
//     const wordsArray = words.split("");
//     useEffect(() => {
//         animate(
//             "span",
//             {
//                 opacity: 1,
//                 filter: filter ? "blur(0px)" : "none",
//             },
//             {
//                 duration: duration ? duration : 1,
//                 delay: stagger(0.1),
//             }
//         );
//     }, [scope.current]);

//     const renderWords = () => {
//         return (
//             <motion.div ref={scope}>
//                 {wordsArray.map((word, idx) => {
//                     return (
//                         <motion.span
//                             key={word + idx}
//                             className="dark:text-white text-black opacity-0"
//                             style={{
//                                 filter: filter ? "blur(10px)" : "none",
//                             }}
//                         >
//                             {word}
//                             {""}
//                         </motion.span>
//                     );
//                 })}
//             </motion.div>
//         );
//     };

//     return (
//         <div className={cn("font-bold", className)}>
//             <div className="mt-4">
//                 <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
//                     {renderWords()}
//                 </div>
//             </div>
//         </div>
//     );
// };

"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.3,
}: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
}) => {
    const [scope, animate] = useAnimate();

    // Split text into segments, preserving bold markers
    const segments = words.split(/(\*\*.*?\*\*)/g);

    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
            },
            {
                duration: duration,
                delay: stagger(0.004), // mempercepat stagger
            }
        );
    }, [animate, duration, filter]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {segments.map((segment, idx) => {
                    const isBold =
                        segment.startsWith("**") && segment.endsWith("**");
                    const text = isBold ? segment.slice(2, -2) : segment;

                    return text.split("").map((char, charIdx) => (
                        <motion.span
                            key={idx + "-" + charIdx}
                            className={cn(
                                "dark:text-white text-black opacity-0",
                                isBold && "font-bold"
                            )}
                            style={{
                                filter: filter ? "blur(10px)" : "none",
                            }}
                        >
                            {char}
                        </motion.span>
                    ));
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("", className)}>
            <div className="mt-4">
                <div className="dark:text-white text-black leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
