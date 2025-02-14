import { useEffect, useRef } from 'react';
import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HtmlIcon, CssIcon, JsIcon, SassIcon, PhpIcon, ReactIcon, SymfonyIcon, BootstrapIcon, MuiIcon, TailwindIcon, NextIcon, DockerIcon, GithubIcon, VscodeIcon } from '@/app/components/ui/icons';

interface Competence {
    id: number;
    title: string;
}

interface CompetenceCardProps {
    competence: Competence;
}

const CompetenceCard: React.FC<CompetenceCardProps> = ({ competence }) => {

    return (
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
    );
};

export default CompetenceCard;