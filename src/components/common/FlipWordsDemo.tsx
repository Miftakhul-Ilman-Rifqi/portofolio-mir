// import React from "react";
// import { FlipWords } from "../ui/flip-words";

// export function FlipWordsDemo() {
//     const words = ["Available for Work", "Open to Work"];

//     return (
//         <div className="flex justify-center items-center">
//             <div className="text-base text-neutral-400">
//                 🔵
//                 <FlipWords words={words} />
//             </div>
//         </div>
//     );
// }

import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
    const words = ["Open to Work"];
    // const words = ["Available for Work", "Open to Work"];

    return (
        <div className="flex justify-center items-center mt-4">
            <div className="text-sm md:text-base text-neutral-400 flex items-center gap-2">
                <span className="relative flex h-2 w-2 md:h-3 md:w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-blue-400 drop-shadow-[0_0_6px_rgba(96,165,250,0.4)]"></span>
                </span>
                <FlipWords words={words} />
            </div>
        </div>
    );
}
