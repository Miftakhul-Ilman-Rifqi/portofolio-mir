import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import Image from "next/image";

export function ButtonSidebarLinkPreview() {
    return (
        <div className="flex justify-center items-center gap-6 mt-4">
            <LinkPreview
                url="https://www.linkedin.com/in/miftakhul-ilman-rifqi-5b9576341/"
                imageSrc="/assets/linkedin-page.png"
                isStatic
            >
                <button className="transform transition-transform duration-200 hover:translate-y-1">
                    <Image
                        src="/assets/icon/linkedin.png"
                        alt="LinkedIn"
                        width={100}
                        height={100}
                        priority
                        className="w-10 h-10 md:w-10 md:h-10"
                        draggable="false"
                    />
                </button>
            </LinkPreview>

            <LinkPreview
                url="https://www.instagram.com/miftakhul_ilman_rifqi/"
                imageSrc="/assets/instagram-page.png"
                isStatic
            >
                <button className="transform transition-transform duration-200 hover:translate-y-1">
                    <Image
                        src="/assets/icon/instagram.png"
                        alt="Instagram"
                        width={100}
                        height={100}
                        priority
                        className="w-10 h-10 md:w-10 md:h-10"
                        draggable="false"
                    />
                </button>
            </LinkPreview>

            <LinkPreview
                url="mailto:miftakhulilman.rifqi432@gmail.com"
                imageSrc="/assets/email-page.png"
                isStatic
            >
                <button className="transform transition-transform duration-200 hover:translate-y-1">
                    <Image
                        src="/assets/icon/email.png"
                        alt="Email"
                        width={100}
                        height={100}
                        priority
                        className="w-10 h-10 md:w-10 md:h-10"
                        draggable="false"
                    />
                </button>
            </LinkPreview>
        </div>
    );
}
