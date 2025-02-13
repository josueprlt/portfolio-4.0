"use client"
import { Climate_Crisis, Dela_Gothic_One } from 'next/font/google';
import Title from "@/app/components/ui/title/page";
import projects from "@/app/data/projects.json";
import ProjectList from "./projectList";

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
    display: 'swap',
});

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

export default function MyWork() {

    return (
        <div className={`${ClimateCrisis.className} relative mt-20 md:mt-60`} id="works">
            <Title className="text-center">Mon travail</Title>

            <ul id="ul-list" className={`${DelaGothicOne.className} relative text-base text-justify pt-14 md:pt-40 md:text-4xl`}>
                {projects.map((project, index) => (
                    <ProjectList project={project} key={index} />
                ))}
            </ul>
        </div>
    );
}