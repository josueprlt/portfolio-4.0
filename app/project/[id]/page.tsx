"use client"

import { useEffect, useState } from "react";
import Home from '@/app/components/ui/projectPage/home/home';
import Tools from "@/app/components/ui/projectPage/tools/tools";
import Description from '@/app/components/ui/projectPage/description/description';
import ProjectBar from '@/app/components/ui/projectPage/projectBar/projectBar';
import Images from '@/app/components/ui/projectPage/images/images';
import projects from '@/app/data/projects.json';

interface Params {
    id: string;
}

interface Project {
    id: number;
    title: string;
    date: string;
    category: string[];
    description: string;
    image: string[];
    link: string | null;
    github: string | null;
}

interface PageProps {
    params: Promise<Params>;
}

export default function Page({ params }: PageProps) {
    const [project, setProject] = useState<Project | null>(null);
    const [resolvedParams, setResolvedParams] = useState<Params | null>(null);

    useEffect(() => {
        async function fetchParams() {
            const resolvedParams = await params;
            setResolvedParams(resolvedParams);
        }
        fetchParams();
    }, [params]);

    useEffect(() => {
        if (resolvedParams) {
            const { id } = resolvedParams;
            const filteredProject = projects.find(project => project.id === parseInt(id));
            setProject(filteredProject || null);
        }
    }, [resolvedParams]);

    return (
        <>
            <Home project={project} />
            <ProjectBar id={resolvedParams?.id || ''} projects={projects} />

            <main className="px-4 md:px-8">
                <Tools project={project} />
                <Description project={project} />
                <Images project={project} />
            </main>
        </>
    );
}