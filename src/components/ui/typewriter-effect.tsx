// "use client";

// import { cn } from "@/lib/utils";
// import { motion } from "framer-motion";

// export const TypewriterEffectSmooth = ({
//     words,
//     className,
//     cursorClassName,
// }: {
//     words: {
//         text: string;
//         className?: string;
//     }[];
//     className?: string;
//     cursorClassName?: string;
// }) => {
//     // split text inside of words into array of characters
//     const wordsArray = words.map((word) => {
//         return {
//             ...word,
//             text: word.text.split(""),
//         };
//     });
//     const renderWords = () => {
//         return (
//             <div>
//                 {wordsArray.map((word, idx) => {
//                     return (
//                         <div key={`word-${idx}`} className="inline-block">
//                             {word.text.map((char, index) => (
//                                 <span
//                                     key={`char-${index}`}
//                                     className={cn(
//                                         `text-white `,
//                                         word.className
//                                     )}
//                                 >
//                                     {char}
//                                 </span>
//                             ))}
//                             &nbsp;
//                         </div>
//                     );
//                 })}
//             </div>
//         );
//     };

//     return (
//         <div className={cn("flex space-x-1 my-6", className)}>
//             <motion.div
//                 className="overflow-hidden pb-2"
//                 initial={{
//                     width: "0%",
//                 }}
//                 whileInView={{
//                     width: "fit-content",
//                 }}
//                 transition={{
//                     duration: 2,
//                     ease: "linear",
//                     delay: 1,
//                 }}
//             >
//                 <div
//                     className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
//                     style={{
//                         whiteSpace: "nowrap ",
//                     }}
//                 >
//                     {renderWords()}
//                     {""}
//                 </div>
//                 {""}
//             </motion.div>
//         </div>
//     );
// };

"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const TypewriterEffectSmooth = ({
    words,
    className,
}: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
}) => {
    // Animasi untuk setiap kata
    const wordAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                delay: i * 0.2 + (i === words.length - 1 ? 1 : 0), // Penundaan ekstra untuk kata terakhir
            },
        }),
    };

    return (
        <div className={cn("flex flex-wrap gap-3 my-6", className)}>
            {words.map((word, idx) => (
                <motion.span
                    key={`word-${idx}`}
                    className={cn(
                        "inline-block text-white text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-bold",
                        word.className
                    )}
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={wordAnimation}
                >
                    {word.text}
                </motion.span>
            ))}
        </div>
    );
};
