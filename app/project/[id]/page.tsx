"use client"

import { useEffect, useState, useRef } from "react";
import { use } from "react";
import Home from '@/app/components/ui/projectPage/home/page';
import Tools from "@/app/components/ui/projectPage/tools/page";
import Description from "@/app/components/ui/projectPage/description/page";
import Images from "@/app/components/ui/projectPage/images/page";
import projects from "@/app/data/projects.json";
import Image from "next/image";
import { gsap, Power2 } from 'gsap';
import Link from 'next/link';
import { Tooltip } from "@nextui-org/tooltip";
import { Dela_Gothic_One } from "next/font/google";

const DelaGothicOne = Dela_Gothic_One({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});

export default function Page({ params }) {
    const { id } = use(params);
    const [project, setProject] = useState(null);
    const [randomProjects, setRandomProjects] = useState([]);
    const divRefs = useRef([]);
    const spanRef = useRef<HTMLElement>(null);
    const fixedDivRef = useRef<HTMLElement>(null);
    
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
            const filteredProjects = projects.filter(project => project.id !== parseInt(id));
            const shuffled = filteredProjects.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, 4);
        };

        setRandomProjects(getRandomProjects());
    }, [id]);

    useEffect(() => {
        const isMobile = window.innerWidth <= 768;
        
        divRefs.current.forEach((div) => {
            const widthValueEnter = isMobile ? '200px' : '400px';
            const heightValueEnter = isMobile ? '60px' : '120px';
            const handleMouseEnter = () => {
                gsap.to(div, {
                    width: widthValueEnter,
                    height: heightValueEnter,
                    filter: "grayscale(0%)",
                    opacity: 1,
                    duration: 0.5,
                    ease: Power2.easeOut,
                });
                gsap.to(spanRef.current, {
                    opacity: 1,
                    filter: "grayscale(0%)",
                    duration: 0.5,
                    ease: Power2.easeOut,
                });
            };
            
            const handleMouseLeave = () => {
                const widthValueLeave = isMobile ? '75px' : '110px';
                const heightValueLeave = isMobile ? '35px' : '70px';
                gsap.to(div, {
                    width: widthValueLeave,
                    height: heightValueLeave,
                    filter: "grayscale(100%)",
                    opacity: 0.5,
                    duration: 0.5,
                    ease: Power2.easeOut,
                });
                gsap.to(spanRef.current, {
                    opacity: 0.25,
                    filter: "grayscale(100%)",
                    duration: 0.5,
                    ease: Power2.easeOut,
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

    useEffect(() => {
        const isMobile = window.innerWidth <= 768;

        const handleScroll = () => {
            const footer = document.querySelector('footer');
            const fixedDiv = fixedDivRef.current;
            if (footer && fixedDiv) {
                const footerRect = footer.getBoundingClientRect();
                if (footerRect.top <= window.innerHeight) {
                    fixedDiv.style.position = 'absolute';
                    fixedDiv.style.bottom =  isMobile ? `450px` : '354px';
                } else {
                    fixedDiv.style.position = 'fixed';
                    fixedDiv.style.bottom = `0`;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Home project={project} />
            <div ref={fixedDivRef} className="fixed bottom-0 flex justify-center items-end w-full h-auto mt-16 z-50">
                <div className="relative w-[300px] h-[35px] mb-4 flex flex-col items-end md:w-[455px] md:h-[70px]">
                    <div className="w-full h-full flex items-end flex-row gap-1.5">
                        {randomProjects.map((proj, index) => (
                            <Link
                                key={index}
                                href={`/project/${proj.id}`}
                                className="backdrop-grayscale w-[110px] h-full opacity-50 img-toolbar"
                                ref={el => divRefs.current[index] = el}
                            >
                                <Tooltip
                                    content={`${proj.title}`}
                                    className={`${DelaGothicOne.className} bg-foreground text-background text-xs`}
                                    showArrow={true}
                                >
                                    <Image
                                        width={1000}
                                        height={1000}
                                        src={proj.image[0]}
                                        alt={`Image ${index}`}
                                        className="w-full h-full object-cover"
                                    />
                                </Tooltip>
                            </Link>
                        ))}
                    </div>
                    <span ref={spanRef} className="absolute left-0 -bottom-[4px] w-full h-1 bg-gradient-to-r from-primary to-secondary opacity-50 border-toolbar"></span>
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
