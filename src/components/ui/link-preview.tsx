// "use client";
// import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
// import Image from "next/image";
// import { encode } from "qss";
// import React from "react";
// import {
//     AnimatePresence,
//     motion,
//     useMotionValue,
//     useSpring,
// } from "framer-motion";
// import Link from "next/link";
// import { cn } from "@/lib/utils";

// type LinkPreviewProps = {
//     children: React.ReactNode;
//     url: string;
//     className?: string;
//     width?: number;
//     height?: number;
//     quality?: number;
//     layout?: string;
// } & (
//     | { isStatic: true; imageSrc: string }
//     | { isStatic?: false; imageSrc?: never }
// );

// export const LinkPreview = ({
//     children,
//     url,
//     className,
//     width = 200,
//     height = 125,
//     quality = 50,
//     layout = "fixed",
//     isStatic = false,
//     imageSrc = "",
// }: LinkPreviewProps) => {
//     let src;
//     if (!isStatic) {
//         const params = encode({
//             url,
//             screenshot: true,
//             meta: false,
//             embed: "screenshot.url",
//             colorScheme: "dark",
//             "viewport.isMobile": true,
//             "viewport.deviceScaleFactor": 1,
//             "viewport.width": width * 3,
//             "viewport.height": height * 3,
//         });
//         src = `https://api.microlink.io/?${params}`;
//     } else {
//         src = imageSrc;
//     }

//     const [isOpen, setOpen] = React.useState(false);

//     const [isMounted, setIsMounted] = React.useState(false);

//     React.useEffect(() => {
//         setIsMounted(true);
//     }, []);

//     const springConfig = { stiffness: 100, damping: 15 };
//     const x = useMotionValue(0);

//     const translateX = useSpring(x, springConfig);

//     const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
//         const targetRect = event.currentTarget.getBoundingClientRect();
//         const eventOffsetX = event.clientX - targetRect.left;
//         const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2; // Reduce the effect to make it subtle
//         x.set(offsetFromCenter);
//     };

//     return (
//         <>
//             {isMounted ? (
//                 <div className="hidden">
//                     <Image
//                         src={src}
//                         width={width}
//                         height={height}
//                         quality={quality}
//                         layout={layout}
//                         priority={true}
//                         alt="hidden image"
//                     />
//                 </div>
//             ) : null}

//             <HoverCardPrimitive.Root
//                 openDelay={50}
//                 closeDelay={100}
//                 onOpenChange={(open) => {
//                     setOpen(open);
//                 }}
//             >
//                 <HoverCardPrimitive.Trigger
//                     onMouseMove={handleMouseMove}
//                     className={cn("text-black dark:text-white", className)}
//                     href={url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     {children}
//                 </HoverCardPrimitive.Trigger>

//                 <HoverCardPrimitive.Content
//                     className="[transform-origin:var(--radix-hover-card-content-transform-origin)]"
//                     side="top"
//                     align="center"
//                     sideOffset={10}
//                 >
//                     <AnimatePresence>
//                         {isOpen && (
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20, scale: 0.6 }}
//                                 animate={{
//                                     opacity: 1,
//                                     y: 0,
//                                     scale: 1,
//                                     transition: {
//                                         type: "spring",
//                                         stiffness: 260,
//                                         damping: 20,
//                                     },
//                                 }}
//                                 exit={{ opacity: 0, y: 20, scale: 0.6 }}
//                                 className="shadow-xl rounded-xl"
//                                 style={{
//                                     x: translateX,
//                                 }}
//                             >
//                                 <Link
//                                     href={url}
//                                     className="block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800"
//                                     style={{ fontSize: 0 }}
//                                 >
//                                     <Image
//                                         src={isStatic ? imageSrc : src}
//                                         width={width}
//                                         height={height}
//                                         quality={quality}
//                                         layout={layout}
//                                         priority={true}
//                                         className="rounded-lg"
//                                         alt="preview image"
//                                     />
//                                 </Link>
//                             </motion.div>
//                         )}
//                     </AnimatePresence>
//                 </HoverCardPrimitive.Content>
//             </HoverCardPrimitive.Root>
//         </>
//     );
// };

"use client";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import Image from "next/image";
import { encode } from "qss";
import React from "react";
import {
    AnimatePresence,
    motion,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return isMobile;
};

type LinkPreviewProps = {
    children: React.ReactNode;
    url: string;
    className?: string;
    width?: number;
    height?: number;
    quality?: number;
    // layout?: string;
} & (
    | { isStatic: true; imageSrc: string }
    | { isStatic?: false; imageSrc?: never }
);

export const LinkPreview = ({
    children,
    url,
    className,
    width = 200,
    height = 125,
    quality = 50,
    // layout = "fixed",
    isStatic = false,
    imageSrc = "",
}: LinkPreviewProps) => {
    const isMobile = useIsMobile();
    let src;
    if (!isStatic) {
        const params = encode({
            url,
            screenshot: true,
            meta: false,
            embed: "screenshot.url",
            colorScheme: "dark",
            "viewport.isMobile": true,
            "viewport.deviceScaleFactor": 1,
            "viewport.width": width * 3,
            "viewport.height": height * 3,
        });
        src = `https://api.microlink.io/?${params}`;
    } else {
        src = imageSrc;
    }

    const [isOpen, setOpen] = React.useState(false);
    const [isClicked, setClicked] = React.useState(false); // State untuk memastikan klik menutup pratinjau
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    const springConfig = { stiffness: 100, damping: 15 };
    const x = useMotionValue(0);
    const translateX = useSpring(x, springConfig);

    const handleMouseEnter = () => {
        if (!isClicked && !isMobile) {
            setOpen(true);
        }
    };

    const handleMouseLeave = () => {
        setOpen(false);
    };

    const handleClick = () => {
        setOpen(false); // Tutup pratinjau
        setClicked(true); // Tandai bahwa link telah diklik
        // Gunakan dynamic import untuk mengakses window
        if (typeof window !== "undefined") {
            window.open(url, "_blank", "noopener noreferrer");
        } else {
            // Fallback untuk server-side
            const a = document.createElement("a");
            a.href = url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.click();
        }
    };

    const handleMouseMoveWithReset = (
        event: React.MouseEvent<HTMLAnchorElement>
    ) => {
        // Reset klik saat mouse kembali ke komponen
        setClicked(false);

        // Hitung efek pergeseran X
        const targetRect = event.currentTarget.getBoundingClientRect();
        const eventOffsetX = event.clientX - targetRect.left;
        const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2; // Efek pergeseran halus
        x.set(offsetFromCenter);
    };

    // Jika mobile, gunakan wrapper div sederhana
    if (isMobile) {
        return (
            <div
                onClick={handleClick}
                className={cn(
                    "text-black dark:text-white cursor-pointer",
                    className
                )}
            >
                {children}
            </div>
        );
    }

    return (
        <>
            {isMounted && !isMobile ? (
                <div className="hidden">
                    <Image
                        src={src}
                        width={width}
                        height={height}
                        quality={quality}
                        // layout={layout}
                        priority={true}
                        alt="hidden image"
                    />
                </div>
            ) : null}

            <HoverCardPrimitive.Root
                open={isOpen && !isClicked} // Jangan tampilkan pratinjau jika sudah diklik
                onOpenChange={setOpen} // Sinkronisasi state
            >
                <HoverCardPrimitive.Trigger
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={() => setOpen(false)}
                    onClick={(e) => {
                        e.preventDefault(); // Cegah perilaku default
                        handleClick(); // Tangani klik
                    }}
                    onMouseMove={handleMouseMoveWithReset} // Reset jika mouse kembali
                    className={cn(
                        "text-black dark:text-white cursor-pointer",
                        className
                    )}
                >
                    {children}
                </HoverCardPrimitive.Trigger>

                <HoverCardPrimitive.Content
                    className="[transform-origin:var(--radix-hover-card-content-transform-origin)] z-50"
                    side="top"
                    align="center"
                    sideOffset={10}
                >
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    },
                                }}
                                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                className="shadow-xl rounded-xl"
                                style={{
                                    x: translateX,
                                }}
                            >
                                <div
                                    className="block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800"
                                    style={{ fontSize: 0 }}
                                >
                                    <Image
                                        src={isStatic ? imageSrc : src}
                                        width={width}
                                        height={height}
                                        quality={quality}
                                        // layout={layout}
                                        priority={true}
                                        className="rounded-lg w-full h-auto"
                                        alt="preview image"
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </HoverCardPrimitive.Content>
            </HoverCardPrimitive.Root>
        </>
    );
};
