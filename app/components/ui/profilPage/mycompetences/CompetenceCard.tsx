import { useEffect, useRef } from 'react';
import { gsap, Power2 } from 'gsap';
import { HtmlIcon, CssIcon, JsIcon, SassIcon, PhpIcon, ReactIcon, SymfonyIcon, BootstrapIcon, MuiIcon, TailwindIcon, NextIcon, DockerIcon, GithubIcon, VscodeIcon, BoxArrowIcon, TrelloIcon, FigmaIcon } from '@/app/components/ui/icons';
import Link from "next/link";

interface Competence {
    id: number;
    title: string;
}

interface CompetenceCardProps {
    lang: string;
    colorMode: string;
    competence: Competence;
}

const CompetenceCard: React.FC<CompetenceCardProps> = ({ lang, colorMode, competence }) => {
    const iconRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLParagraphElement>(null);
    const linkRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        if (iconRef.current && titleRef.current && linkRef.current) {
            gsap.set(iconRef.current, { scale: 1 });
            gsap.set(titleRef.current, { y: 0 });
            gsap.set(linkRef.current, { y: 0 });

            const tl = gsap.timeline({ paused: true });
            tl.to(iconRef.current, { scale: 0.5, duration: 0.3, ease: Power2.easeOut }, 0)
                .to(titleRef.current, { y: 50, duration: 0.3, ease: Power2.easeOut }, 0)
                .to(linkRef.current, { y: -50, duration: 0.3, ease: Power2.easeOut }, 0);

            const card = iconRef.current.closest('.competence-element');
            if (card) {
                card.addEventListener('mouseenter', () => tl.play());
                card.addEventListener('mouseleave', () => tl.reverse());
            }
        }
    }, []);

    return (
        <div key={competence.id} className={`competence-element relative w-full h-48 flex justify-center items-center rounded-xl border border-2 overflow-hidden ${colorMode === 'light' && 'border-foreground'} ${colorMode === 'dark' && 'border-background'}`}>
            <p ref={titleRef} className='absolute -top-10 text-xl capitalize'>{competence.title}</p>
            <div ref={iconRef}>
                {competence.title === "html" && <HtmlIcon className='w-32 h-32' />}
                {competence.title === "css" && <CssIcon className='w-32 h-32' />}
                {competence.title === "javascript" && <JsIcon className='w-32 h-32' />}
                {competence.title === "sass" && <SassIcon className='w-32 h-32' />}
                {competence.title === "php" && <PhpIcon className='w-32 h-32' />}
                {competence.title === "react" && <ReactIcon className='w-32 h-32' />}
                {competence.title === "symfony" && <SymfonyIcon className='w-32 h-32' />}
                {competence.title === "bootstrap" && <BootstrapIcon className='w-32 h-32' />}
                {competence.title === "materialui" && <MuiIcon className='w-32 h-32' />}
                {competence.title === "tailwindcss" && <TailwindIcon className='w-32 h-32' />}
                {competence.title === "nextjs" && <NextIcon className='w-32 h-32' />}
                {competence.title === "docker" && <DockerIcon className='w-32 h-32' />}
                {competence.title === "github" && <GithubIcon className='w-32 h-32' />}
                {competence.title === "vscode" && <VscodeIcon className='w-32 h-32' />}
                {competence.title === "trello" && <TrelloIcon className='w-32 h-32' />}
                {competence.title === "figma" && <FigmaIcon className='w-32 h-32' />}
            </div>
            <Link ref={linkRef} href="/filter" className={`absolute -bottom-10 text-sm flex items-center gap-2 px-2 py-1 rounded-full ${colorMode === 'light' && 'text-background bg-foreground'} ${colorMode === 'dark' && 'text-foreground bg-background'}`}>
                {lang === 'fr' && 'Voir projets associés'}
                {lang === 'en' && 'See related projects'}
                <BoxArrowIcon fill={colorMode === 'light' ? '#FEEFDD' : '#262330'} />
            </Link>
        </div>
    );
};

export default CompetenceCard;