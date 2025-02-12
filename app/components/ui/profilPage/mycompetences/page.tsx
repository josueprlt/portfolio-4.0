"use client"
import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';
import { HtmlIcon, CssIcon, JsIcon, SassIcon, PhpIcon, ReactIcon, SymfonyIcon, BootstrapIcon, MuiIcon, TailwindIcon, NextIcon, DockerIcon, GithubIcon, VscodeIcon } from '@/app/components/ui/icons';
import competences from '@/app/data/competences.json';
import Title from '@/app/components/ui/title/page';

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
    display: 'swap',
});

const technos = ["html", "css", "js", "sass", "php", "react", "symfony", "bootstrap", "mui", "tailwind", "next"];

export default function MyJourney() {
    return (
        <div className={`${ClimateCrisis.className} pt-20 md:pt-60`}>
            <Title className='text-center'>Mes compétences</Title>

            <section className={`${DelaGothicOne.className} flex flex-col gap-4 pt-14 md:pt-40 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}>
                {competences.map((competence) => (
                    <div key={competence.id} className='w-full h-48 flex justify-center items-center rounded-xl border border-2 border-foreground overflow-hidden cursor-pointer'>
                        {competence.title === "html" && <HtmlIcon className='w-40 h-40' />}
                        {competence.title === "css" && <CssIcon className='w-40 h-40' />}
                        {competence.title === "js" && <JsIcon className='w-40 h-40' />}
                        {competence.title === "sass" && <SassIcon className='w-40 h-40' />}
                        {competence.title === "php" && <PhpIcon className='w-40 h-40' />}
                        {competence.title === "react" && <ReactIcon className='w-40 h-40' />}
                        {competence.title === "symfony" && <SymfonyIcon className='w-40 h-40' />}
                        {competence.title === "bootstrap" && <BootstrapIcon className='w-40 h-40' />}
                        {competence.title === "materialui" && <MuiIcon className='w-40 h-40' />}
                        {competence.title === "tailwindcss" && <TailwindIcon className='w-40 h-40' />}
                        {competence.title === "nextjs" && <NextIcon className='w-40 h-40' />}
                        {competence.title === "docker" && <DockerIcon className='w-40 h-40' />}
                        {competence.title === "github" && <GithubIcon className='w-40 h-40' />}
                        {competence.title === "vscode" && <VscodeIcon className='w-40 h-40' />}
                        {/* <p>{competence.title}</p> */}
                    </div>
                ))}
            </section>
        </div>
    );
}