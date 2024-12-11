"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `A **Fullstack Web Developer** from Air Upas, West Kalimantan, with 1 year of experience. I have developed a company inventory system using **Laravel**, which I then redeveloped as a personal project with **Next.js** and **Express.js**, equipped with **RESTful API**, **JWT**, and a more consistent database structure. I continue to learn and adapt to the latest technologies to expand my knowledge and improve my web development skills.`;

export function TextGenerateEffectDemo() {
    return (
        <TextGenerateEffect
            words={words}
            className="dark text-lg text-justify mb-6 drop-shadow-[0_0_6px_rgba(96,165,250,0.5)]" // mengecilkan font size
            duration={0.7} // mempercepat animasi
        />
    );
}
