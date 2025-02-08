"use client"

import { useEffect, useState, useRef } from "react";
import { Climate_Crisis, Dela_Gothic_One } from 'next/font/google';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, Power2 } from "gsap";
import SplitType from "split-type";
import Button from "@/app/components/ui/button/page";

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
});

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
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
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        setProjet(project);
    }, [project]);

    const [animationsPlayed, setAnimationsPlayed] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('animationsPlayedDescription') === 'true';
        }
        return false;
    });

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.removeItem('animationsPlayedDescription');
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    useEffect(() => {
        if (!projet || animationsPlayed || !h1Ref.current) return;

        document.fonts.ready.then(() => {
            const splitTitle = new SplitType(h1Ref.current, { types: "chars" });
            gsap.from(splitTitle.chars, {
                y: -100,
                duration: 0.75,
                ease: Power2.easeOut,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: h1Ref.current,
                    start: "top center",
                },
            });

            const splitDesc = new SplitType(descRef.current, { types: "lines" });
            gsap.from(splitDesc.lines, {
                opacity: 0,
                y: 100,
                duration: 0.75,
                ease: Power2.easeOut,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: descRef.current,
                    start: "top center",
                },
            });

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

        setAnimationsPlayed(true);
        localStorage.setItem("animationsPlayedDescription", "true");
    }, [animationsPlayed, projet]);

    if (!projet) {
        return <div>Loading...</div>;
    }

    return (
        <div className="pt-10 md:pt-36">
            <h2 ref={h1Ref} className={`${ClimateCrisis.className} text-xl md:text-7xl clip-path`}>Description</h2>

            <div className={`${DelaGothicOne.className} mt-5 md:mt-10`}>
                <p ref={descRef} className="text-justify md:text-4xl">{projet.description}</p>

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