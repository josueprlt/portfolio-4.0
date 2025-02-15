"use client"
import { useState } from "react";
import { WrenchIcon, CadreIcon, CalendarIcon, HtmlIcon, CssIcon, JsIcon, SassIcon, DockerIcon, PhpIcon, ReactIcon, SymfonyIcon, BootstrapIcon, VscodeIcon, MuiIcon, TailwindIcon, NextIcon, GithubIcon, BagIcon, PeopleIcon } from "@/app/components/ui/icons";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/dropdown";

export default function Categories() {
    const [categories, setCategories] = useState(
        [
            { name: "outils", icon: <WrenchIcon className="md:w-6 md:h-6" /> },
            { name: "cadre", icon: <CadreIcon className="md:w-6 md:h-6" /> },
            { name: "date", icon: <CalendarIcon className="md:w-6 md:h-6" /> }
        ]
    );
    const [tools, setTools] = useState(
        [
            { name: "html", icon: <HtmlIcon className="w-6 h-6" /> },
            { name: "css", icon: <CssIcon className="w-6 h-6" /> },
            { name: "javascript", icon: <JsIcon className="w-6 h-6" /> },
            { name: "sass", icon: <SassIcon className="w-6 h-6" /> },
            { name: "php", icon: <PhpIcon className="w-6 h-6" /> },
            { name: "tailwindcss", icon: <TailwindIcon className="w-6 h-6" /> },
            { name: "material ui", icon: <MuiIcon className="w-6 h-6" /> },
            { name: "react", icon: <ReactIcon className="w-6 h-6" /> },
            { name: "next", icon: <NextIcon className="w-6 h-6" /> },
            { name: "symfony", icon: <SymfonyIcon className="w-6 h-6" /> },
            { name: "docker", icon: <DockerIcon className="w-6 h-6" /> },
            { name: "github", icon: <GithubIcon className="w-6 h-6" /> },
            { name: "vscode", icon: <VscodeIcon className="w-6 h-6" /> }
        ]
    );

    const [cadres, setCadres] = useState(
        [
            { name: "Personnel", icon: <PeopleIcon className="w-6 h-6" /> },
            { name: "Scolaire", icon: <BagIcon className="w-6 h-6" /> }
        ]
    );

    const [dates, setDates] = useState(
        [
            { name: "Les plus récents" },
            { name: "Les moins récents" }
        ]
    );

    return (
        <div className='flex items-center overflow-auto mt-4 px-4 gap-2 h-14 bg-filter rounded-3xl md:h-16 md:mt-9'>
            <ul className="w-full flex justify-around">
                {categories.map((categorie, index) => (
                    <Dropdown key={index}>
                        <DropdownTrigger>
                            <li key={index} className="flex items-center p-2 gap-2 cursor-pointer">
                                {categorie.icon}
                                <p className="font-sans font-bold md:text-xl">{categorie.name}</p>
                            </li>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <>
                                {index === 0 && (
                                    <>
                                        {tools.map((tool, toolIndex) => (
                                            <DropdownItem key={tool.name}>
                                                <div className="flex gap-2 my-1">
                                                    {tool.icon}
                                                    <p>{tool.name}</p>
                                                </div>
                                            </DropdownItem>
                                        ))}
                                    </>
                                )}
                                {index === 1 && (
                                    <>
                                        {cadres.map((cadre, cadreIndex) => (
                                            <DropdownItem key={cadre.name}>
                                                <div className="flex gap-2 my-1">
                                                    {cadre.icon}
                                                    <p>{cadre.name}</p>
                                                </div>
                                            </DropdownItem>
                                        ))}
                                    </>
                                )}
                                {index === 2 && (
                                    <>
                                        {dates.map((date, dateIndex) => (
                                            <DropdownItem key={date.name}>
                                                <div className="my-1">
                                                    <p>{date.name}</p>
                                                </div>
                                            </DropdownItem>
                                        ))}
                                    </>
                                )}
                            </>
                        </DropdownMenu>
                    </Dropdown>
                ))}
            </ul>
        </div>
    );
}