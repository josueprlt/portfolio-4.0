"use client"

import { useState, useEffect, useRef } from "react";
import { ButtonArrowIcon } from "@/app/components/ui/icons";
import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';
import projects from "@/app/data/projects.json";
import { gsap, Power2, Power3, Power4, Elastic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from 'next/link'
import SplitType from 'split-type';
import Image from "next/image";

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
    const imageDivRef = useRef<HTMLDivElement>(null);
    const [triggerWork, setTriggerWork] = useState<number>(115);

    const [animationsPlayed, setAnimationsPlayed] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('animationsPlayedWork') === 'true';
        }
        return false;
    });

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.removeItem('animationsPlayedWork');
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    useEffect(() => {
        let ul = document.querySelector('#ul-list');

        if (liRefs.current.length > 0 && arrowIconRefs.current.length > 0) {
            liRefs.current.forEach((li, i) => {
                const handleMouseEnter = () => {
                    gsap.to(arrowIconRefs.current[i], {
                        rotate: '45deg',
                        duration: 0.75,
                        ease: Power2.easeOut,
                    });
                    gsap.from(imageDivRef.current, {
                        filter: "blur(2px)",
                        duration: 0.5,
                        ease: Power2.easeOut,
                    });
                    gsap.to(imageDivRef.current, {
                        filter: "blur(0px)",
                        opacity: 1,
                        duration: 0.5,
                        ease: Power2.easeOut,
                    });
                    imageDivRef.current!.style.backgroundImage = `url(${projects[i - 1].image[0]})`;
                };

                const handleMouseLeave = () => {
                    gsap.to(arrowIconRefs.current[i], {
                        rotate: '0deg',
                        duration: 0.75,
                        ease: Power2.easeOut,
                    });
                    gsap.to(imageDivRef.current, {
                        opacity: 0,
                        duration: 0.5,
                        ease: Power2.easeOut,
                    });
                };

                const handleMouseMove = (e: MouseEvent) => {
                    const y = i * triggerWork;

                    gsap.to(imageDivRef.current, {
                        y: y,
                        duration: 1,
                        ease: Elastic.easeOut.config(1, 0.3),
                    });
                };

                li.addEventListener("mouseenter", handleMouseEnter);
                li.addEventListener("mouseleave", handleMouseLeave);
                li.addEventListener("mousemove", handleMouseMove);

                return () => {
                    li.removeEventListener("mouseenter", handleMouseEnter);
                    li.removeEventListener("mouseleave", handleMouseLeave);
                    li.removeEventListener("mousemove", handleMouseMove);
                };
            });
        }
    })

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

        setAnimationsPlayed(true);
        localStorage.setItem('animationsPlayedWork', 'true');
    }, [animationsPlayed]);

    return (
        <div className={`${ClimateCrisis.className} relative mt-20 md:mt-60`} id="competences">
            <h2 ref={titleRef} className="text-xl text-center relative z-10 md:text-7xl clip-path">Mon travail</h2>

            <ul ref={ulRef} id="ul-list" className={`${DelaGothicOne.className} relative text-base text-justify pt-14 md:pt-40 md:text-4xl`}>
                {projects.map((project, index) => (
                    <li ref={(el) => liRefs.current[project.id] = el!} key={project.id} id={`li-work-${index}`} className="relative flex justify-between items-center cursor-pointer">
                        <Link href={`/project/${project.id}`} className="flex justify-between items-center w-full py-5 px-5 md:py-10">
                            <p ref={(el) => textRefs.current[project.id] = el!}>{project.title}</p>
                            <div ref={(el) => arrowIconRefs.current[project.id] = el!}>
                                <ButtonArrowIcon fill="#262330" className="w-4 h-4 md:w-7 md:h-7" />
                            </div>
                        </Link>
                        <span ref={(el) => lineRefs.current[project.id] = el!} className="absolute bottom-0 left-0 block w-full h-0.5 bg-foreground"></span>
                    </li>
                ))}
                {/* <li ref={(el) => liRefs.current[projects[0].id] = el!} className="relative h-[120px] flex justify-between items-center cursor-pointer">
                    <Link href={`/project/${projects[0].id}`} className="flex justify-between items-center w-full py-5 px-5 md:py-10">
                        <p ref={(el) => textRefs.current[projects[0].id] = el!} className="z-10">{projects[0].title}</p>
                        <div ref={(el) => arrowIconRefs.current[projects[0].id] = el!} className="z-10">
                            <ButtonArrowIcon fill="#262330" className="w-4 h-4 md:w-7 md:h-7" />
                        </div>
                    </Link>
                    <Image width={1000} height={1000} alt="image de test" src={projects[0].image[0]} className="absolute top-0 right-0 w-2/3 h-full object-cover z-0" />
                    <span ref={(el) => lineRefs.current[projects[0].id] = el!} className="absolute bottom-0 left-0 block w-full h-0.5 bg-foreground"></span>
                </li> */}

                <div ref={imageDivRef} className="absolute top-0 right-20 w-[400px] h-64 bg-cover bg-center rounded-lg opacity-0 pointer-events-none"></div>
            </ul>
        </div>
    );
}