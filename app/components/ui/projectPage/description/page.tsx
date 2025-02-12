"use client"
import { useEffect, useState, useRef } from "react";
import { Dela_Gothic_One } from 'next/font/google';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, Power2 } from "gsap";
import Title from "@/app/components/ui/title/page";
import Paragraph from "@/app/components/ui/paragraph/page";
import Button from "@/app/components/ui/button/page";

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
}

interface HomeProps {
    project: Project;
}

export default function Description({ project }: HomeProps) {
    gsap.registerPlugin(ScrollTrigger);
    const [projet, setProjet] = useState<Project | null>(null);
    const linkRef = useRef<HTMLElement[]>([]);

    useEffect(() => {
        setProjet(project);
    }, [project]);

    useEffect(() => {
        if (!projet || !linkRef.current) return;

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
    }, [projet]);

    if (!projet) {
        return <div>Loading...</div>;
    }

    return (
        <div className="pt-10 md:pt-36">
            <Title className="text-start">Description</Title>

            <div className={`${DelaGothicOne.className} mt-5 md:mt-10`}>
                <Paragraph
                    text={projet.description}
                    className="text-justify md:text-4xl"
                />

                <div className='flex justify-center my-10 md:my-32' ref={linkRef}>
                    {projet.link == null ? (
                        <Button href="" theme="disabled">Ce projet n'est pas disponible</Button>
                    ) : (
                        <Button href={projet.link} theme="gradient">Visiter le projet</Button>)}
                </div>
            </div>
        </div>
    );
}