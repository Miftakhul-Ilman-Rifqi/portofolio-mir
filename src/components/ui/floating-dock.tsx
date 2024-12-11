"use client";
import { cn } from "@/lib/utils";
import {
    AnimatePresence,
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const useIsClient = () => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => setIsClient(true), []);
    return isClient;
};

// const getLastVisibleSection = (
//     offsets: { title: string; offset: number }[]
// ) => {
//     return offsets.reduce((latest, current) => {
//         return current.offset <= 0 ? current : latest;
//     });
// };

export const FloatingDock = ({
    items,
    desktopClassName,
    mobileClassName,
}: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    desktopClassName?: string;
    mobileClassName?: string;
}) => {
    const isClient = useIsClient();

    if (!isClient) return null;

    return (
        <>
            <div className="hidden md:block">
                <FloatingDockDesktop
                    items={items}
                    className={desktopClassName}
                />
            </div>
            <div className="md:hidden block">
                <FloatingDockMobile items={items} className={mobileClassName} />
            </div>
        </>
    );
};

const getScrollPosition = () => {
    if (typeof window === "undefined") return 0;
    return window.scrollY || document.documentElement.scrollTop;
};

// const getViewportHeight = () => {
//     if (typeof window === "undefined") return 0;
//     return window.innerHeight;
// };

const SCROLL_MARGIN = 24; // 6 * 4px (Tailwind's rem base)

const FloatingDockMobile = ({
    items,
    className,
}: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    className?: string;
}) => {
    const [activeItem, setActiveItem] = useState<string>("");
    const isClient = useIsClient();

    // useEffect(() => {
    //     if (!isClient) return;
    //     const handleScroll = () => {
    //         const viewportThreshold = getViewportHeight() * 0.4;
    //         const offsets = items.map((item) => {
    //             const section = document.querySelector(item.href);
    //             if (!section) return { title: item.title, offset: Infinity };

    //             const rect = section.getBoundingClientRect();
    //             const distanceFromTop = rect.top;

    //             return { title: item.title, offset: distanceFromTop };
    //         });

    //         const activeSection = offsets.reduce((closest, current) => {
    //             const closestInView =
    //                 Math.abs(closest.offset) < viewportThreshold
    //                     ? closest
    //                     : { ...closest, offset: Infinity };
    //             const currentInView =
    //                 Math.abs(current.offset) < viewportThreshold
    //                     ? current
    //                     : { ...current, offset: Infinity };

    //             return Math.abs(currentInView.offset) <
    //                 Math.abs(closestInView.offset)
    //                 ? currentInView
    //                 : closestInView;
    //         });

    //         setActiveItem(activeSection.title);
    //     };

    //     handleScroll();
    //     window.addEventListener("scroll", handleScroll);

    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, [isClient, items]);

    useEffect(() => {
        if (!isClient) return;
        const handleScroll = () => {
            const offsets = items.map((item) => {
                const section = document.querySelector(item.href);
                if (!section) return { title: item.title, offset: Infinity };

                const rect = section.getBoundingClientRect();
                return { title: item.title, offset: rect.top - SCROLL_MARGIN };
            });

            const lastVisible = offsets.reduce((latest, current) => {
                return current.offset <= 0 ? current : latest;
            });

            setActiveItem(lastVisible.title);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isClient, items]);

    const handleClick = (title: string, href: string) => {
        const targetSection = document.querySelector(href);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        setActiveItem(title);
    };

    return (
        <div
            className={cn(
                "fixed md:hidden left-1/2 -translate-x-1/2 bottom-4 z-50",
                className
            )}
        >
            <div className="flex gap-2 px-1 py-1 justify-center bg-black/20 backdrop-blur-sm rounded-full">
                {items.map((item) => (
                    <div
                        key={item.title}
                        onClick={() => handleClick(item.title, item.href)}
                        className="h-10 w-10 flex items-center justify-center cursor-pointer"
                    >
                        <div
                            className={cn(
                                "h-4 w-4 transition-colors duration-200",
                                activeItem === item.title
                                    ? "text-blue-400 drop-shadow-[0_0_6px_rgba(96,165,250,0.8)]"
                                    : "text-neutral-400 dark:text-neutral-300"
                            )}
                        >
                            {item.icon}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const FloatingDockDesktop = ({
    items,
    className,
}: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    className?: string;
}) => {
    const mouseY = useMotionValue(Infinity);
    const [activeItem, setActiveItem] = useState<string>("");
    const isClient = useIsClient();

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isClient) return;
        const scrollOffset = getScrollPosition();
        mouseY.set(e.clientY + scrollOffset);
    };

    // useEffect(() => {
    //     if (!isClient) return;

    //     const handleScroll = () => {
    //         const viewportThreshold = getViewportHeight() * 0.4;
    //         const offsets = items.map((item) => {
    //             const section = document.querySelector(item.href);
    //             if (!section) return { title: item.title, offset: Infinity };
    //             const rect = section.getBoundingClientRect();
    //             return { title: item.title, offset: rect.top };
    //         });

    //         const activeSection = offsets.reduce((closest, current) => {
    //             const closestInView =
    //                 Math.abs(closest.offset) < viewportThreshold
    //                     ? closest
    //                     : { ...closest, offset: Infinity };
    //             const currentInView =
    //                 Math.abs(current.offset) < viewportThreshold
    //                     ? current
    //                     : { ...current, offset: Infinity };
    //             return Math.abs(currentInView.offset) <
    //                 Math.abs(closestInView.offset)
    //                 ? currentInView
    //                 : closestInView;
    //         });

    //         setActiveItem(activeSection.title);
    //     };

    //     handleScroll();
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, [isClient, items]);

    useEffect(() => {
        if (!isClient) return;

        const handleScroll = () => {
            const offsets = items.map((item) => {
                const section = document.querySelector(item.href);
                if (!section) return { title: item.title, offset: Infinity };
                const rect = section.getBoundingClientRect();
                return { title: item.title, offset: rect.top - SCROLL_MARGIN };
            });

            const lastVisible = offsets.reduce((latest, current) => {
                return current.offset <= 0 ? current : latest;
            });

            setActiveItem(lastVisible.title);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isClient, items]);

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={() => mouseY.set(Infinity)}
            className={cn(
                "mx-auto dark hidden md:flex flex-col h-auto gap-4 items-center rounded-2xl bg-neutral-900 py-4 w-14",
                className
            )}
        >
            {items.map((item) => (
                <IconContainer
                    mouseY={mouseY}
                    key={item.title}
                    {...item}
                    isActive={activeItem === item.title}
                    setActiveItem={setActiveItem}
                />
            ))}
        </motion.div>
    );
};

function IconContainer({
    mouseY,
    title,
    icon,
    href,
    isActive,
    setActiveItem,
}: {
    mouseY: MotionValue;
    title: string;
    icon: React.ReactNode;
    href: string;
    isActive: boolean;
    setActiveItem: (title: string) => void;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);

    const distance = useTransform(mouseY, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? {
            y: 0,
            height: 0,
        };
        const scrollOffset =
            window.scrollY || document.documentElement.scrollTop;
        return val - (bounds.y + scrollOffset) - bounds.height / 2;
    });

    const scale = useTransform(distance, [-100, 0, 100], [1, 1.4, 1]);
    const x = useTransform(distance, [-100, 0, 100], [0, -8, 0]);

    const springConfig = { mass: 0.1, stiffness: 150, damping: 12 };
    const scaleSpring = useSpring(scale, springConfig);
    const xSpring = useSpring(x, springConfig);

    const handleClick = () => {
        const targetSection = document.querySelector(href);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        setActiveItem(title);
    };

    return (
        <motion.div ref={ref} className="relative w-10 h-10">
            {}
            <div onClick={handleClick} className="cursor-pointer">
                <motion.div
                    style={{
                        scale: scaleSpring,
                        x: xSpring,
                    }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className="absolute rounded-full dark bg-gray-200 dark:bg-neutral-800 flex items-center justify-center w-10 h-10 transition-colors duration-200"
                >
                    <motion.div
                        className={cn(
                            "h-4 w-4 transition-colors duration-200",
                            isActive
                                ? "text-blue-400 drop-shadow-[0_0_6px_rgba(96,165,250,0.8)]"
                                : "dark:text-neutral-400"
                        )}
                    >
                        {icon}
                    </motion.div>
                    <AnimatePresence>
                        {hovered && (
                            <motion.div
                                initial={{ opacity: 0, y: 0.5, x: -10 }}
                                animate={{ opacity: 1, y: 0.5, x: -10 }}
                                exit={{ opacity: 0, y: 0.5, x: -10 }}
                                className="absolute right-full px-2 py-0.5 select-none whitespace-nowrap rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 text-xs text-center max-w-xs"
                            >
                                {title}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.div>
    );
}
