"use client"
import { useEffect, useRef, useState } from "react";
import { gsap, Power2 } from "gsap";
import Card from "./card";
import { Pagination } from "@heroui/pagination";

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
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 9;

    const handlePageChange = (page: number) => {
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
                    delay: 1.25,
                }
            );
        }
    }, [currentPage]);

    return (
        <>
            {projects.length > 0 ? (
                <>
                    <section ref={sectionRef} className='mt-10 flex flex-col gap-6 md:mt-20 sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
                        {
                            currentProjects.map((project) => (
                                <Card key={project.id} title={project.title} href={`/project/${project.id}`} img={project.image[0]} className="card-element" />
                            ))
                        }
                    </section>
                    <Pagination
                        initialPage={1}
                        page={currentPage}
                        total={Math.ceil(projects.length / projectsPerPage)}
                        className="mt-10"
                    />
                </>
            ) : (
                <section ref={sectionRef} className='mt-10 flex justify-center md:mt-20'>
                    <h1 className='text-2xl font-bold'>Aucun projet ne correspond à votre recherche...</h1>
                </section>
            )}
        </>
    );
}