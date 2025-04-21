"use client"
import { useState, useEffect, useRef } from "react";
import { WrenchIcon, CadreIcon, CalendarIcon, HtmlIcon, CssIcon, JsIcon, SassIcon, DockerIcon, PhpIcon, ReactIcon, SymfonyIcon, VscodeIcon, MuiIcon, TailwindIcon, NextIcon, GithubIcon, BagIcon, PeopleIcon, FigmaIcon, TrelloIcon, DevIcon, VRIcon, CreaIcon } from "@/app/components/ui/icons";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/dropdown";
import { gsap, Power1 } from "gsap";

interface CategoriesProps {
    lang: string,
    colorMode: string,
    selectedCategories: string[];
    onCategoriesSelected: (selectedCategories: string[]) => void;
    onSortByDate: (order: 'asc' | 'desc') => void;
}

export default function Categories({ lang, colorMode, selectedCategories, onCategoriesSelected, onSortByDate }: CategoriesProps) {
    const [tools] = useState(
        [
            { name: "html", icon: <HtmlIcon className="w-6 h-6" /> },
            { name: "css", icon: <CssIcon className="w-6 h-6" /> },
            { name: "javascript", icon: <JsIcon className="w-6 h-6" /> },
            { name: "sass", icon: <SassIcon className="w-6 h-6" /> },
            { name: "php", icon: <PhpIcon className="w-6 h-6" /> },
            { name: "tailwind", icon: <TailwindIcon className="w-6 h-6" /> },
            { name: "material ui", icon: <MuiIcon className="w-6 h-6" /> },
            { name: "react", icon: <ReactIcon className="w-6 h-6" /> },
            { name: "next", icon: <NextIcon className="w-6 h-6" /> },
            { name: "symfony", icon: <SymfonyIcon className="w-6 h-6" /> },
            { name: "docker", icon: <DockerIcon className="w-6 h-6" /> },
            { name: "github", icon: <GithubIcon className="w-6 h-6" /> },
            { name: "vscode", icon: <VscodeIcon className="w-6 h-6" /> },
            { name: "figma", icon: <FigmaIcon className="w-6 h-6" /> },
            { name: "trello", icon: <TrelloIcon className="w-6 h-6" /> },
        ]
    );

    const [cadres] = useState(
        [
            { name: "Personnel", icon: <PeopleIcon className="w-6 h-6" /> },
            { name: "Scolaire", icon: <BagIcon className="w-6 h-6" /> },
            { name: "Dev Web", icon: <DevIcon className="w-6 h-6" /> },
            { name: "vr", icon: <VRIcon className="w-6 h-6" /> },
            { name: "Crea", icon: <CreaIcon className="w-6 h-6" /> }
        ]
    );

    const CategoriesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (CategoriesRef.current) {
            gsap.fromTo(CategoriesRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.5, ease: Power1.easeOut, delay: 0.9 }
            );
        }
    }, []);
    const [selectedDateLabel, setSelectedDateLabel] = useState("Dates");

    const handleSortByDate = (order: 'asc' | 'desc') => {
        setSelectedDateLabel(order === 'desc' ? "Les plus récents" : "Les moins récents");
        onSortByDate(order);
    };

    const handleCategoryClick = (categoryName: string) => {
        const newSelectedCategories = [...selectedCategories, categoryName];
        onCategoriesSelected(newSelectedCategories);
    };

    const isCategorySelected = (categoryName: string) => {
        return selectedCategories.includes(categoryName);
    };

    return (
        <div ref={CategoriesRef} className={`flex items-center overflow-auto mt-4 px-4 gap-2 h-14 rounded-3xl md:h-16 md:mt-9 ${colorMode === 'light' && 'bg-filter'} ${colorMode === 'dark' && 'bg-[#1F1D27]'}`}>
            <ul className="w-full flex justify-around">
                <Dropdown>
                    <DropdownTrigger>
                        <li className="flex items-center p-2 gap-2 cursor-pointer">
                            <WrenchIcon fill={colorMode === 'light' ? '#262330' : '#feefdd'} className="md:w-6 md:h-6" />
                            <p className="font-sans font-bold md:text-xl">
                                {lang === 'fr' && "Outils"}
                                {lang === 'en' && "Tools"}
                            </p>
                        </li>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Outils" className="h-80 overflow-auto">
                        <>
                            {tools.map((tool) => (
                                !isCategorySelected(tool.name) && (
                                    <DropdownItem key={tool.name} onClick={() => handleCategoryClick(tool.name)}>
                                        <div className="flex gap-2 my-1">
                                            {tool.icon}
                                            <p>{tool.name}</p>
                                        </div>
                                    </DropdownItem>
                                )
                            ))}
                        </>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown>
                    <DropdownTrigger>
                        <li className="flex items-center p-2 gap-2 cursor-pointer">
                            <CadreIcon fill={colorMode === 'light' ? '#262330' : '#feefdd'} className="md:w-6 md:h-6" />
                            <p className="font-sans font-bold md:text-xl">
                                {lang === 'fr' && "Cadres"}
                                {lang === 'en' && "Executives"}
                            </p>
                        </li>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Cadres">
                        <>
                            {cadres.map((cadre) => (
                                !isCategorySelected(cadre.name) && (
                                    <DropdownItem key={cadre.name} onClick={() => handleCategoryClick(cadre.name)}>
                                        <div className="flex gap-2 my-1">
                                            {cadre.icon}
                                            <p>{cadre.name}</p>
                                        </div>
                                    </DropdownItem>
                                )
                            ))}
                        </>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown>
                    <DropdownTrigger>
                        <li className="flex items-center p-2 gap-2 cursor-pointer">
                            <CalendarIcon fill={colorMode === 'light' ? '#262330' : '#feefdd'} className="md:w-6 md:h-6" />
                            <p className="font-sans font-bold md:text-xl">{selectedDateLabel}</p>
                        </li>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Dates">
                        <>
                            <DropdownItem onClick={() => handleSortByDate('desc')} key={0}>
                                <div className="my-1">
                                    {lang === 'fr' && "Les plus récents"}
                                    {lang === 'en' && "Most recents"}
                                </div>
                            </DropdownItem>
                            <DropdownItem onClick={() => handleSortByDate('asc')} key={1}>
                                <div className="my-1">
                                    <p>
                                        {lang === 'fr' && "Les moins récents"}
                                        {lang === 'en' && "Least recents"}
                                    </p>
                                </div>
                            </DropdownItem>
                        </>
                    </DropdownMenu>
                </Dropdown>
            </ul>
        </div>
    );
}