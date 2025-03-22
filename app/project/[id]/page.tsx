"use client"

import { useEffect, useState } from "react";
import { use } from "react";
import Home from '@/app/components/ui/projectPage/home/home';
import Tools from "@/app/components/ui/projectPage/tools/tools";
import Description from "@/app/components/ui/projectPage/description/description";
import ProjectBar from "@/app/components/ui/projectPage/projectBar/projectBar";
import Images from "@/app/components/ui/projectPage/images/images";
import projects from "@/app/data/projects.json";

export default function Page({ params }) {
    const { id } = use(params);
    const [project, setProject] = useState(null);

    useEffect(() => {
        const filteredProject = projects.find(project => project.id === parseInt(id));
        setProject(filteredProject);
    }, [id]);

    return (
        <>
            <Home project={project} />
            <ProjectBar id={id} projects={projects} />

            <main className="px-4 md:px-8">
                <Tools project={project} />
                <Description project={project} />
                <Images project={project} />
            </main>
        </>
    );
}
