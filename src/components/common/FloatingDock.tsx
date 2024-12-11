import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconFolders,
    IconCode,
    IconUser,
    IconBriefcase,
    IconSchool,
} from "@tabler/icons-react";

export function FloatingDockBar() {
    const links = [
        {
            title: "Me",
            icon: <IconUser className="h-full w-full " />,
            href: "#typewriter",
        },
        {
            title: "Education",
            icon: <IconSchool className="h-full w-full " />,
            href: "#timeline",
        },
        {
            title: "Experience",
            icon: <IconBriefcase className="h-full w-full " />,
            href: "#experience",
        },
        {
            title: "Tech Stack",
            icon: <IconCode className="h-full w-full " />,
            href: "#skills",
        },

        {
            title: "Projects",
            icon: <IconFolders className="h-full w-full " />,
            href: "#projects",
        },
    ];
    return (
        <div className="flex items-center justify-center">
            <FloatingDock items={links} />
        </div>
    );
}
