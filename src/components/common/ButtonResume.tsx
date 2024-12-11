import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import Image from "next/image";

export function ButtonResume() {
    return (
        <div className="flex justify-center text-center pt-3">
            <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black dark:text-white flex items-center space-x-2"
            >
                <Image
                    src="/assets/icon/cv1.webp"
                    alt="Icon"
                    width={100}
                    height={100}
                    className="w-7 h-7"
                    draggable="false"
                    priority
                />
                <span>My CV</span>
            </HoverBorderGradient>
        </div>
    );
}
