"use client"
import {useEffect, useState} from "react";
import Navbar from "@/app/components/ui/navBar/page";
import Image from "next/image";
import localFont from "next/font/local";
import Button from "@/app/components/ui/button/button";

const DelaGothicOne = localFont({
    src: "./fonts/DelaGothicOne-Regular.ttf",
    display: "swap",
});
const Geist = localFont({
    src: "./fonts/GeistVF.woff",
    display: "swap",
});

export default function NotFound() {
    const [colorMode, setColorMode] = useState("light");
    const [lang, setLang] = useState("fr");

    useEffect(() => {
        const savedColorMode = localStorage.getItem("color-mode") || "light";
        setColorMode(savedColorMode);

        const savedLang = localStorage.getItem("lang") || "fr";
        setLang(savedLang);
    }, []);

    return (
        <main
            className={`flex flex-col h-screen p-4 md:p-8 ${colorMode === 'light' ? 'bg-background text-foreground' : 'bg-foreground text-background'}`}>
            <Navbar/>
            <div className="flex-grow flex flex-col justify-between items-center pb-40 md:pb-12">
                <Image
                    src={`/svg/404-${colorMode}.svg`}
                    alt="Illustration pour page non trouvée"
                    width={300}
                    height={300}
                    className="w-72 h-72 md:w-96 md:h-96"
                    priority
                />
                <div className="w-full flex items-center flex-col gap-10 text-center">
                    <h1 className={`${DelaGothicOne.className} text-4xl md:text-5xl font-bold`}>
                        {lang === 'fr' ? "Page Introuvable" : 'Page not found'}
                    </h1>
                    <p className={`${Geist.className} text-base md:text-md`}>
                        {lang === 'fr' ? "Désolé, nous n'avons pas pu trouver la page que vous cherchez." : 'Sorry, we could not find the page you were looking for.'}
                    </p>
                </div>
                <Button href="/" theme={colorMode === 'light' ? 'primary' : 'secondary'}>
                    {lang === 'fr' ? "Retourner à l'accueil" : 'Go to home page'}
                </Button>
            </div>
        </main>
    );
}