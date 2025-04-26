"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, Power2 } from "gsap";
import Card from "./card";
import { Pagination } from "@heroui/pagination";

interface Project {
    id: number;
    title: string;
    titleEn: string;
    date: string;
    category: string[];
    description: string;
    image: string[];
    link: string | null;
    github?: string;
}

interface FilteredProps {
    lang: string;
    colorMode: string;
    projects: Project[];
}

export default function Filtered({ lang, colorMode, projects }: FilteredProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage, setProjectsPerPage] = useState(9);

    useEffect(() => {
        if (window.innerWidth < 768) setProjectsPerPage(4);
        if (window.innerWidth >= 768) setProjectsPerPage(6);
        if (window.innerWidth >= 1024) setProjectsPerPage(9);
        if (window.innerWidth >= 1280) setProjectsPerPage(9);
        if (window.innerWidth >= 1536) setProjectsPerPage(15);
    }, []);

    const handlePageChange = (page: number) => {
        const mainElement = document.getElementById('main_filter');
        if (mainElement) {
            mainElement.scrollIntoView({ behavior: 'smooth' });
        }
        setCurrentPage(page);
    };

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

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
                    delay: 0.5,
                }
            );
        }
    }, [currentPage]);

    return (
        <>
            {projects.length > 0 ? (
                <>
                    <section
                        ref={sectionRef}
                        className='mt-10 flex flex-col gap-6 md:mt-20 sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5'
                    >
                        {currentProjects.map((project) => (
                            <Card
                                lang={lang}
                                colorMode={colorMode}
                                key={project.id}
                                title={project.title}
                                titleEn={project.titleEn}
                                href={`/project/${project.id}`}
                                img={project.image[0]}
                            />
                        ))}
                    </section>
                    <div className="flex justify-center mt-20 pb-20 md:pb-60">
                        <Pagination
                            className="bg-background rounded-2xl"
                            page={currentPage}
                            total={Math.ceil(projects.length / projectsPerPage)}
                            onChange={handlePageChange}
                            variant="light"
                            color="secondary"
                        />
                    </div>
                </>
            ) : (
                <section ref={sectionRef} className='mt-10 pb-20 flex justify-center md:mt-20 md:pb-60'>
                    <h1 className='text-2xl font-bold'>Aucun projet ne correspond à votre recherche...</h1>
                </section>
            )}
        </>
    );
}