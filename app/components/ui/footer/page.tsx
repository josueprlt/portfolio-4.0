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

    const [language, setLanguage] = useState("fr");

    useEffect(() => {
        const savedLanguage = localStorage.getItem("lang") || "fr";
        setLanguage(savedLanguage);
    }, []);

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = e.target.value;
        setLanguage(selectedLanguage);
        localStorage.setItem("lang", selectedLanguage);
        window.location.reload();
    };

    return (
        <footer className={`${DelaGothicOne.className} mt-20 md:mt-60 bg-foreground px-4 py-5 md:px-8 md:py-8`}>

            <div className="text-center md:flex md:flex-row-reverse md:text-start md:justify-between">
                <div className="flex flex-col items-center text-background md:gap-16 md:items-end">
                    {/* <input type="checkbox" className="toggle-checkbox hidden" id="toggle" />
                    <label htmlFor="toggle" className="toggle-label block w-14 h-8 rounded-full bg-background cursor-pointer relative">
                        <span className="toggle-span absolute left-1 top-1 w-6 h-6 rounded-full bg-foreground transition-transform duration-300 ease-in-out"></span>
                    </label> */}
                    <select
                        name="lang"
                        id="lang"
                        value={language}
                        onChange={handleLanguageChange}
                        className="block w-40 mt-1 bg-background text-foreground border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    >
                        <option value="fr" className="bg-white text-foreground">
                            Français
                        </option>
                        <option value="en" className="bg-white text-foreground">
                            English
                        </option>
                    </select>
                    <BretagneIcon className="w-10 md:w-28" />
                </div>

                <div className="flex flex-col items-center gap-4 text-background mt-10 md:justify-between md:items-start md:mt-0 md:gap-8">
                    <Link href="https://portfolio-josue.fr/competences/vitrine/index.html" className="underline">Portfolio de compétences</Link>
                    <p>{information.tools}</p>
                    {/* <BretagneIcon className="w-10 md:w-28" /> */}
                </div>
            </div>

            <div className="flex flex-col items-center gap-4 text-background mt-10 text-center md:flex-row md:justify-between md:mt-20">
                <p>{information.creator}</p>
                <p>{information.right}</p>
                <p>Version {information.version}</p>
            </div>
        </footer>
    );
}