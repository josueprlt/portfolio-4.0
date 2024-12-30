"use client"

import { useEffect, useState } from "react";
import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';
import Link from "next/link";
import Image from 'next/image';

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

export default function Images({ project }: HomeProps) {
    const [projet, setProjet] = useState<Project | null>(null);

    useEffect(() => {
        setProjet(project);
    }, [project]);

    if (!projet) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2 className={`${ClimateCrisis.className} text-xl md:text-7xl`}>Images</h2>

            <section className={`${DelaGothicOne.className} flex flex-col gap-4 mt-5 md:mt-10 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}>
                {projet.image.map((img, index) => (
                    <div key={index} className='w-full h-48 rounded-xl overflow-hidden cursor-pointer'>
                        <Image width={5000} height={5000} src={img} alt="Description of the image" className="w-full h-full object-cover" />
                    </div>
                ))}
            </section>
        </div>
    );
}