"use client";

import { useState, useEffect, useRef } from "react";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Dela_Gothic_One } from "next/font/google";
import Title from "@/app/components/ui/title/title";
import Tool from "./tool";

const DelaGothicOne = Dela_Gothic_One({ subsets: ["latin"], weight: ["400"], display: "swap" });

const technos = ["html", "css", "javascript", "sass", "php", "react", "symfony", "bootstrap", "mui", "tailwind", "next", "docker", "github", "vscode", "trello", "figma"];

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
    project: Project | null;
}

export default function Tools({ project }: HomeProps) {
    const [lang, setLang] = useState("fr");
    const [colorMode, setColorMode] = useState("light");
    gsap.registerPlugin(ScrollTrigger);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const savedLanguage = localStorage.getItem("lang") || "fr";
        setLang(savedLanguage);

        const savedColorMode = localStorage.getItem("color-mode") || "light";
        setColorMode(savedColorMode);
    }, [colorMode]);

    useEffect(() => {
        if (sectionRef.current) {
            const toolElements = sectionRef.current.querySelectorAll('.tool-element');
            gsap.fromTo(toolElements,
                { opacity: 0, y: -50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.75,
                    ease: Power2.easeOut,
                    stagger: 0.25,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top center",
                    },
                }
            );
        }
    }, [project]);

    if (!project) {
        return <div>Loading...</div>;
    }

    const filteredTechnos = project.category.filter((cat) => technos.includes(cat.toLowerCase()));

    return (
        <div className={`px-4 md:px-8 pt-10 md:pt-30 ${colorMode === 'light' && 'bg-background text-foreground'} ${colorMode === 'dark' && 'bg-foreground text-background'}`}>
            {lang === 'fr' && <Title className="text-start">Outils</Title>}
            {lang === 'en' && <Title className="text-start">Tools</Title>}

            <section ref={sectionRef} className={`${DelaGothicOne.className} mt-5 flex flex-wrap gap-4 md:mt-10`}>
                {filteredTechnos.map((tech, index) => (
                    <Tool key={index} tech={tech} className="tool-element" />
                ))}
            </section>
        </div>
    );
}