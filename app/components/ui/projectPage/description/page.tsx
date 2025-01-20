"use client"

import { useEffect, useState, useRef } from "react";
import { ButtonArrowIcon } from '@/app/components/ui/icons';
import { Climate_Crisis, Dela_Gothic_One } from 'next/font/google';
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, Power2 } from "gsap";
import SplitType from "split-type";

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
});

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
});

interface Project {
    id: number;
    title: string;
    date: string;
    category: string[];
    description: string;
    image: string[];
    link: string | null;
}

interface HomeProps {
    project: Project;
}

export default function Description({ project }: HomeProps) {
    gsap.registerPlugin(ScrollTrigger);
    const [projet, setProjet] = useState<Project | null>(null);
    const linkRefs = useRef<HTMLAnchorElement[]>([]);
    const divRefs = useRef<HTMLDivElement[]>([]);
    const arrowRefs = useRef<HTMLDivElement[]>([]);
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        setProjet(project);
    }, [project]);

    const [animationsPlayed, setAnimationsPlayed] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('animationsPlayedDescription') === 'true';
        }
        return false;
    });

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.removeItem('animationsPlayedDescription');
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    useEffect(() => {
        if (!projet || animationsPlayed || !h1Ref.current) return;

        document.fonts.ready.then(() => {
            const splitTitle = new SplitType(h1Ref.current, { types: "chars" });
            gsap.from(splitTitle.chars, {
                y: -100,
                duration: 0.75,
                ease: Power2.easeOut,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: h1Ref.current,
                    start: "top center",
                },
            });

            const splitDesc = new SplitType(descRef.current, { types: "lines" });
            gsap.from(splitDesc.lines, {
                opacity: 0,
                y: 100,
                duration: 0.75,
                ease: Power2.easeOut,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: descRef.current,
                    start: "top center",
                },
            });
        });

        setAnimationsPlayed(true);
        localStorage.setItem("animationsPlayedDescription", "true");
    }, [animationsPlayed, projet]);



    useEffect(() => {
        if (linkRefs.current.length > 0 && divRefs.current.length > 0 && arrowRefs.current.length > 0) {
            linkRefs.current.forEach((_, i) => {
                const handleMouseEnter = () => {
                    gsap.to(divRefs.current[i], {
                        scale: 15,
                        duration: 0.75,
                        ease: Power2.easeOut,
                    });
                    gsap.to(linkRefs.current[i], {
                        color: linkRefs.current[i].classList.contains('text-background') ? '#262330' : '#FEEFDD',
                        duration: 0.5,
                        ease: Power2.easeIn,
                    });
                    gsap.to(arrowRefs.current[i], {
                        rotate: '45deg',
                        duration: 0.5,
                        ease: Power2.easeOut,
                    });
                };

                const handleMouseLeave = () => {
                    gsap.to(divRefs.current[i], {
                        scale: 1,
                        duration: 0.75,
                        ease: Power2.easeOut,
                    });
                    gsap.to(linkRefs.current[i], {
                        color: linkRefs.current[i].classList.contains('text-background') ? '#FEEFDD' : '#262330',
                        duration: 0.5,
                        ease: Power2.easeOut,
                    });
                    gsap.to(arrowRefs.current[i], {
                        rotate: '0deg',
                        duration: 0.5,
                        ease: Power2.easeOut,
                    });
                };

                linkRefs.current[i].addEventListener("mouseenter", handleMouseEnter);
                linkRefs.current[i].addEventListener("mouseleave", handleMouseLeave);

                return () => {
                    linkRefs.current[i].removeEventListener("mouseenter", handleMouseEnter);
                    linkRefs.current[i].removeEventListener("mouseleave", handleMouseLeave);
                };
            });
        }
    })

    if (!projet) {
        return <div>Loading...</div>;
    }

    return (
        <div className="pt-10 md:pt-36">
            <h2 ref={h1Ref} className={`${ClimateCrisis.className} text-xl md:text-7xl clip-path`}>Description</h2>

            <div className={`${DelaGothicOne.className} mt-5 md:mt-10`}>
                <p ref={descRef} className="text-justify md:text-4xl">{projet.description}</p>

                <div className='flex justify-center my-10 md:my-32'>
                    {projet.link == null ? (
                        <>
                            <div className="relative bg-gradient-to-r from-primaryGray to-secondaryGray text-base text-background cursor-not-allowed px-3 py-2 rounded-full pr-12 overflow-hidden md:px-4 md:py-3 md:pr-14 md:text-xl">
                                <span className="relative z-30">Ce projet n'est pas disponible</span>
                                <div className="absolute top-1 right-1 w-8 h-8 rounded-full bg-foreground md:top-[6px] md:right-[6px] md:w-10 md:h-10">
                                </div>
                                <div className="absolute top-[14px] right-[14px] md:top-4 md:right-4">
                                    <ButtonArrowIcon fill="#FEEFDD" className="w-3 md:w-5" />
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link href="/" ref={(el) => linkRefs.current[0] = el!} className="relative bg-gradient-to-r from-primary to-secondary text-base text-background px-3 py-2 rounded-full pr-12 overflow-hidden md:px-4 md:py-3 md:pr-14 md:text-xl">
                                <span className="relative z-30">Accèder au projet</span>
                                <div ref={(el) => divRefs.current[0] = el!} className="absolute top-1 right-1 w-8 h-8 rounded-full bg-background md:top-[6px] md:right-[6px] md:w-10 md:h-10">
                                </div>
                                <div ref={(el) => arrowRefs.current[0] = el!} className="absolute top-[14px] right-[14px] md:top-4 md:right-4">
                                    <ButtonArrowIcon fill="#262330" className="w-3 md:w-5" />
                                </div>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}