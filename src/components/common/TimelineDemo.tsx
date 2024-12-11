// import Image from "next/image";
// import React from "react";
// import { Timeline } from "@/components/ui/timeline";

// export function TimelineDemo() {
//     const data = [
//         {
//             title: "2024",
//             content: (
//                 <div>
//                     <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                         Built and launched Aceternity UI and Aceternity UI Pro
//                         from scratch
//                     </p>
//                     <div className="grid grid-cols-2 gap-4">
//                         <Image
//                             src="https://assets.aceternity.com/templates/startup-1.webp"
//                             alt="startup template"
//                             width={500}
//                             height={500}
//                             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//                         />
//                         <Image
//                             src="https://assets.aceternity.com/templates/startup-2.webp"
//                             alt="startup template"
//                             width={500}
//                             height={500}
//                             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//                         />
//                         <Image
//                             src="https://assets.aceternity.com/templates/startup-3.webp"
//                             alt="startup template"
//                             width={500}
//                             height={500}
//                             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//                         />
//                         <Image
//                             src="https://assets.aceternity.com/templates/startup-4.webp"
//                             alt="startup template"
//                             width={500}
//                             height={500}
//                             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//                         />
//                     </div>
//                 </div>
//             ),
//         },
//         {
//             title: "Early 2023",
//             content: (
//                 <div>
//                     <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                         I usually run out of copy, but when I see content this
//                         big, I try to integrate lorem ipsum.
//                     </p>
//                     <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                         Lorem ipsum is for people who are too lazy to write
//                         copy. But we are not. Here are some more example of
//                         beautiful designs I built.
//                     </p>
//                     <div className="grid grid-cols-2 gap-4">
//                         <Image
//                             src="https://assets.aceternity.com/pro/hero-sections.png"
//                             alt="hero template"
//                             width={500}
//                             height={500}
//                             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//                         />
//                         <Image
//                             src="https://assets.aceternity.com/features-section.png"
//                             alt="feature template"
//                             width={500}
//                             height={500}
//                             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//                         />
//                         <Image
//                             src="https://assets.aceternity.com/pro/bento-grids.png"
//                             alt="bento template"
//                             width={500}
//                             height={500}
//                             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//                         />
//                         <Image
//                             src="https://assets.aceternity.com/cards.png"
//                             alt="cards template"
//                             width={500}
//                             height={500}
//                             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//                         />
//                     </div>
//                 </div>
//             ),
//         },
//     ];
//     return (
//         <div className="w-full mb-6 dark">
//             <Timeline data={data} />
//         </div>
//     );
// }

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "Universitas Teknologi Digital Indonesia",
            content: (
                <div>
                    <p className="text-slate-300 dark:text-slate-300 text-base">
                        September 2020 - April 2024
                    </p>
                    <p className="text-slate-300 dark:text-slate-300 text-xl">
                        Bachelor of Computer Science - Informatics
                    </p>
                </div>
            ),
        },
        {
            title: "SMK Negeri 1 Air Upas",
            content: (
                <div>
                    <p className="text-slate-300 dark:text-slate-300 text-base">
                        July 2017 - May 2020
                    </p>
                    <p className="text-slate-300 dark:text-slate-300 text-xl">
                        Institutional Accounting and Finance
                    </p>
                </div>
            ),
        },
    ];
    return (
        <div id="timeline" className="w-full mb-6 dark ">
            <Timeline data={data} headTitle="Education" />
        </div>
    );
}
