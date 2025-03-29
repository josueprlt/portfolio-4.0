"use client"
import { useEffect, useRef, useState } from 'react';
import { gsap, Power2 } from 'gsap';
import Link from 'next/link';
import { Tooltip } from "@nextui-org/tooltip";
import { Dela_Gothic_One } from "next/font/google";

const DelaGothicOne = Dela_Gothic_One({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});

interface Projects {
    id: number;
    title: string;
    image: string[];
}

interface ProjectBarProps {
    id: string;
    projects: Projects[];
}

const ProjectBar: React.FC<ProjectBarProps> = ({ id, projects }) => {
    const [randomProjects, setRandomProjects] = useState<Projects[]>([]);
    const divRefs = useRef<HTMLAnchorElement[]>([]);
    const spanRef = useRef<HTMLSpanElement>(null);
    const fixedDivRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const getRandomProjects = () => {
            const filteredProjects = projects.filter(project => project.id !== parseInt(id));
            const shuffled = filteredProjects.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, 4);
        };

        setRandomProjects(getRandomProjects());
    }, [id, projects]);

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
                    fixedDiv.style.bottom = isMobile ? `365px` : '250px';
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
        <div ref={fixedDivRef} className="fixed bottom-0 flex justify-center items-end w-full h-auto mt-16 z-50">
            <div className="relative w-[300px] h-[35px] mb-4 flex flex-col items-end md:w-[455px] md:h-[70px]">
                <div className="w-full h-full flex items-end flex-row gap-1.5">
                    {randomProjects.map((proj, index) => (
                        <Link
                            key={index}
                            href={`/project/${proj.id}`}
                            className="backdrop-grayscale w-[110px] h-full opacity-50 img-toolbar"
                            ref={el => { if (el) divRefs.current[index] = el! }}
                        >
                            <Tooltip
                                content={`${proj.title}`}
                                className={`${DelaGothicOne.className} bg-foreground text-background text-xs`}
                                showArrow={true}
                            >
                                <img
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
    );
};

export default ProjectBar;