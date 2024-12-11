import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <HoverEffect items={projects} />
        </div>
    );
}

export const projects = [
    {
        title: "TypeScript",
        srcImage: "/assets/icon/typescript.png",
    },
    {
        title: "NextJS",
        srcImage: "/assets/icon/nextjs.png",
    },
    {
        title: "TailwindCSS",
        srcImage: "/assets/icon/tailwind.png",
    },
    {
        title: "ShadcnUI",
        srcImage: "/assets/icon/shadcn.png",
    },
    {
        title: "AceternityUI",
        srcImage: "/assets/icon/aceternity.png",
    },
    {
        title: "Ant Design",
        srcImage: "/assets/icon/antdesign.png",
    },
    {
        title: "Mantine React Table",
        srcImage: "/assets/icon/mantinereacttable.png",
    },
    {
        title: "Vercel",
        srcImage: "/assets/icon/vercel.png",
    },
    // {
    //     title: "Zustand",
    //     srcImage: "/assets/icon/zustand.png",
    // },
    {
        title: "PrismaORM",
        srcImage: "/assets/icon/prisma.png",
    },
    {
        title: "PostgreSQL",
        srcImage: "/assets/icon/postgresql.png",
    },
    {
        title: "Supabase",
        srcImage: "/assets/icon/supabase.png",
    },
    {
        title: "ExpressJS",
        srcImage: "/assets/icon/expressjs.png",
    },
    {
        title: "Laravel",
        srcImage: "/assets/icon/laravel.png",
    },
    {
        title: "Bootstrap",
        srcImage: "/assets/icon/bootstrap.png",
    },
    {
        title: "MariaDB",
        srcImage: "/assets/icon/mariadb.png",
    },
];
