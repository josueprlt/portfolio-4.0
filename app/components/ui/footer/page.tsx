import { useState, useEffect } from "react";
import { BretagneIcon } from "@/app/components/ui/icons";
import { Dela_Gothic_One } from 'next/font/google';
import Link from "next/link";
import information from "@/app/data/version.json";
import ColorSelector from "@/app/components/ui/colorSelector/page";
import LangSelector from "@/app/components/ui/langSelector/page";

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

export default function Footer() {
    const [lang, setLang] = useState("fr");
    const [colorMode, setColorMode] = useState("light");

    useEffect(() => {
        const savedLanguage = localStorage.getItem("lang") || "fr";
        setLang(savedLanguage);

        const savedColorMode = localStorage.getItem("color-mode") || "light";
        setColorMode(savedColorMode);
    }, [colorMode]);

    return (
        <footer className={`${DelaGothicOne.className} bg-foreground px-4 py-5 md:px-8 md:py-8 ${colorMode === 'dark' && 'border-t-2 border-background'} ${colorMode === 'light' && 'border-b-2 border-foreground'}`}>

            <div className="text-center md:flex md:flex-row-reverse md:text-start md:justify-between">
                <div className="flex flex-col items-center text-background md:gap-16 md:items-end">
                    <div className="flex items-center flex-col gap-4 mb-4 md:items-end">
                        <LangSelector lang={lang} />
                        <ColorSelector lang={lang} />
                    </div>

                    <BretagneIcon className="w-10 md:w-28" />
                </div>

                <div className="flex flex-col items-center gap-4 text-background mt-10 md:justify-between md:items-start md:mt-0 md:gap-8">
                    <Link href="https://portfolio-josue.fr/competences/vitrine/index.html" className="underline">
                        {lang === 'fr' && 'Portfolio de compétences'}
                        {lang === 'en' && 'Skills portfolio'}
                    </Link>
                    <p>
                        {lang === 'fr' && information.tools}
                        {lang === 'en' && information.toolsEn}
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center gap-4 text-background mt-10 text-center md:flex-row md:justify-between md:mt-20">
                <p>
                    {lang === 'fr' && information.creator}
                    {lang === 'en' && information.creatorEn}
                </p>
                <p>
                    {lang === 'fr' && information.right}
                    {lang === 'en' && information.rightEn}
                </p>
                <p>Version {information.version}</p>
            </div>
        </footer>
    );
}