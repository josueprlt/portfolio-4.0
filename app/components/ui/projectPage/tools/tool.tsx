import { useRef } from 'react';
import { gsap } from 'gsap';
import { HtmlIcon, CssIcon, JsIcon, SassIcon, PhpIcon, ReactIcon, SymfonyIcon, BootstrapIcon, MuiIcon, TailwindIcon, NextIcon, DockerIcon, GithubIcon, VscodeIcon, TrelloIcon } from "@/app/components/ui/icons";
import Link from "next/link";

interface ToolProps {
    tech: string;
    className: string;
}

const Tool: React.FC<ToolProps> = ({ tech, className }) => {
    const linkRef = useRef<HTMLAnchorElement>(null);
    const iconRef = useRef<SVGSVGElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    const defaultWidth = 48;
    const desktopWidth = 64;

    const handleMouseEnter = () => {
        gsap.to(linkRef.current, {
            width: "auto",
            duration: 0.3,
            ease: "power2.out",
        });
        gsap.to(iconRef.current, {
            scale: 1.2,
            duration: 0.3,
            ease: "power2.out",
        });
        gsap.to(textRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(linkRef.current, {
            width: window.innerWidth >= 768 ? desktopWidth : defaultWidth,
            duration: 0.3,
            ease: "power2.out",
        });
        gsap.to(iconRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
        });
        gsap.to(textRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    return (
        <Link
            href="/filter"
            className={`${className} w-[48px] md:w-[64px] relative group inline-flex items-center gap-2 outline p-2 md:p-4 rounded-lg`}
            ref={linkRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {tech === "html" && (
                <>
                    <div className='relative w-[32px] h-[32px]'>
                        <HtmlIcon ref={iconRef} className="absolute top-0 left-0 w-8 h-8 z-0" />
                    </div>
                    <span ref={textRef} className="text-html opacity-0">{tech}</span>
                </>
            )}
            {tech === "css" && (
                <>
                    <div className='relative w-[32px] h-[32px]'>
                        <CssIcon ref={iconRef} className="absolute top-0 left-0 w-8 h-8 z-0" />
                    </div>
                    <span ref={textRef} className="text-css opacity-0">{tech}</span>
                </>
            )}
            {tech === "javascript" && (
                <>
                    <div className='relative w-[32px] h-[32px]'>
                        <JsIcon ref={iconRef} className="absolute top-0 left-0 w-8 h-8 z-0" />
                    </div>
                    <span ref={textRef} className="text-js opacity-0">{tech}</span>
                </>
            )}
            {tech === "sass" && (
                <>
                    <div className='relative w-[32px] h-[32px]'>
                        <SassIcon ref={iconRef} className="absolute top-0 left-0 w-8 h-8 z-0" />
                    </div>
                    <span ref={textRef} className="text-sass opacity-0">{tech}</span>
                </>
            )}
            {tech === "php" && (
                <>
                    <div className='relative w-[32px] h-[32px]'>
                        <PhpIcon ref={iconRef} className="absolute top-0 left-0 w-8 h-8 z-0" />
                    </div>
                    <span ref={textRef} className="text-php opacity-0">{tech}</span>
                </>
            )}
            {tech === "react" && (
                <>
                    <div className='relative w-[32px] h-[32px]'>
                        <ReactIcon ref={iconRef} className="absolute top-0 left-0 w-8 h-8 z-0" />
                    </div>
                    <span ref={textRef} className="text-react opacity-0">{tech}</span>
                </>
            )}
            {tech === "symfony" && (
                <>
                    <div className='relative w-[32px] h-[32px]'>
                        <SymfonyIcon ref={iconRef} className="absolute top-0 left-0 w-8 h-8 z-0" />
                    </div>
                    <span ref={textRef} className="text-symfony opacity-0">{tech}</span>
                </>
            )}
            {tech === "bootstrap" && (
                <>
                    <div className='relative w-[32px] h-[32px]'>
                        <BootstrapIcon ref={iconRef} className="absolute top-0 left-0 w-8 h-8 z-0" />
                    </div>
                    <span ref={textRef} className="text-bootstrap opacity-0">{tech}</span>
                </>
            )}
            {tech === "mui" && (
                <>
                    <div className='relative w-[32px] h-[32px]'>
                        <MuiIcon ref={iconRef} className="absolute top-0 left-0 w-8 h-8 z-0" />
                    </div>
                    <span ref={textRef} className="text-mui opacity-0">{tech}</span>
                </>
            )}
            {tech === "tailwind" && (
                <>
                    <div className='relative w-[32px] h-[32px]'>
                        <TailwindIcon ref={iconRef} className="absolute top-0 left-0 w-8 h-8 z-0" />
                    </div>
                    <span ref={textRef} className="text-tailwind opacity-0">{tech}</span>
                </>
            )}
            {tech === "next" && (
                <>
                    <div className='relative w-[32px] h-[32px]'>
                        <NextIcon ref={iconRef} className="absolute top-0 left-0 w-8 h-8 z-0" />
                    </div>
                    <span ref={textRef} className="text-next opacity-0">{tech}</span>
                </>
            )}
            {tech === "docker" && (
                <>
                    <div className='relative w-[32px] h-[32px]'>
                        <DockerIcon ref={iconRef} className="absolute top-0 left-0 w-8 h-8 z-0" />
                    </div>
                    <span ref={textRef} className="text-docker opacity-0">{tech}</span>
                </>
            )}
            {tech === "github" && (
                <>
                    <div className='relative w-[32px] h-[32px]'>
                        <GithubIcon ref={iconRef} className="absolute top-0 left-0 w-8 h-8 z-0" />
                    </div>
                    <span ref={textRef} className="text-github opacity-0">{tech}</span>
                </>
            )}
            {tech === "vscode" && (
                <>
                    <div className='relative w-[32px] h-[32px]'>
                        <VscodeIcon ref={iconRef} className="absolute top-0 left-0 w-8 h-8 z-0" />
                    </div>
                    <span ref={textRef} className="text-vscode opacity-0">{tech}</span>
                </>
            )}
            {tech === "trello" && (
                <>
                    <div className='relative w-[32px] h-[32px]'>
                        <TrelloIcon ref={iconRef} className="absolute top-0 left-0 w-8 h-8 z-0" />
                    </div>
                    <span ref={textRef} className="text-docker opacity-0">{tech}</span>
                </>
            )}
        </Link>
    );
};

export default Tool;