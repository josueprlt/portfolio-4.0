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
    const imgRefs = useRef<HTMLImageElement[]>([]);
    const lineRefs = useRef<HTMLDivElement[]>([]);
    const textRefs = useRef<HTMLParagraphElement[]>([]);
    const arrowIconRefs = useRef<HTMLDivElement[]>([]);

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

        if (liRefs.current.length > 0 && arrowIconRefs.current.length > 0 && imgRefs.current.length > 0) {
            liRefs.current.forEach((li, i) => {
                const handleMouseEnter = () => {
                    gsap.to(arrowIconRefs.current[i], {
                        rotate: '45deg',
                        padding: '1rem 1rem',
                        duration: 0.75,
                        ease: Power2.easeOut,
                    });
                    gsap.to(imgRefs.current[i], {
                        filter: "grayscale(0%) blur(0px) brightness(75%)",
                        opacity: 1,
                        duration: 0.75,
                        ease: Power2.easeOut,
                    });
                    gsap.to(textRefs.current[i], {
                        padding: '0.5rem 1rem',
                        duration: 0.75,
                        ease: Power2.easeOut,
                    });
                };
                
                const handleMouseLeave = () => {
                    gsap.to(arrowIconRefs.current[i], {
                        padding: '0rem 0rem',
                        rotate: '0deg',
                        duration: 0.75,
                        ease: Power2.easeOut,
                    });
                    gsap.to(imgRefs.current[i], {
                        filter: "grayscale(100%) blur(5px) brightness(100%)",
                        opacity: 0,
                        duration: 0.75,
                        ease: Power2.easeOut,
                    });
                    gsap.to(textRefs.current[i], {
                        padding: '0rem 0rem',
                        duration: 0.75,
                        ease: Power2.easeOut,
                    });
                };


                li.addEventListener("mouseenter", handleMouseEnter);
                li.addEventListener("mouseleave", handleMouseLeave);

                return () => {
                    li.removeEventListener("mouseenter", handleMouseEnter);
                    li.removeEventListener("mouseleave", handleMouseLeave);
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
                    <li ref={(el) => liRefs.current[project.id] = el!} key={project.id} id={`li-work-${index}`} className="relative flex justify-between items-center cursor-pointer overflow-hidden">
                        <Link href={`/project/${project.id}`} className="flex justify-between items-center w-full py-5 px-5 md:py-10">
                            <p ref={(el) => textRefs.current[project.id] = el!} className="z-10 p-0 rounded-full bg-background">{project.title}</p>
                            <div ref={(el) => arrowIconRefs.current[project.id] = el!} className="z-10 p-0 rounded-full bg-background">
                                <ButtonArrowIcon fill="#262330" className="w-4 h-4 md:w-7 md:h-7" />
                            </div>
                        </Link>
                        <Image ref={(el) => imgRefs.current[project.id] = el!} width={1000} height={1000} alt="image de test" src={project.image[0]} className="absolute top-0 right-0 w-full h-full object-cover z-0 opacity-0" />
                        <span ref={(el) => lineRefs.current[project.id] = el!} className="absolute bottom-0 left-0 block w-full h-0.5 bg-foreground z-10"></span>
                    </li>
                ))}
            </ul>
        </div>
    );
}