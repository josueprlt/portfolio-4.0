"use client"
import { useEffect, useRef } from "react";
import { gsap, Power2 } from "gsap";
import Card from "./card";

interface Project {
    id: string;
    title: string;
    image: string[];
}

interface FilteredProps {
    projects: Project[];
}

export default function Filtered({ projects }: FilteredProps) {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (sectionRef.current) {
            const toolElements = sectionRef.current.querySelectorAll('.card-element');
            gsap.fromTo(toolElements,
                { opacity: 0, scale: 0.5 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: Power2.easeOut,
                    stagger: 0.25,
                    delay: 1.25,
                }
            );
        }
    }, []);

    return (
        <section ref={sectionRef} className='mt-10 flex flex-col gap-6 md:mt-20 sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            {projects.map((project) => (
                <Card key={project.id} title={project.title} href={`/project/${project.id}`} img={project.image[0]} />
            ))}
        </section>
    );
}