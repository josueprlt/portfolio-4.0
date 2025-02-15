"use client"
import Card from "./card";
import projects from "@/app/data/projects.json";

export default function Filtered() {

    return (
        <section className='mt-20 flex flex-col gap-6 md:mt-40 sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            {projects.map((project, index) => (
                <Card key={index} title={project.title} href={`/project/${project.id}`} img={project.image[0]} />
            ))}
        </section>
    );
}