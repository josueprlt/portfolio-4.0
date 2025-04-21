"use client"

import { useEffect, useState } from "react";
import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

interface langSelectorProps {
    lang: string;
}

const LangSelector: React.FC<langSelectorProps> = ({ lang }) => {
    const [langSelect, setLangSelect] = useState("fr");

    useEffect(() => {
        const savedLanguage = localStorage.getItem("lang") || "fr";
        setLangSelect(savedLanguage);
    }, []);

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = e.target.value;
        setLangSelect(selectedLanguage);
        localStorage.setItem("lang", selectedLanguage);
        window.location.reload();
    };

    return (
        <select
            name="lang"
            id="lang"
            value={lang}
            onChange={handleLanguageChange}
            className={`${DelaGothicOne.className} block w-40 mt-1 bg-background text-foreground border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
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
    );
}

export default LangSelector;