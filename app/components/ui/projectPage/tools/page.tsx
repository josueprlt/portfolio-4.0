"use client";

import { useEffect, useState, useRef } from "react";
import { Climate_Crisis, Dela_Gothic_One } from "next/font/google";
import { HtmlIcon, CssIcon, JsIcon, SassIcon, PhpIcon, ReactIcon, SymfonyIcon, BootstrapIcon, MuiIcon, TailwindIcon, NextIcon } from "@/app/components/ui/icons";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

const DelaGothicOne = Dela_Gothic_One({ subsets: ["latin"], weight: ["400"], display: "swap" });
const ClimateCrisis = Climate_Crisis({ subsets: ["latin"], display: "swap" });

const technos = ["html", "css", "js", "sass", "php", "react", "symfony", "bootstrap", "mui", "tailwind", "next"];

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

export default function Tools({ project }: HomeProps) {
    gsap.registerPlugin(ScrollTrigger);

    const [projet, setProjet] = useState<Project | null>(null);
    const [filteredTechnos, setFilteredTechnos] = useState<string[]>([]);
    const toolDivRefs = useRef<HTMLDivElement[]>([]);
    const h1Ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (project) {
            setProjet(project);
            const filtered = project.category.filter((cat) => technos.includes(cat.toLowerCase()));
            setFilteredTechnos(filtered);
        }
    }, [project]);

    useEffect(() => {
        if (document.fonts) {
            document.fonts.ready.then(() => {
                const titleElement = h1Ref.current;
                const divElements = toolDivRefs.current;

                // Animation du titre avec SplitType
                if (titleElement) {
                    const split = new SplitType(titleElement, { types: "chars" });
                    gsap.from(split.chars, {
                        y: -100,
                        duration: 0.75,
                        ease: Power2.easeOut,
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: titleElement,
                            start: "top center",
                        },
                    });
                }

                // Animation des icônes
                if (divElements.length > 0) {
                    gsap.from(divElements, {
                        opacity: 0,
                        x: 50,
                        duration: 0.75,
                        ease: Power2.easeOut,
                        stagger: 0.25,
                        scrollTrigger: {
                            trigger: divElements[0],
                            start: "top center",
                        },
                    });
                }
            });
        }
    }, [filteredTechnos]);

    if (!projet) return <div>Loading...</div>;

    return (
        <div className="pt-10 md:pt-30">
            <h2 ref={h1Ref} className={`${ClimateCrisis.className} text-xl md:text-7xl clip-path`}>
                Outils
            </h2>

            <section className={`${DelaGothicOne.className} mt-5 flex flex-wrap gap-4 md:mt-10`}>
                {filteredTechnos.map((tech, index) => (
                    <div
                        ref={(el) => {
                            if (el) toolDivRefs.current[index] = el;
                        }}
                        key={index}
                        className="flex items-center gap-2 outline p-2 md:p-4 rounded-lg"
                    >
                        {tech === "html" && (
                            <>
                                <HtmlIcon className="w-8 h-8" /> <span className="text-html">{tech}</span>
                            </>
                        )}
                        {tech === "css" && (
                            <>
                                <CssIcon className="w-8 h-8" /> <span className="text-css">{tech}</span>
                            </>
                        )}
                        {tech === "js" && (
                            <>
                                <JsIcon className="w-8 h-8" /> <span className="text-js">{tech}</span>
                            </>
                        )}
                        {tech === "sass" && (
                            <>
                                <SassIcon className="w-8 h-8" /> <span className="text-sass">{tech}</span>
                            </>
                        )}
                        {tech === "php" && (
                            <>
                                <PhpIcon className="w-8 h-8" /> <span className="text-php">{tech}</span>
                            </>
                        )}
                        {tech === "react" && (
                            <>
                                <ReactIcon className="w-8 h-8" /> <span className="text-react">{tech}</span>
                            </>
                        )}
                        {tech === "symfony" && (
                            <>
                                <SymfonyIcon className="w-8 h-8" /> <span className="text-symfony">{tech}</span>
                            </>
                        )}
                        {tech === "bootstrap" && (
                            <>
                                <BootstrapIcon className="w-8 h-8" /> <span className="text-bootstrap">{tech}</span>
                            </>
                        )}
                        {tech === "mui" && (
                            <>
                                <MuiIcon className="w-8 h-8" /> <span className="text-mui">{tech}</span>
                            </>
                        )}
                        {tech === "tailwind" && (
                            <>
                                <TailwindIcon className="w-8 h-8" /> <span className="text-tailwind">{tech}</span>
                            </>
                        )}
                        {tech === "next" && (
                            <>
                                <NextIcon className="w-8 h-8" /> <span className="text-next">{tech}</span>
                            </>
                        )}
                    </div>
                ))}
            </section>
        </div>
    );
}
