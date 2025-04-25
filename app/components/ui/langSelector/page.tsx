"use client"

import { useEffect, useState } from "react";
import { Dela_Gothic_One } from 'next/font/google';

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

const LangSelector = () => {
    const [colorMode, setColorMode] = useState("light");
    const [lang, setLang] = useState("fr");

    useEffect(() => {
        const savedColorMode = localStorage.getItem("color-mode") || "light";
        setColorMode(savedColorMode);

        const savedLang = localStorage.getItem("lang") || "fr";
        setLang(savedLang);
    }, [colorMode, lang]);

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = e.target.value;
        setLang(selectedLanguage);
        localStorage.setItem("lang", selectedLanguage);
        window.location.reload();
    };

    return (
        <div className="relative">
            <div className="absolute top-[2.5px] left-[2.5px] rounded-full overflow-hidden">
                {lang === 'fr' && <img src="/./img/français.png" className="w-[40px] h-[40px]" alt="Drapeau français" />}
                {lang === 'en' && <img src="/./img/anglais.png" className="w-[40px] h-[40px]" alt="Drapeau anglais" />}
            </div>
            <select
                name="lang"
                id="lang"
                value={lang}
                onChange={handleLanguageChange}
                className={`${DelaGothicOne.className} block pr-3 py-2 pl-12 bg-background text-foreground border-2 border-foreground rounded-full shadow-sm cursor-pointer`}
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
        </div>
    );
}

export default LangSelector;