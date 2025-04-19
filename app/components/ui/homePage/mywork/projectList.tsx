import { useEffect, useRef, useState } from "react";
import { ButtonArrowIcon } from "@/app/components/ui/icons";
import { gsap, Power2, Power3, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

interface Project {
    id: number;
    title: string;
    titleEn: string;
    image: string[];
}

interface ProjectListProps {
    lang: string;
    project: Project;
}

const ProjectList: React.FC<ProjectListProps> = ({ lang, project }) => {
    gsap.registerPlugin(ScrollTrigger);
    const liRef = useRef<HTMLLIElement>(null);
    const arrowIconRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const lineRef = useRef<HTMLSpanElement>(null);

    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        const handleMouseEnter = () => {
            if (isAnimating) return;

            const isMobile = window.innerWidth <= 768;
            const paddingValue = isMobile ? "0.25rem 0.25rem" : "1rem 1rem";

            gsap.to(arrowIconRef.current, {
                rotate: "45deg",
                padding: paddingValue,
                duration: 0.75,
                ease: Power2.easeOut,
            });
            gsap.to(imgRef.current, {
                filter: "grayscale(0%) blur(0px) brightness(75%)",
                opacity: 1,
                duration: 0.75,
                ease: Power2.easeOut,
            });
            gsap.to(textRef.current, {
                padding: paddingValue,
                duration: 0.75,
                ease: Power2.easeOut,
            });
        };

        const handleMouseLeave = () => {
            if (isAnimating) return;

            gsap.to(arrowIconRef.current, {
                padding: "0rem 0rem",
                rotate: "0deg",
                duration: 0.75,
                ease: Power2.easeOut,
            });
            gsap.to(imgRef.current, {
                filter: "grayscale(100%) blur(5px) brightness(100%)",
                opacity: 0,
                duration: 0.75,
                ease: Power2.easeOut,
            });
            gsap.to(textRef.current, {
                padding: "0rem 0rem",
                duration: 0.75,
                ease: Power2.easeOut,
            });
        };

        const liElement = liRef.current;
        if (liElement) {
            liElement.addEventListener("mouseenter", handleMouseEnter);
            liElement.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                liElement.removeEventListener("mouseenter", handleMouseEnter);
                liElement.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, [isAnimating]);

    useEffect(() => {
        const liElement = liRef.current;

        if (liElement && lineRef.current && arrowIconRef.current && textRef.current) {
            const timelineLi = gsap.timeline({
                scrollTrigger: {
                    trigger: liElement,
                    start: "top center",
                },
                onComplete: () => setIsAnimating(false),
            });

            timelineLi.fromTo(
                textRef.current,
                { opacity: 0, x: 100, duration: 0.5, ease: Power2.easeOut },
                { opacity: 1, x: 0, duration: 0.5, ease: Power2.easeOut }
            );

            timelineLi.fromTo(
                arrowIconRef.current,
                { opacity: 0, rotate: "180deg", duration: 0.5, ease: Power4.easeOut },
                { opacity: 1, rotate: "0deg", duration: 0.5, ease: Power4.easeOut },
                0.5
            );

            timelineLi.fromTo(
                lineRef.current,
                { width: "0%", duration: 0.5, ease: Power3.easeOut },
                { width: "100%", duration: 0.5, ease: Power3.easeOut },
                0.25
            );
        }
    }, [project]);

    return (
        <li ref={liRef} className="relative flex justify-between items-center cursor-pointer overflow-hidden">
            <Link href={`/project/${project.id}`} className="flex justify-between items-center w-full py-5 px-5 md:py-10">
                <p ref={textRef} className="z-10 p-0 rounded-full bg-background">
                    {lang === "fr" && project.title}
                    {lang === "en" && project.titleEn}
                </p>
                <div ref={arrowIconRef} className="z-10 p-0 rounded-full bg-background">
                    <ButtonArrowIcon fill="#262330" className="w-4 h-4 md:w-7 md:h-7" />
                </div>
                <img
                    ref={imgRef}
                    alt="image de test"
                    src={project.image[0]}
                    className="absolute top-0 right-0 w-full h-full object-cover z-0 opacity-0"
                />
                <span ref={lineRef} className="absolute bottom-0 left-0 block w-full h-0.5 bg-foreground z-10"></span>
            </Link>
        </li>
    );
};

export default ProjectList;
