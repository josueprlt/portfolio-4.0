"use client"

import { useEffect, useState } from "react";
import NavBar from "@/app/components/ui/navBar/page";
import { Climate_Crisis, Dela_Gothic_One } from 'next/font/google';
import Image from 'next/image';
import { Tooltip } from "@nextui-org/tooltip";

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
    display: 'swap',
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

export default function Home({ project }: HomeProps) {
    const [projet, setProjet] = useState<Project | null>(null);
    const [numberOfItem, setNumberOfItem] = useState<number>(2);

    useEffect(() => {
        setProjet(project);
    }, [project]);

    if (!projet) {
        return <div>Loading...</div>;
    }

    const remainingCount = projet.category.length - numberOfItem;

    return (
        <header className={`${ClimateCrisis.className} flex flex-col p-4 md:p-8`}>
            <NavBar />

            <section className="h-96 flex justify-center items-center relative overflow-hidden mt-20 rounded-2xl after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-foreground after:to-transparent after:z-5 md:justify-start md:items-end md:px-10 md:pb-8 md:after:h-48">

                <div className="md:flex md:flex-row md:justify-between md:items-end md:w-full">
                    <h1 className="relative z-10 text-background text-4xl text-center md:text-7xl md:text-left">{projet.title}</h1>
                    <div className={`${DelaGothicOne.className} absolute flex flex-wrap-reverse gap-2 bottom-0 left-0 z-10 p-2 text-xs md:relative md:w-48 md:justify-end`}>
                        {projet.category.slice(0, numberOfItem).map((cat, index) => (
                            <span key={index} className="bg-background text-foreground px-4 py-2 rounded-full">{cat}</span>
                        ))}
                        {remainingCount > 0 && (
                            <Tooltip content={projet.category.slice(numberOfItem).join(', ')} className={`${DelaGothicOne.className} bg-background color-foreground text-xs`} showArrow={true}>
                                <span className="bg-background text-foreground px-4 py-2 rounded-full">+ {remainingCount}</span>
                            </Tooltip>
                        )}
                    </div>
                </div>
                <Image width={5000} height={5000} src={project.image[0]} alt="Description of the image" className="w-full h-full absolute top-0 left-0 z-0 object-cover" />
            </section>
        </header>
    );
}