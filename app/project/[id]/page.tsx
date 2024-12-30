"use client"

import { useEffect, useState } from "react";
import { use } from "react";
import Home from '@/app/components/ui/projectPage/home/page';
import Tools from "@/app/components/ui/projectPage/tools/page";
import Description from "@/app/components/ui/projectPage/description/page";
import Images from "@/app/components/ui/projectPage/images/page";
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
            <main className="px-4 md:px-8">
                <Tools project={project} />
                <Description project={project} />
                <Images project={project} />
            </main>
        </>
    );
}
