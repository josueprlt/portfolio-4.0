"use client";

import { useEffect, useState, useRef } from "react";
import { Climate_Crisis, Dela_Gothic_One } from "next/font/google";
import { HtmlIcon, CssIcon, JsIcon, SassIcon, PhpIcon, ReactIcon, SymfonyIcon, BootstrapIcon, MuiIcon, TailwindIcon, NextIcon } from "@/app/components/ui/icons";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "@/app/components/ui/title/page";

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
    project: Project | null;
}

export default function Tools({ project }: HomeProps) {
    gsap.registerPlugin(ScrollTrigger);
    const sectionRef = useRef<HTMLElement>(null);
    const [projet, setProjet] = useState<Project | null>(null);
    const [filteredTechnos, setFilteredTechnos] = useState<string[]>([]);

    useEffect(() => {
        if (project) {
            setProjet(project);
            const filtered = project.category.filter((cat) => technos.includes(cat.toLowerCase()));
            setFilteredTechnos(filtered);
        }
    }, [project]);

    const [animationsPlayed, setAnimationsPlayed] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('animationsPlayedTools') === 'true';
        }
        return false;
    });

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.removeItem('animationsPlayedTools');
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    useEffect(() => {
        if (animationsPlayed) return;

        if (document.fonts) {
            document.fonts.ready.then(() => {

                const observer = new MutationObserver(() => {
                    if (sectionRef.current) {
                        const divElements = sectionRef.current.querySelectorAll("div");
                        if (divElements.length > 0) {
                            gsap.from(divElements, {
                                opacity: 0,
                                x: 50,
                                duration: 0.75,
                                ease: Power2.easeOut,
                                stagger: 0.25,
                                scrollTrigger: {
                                    trigger: sectionRef.current,
                                    start: "top center",
                                },
                            });
                            observer.disconnect();
                        }
                    }
                });

                observer.observe(sectionRef.current as HTMLElement, { childList: true, subtree: true });
            });
        }

        setAnimationsPlayed(true);
        localStorage.setItem("animationsPlayedTools", "true");
    }, [animationsPlayed]);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <div className="pt-10 md:pt-30">
            <Title className="text-start">Outils</Title>

            <section ref={sectionRef} className={`${DelaGothicOne.className} mt-5 flex flex-wrap gap-4 md:mt-10`}>
                {filteredTechnos.map((tech, index) => (
                    <div
                        key={index}
                        className="group inline-flex items-center gap-2 outline p-2 md:p-4 rounded-lg"
                    >
                        {tech === "html" && (
                            <>
                                <HtmlIcon className="w-8 h-8 z-0" /> <span className="text-html hidden group-hover:block">{tech}</span>
                            </>
                        )}
                        {tech === "css" && (
                            <>
                                <CssIcon className="w-8 h-8 z-0" /> <span className="text-css hidden group-hover:block">{tech}</span>
                            </>
                        )}
                        {tech === "js" && (
                            <>
                                <JsIcon className="w-8 h-8 z-0" /> <span className="text-js hidden group-hover:block">{tech}</span>
                            </>
                        )}
                        {tech === "sass" && (
                            <>
                                <SassIcon className="w-8 h-8" /> <span className="text-sass hidden group-hover:block">{tech}</span>
                            </>
                        )}
                        {tech === "php" && (
                            <>
                                <PhpIcon className="w-8 h-8" /> <span className="text-php hidden group-hover:block">{tech}</span>
                            </>
                        )}
                        {tech === "react" && (
                            <>
                                <ReactIcon className="w-8 h-8" /> <span className="text-react hidden group-hover:block">{tech}</span>
                            </>
                        )}
                        {tech === "symfony" && (
                            <>
                                <SymfonyIcon className="w-8 h-8" /> <span className="text-symfony hidden group-hover:block">{tech}</span>
                            </>
                        )}
                        {tech === "bootstrap" && (
                            <>
                                <BootstrapIcon className="w-8 h-8" /> <span className="text-bootstrap hidden group-hover:block">{tech}</span>
                            </>
                        )}
                        {tech === "mui" && (
                            <>
                                <MuiIcon className="w-8 h-8" /> <span className="text-mui hidden group-hover:block">{tech}</span>
                            </>
                        )}
                        {tech === "tailwind" && (
                            <>
                                <TailwindIcon className="w-8 h-8" /> <span className="text-tailwind hidden group-hover:block">{tech}</span>
                            </>
                        )}
                        {tech === "next" && (
                            <>
                                <NextIcon className="w-8 h-8" /> <span className="text-next hidden group-hover:block">{tech}</span>
                            </>
                        )}
                    </div>
                ))}
            </section>
        </div>
    );
}
