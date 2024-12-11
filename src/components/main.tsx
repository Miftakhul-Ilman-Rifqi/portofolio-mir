import Image from "next/image";
import { MeteorsDemo } from "./common/CardSidebar";
import { FloatingDockBar } from "./common/FloatingDock";
import { TypewriterEffectSmoothDemo } from "./common/TypewriterEffectSmoothDemo";
import { TimelineDemo } from "./common/TimelineDemo";
import { TimelineExperienceDemo } from "./common/TimelineExperienceDemo";
import { Skills } from "./common/Skills";
import { Projects } from "./common/Projects";

const FloatingDock = () => (
    // <div className="md:w-16  rounded-lg p-2 flex md:flex-col flex-row justify-center gap-4 fixed md:top-1/2 md:-translate-y-1/2 bottom-0 max-md:left-0 mx-auto z-50">
    <div className="md:w-16 rounded-lg p-2 flex md:flex-col flex-row justify-center gap-4 md:fixed md:top-1/2 md:-translate-y-1/2 z-50">
        <FloatingDockBar />
    </div>
);

const Sidebar = () => (
    <div className=" backdrop-blur-sm rounded-lg p-4 md:w-96 w-full md:fixed md:top-1/2 md:-translate-y-1/2">
        <MeteorsDemo />
    </div>
);

const MainContent = () => (
    <div className=" backdrop-blur-sm rounded-3xl p-6">
        <TypewriterEffectSmoothDemo />
        <TimelineDemo />
        <TimelineExperienceDemo />
        <Skills />
        <Projects />
    </div>
);

export default function Main() {
    return (
        <>
            {/* Background dengan gambar blur (kode sebelumnya) */}
            {/* Background dengan multiple gambar */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
                {/* Gambar tengah (ukuran besar) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Image
                        src="/assets/logo/devmir.png"
                        alt="DevMIR Logo Utama"
                        width={600}
                        height={600}
                        className="blur-3xl"
                        priority
                    />
                </div>

                {/* Gambar kecil (kiri atas) */}
                <div className="absolute left-10 top-10">
                    <Image
                        src="/assets/logo/devmir.png"
                        alt="DevMIR Logo"
                        width={100}
                        height={100}
                        className="blur-3xl"
                        priority
                    />
                </div>

                {/* Gambar sedang (kanan atas) */}
                <div className="absolute right-20 top-32">
                    <Image
                        src="/assets/logo/devmir.png"
                        alt="DevMIR Logo"
                        width={200}
                        height={200}
                        className="blur-3xl"
                        priority
                    />
                </div>

                {/* Gambar sedang (kiri bawah) */}
                <div className="absolute bottom-24 left-32">
                    <Image
                        src="/assets/logo/devmir.png"
                        alt="DevMIR Logo"
                        width={180}
                        height={180}
                        className="blur-3xl"
                        priority
                    />
                </div>

                {/* Gambar kecil (kanan bawah) */}
                <div className="absolute bottom-16 right-16">
                    <Image
                        src="/assets/logo/devmir.png"
                        alt="DevMIR Logo"
                        width={120}
                        height={120}
                        className="blur-3xl"
                        priority
                    />
                </div>
            </div>

            {/* Konten yang bisa di-scroll */}
            <main className="relative z-10">
                <div className="container mx-auto py-10 max-h-screen">
                    <div className="flex md:flex-row flex-col gap-6">
                        <div className="md:w-96 shrink-0">
                            <Sidebar />
                        </div>
                        <MainContent />
                        <div className="md:w-16 shrink-0">
                            <FloatingDock />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
