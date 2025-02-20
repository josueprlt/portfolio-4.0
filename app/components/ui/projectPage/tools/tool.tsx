import { useRef } from 'react';
import { gsap } from 'gsap';
import { HtmlIcon, CssIcon, JsIcon, SassIcon, PhpIcon, ReactIcon, SymfonyIcon, BootstrapIcon, MuiIcon, TailwindIcon, NextIcon, DockerIcon, GithubIcon, VscodeIcon } from "@/app/components/ui/icons";
import Link from "next/link";

interface ToolProps {
    tech: string;
    className: string;
}

const Tool: React.FC<ToolProps> = ({ tech, className }) => {
    const linkRef = useRef<HTMLAnchorElement>(null);
    const iconRef = useRef<SVGSVGElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    const handleMouseEnter = () => {
        gsap.to(iconRef.current, {
            scale: 1.2,
            duration: 0.3,
            ease: "power2.out",
        });
        gsap.to(textRef.current, {
            opacity: 1,
            x: 10,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(iconRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
        });
        gsap.to(textRef.current, {
            opacity: 0,
            x: 0,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    return (
        <Link
            href="/filter"
            className={`${className} relative group inline-flex items-center gap-2 outline p-2 md:p-4 rounded-lg`}
            ref={linkRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {tech === "html" && (
                <>
                    <HtmlIcon ref={iconRef} className="w-8 h-8 z-0" />
                    <span ref={textRef} className="text-html opacity-0">{tech}</span>
                </>
            )}
            {tech === "css" && (
                <>
                    <CssIcon ref={iconRef} className="w-8 h-8 z-0" />
                    <span ref={textRef} className="text-css opacity-0">{tech}</span>
                </>
            )}
            {tech === "javascript" && (
                <>
                    <JsIcon ref={iconRef} className="w-8 h-8 z-0" />
                    <span ref={textRef} className="text-js opacity-0">{tech}</span>
                </>
            )}
            {tech === "sass" && (
                <>
                    <SassIcon ref={iconRef} className="w-8 h-8" />
                    <span ref={textRef} className="text-sass opacity-0">{tech}</span>
                </>
            )}
            {tech === "php" && (
                <>
                    <PhpIcon ref={iconRef} className="w-8 h-8" />
                    <span ref={textRef} className="text-php opacity-0">{tech}</span>
                </>
            )}
            {tech === "react" && (
                <>
                    <ReactIcon ref={iconRef} className="w-8 h-8" />
                    <span ref={textRef} className="text-react opacity-0">{tech}</span>
                </>
            )}
            {tech === "symfony" && (
                <>
                    <SymfonyIcon ref={iconRef} className="w-8 h-8" />
                    <span ref={textRef} className="text-symfony opacity-0">{tech}</span>
                </>
            )}
            {tech === "bootstrap" && (
                <>
                    <BootstrapIcon ref={iconRef} className="w-8 h-8" />
                    <span ref={textRef} className="text-bootstrap opacity-0">{tech}</span>
                </>
            )}
            {tech === "mui" && (
                <>
                    <MuiIcon ref={iconRef} className="w-8 h-8" />
                    <span ref={textRef} className="text-mui opacity-0">{tech}</span>
                </>
            )}
            {tech === "tailwind" && (
                <>
                    <TailwindIcon ref={iconRef} className="w-8 h-8" />
                    <span ref={textRef} className="text-tailwind opacity-0">{tech}</span>
                </>
            )}
            {tech === "next" && (
                <>
                    <NextIcon ref={iconRef} className="w-8 h-8" />
                    <span ref={textRef} className="text-next opacity-0">{tech}</span>
                </>
            )}
            {tech === "docker" && (
                <>
                    <DockerIcon ref={iconRef} className="w-8 h-8" />
                    <span ref={textRef} className="text-docker opacity-0">{tech}</span>
                </>
            )}
            {tech === "github" && (
                <>
                    <GithubIcon ref={iconRef} className="w-8 h-8" />
                    <span ref={textRef} className="text-github opacity-0">{tech}</span>
                </>
            )}
            {tech === "vscode" && (
                <>
                    <VscodeIcon ref={iconRef} className="w-8 h-8" />
                    <span ref={textRef} className="text-vscode opacity-0">{tech}</span>
                </>
            )}
        </Link>
    );
};

export default Tool;