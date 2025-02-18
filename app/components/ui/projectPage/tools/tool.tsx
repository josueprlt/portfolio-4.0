import { HtmlIcon, CssIcon, JsIcon, SassIcon, PhpIcon, ReactIcon, SymfonyIcon, BootstrapIcon, MuiIcon, TailwindIcon, NextIcon, DockerIcon, GithubIcon, VscodeIcon } from "@/app/components/ui/icons";
import Link from "next/link";
interface ToolProps {
    tech: string;
    className: string;
}

const Tool: React.FC<ToolProps> = ({ tech, className }) => {

    return (
        <Link href="/filter" className={`${className} group inline-flex items-center gap-2 outline p-2 md:p-4 rounded-lg`}>
            {tech === "html" && (
                <>
                    <HtmlIcon className="w-8 h-8 z-0" /> <span className="text-html hidden group-hover:block">{tech}</span>
                </>
            )}
            {tech === "css" && (
                <>
                    <CssIcon className="w-8 h-8 z-0" /> <span className="text-css hidden group-hover:block">{tech}</span>
                </>
            )}
            {tech === "javascript" && (
                <>
                    <JsIcon className="w-8 h-8 z-0" /> <span className="text-js hidden group-hover:block">{tech}</span>
                </>
            )}
            {tech === "sass" && (
                <>
                    <SassIcon className="w-8 h-8" /> <span className="text-sass hidden group-hover:block">{tech}</span>
                </>
            )}
            {tech === "php" && (
                <>
                    <PhpIcon className="w-8 h-8" /> <span className="text-php hidden group-hover:block">{tech}</span>
                </>
            )}
            {tech === "react" && (
                <>
                    <ReactIcon className="w-8 h-8" /> <span className="text-react hidden group-hover:block">{tech}</span>
                </>
            )}
            {tech === "symfony" && (
                <>
                    <SymfonyIcon className="w-8 h-8" /> <span className="text-symfony hidden group-hover:block">{tech}</span>
                </>
            )}
            {tech === "bootstrap" && (
                <>
                    <BootstrapIcon className="w-8 h-8" /> <span className="text-bootstrap hidden group-hover:block">{tech}</span>
                </>
            )}
            {tech === "mui" && (
                <>
                    <MuiIcon className="w-8 h-8" /> <span className="text-mui hidden group-hover:block">{tech}</span>
                </>
            )}
            {tech === "tailwind" && (
                <>
                    <TailwindIcon className="w-8 h-8" /> <span className="text-tailwind hidden group-hover:block">{tech}</span>
                </>
            )}
            {tech === "next" && (
                <>
                    <NextIcon className="w-8 h-8" /> <span className="text-next hidden group-hover:block">{tech}</span>
                </>
            )}
            {tech === "docker" && (
                <>
                    <DockerIcon className="w-8 h-8" /> <span className="text-docker hidden group-hover:block">{tech}</span>
                </>
            )}
            {tech === "github" && (
                <>
                    <GithubIcon className="w-8 h-8" /> <span className="text-github hidden group-hover:block">{tech}</span>
                </>
            )}
            {tech === "vscode" && (
                <>
                    <VscodeIcon className="w-8 h-8" /> <span className="text-vscode hidden group-hover:block">{tech}</span>
                </>
            )}
        </Link>
    );
};

export default Tool;