"use client"
import { useEffect, useState } from "react";
import { Climate_Crisis } from 'next/font/google';
import NavBar from "@/app/components/ui/navBar/page";
import Title from "@/app/components/ui/title/title";

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
    display: 'swap',
});

const Home = () => {
    const [colorMode, setColorMode] = useState("light");
    const [lang, setLang] = useState("fr");

    useEffect(() => {
        const savedColorMode = localStorage.getItem("color-mode") || "light";
        setColorMode(savedColorMode);

        const savedLang = localStorage.getItem("lang") || "fr";
        setLang(savedLang);
    }, [colorMode, lang]);

    return (
        <header className={`${ClimateCrisis.className} flex flex-col p-4 md:p-8 md:pb-0 ${colorMode === 'light' && 'bg-background text-foreground'} ${colorMode === 'dark' && 'bg-foreground text-background'}`}>
            <NavBar />

            {lang === 'fr' && <Title className='mt-2 text-center md:mb-10'>Projets</Title>}
            {lang === 'en' && <Title className='mt-2 text-center md:mb-10'>Projects</Title>}
        </header>
    );
}

export default Home;