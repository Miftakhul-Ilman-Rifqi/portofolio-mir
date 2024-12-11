"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { createPortal } from "react-dom";

const Slider = ({ items }: { items: MediaItem[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollToIndex = (index: number) => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current?.clientWidth || 0;
            sliderRef.current?.scrollTo({
                left: slideWidth * index,
                behavior: "smooth",
            });
        }
    };

    const nextSlide = () => {
        if (currentIndex < items.length - 1) {
            setCurrentIndex((prev) => prev + 1);
            scrollToIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
            scrollToIndex(currentIndex - 1);
        }
    };

    const ZoomableImage = ({
        src,
        alt,
        index,
    }: {
        src: string;
        alt: string;
        index: number;
    }) => {
        const [isZoomed, setIsZoomed] = useState(false);

        const toggleZoom = () => setIsZoomed(!isZoomed);

        return (
            <>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="100vh"
                    priority
                    className="object-contain rounded-lg select-none cursor-zoom-in h-auto"
                    draggable="false"
                    onClick={toggleZoom}
                />

                <AnimatePresence>
                    {isZoomed && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/80 z-[1001]"
                                onClick={toggleZoom}
                            />
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ type: "spring", damping: 15 }}
                                className="fixed inset-0 z-[1002] flex items-center justify-center"
                            >
                                <div className="relative w-screen h-screen">
                                    <Image
                                        src={src}
                                        alt={alt}
                                        fill
                                        sizes="100vh"
                                        className="object-contain cursor-zoom-out p-4"
                                        unoptimized
                                        onClick={toggleZoom}
                                    />
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </>
        );
    };

    return (
        <div className="relative group">
            {}
            <button
                onClick={prevSlide}
                className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 rounded-full p-2 opacity-100 transition-opacity ${
                    currentIndex === 0 ? "invisible" : ""
                }`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#ffffff"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 rounded-full p-2 opacity-100 transition-opacity ${
                    currentIndex === items.length - 1 ? "invisible" : ""
                }`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#ffffff"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                </svg>
            </button>

            {}
            <div
                ref={sliderRef}
                className="flex snap-x snap-mandatory overflow-x-hidden scroll-smooth "
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex-none w-full snap-center px-2"
                    >
                        {}
                        <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden ">
                            {item.type === "video" ? (
                                <iframe
                                    src={item.url}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                                />
                            ) : (
                                <ZoomableImage
                                    src={item.url}
                                    alt={`Screenshot ${index + 1}`}
                                    index={index}
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrentIndex(index);
                            scrollToIndex(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-colors border border-black ${
                            currentIndex === index ? "bg-white" : "bg-white/50"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

interface MediaItem {
    type: "video" | "image";
    url: string;
}

interface Card {
    id: string;
    description: string;
    title: string;
    src: string;
    ctaText: string;
    ctaLink: string;
    mediaItems: MediaItem[];
    techIcons: string[];
}

export default function ExpandableCardDemo() {
    const [active, setActive] = useState<
        (typeof cards)[number] | boolean | null
    >(null);
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);
    const [highlightedId, setHighlightedId] = useState<string | null>(null);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    const Modal = () => (
        <AnimatePresence>
            {active && typeof active === "object" ? (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 z-[999]"
                    />
                    <div className="fixed inset-0 flex items-center justify-center z-[1000] p-4">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{
                                opacity: 0,
                                transition: { duration: 0.05 },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-2xl h-[86vh] sm:h-[80vh] md:h-[87vh] lg:h-[87vh] flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <motion.div
                                layoutId={`image-${active.title}-${id}`}
                                initial={false}
                                className="flex-shrink-0"
                            >
                                <Image
                                    width={500}
                                    height={500}
                                    src={active.src}
                                    alt={active.title}
                                    draggable="false"
                                    loading="eager"
                                    className="select-none w-full h-48 sm:h-56 md:h-64 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                                />
                            </motion.div>

                            <div className="flex flex-col flex-grow overflow-hidden">
                                <div className="flex justify-between items-start p-4">
                                    <div className="mr-4">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-neutral-200 text-lg mb-1"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-400 text-sm md:text-base text-justify"
                                        >
                                            {active.description}
                                        </motion.p>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex gap-2 mt-2"
                                        >
                                            {active.techIcons.map(
                                                (icon, index) => (
                                                    <Image
                                                        key={index}
                                                        src={icon}
                                                        alt={`Tech Icon ${
                                                            index + 1
                                                        }`}
                                                        width={20}
                                                        height={20}
                                                        priority
                                                        className="rounded-lg select-none object-contain w-auto"
                                                        draggable="false"
                                                    />
                                                )
                                            )}
                                        </motion.div>
                                    </div>

                                    <motion.a
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        href={active.ctaLink}
                                        target="_blank"
                                        draggable="false"
                                        className="select-none px-3 py-2 text-xs md:px-4 md:py-3 md:text-sm rounded-full font-bold bg-blue-500 text-white"
                                    >
                                        {active.ctaText}
                                    </motion.a>
                                </div>
                                <div className="flex-grow overflow-hidden">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="h-full overflow-y-auto scrollbar-hide px-4"
                                    >
                                        <div className="space-y-4 pb-4">
                                            <Slider items={active.mediaItems} />
                                            {}
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            ) : null}
        </AnimatePresence>
    );

    return (
        <>
            {}
            {mounted && createPortal(<Modal />, document.body)}

            {}
            <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-1 items-start gap-4 pb-4">
                {cards.map((card) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        initial={false}
                        key={card.title}
                        id={card.id}
                        onClick={() => setActive(card)}
                        className="p-4 flex flex-col hover:bg-neutral-400/40 rounded-xl cursor-pointer"
                    >
                        <div className="flex gap-4 flex-col w-full">
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                                <Image
                                    width={500}
                                    height={500}
                                    src={card.src}
                                    alt={card.title}
                                    draggable="false"
                                    priority
                                    className=" rounded-lg object-cover w-full h-auto select-none"
                                />
                            </motion.div>
                            <div className="flex justify-center items-center flex-col">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-medium text-neutral-200 text-center md:text-left text-base"
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className="text-neutral-400 text-center md:text-left text-base line-clamp-1"
                                >
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

const cards: Card[] = [
    {
        id: "siaga",
        description:
            "SIAGA is a web application designed to simplify the management of goods in the General Affair (GA) department. The system supports efficient and organized inventory recording, monitoring, counting, reporting and management. With SIAGA, manual errors can be minimized and inventory data accuracy can be improved.",
        title: "Sistem Inventarisasi dan Aset General Affair (SIAGA)",
        src: "/assets/siaga/siaga-1.png",
        ctaText: "Visit",
        ctaLink: "https://siaga.mirifqi.my.id",
        mediaItems: [
            {
                type: "video",
                url: "https://www.youtube.com/embed/nV3deSrouj0 ",
            },
            {
                type: "video",
                url: "https://www.youtube.com/embed/xDkXVS1jbU8  ",
            },
            {
                type: "image",
                url: "/assets/siaga/siaga-1.png",
            },
            {
                type: "image",
                url: "/assets/siaga/siaga-2.png",
            },
            {
                type: "image",
                url: "/assets/siaga/siaga-3.png",
            },
            {
                type: "image",
                url: "/assets/siaga/siaga-4.png",
            },
            {
                type: "image",
                url: "/assets/siaga/siaga-5.png",
            },
            {
                type: "image",
                url: "/assets/siaga/siaga-6.png",
            },
            {
                type: "image",
                url: "/assets/siaga/siaga-7.png",
            },
            {
                type: "image",
                url: "/assets/siaga/siaga-8.png",
            },
            {
                type: "image",
                url: "/assets/siaga/siaga-9.png",
            },
            {
                type: "image",
                url: "/assets/siaga/siaga-10.png",
            },
        ],
        techIcons: [
            "/assets/icon/nextjs.png",
            "/assets/icon/mantinereacttable.png",
            "/assets/icon/postgresql.png",
            "/assets/icon/prisma.png",
            "/assets/icon/supabase.png",
            "/assets/icon/vercel.png",
        ],
    },
    {
        id: "portofolio",
        description:
            "Welcome to my portfolio! I'm Miftakhul Ilman Rifqi, a Full-Stack Web Developer",
        title: "Miftakhul Ilman Rifqi - Full Stack Web Developer",
        src: "/assets/porto/portomir-1.png",
        ctaText: "Visit",
        ctaLink: "https://siaga.mirifqi.my.id",
        mediaItems: [
            {
                type: "image",
                url: "/assets/porto/portomir-1.png",
            },
            {
                type: "image",
                url: "/assets/porto/portomir-2.png",
            },
        ],
        techIcons: [
            "/assets/icon/nextjs.png",
            "/assets/icon/typescript.png",
            "/assets/icon/tailwind.png",
            "/assets/icon/vercel.png",
            "/assets/icon/aceternity.png",
        ],
    },
    {
        id: "magang-ga",
        description:
            "The development of a web-based inventory system for PT Duta Hita Jaya replaced the inefficient Excel system. The system makes it easier for employees to create and monitor item requests, speeds up the approval process, reduces data errors, and improves the operational efficiency of the General Affairs Department. This innovative solution creates a more structured and effective work process for the company.",
        title: "Inventory System for General Affair (GA)",
        src: "/assets/magang/ga/ga-1.png",
        ctaText: "Visit",
        ctaLink: "https://demoga.mirifqi.my.id",
        mediaItems: [
            {
                type: "video",
                url: "https://www.youtube.com/embed/YGIogf7XkZU ",
            },
            {
                type: "image",
                url: "/assets/magang/ga/ga-1.png",
            },
            {
                type: "image",
                url: "/assets/magang/ga/ga-2.png",
            },
            // {
            //     type: "image",
            //     url: "/assets/magang/ga/ga-3.png",
            // },
            // {
            //     type: "image",
            //     url: "/assets/magang/ga/ga-4.png",
            // },
            {
                type: "image",
                url: "/assets/magang/ga/ga-5.png",
            },
            {
                type: "image",
                url: "/assets/magang/ga/ga-6.png",
            },
            {
                type: "image",
                url: "/assets/magang/ga/ga-7.png",
            },
            {
                type: "image",
                url: "/assets/magang/ga/ga-8.png",
            },
            {
                type: "image",
                url: "/assets/magang/ga/ga-9.png",
            },
            {
                type: "image",
                url: "/assets/magang/ga/ga-10.png",
            },
        ],
        techIcons: [
            "/assets/icon/laravel.png",
            "/assets/icon/bootstrap.png",
            "/assets/icon/mariadb.png",
        ],
    },
    {
        id: "magang-hse",
        description:
            "The development of a web-based inventory system for the HSE Department of PT Duta Hita Jaya supports more efficient management of safety equipment. This system simplifies the request, monitoring, and management of HSE equipment stock, reduces data errors, and ensures the availability of tools to support work safety in the company.",
        title: "Inventory System for Health, Safety and Environment (HSE) ",
        src: "/assets/magang/hse/hse-2.png",
        ctaText: "Visit",
        ctaLink: "https://demohse.mirifqi.my.id",
        mediaItems: [
            {
                type: "image",
                url: "/assets/magang/hse/hse-1.png",
            },
            {
                type: "image",
                url: "/assets/magang/hse/hse-2.png",
            },
        ],
        techIcons: [
            "/assets/icon/laravel.png",
            "/assets/icon/bootstrap.png",
            "/assets/icon/mariadb.png",
        ],
    },
];
