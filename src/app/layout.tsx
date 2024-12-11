import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import smoothscroll from "smoothscroll-polyfill";

// Aktifkan polyfill hanya di sisi client
if (typeof window !== "undefined") {
    smoothscroll.polyfill();
}

const interRegular = localFont({
    src: "./fonts/InterRegular.woff",
    variable: "--font-inter-regular",
    weight: "100 400",
    preload: false,
});
const interBold = localFont({
    src: "./fonts/InterBold.woff",
    variable: "--font-inter-bold",
    weight: "100 400",
    preload: false,
});

export const metadata: Metadata = {
    title: "Miftakhul Ilman Rifqi | DevMIR",
    description: "Portofolio Miftakhul Ilman Rifqi",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${interRegular.variable} ${interBold.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
