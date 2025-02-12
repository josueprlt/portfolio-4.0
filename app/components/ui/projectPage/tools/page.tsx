"use client";

import { useEffect, useState, useRef } from "react";
import { Climate_Crisis, Dela_Gothic_One } from "next/font/google";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "@/app/components/ui/title/page";
import Tool from "./Tool";

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
                    <Tool key={index} tech={tech} />
                ))}
            </section>
        </div>
    );
}