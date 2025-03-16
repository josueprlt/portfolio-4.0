"use client";

import { useEffect, useRef } from "react";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Dela_Gothic_One } from "next/font/google";
import Title from "@/app/components/ui/title/page";
import Tool from "./tool";

const DelaGothicOne = Dela_Gothic_One({ subsets: ["latin"], weight: ["400"], display: "swap" });

const technos = ["html", "css", "javascript", "sass", "php", "react", "symfony", "bootstrap", "mui", "tailwind", "next", "docker", "github", "vscode", "trello"];

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

    useEffect(() => {
        if (sectionRef.current) {
            const toolElements = sectionRef.current.querySelectorAll('.tool-element');
            gsap.fromTo(toolElements,
                { opacity: 0, x: 50 },
                {
                    opacity: 1,
                    x: 0,
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
        <div className="pt-10 md:pt-30">
            <Title className="text-start">Outils</Title>

            <section ref={sectionRef} className={`${DelaGothicOne.className} mt-5 flex flex-wrap gap-4 md:mt-10`}>
                {filteredTechnos.map((tech, index) => (
                    <Tool key={index} tech={tech} className="tool-element" />
                ))}
            </section>
        </div>
    );
}