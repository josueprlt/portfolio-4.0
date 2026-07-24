"use client";
import { useEffect, useState } from 'react';
import Home from '@/app/components/ui/profilPage/home/page';
import AboutMe from "@/app/components/ui/profilPage/aboutme/page";
import MyJourney from "@/app/components/ui/profilPage/myjourney/page";
import MyCompetences from "@/app/components/ui/profilPage/mycompetences/page";
import BusinessCard from "@/app/components/ui/profilPage/businesscard/page";

export default function Page() {
    const [colorMode, setColorMode] = useState("light");

    useEffect(() => {
        const savedColorMode = localStorage.getItem("color-mode") || "light";
        setColorMode(savedColorMode);
    }, [colorMode]);
    return (
        <>
            <Home />
            <main className={`px-4 md:px-8 ${colorMode === 'light' && 'bg-background text-foreground'} ${colorMode === 'dark' && 'bg-foreground text-background'}`}>
                <AboutMe />
                <MyJourney />
                <MyCompetences />
                <BusinessCard />
            </main>
        </>
    );
}
