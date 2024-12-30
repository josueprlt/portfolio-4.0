"use client"

import { useEffect, useState } from "react";
import { Climate_Crisis, Dela_Gothic_One } from 'next/font/google';
import { HtmlIcon, CssIcon, JsIcon, SassIcon, PhpIcon, ReactIcon, SymfonyIcon, BootstrapIcon, MuiIcon, TailwindIcon, NextIcon } from '@/app/components/ui/icons';

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
    display: 'swap',
});

interface Project {
    id: number;
    title: string;
    date: string;
    category: string[];
    description: string;
    image: string[];
    link: string | null;
}

interface HomeProps {
    project: Project;
}

const technos = ["html", "css", "js", "sass", "php", "react", "symfony", "bootstrap", "mui", "tailwind", "next"];

export default function Tools({ project }: HomeProps) {
    const [projet, setProjet] = useState<Project | null>(null);
    const [filteredTechnos, setFilteredTechnos] = useState<string[]>([]);

    useEffect(() => {
        if (project) {
            setProjet(project);
            const filtered = project.category.filter(cat => technos.includes(cat.toLowerCase()));
            setFilteredTechnos(filtered);
        }
    }, [project]);

    if (!projet) {
        return <div>Loading...</div>;
    }

    return (
        <div className="pt-10 md:pt-30">
            <h2 className={`${ClimateCrisis.className} text-xl md:text-7xl`}>Outils</h2>

            <section className={`${DelaGothicOne.className} mt-5 flex flex-wrap gap-4 md:mt-10`}>
                {filteredTechnos.map((tech, index) => (
                    <div key={index} className='w-max flex items-center gap-2 outline p-2 md:p-4 rounded-lg'>
                        {tech === "html" && (<><HtmlIcon className='w-8 h-8' /> <span className="text-html">{tech}</span></>)}
                        {tech === "css" && (<><CssIcon className='w-8 h-8' /> <span className="text-css">{tech}</span></>)}
                        {tech === "js" && (<><JsIcon className='w-8 h-8' /> <span className="text-js">{tech}</span></>)}
                        {tech === "sass" && (<><SassIcon className='w-8 h-8' /> <span className="text-sass">{tech}</span></>)}
                        {tech === "php" && (<><PhpIcon className='w-8 h-8' /> <span className="text-php">{tech}</span></>)}
                        {tech === "react" && (<><ReactIcon className='w-8 h-8' /> <span className="text-react">{tech}</span></>)}
                        {tech === "symfony" && (<><SymfonyIcon className='w-8 h-8' /> <span className="text-symfony">{tech}</span></>)}
                        {tech === "bootstrap" && (<><BootstrapIcon className='w-8 h-8' /> <span className="text-bootstrap">{tech}</span></>)}
                        {tech === "mui" && (<><MuiIcon className='w-8 h-8' /> <span className="text-materialui">{tech}</span></>)}
                        {tech === "tailwind" && (<><TailwindIcon className='w-8 h-8' /> <span className="text-tailwind">{tech}</span></>)}
                        {tech === "next" && (<><NextIcon className='w-8 h-8' /> <span className="text-symfony">{tech}</span></>)}
                    </div>
                ))}
            </section>
        </div>
    );
}