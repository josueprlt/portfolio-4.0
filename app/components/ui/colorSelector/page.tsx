"use client"

import { useEffect, useState } from "react";
import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

interface colorSelectorProps {
    lang: string;
}

const ColorSelector: React.FC<colorSelectorProps> = ({ lang }) => {
    const [colorMode, setColorMode] = useState("light");

    useEffect(() => {
        const savedColorMode = localStorage.getItem("color-mode") || "light";
        setColorMode(savedColorMode);
    }, [colorMode]);

    const handleColorModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedColor = e.target.value;
        setColorMode(selectedColor);
        localStorage.setItem("color-mode", selectedColor);
        window.location.reload();
    };

    return (
        <select
            name="lang"
            id="lang"
            value={colorMode}
            onChange={handleColorModeChange}
            className={`${DelaGothicOne.className} block w-40 mt-1 bg-background text-foreground border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
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
    );
}

export default ColorSelector;