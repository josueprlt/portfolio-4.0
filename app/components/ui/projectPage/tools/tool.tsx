import { useRef } from 'react';
import { gsap } from 'gsap';
import { HtmlIcon, CssIcon, JsIcon, SassIcon, PhpIcon, ReactIcon, SymfonyIcon, BootstrapIcon, MuiIcon, TailwindIcon, NextIcon, DockerIcon, GithubIcon, VscodeIcon, TrelloIcon, FigmaIcon } from "@/app/components/ui/icons";
import Link from "next/link";

interface ToolProps {
    tech: string;
    className: string;
}

const iconMapping = {
    html: { icon: HtmlIcon, colorClass: 'text-html' },
    css: { icon: CssIcon, colorClass: 'text-css' },
    javascript: { icon: JsIcon, colorClass: 'text-javascript' },
    sass: { icon: SassIcon, colorClass: 'text-sass' },
    php: { icon: PhpIcon, colorClass: 'text-php' },
    react: { icon: ReactIcon, colorClass: 'text-react' },
    symfony: { icon: SymfonyIcon, colorClass: 'text-symfony' },
    bootstrap: { icon: BootstrapIcon, colorClass: 'text-bootstrap' },
    mui: { icon: MuiIcon, colorClass: 'text-mui' },
    tailwind: { icon: TailwindIcon, colorClass: 'text-tailwind' },
    next: { icon: NextIcon, colorClass: 'text-next' },
    docker: { icon: DockerIcon, colorClass: 'text-docker' },
    github: { icon: GithubIcon, colorClass: 'text-github' },
    vscode: { icon: VscodeIcon, colorClass: 'text-vscode' },
    trello: { icon: TrelloIcon, colorClass: 'text-trello' },
    figma: { icon: FigmaIcon, colorClass: 'text-figma' },
};

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

    const { icon: IconComponent, colorClass } = iconMapping[tech] || {};

    return (
        <Link
            href="/filter"
            className={`${className} w-[48px] md:w-[64px] relative group inline-flex items-center gap-2 outline p-2 md:p-4 rounded-lg`}
            ref={linkRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {IconComponent && (
                <>
                    <div className='relative w-[32px] h-[32px]'>
                        <IconComponent ref={iconRef} className="absolute top-0 left-0 w-8 h-8 z-0" />
                    </div>
                    <span ref={textRef} className={`${colorClass} opacity-0`}>{tech}</span>
                </>
            )}
        </Link>
    );
};

export default Tool;