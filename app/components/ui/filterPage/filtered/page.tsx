"use client"
import Card from "./card";
import projects from "@/app/data/projects.json";

export default function Filtered() {

    return (
        <section className='mt-20'>
            {projects.map((project, index) => (
                <Card title={project.title} href={`/project/${project.id}`} img={project.image[0]} />
            ))}
        </section>
    );
}