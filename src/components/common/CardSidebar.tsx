"use client";
import React from "react";
import { Meteors } from "../ui/meteors";
import Image from "next/image";
import { ButtonSidebarLinkPreview } from "./ButtonSidebarLinkPreview";
import { ButtonResume } from "./ButtonResume";
import { FlipWordsDemo } from "./FlipWordsDemo";

export function MeteorsDemo() {
    return (
        <div className="w-full">
            <div className="relative">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 pt-8 pb-4 h-full overflow-hidden rounded-3xl flex flex-col items-center select-none">
                    {/* Profile Image */}
                    <div className="relative w-60 h-60 mb-6 z-50">
                        <Image
                            src="/assets/mir.png"
                            alt="Profile"
                            fill
                            sizes="100%"
                            className="rounded-3xl object-cover"
                            priority
                            draggable="false"
                            onContextMenu={(e) => e.preventDefault()}
                        />
                    </div>

                    {/* Name */}
                    <h1 className="font-bold text-4xl md:text-3xl text-blue-400 mb-2 text-center">
                        Miftakhul Ilman Rifqi
                    </h1>

                    {/* Title */}
                    <p className="font-semibold text-2xl md:text-xl text-white mb-2 text-center">
                        Fullstack Web Developer
                    </p>

                    {/* Origin */}
                    <p className="font-semibold text-xl md:text-base text-slate-300 mb-4 text-center">
                        Air Upas, West Kalimantan, Indonesia
                    </p>

                    <ButtonSidebarLinkPreview />
                    <ButtonResume />
                    <FlipWordsDemo />

                    {/* Meteor effect */}
                    <Meteors number={10} />
                </div>
            </div>
        </div>
    );
}
