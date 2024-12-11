"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { TextGenerateEffectDemo } from "./TextGenerateEffectDemo";

export function TypewriterEffectSmoothDemo() {
    const words = [
        {
            text: "Hello, I'm ",
        },
        {
            text: "Miftakhul Ilman Rifqi.",
            className:
                "text-blue-400 drop-shadow-[0_0_6px_rgba(96,165,250,0.4)]",
        },
    ];
    return (
        <div id="typewriter" className="flex flex-col items-center scroll-mt-5">
            <TypewriterEffectSmooth words={words} />
            <TextGenerateEffectDemo />
        </div>
    );
}
