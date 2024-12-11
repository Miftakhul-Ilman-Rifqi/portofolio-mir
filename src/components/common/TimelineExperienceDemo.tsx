import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { LinkPreview } from "../ui/link-preview";
import { LinkPreviewTarget } from "../ui/link-preview-target";

export function TimelineExperienceDemo() {
    const data = [
        {
            title: "PT. Duta Hita Jaya",
            content: (
                <>
                    <div className="text-slate-300 dark:text-slate-300 text-base">
                        August 2023 - December 2023
                    </div>
                    <div className="text-slate-300 dark:text-slate-300 text-xl">
                        Fullstack Web Developer{" "}
                        <LinkPreview
                            url="/assets/certificate-it_general-affairs.jpg"
                            imageSrc="/assets/certificate-it_general-affairs.jpg"
                            isStatic
                            width={300}
                            height={300}
                        >
                            (Certificate - IT General Affairs)
                        </LinkPreview>
                    </div>
                    <div className="text-slate-300 pt-5 text-justify dark:text-slate-300 text-lg md:text-xl">
                        I am a student of the Independent Campus Internship
                        program at PT Duta Hita Jaya, where I developed an
                        inventory management web application to support the
                        operations of the{" "}
                        <LinkPreviewTarget
                            url="#magang-ga"
                            imageSrc="/assets/magang/ga/ga-1.png"
                            isStatic
                            width={450}
                            height={450}
                        >
                            General Affairs (GA)
                        </LinkPreviewTarget>{" "}
                        and{" "}
                        <LinkPreviewTarget
                            url="#magang-hse"
                            imageSrc="/assets/magang/hse/hse-2.png"
                            isStatic
                            width={450}
                            height={450}
                        >
                            Health, Safety, and Environment (HSE)
                        </LinkPreviewTarget>{" "}
                        departments. This application modernizes the
                        company&apos;s asset management to be more efficient and
                        structured, with features that are easy to understand
                        thanks to user needs analysis.
                    </div>
                    <div className="text-slate-300 pt-5 text-justify dark:text-slate-300 text-xl">
                        In addition, I also took the initiative to recreate and
                        improve the{" "}
                        <LinkPreviewTarget
                            url="#siaga"
                            imageSrc="/assets/siaga/siaga-1.png"
                            isStatic
                            width={450}
                            height={450}
                        >
                            GA web application as a personal project
                        </LinkPreviewTarget>{" "}
                        , focusing on feature optimization, user experience, as
                        well as the addition of several new features to support
                        broader operational needs.
                    </div>
                </>
            ),
        },
    ];
    return (
        <div id="experience" className="w-full mb-6 dark">
            <Timeline data={data} headTitle="Experience" />
        </div>
    );
}
