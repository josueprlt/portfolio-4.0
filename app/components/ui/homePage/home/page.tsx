"use client"

import { useEffect } from "react";
import { ArrowIcon } from "@/app/components/ui/icons";
import NavBar from "@/app/components/ui/navBar/page";
import { Climate_Crisis } from 'next/font/google';
import { gsap } from "gsap";

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
    display: 'swap',
});

export default function Home() {
    useEffect(() => {
        // Animation pour déplacer les deux spans du h1
        gsap.fromTo(
            ".animate-span",
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, stagger: 0.2 }
        );

        // Animation pour faire apparaître le span caché du h1
        gsap.to(".hidden-span", { opacity: 1, duration: 1, delay: 1 });
    }, []);

    return (
        <header className={`${ClimateCrisis.className} flex flex-col justify-between h-screen p-4 md:p-8`}>
            <NavBar />
            
            <section className="flex flex-col justify-center items-center gap-16">
                <div className="flex items-center flex-col gap-7">
                    <h1 className="text-3xl flex justify-center items-center flex-wrap gap-4 text-center md:gap-8 md:text-7xl">
                        <span>Josué</span>
                        <span className="hidden w-24 h-24 rounded-full bg-gradient-to-b from-primary to-secondary"></span>
                        <span>Perrault</span>
                    </h1>
                    <span className="w-52 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full md:w-96 md:h-3"></span>
                </div>
                <ArrowIcon className="cursor-pointer" />
            </section>

            <section className="flex justify-between items-center gap-3">
                <h2 className="text-xl md:text-4xl">Portfolio</h2>
                <span className="w-full h-px bg-foreground translate-y-[7px] md:translate-y-[13px]"></span>
                <h2 className="flex items-center gap-2 text-xl before:block before:w-2 before:h-2 before:bg-foreground before:rounded-full before:translate-y-[5px] md:text-4xl md:before:w-4 md:before:h-4 md:before:translate-y-[6px]">2024</h2>
            </section>
        </header>
    );
}