"use client"
import { useEffect, useRef } from "react";
import { Dela_Gothic_One } from 'next/font/google';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, Power2 } from "gsap";
import Title from "@/app/components/ui/title/title";
import Paragraph from "@/app/components/ui/paragraph/paragraph";
import Button from "@/app/components/ui/button/button";

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
});

interface Project {
    id: number;
    title: string;
    date: string;
    category: string[];
    description: string;
    image: string[];
    link: string | null;
    github: string | null;
}

interface DescriptionProps {
    project: Project | null;
}

export default function Description({ project }: DescriptionProps) {
    gsap.registerPlugin(ScrollTrigger);
    const linkRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!project || !linkRef.current) return;

        document.fonts.ready.then(() => {
            gsap.from(linkRef.current, {
                opacity: 0,
                y: 50,
                duration: 0.75,
                ease: Power2.easeOut,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: linkRef.current,
                    start: "top center",
                },
            });
        });
    }, [project]);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <div className="pt-10 md:pt-36">
            <Title className="text-start">Description</Title>

            <div className={`${DelaGothicOne.className} mt-5 md:mt-10`}>
                <Paragraph
                    text={project.description}
                    className="text-justify md:text-4xl"
                />

                <div className='flex justify-center flex-wrap gap-10 my-10 md:my-32' ref={linkRef}>
                    {project.link == null ? (
                        <Button href="" theme="disabled">Projet pas disponible</Button>
                    ) : (
                        <Button href={project.link} theme="gradient">Visiter le projet</Button>
                    )}
                    {project.github != null && (
                        <Button href={project.github} theme="github">Projet GitHub</Button>
                    )}
                </div>
            </div>
        </div>
    );
}