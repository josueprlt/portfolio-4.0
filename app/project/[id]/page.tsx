"use client"

import { useEffect, useState, useRef } from "react";
import { use } from "react";
import Home from '@/app/components/ui/projectPage/home/page';
import Tools from "@/app/components/ui/projectPage/tools/page";
import Description from "@/app/components/ui/projectPage/description/page";
import Images from "@/app/components/ui/projectPage/images/page";
import projects from "@/app/data/projects.json";
import Image from "next/image";
import { gsap } from 'gsap';

export default function Page({ params }) {
    const { id } = use(params);
    const [project, setProject] = useState(null);
    const [randomProjects, setRandomProjects] = useState([]);
    const divRefs = useRef([]);

    useEffect(() => {
        const filteredProject = projects.find(project => project.id === parseInt(id));
        setProject(filteredProject);
    }, [id]);

    useEffect(() => {
        const hasReloaded = localStorage.getItem('hasReloaded');
        if (!hasReloaded) {
            localStorage.setItem('hasReloaded', 'true');
            window.location.reload();
        }

        const handlePopState = () => {
            localStorage.removeItem('hasReloaded');
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [id]);

    useEffect(() => {
        const getRandomProjects = () => {
            const shuffled = projects.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, 4);
        };

        setRandomProjects(getRandomProjects());
    }, [id]);

    useEffect(() => {
        divRefs.current.forEach((div, index) => {
            gsap.from(div, {
                opacity: 0.5,
                duration: 0.5,
                ease: "power2.out",
            });
            const handleMouseEnter = () => {
                gsap.to(div, {
                    width: "400px",
                    height: "179px",
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.out",
                });
            };

            const handleMouseLeave = () => {
                gsap.to(div, {
                    width: "110px",
                    height: "70px",
                    opacity: 0.5,
                    duration: 0.5,
                    ease: "power2.out",
                });
            };

            div.addEventListener("mouseenter", handleMouseEnter);
            div.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                div.removeEventListener("mouseenter", handleMouseEnter);
                div.removeEventListener("mouseleave", handleMouseLeave);
            };
        });
    }, [randomProjects]);

    return (
        <>
            <Home project={project} />
            <div className="fixed flex justify-center items-end w-full h-40 z-50">
                <div className="relative w-[455px] h-[70px] mb-4 flex flex-col items-end">
                    <div className="w-full h-full flex items-end flex-row gap-1.5">
                        {randomProjects.map((proj, index) => (
                            <div
                                className="w-[110px] h-full opacity-50"
                                key={index}
                                ref={el => divRefs.current[index] = el}
                            >
                                <Image
                                    width={1000}
                                    height={1000}
                                    src={proj.image[0]}
                                    alt={`Image ${index}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <span className="absolute left-0 -bottom-[4px] w-full h-1 bg-gradient-to-r from-primary to-secondary"></span>
                </div>
            </div>
            <main className="px-4 md:px-8">
                <Tools project={project} />
                <Description project={project} />
                <Images project={project} />
            </main>
        </>
    );
}
