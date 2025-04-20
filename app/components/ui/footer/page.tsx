import { useState, useEffect } from "react";
import { BretagneIcon } from "@/app/components/ui/icons";
import { Dela_Gothic_One } from 'next/font/google';
import Link from "next/link";
import information from "@/app/data/version.json";

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

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = e.target.value;
        setLang(selectedLanguage);
        localStorage.setItem("lang", selectedLanguage);
        window.location.reload();
    };

    const handleColorModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedColor = e.target.value;
        setColorMode(selectedColor);
        localStorage.setItem("color-mode", selectedColor);
        window.location.reload();
    };

    return (
        <footer className={`${DelaGothicOne.className} bg-foreground px-4 py-5 md:px-8 md:py-8 ${colorMode === 'dark' && 'border-t-2 border-background'} ${colorMode === 'light' && 'border-b-2 border-foreground'}`}>

            <div className="text-center md:flex md:flex-row-reverse md:text-start md:justify-between">
                <div className="flex flex-col items-center text-background md:gap-16 md:items-end">
                    <select
                        name="lang"
                        id="lang"
                        value={lang}
                        onChange={handleLanguageChange}
                        className="block w-40 mt-1 bg-background text-foreground border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    >
                        <option value="fr" className="bg-white text-foreground">
                            {lang === 'fr' && 'Français'}
                            {lang === 'en' && 'French'}
                        </option>
                        <option value="en" className="bg-white text-foreground">
                            {lang === 'fr' && 'Anglais'}
                            {lang === 'en' && 'English'}
                        </option>
                    </select>
                    <select
                        name="lang"
                        id="lang"
                        value={colorMode}
                        onChange={handleColorModeChange}
                        className="block w-40 mt-1 bg-background text-foreground border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    >
                        <option value="light" className="bg-white text-foreground">
                            {lang === 'fr' && 'Clair'}
                            {lang === 'en' && 'Light'}
                        </option>
                        <option value="dark" className="bg-white text-foreground">
                            {lang === 'fr' && 'Foncé'}
                            {lang === 'en' && 'Dark'}
                        </option>
                    </select>
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