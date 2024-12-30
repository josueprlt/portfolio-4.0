import { ButtonArrowIcon } from "@/app/components/ui/icons";
import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';
import projects from "@/app/data/projects.json";
import Link from 'next/link'

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
    display: 'swap',
});

export default function MyWork() {

    return (
        <div className={`${ClimateCrisis.className} pt-20 md:pt-60`}>
            <h2 className="text-xl text-center relative z-10 md:text-7xl">Mon travail</h2>

            <ul className={`${DelaGothicOne.className} text-base text-justify pt-14 md:pt-40 md:text-4xl`}>
                {projects.map((project) => (
                    <li key={project.id} className="flex justify-between items-center border-b-2 border-foreground cursor-pointer">
                        <Link href={`/project/${project.id}`} className="flex justify-between items-center w-full py-5 px-5 md:py-10">
                            <p>{project.title}</p>
                            <ButtonArrowIcon fill="#262330" className="w-4 h-4 md:w-7 md:h-7" />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}