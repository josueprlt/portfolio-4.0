"use client"

import { useState, useEffect, useRef } from "react";
import { ButtonArrowIcon } from "@/app/components/ui/icons";
import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';
import projects from "@/app/data/projects.json";
import { gsap, Power2, Power3, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from 'next/link'
import SplitType from 'split-type';

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
    gsap.registerPlugin(ScrollTrigger);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const ulRef = useRef<HTMLUListElement>(null);
    const liRefs = useRef<HTMLLIElement[]>([]);
    const lineRefs = useRef<HTMLDivElement[]>([]);
    const textRefs = useRef<HTMLParagraphElement[]>([]);
    const arrowIconRefs = useRef<HTMLDivElement[]>([]);

    const [animationsPlayed, setAnimationsPlayed] = useState(false);

    useEffect(() => {
        if (animationsPlayed) return;

        const titleElement = titleRef.current;
        const ulElement = ulRef.current;

        if (titleElement) {
            const split = new SplitType(titleElement, { types: 'chars' });
            gsap.from(split.chars, {
                y: -100,
                duration: 0.75,
                ease: Power2.easeOut,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: titleElement,
                    start: "top center",
                },
            });
        }

        if (ulElement && lineRefs.current.length > 0 && arrowIconRefs.current.length > 0 && textRefs.current.length > 0) {
            const timelineLi = gsap.timeline({
                scrollTrigger: {
                    trigger: ulElement,
                    start: "top center"
                },
            });

            textRefs.current.forEach((_, i) => {
                timelineLi.from(textRefs.current[i], {
                    opacity: 0,
                    x: 100,
                    duration: 0.5,
                    ease: Power2.easeOut,
                }, i * 0.5);

                timelineLi.from(arrowIconRefs.current[i], {
                    opacity: 0,
                    rotate: '180deg',
                    duration: 0.5,
                    ease: Power4.easeOut,
                }, i * 0.5 + 0.5);

                timelineLi.from(lineRefs.current[i], {
                    width: '0%',
                    duration: 0.5,
                    ease: Power3.easeOut,
                }, i * 0.5 + 0.25);
            });
        }

        liRefs.current.forEach(li => {
            if (li) {
                const handleMouseEnter = () => {

                    gsap.from(
                        arrowIconRefs, {
                        rotate: '90deg',
                        duration: .75
                    });
                };

                const handleMouseLeave = () => {
                    gsap.to(arrowIconRefs, { rotate: '0deg', duration: 1 });
                };

                li.addEventListener("mouseenter", handleMouseEnter);
                li.addEventListener("mouseleave", handleMouseLeave);

                return () => {
                    li.removeEventListener("mouseenter", handleMouseEnter);
                    li.removeEventListener("mouseleave", handleMouseLeave);
                };
            }
        });
        console.log(animationsPlayed);
        setAnimationsPlayed(true);
        console.log(animationsPlayed);
    }, [animationsPlayed]);

    return (
        <div className={`${ClimateCrisis.className} pt-20 md:pt-60`}>
            <h2 ref={titleRef} className="text-xl text-center relative z-10 md:text-7xl clip-path">Mon travail</h2>

            <ul ref={ulRef} className={`${DelaGothicOne.className} text-base text-justify pt-14 md:pt-40 md:text-4xl`}>
                {projects.map((project) => (
                    <li ref={(el) => liRefs.current[project.id] = el!} key={project.id} className="relative flex justify-between items-center cursor-pointer">
                        <Link href={`/project/${project.id}`} className="flex justify-between items-center w-full py-5 px-5 md:py-10">
                            <p ref={(el) => textRefs.current[project.id] = el!}>{project.title}</p>
                            <div ref={(el) => arrowIconRefs.current[project.id] = el!}>
                                <ButtonArrowIcon fill="#262330" className="w-4 h-4 md:w-7 md:h-7" />
                            </div>
                        </Link>
                        <span ref={(el) => lineRefs.current[project.id] = el!} className="absolute bottom-0 left-0 block w-full h-0.5 bg-foreground"></span>
                    </li>
                ))}
            </ul>
        </div>
    );
}