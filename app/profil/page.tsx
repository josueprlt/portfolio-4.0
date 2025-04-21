"use client";
import { useEffect, useState } from 'react';
import Home from '@/app/components/ui/profilPage/home/page';
import AboutMe from "@/app/components/ui/profilPage/aboutme/page";
import MyJourney from "@/app/components/ui/profilPage/myjourney/page";
import MyCompetences from "@/app/components/ui/profilPage/mycompetences/page";
import BusinessCard from "@/app/components/ui/profilPage/businesscard/page";

export default function Page() {
    const [language, setLanguage] = useState("fr");
    const [colorMode, setColorMode] = useState("light");

    useEffect(() => {
        const savedLanguage = localStorage.getItem("lang") || "fr";
        setLanguage(savedLanguage);

        const savedColorMode = localStorage.getItem("color-mode") || "light";
        setColorMode(savedColorMode);
    }, [colorMode]);
    return (
        <>
            <Home lang={language} colorMode={colorMode} />
            <main className={`px-4 md:px-8 ${colorMode === 'light' && 'bg-background text-foreground'} ${colorMode === 'dark' && 'bg-foreground text-background'}`}>
                <AboutMe lang={language} colorMode={colorMode} />
                <MyJourney lang={language} colorMode={colorMode} />
                <MyCompetences lang={language} colorMode={colorMode} />
                <BusinessCard lang={language} colorMode={colorMode} />
            </main>
        </>
    );
}
