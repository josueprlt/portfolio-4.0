"use client"

import { useEffect, useState } from "react";
import { Dela_Gothic_One } from 'next/font/google';
import { SunIcon, MoonIcon } from '@/app/components/ui/icons';

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

const ColorSelector = () => {
    const [colorMode, setColorMode] = useState("light");
    const [lang, setLang] = useState("fr");

    useEffect(() => {
        const savedColorMode = localStorage.getItem("color-mode") || "light";
        setColorMode(savedColorMode);

        const savedLang = localStorage.getItem("lang") || "fr";
        setLang(savedLang);
    }, [colorMode, lang]);

    const handleColorModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedColor = e.target.value;
        setColorMode(selectedColor);
        localStorage.setItem("color-mode", selectedColor);
        window.location.reload();
    };

    return (
        <div className="relative">
            <div className="absolute top-[14px] left-[14px] rounded-full overflow-hidden">
                {colorMode === 'light' && <SunIcon />}
                {colorMode === 'dark' && <MoonIcon />}
            </div>
            <select
                name="lang"
                id="lang"
                value={colorMode}
                onChange={handleColorModeChange}
                className={`${DelaGothicOne.className} block pr-3 py-2 pl-10 bg-background text-foreground border-2 border-foreground rounded-full cursor-pointer`}
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
        </div>
    );
}

export default ColorSelector;