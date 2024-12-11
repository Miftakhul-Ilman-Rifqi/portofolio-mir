"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        srcImage: string;
    }[];
    className?: string;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-2 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-1 pb-6",
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    key={item.title}
                    className="relative aspect-square group"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute -inset-2 bg-slate-400/[0.4] rounded-xl"
                                layoutId="hoverBackground"
                                // initial={{ opacity: 0, scale: 0.8 }}
                                // animate={{
                                //     opacity: 1,
                                //     scale: 1.1,
                                //     transition: { duration: 0.2 },
                                // }}
                                // exit={{
                                //     opacity: 0,
                                //     scale: 0.8,
                                //     transition: { duration: 0.15, delay: 0.2 },
                                // }}
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    {/* <Card>
                        <div className="flex flex-col items-center justify-center h-full p-6">
                            <Image
                                src={item.srcImage}
                                alt={item.title}
                                width={200}
                                height={200}
                                sizes="100vw"
                                draggable="false"
                                className="w-24 sm:w-20 md:w-28 lg:w-28 h-auto select-none"
                            />
                            <CardTitle>{item.title}</CardTitle>
                        </div>
                    </Card> */}
                    <Card>
                        <div className="flex flex-col items-center justify-between h-full p-3">
                            <div className="flex-1 flex items-center justify-center w-full">
                                <Image
                                    src={item.srcImage}
                                    alt={item.title}
                                    width={200}
                                    height={200}
                                    draggable="false"
                                    priority
                                    className="w-auto h-auto max-h-24 sm:max-h-48 md:max-h-36 lg:max-h-12 xl:max-h-16 2xl:max-h-28 object-contain select-none"
                                />
                            </div>
                            <CardTitle className="">{item.title}</CardTitle>
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-xl h-full w-full bg-black/60 relative z-20",
                className
            )}
        >
            <div className="relative z-50 h-full">{children}</div>
        </div>
    );
};

export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4
            className={cn(
                // "text-zinc-100 font-bold tracking-wide text-[13px] sm:text-sm md:text-sm lg:text-sm text-center",
                "text-zinc-100 font-bold tracking-wide text-center text-9xl sm:text-lg md:text-lg lg:text-sm xl:text-sm 2xl:text-xl whitespace-nowrap overflow-hidden text-ellipsis px-2 w-full text-[clamp(8px,2vw,14px)]",
                className
            )}
        >
            {children}
        </h4>
    );
};
