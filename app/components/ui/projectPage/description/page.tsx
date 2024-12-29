"use client"

import { useEffect, useState } from "react";
import { ButtonArrowIcon } from '@/app/components/ui/icons';
import { Climate_Crisis, Dela_Gothic_One } from 'next/font/google';
import Link from "next/link";


const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
});

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
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

export default function Description({ project }: HomeProps) {
    const [projet, setProjet] = useState<Project | null>(null);

    useEffect(() => {
        setProjet(project);
    }, [project]);

    if (!projet) {
        return <div>Loading...</div>;
    }

    return (
        <div className="pt-10 md:pt-36">
            <h2 className={`${ClimateCrisis.className} text-xl md:text-7xl`}>Description</h2>

            <div className={`${DelaGothicOne.className} mt-5 md:mt-10`}>
                <p className="text-justify md:text-4xl">{projet.description}</p>

                <div className='flex justify-center my-10 md:my-32'>
                    {projet.link == null ? (
                        <button className="relative bg-gradient-to-r from-primaryGray to-secondaryGray text-background px-3 py-2 rounded-full pr-12 cursor-not-allowed md:px-4 md:py-3 md:pr-14 md:text-xl">
                            Ce projet n'est pas disponible
                            <div className="absolute top-1 right-1 w-8 h-8 rounded-full flex justify-center items-center bg-background md:top-[6px] md:right-[6px] md:w-10 md:h-10">
                                <ButtonArrowIcon fill="#262330" className="w-3 md:w-5" />
                            </div>
                        </button>
                    ) : (
                        <Link href={projet.link} className="relative bg-gradient-to-r from-primary to-secondary text-background px-3 py-2 rounded-full pr-12 md:px-4 md:py-3 md:pr-14 md:text-xl">
                            Accèder au projet
                            <div className="absolute top-1 right-1 w-8 h-8 rounded-full flex justify-center items-center bg-background md:top-[6px] md:right-[6px] md:w-10 md:h-10">
                                <ButtonArrowIcon fill="#262330" className="w-3 md:w-5" />
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}