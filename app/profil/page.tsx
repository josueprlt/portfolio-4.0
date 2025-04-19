"use client";
import { useEffect, useState } from 'react';
import Home from '@/app/components/ui/profilPage/home/page';
import AboutMe from "@/app/components/ui/profilPage/aboutme/page";
import MyJourney from "@/app/components/ui/profilPage/myjourney/page";
import MyCompetences from "@/app/components/ui/profilPage/mycompetences/page";
import BusinessCard from "@/app/components/ui/profilPage/businesscard/page";

export default function Page() {
    const [language, setLanguage] = useState("fr");

    useEffect(() => {
        const savedLanguage = localStorage.getItem("lang") || "fr";
        setLanguage(savedLanguage);
    }, []);
    return (
        <>
            <Home lang={language} />
            <main className='px-4 md:px-8'>
                <AboutMe lang={language} />
                <MyJourney lang={language} />
                <MyCompetences lang={language} />
                <BusinessCard lang={language} />
            </main>
        </>
    );
}
