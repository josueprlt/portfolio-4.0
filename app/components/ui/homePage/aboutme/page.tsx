"use client"

import { useState, useEffect, useRef } from "react";
import { ButtonArrowIcon } from "@/app/components/ui/icons";
import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

export default function AboutMe() {
    gsap.registerPlugin(ScrollTrigger);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textRefs = useRef<HTMLParagraphElement[]>([]);
    const linkRefs = useRef<HTMLAnchorElement[]>([]);
    const divRefs = useRef<HTMLDivElement[]>([]);
    const arrowRefs = useRef<HTMLDivElement[]>([]);
    const imageRef = useRef<HTMLImageElement>(null);

    const [animationsPlayed, setAnimationsPlayed] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('animationsPlayedAbout') === 'true';
        }
        return false;
    });

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.removeItem('animationsPlayedAbout');
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

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
                        color: linkRefs.current[i].classList.contains('bg-background') ? '#FEEFDD' : '#262330',
                        duration: 0.5,
                        ease: Power2.easeOut,
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
                        color: linkRefs.current[i].classList.contains('bg-background') ? '#262330' : '#FEEFDD',
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

    useEffect(() => {
        if (animationsPlayed) return;

        const titleElement = titleRef.current;
        const textsElement = textRefs.current;

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

        textsElement.forEach((textElement) => {
            if (textElement) {
                const split = new SplitType(textElement, { types: 'lines' });
                gsap.from(split.lines, {
                    opacity: 0,
                    y: 20,
                    duration: 1,
                    ease: Power2.easeOut,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: textElement,
                        start: "top center",
                    },
                });
            }
        });

        if (linkRefs.current.length > 0) {
            gsap.from(linkRefs.current, {
                delay: 1.25,
                opacity: 0,
                x: -25,
                duration: 1,
                ease: Power2.easeOut,
                stagger: 0.5,
                scrollTrigger: {
                    trigger: textsElement[0],
                    start: "top center",
                },
            });
        }

        if (imageRef.current) {
            gsap.fromTo(
                imageRef.current,
                { filter: "grayscale(100%) blur(5px)" },
                {
                    filter: "grayscale(0%) blur(0px)",
                    duration: 1,
                    ease: Power2.easeOut,
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: "top center",
                    },
                }
            );
        }

        setAnimationsPlayed(true);
        localStorage.setItem('animationsPlayedAbout', 'true');
    }, [animationsPlayed]);

    return (
        <div className={`${ClimateCrisis.className} pt-20 md:pt-60`}>
            <h2 ref={titleRef} className="text-xl text-center relative z-10 md:text-7xl clip-path">A propos de moi</h2>
            {/* <span className="absolute -top-1 left-0 -z-1 text-3xl text-titleSecondary">A propos de moi</span> */}

            <section className={`${DelaGothicOne.className} text-base text-justify pt-14 md:pt-40 md:text-4xl`}>

                <div className="md:grid md:grid-cols-2 md:gap-24">
                    <div className="md:flex md:flex-col md:justify-between md:text-left">
                        <p ref={(el) => textRefs.current[0] = el!}>Je m'appelle <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Josué Perrault</span>, j'ai 20 ans et je suis actuellement étudiant en 3ème année d'un BUT MMI (Métiers du Multimédia et de l'Internet) à l'IUT de Limoges.</p>

                        <div className="pt-14 flex flex-wrap justify-center items-center gap-4 md:text-xl md:justify-start md:gap-6">
                            <Link href="/" ref={(el) => linkRefs.current[0] = el!} className="relative bg-background text-foreground px-3 py-2 rounded-full pr-12 overflow-hidden md:px-4 md:py-3 md:pr-14">
                                <span className="relative z-30">Télécharger mon CV</span>
                                <div ref={(el) => divRefs.current[0] = el!} className="absolute top-1 right-1 w-8 h-8 rounded-full bg-foreground md:top-[6px] md:right-[6px] md:w-10 md:h-10">
                                </div>
                                <div ref={(el) => arrowRefs.current[0] = el!} className="absolute top-[14px] right-[14px] md:top-4 md:right-4">
                                    <ButtonArrowIcon fill="#FEEFDD" className="w-3 md:w-5" />
                                </div>
                            </Link>
                            <Link href="/profil" ref={(el) => linkRefs.current[1] = el!} className="relative bg-foreground text-background px-3 py-2 rounded-full pr-12 overflow-hidden md:px-4 md:py-3 md:pr-14">
                                <span className="relative z-30">Voir plus</span>
                                <div ref={(el) => divRefs.current[1] = el!} className="absolute top-1 right-1 w-8 h-8 rounded-full bg-background md:top-[6px] md:right-[6px] md:w-10 md:h-10">
                                </div>
                                <div ref={(el) => arrowRefs.current[1] = el!} className="absolute top-[14px] right-[14px] md:top-4 md:right-4">
                                    <ButtonArrowIcon fill="#262330" className="w-3 md:w-5" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full h-96 rounded-xl overflow-hidden mt-14 md:mt-0 md:h-full">
                        <Image ref={imageRef} width={1000} height={1000} src="/img/paysage.png" alt="Description of the image" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="md:grid md:grid-cols-2 md:gap-12 md:grid-areas mt-24">
                    <div className="md:order-2 mt-10 md:mt-0 md:text-right">
                        <p ref={(el) => textRefs.current[1] = el!}>Ce portfolio a pour but de rassembler tous mes projets personnels et scolaires, tout en offrant une expérience utilisateur fluide et agréable. Vous y découvrirez des exemples concrets de mon travail.</p>
                        <p className="mt-12">Agréable visite !</p>
                    </div>

                    <div className="md:order-1 relative h-72 mt-5 md:mt-0 md:h-full">
                        <span className="absolute bottom-0 left-0 w-52 h-52 bg-gradient-to-b from-primary to-secondary rounded-full md:bottom-10 md:left-10"></span>
                        <span className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-t from-primary to-secondary rounded-full md:top-10 md:right-10"></span>
                    </div>
                </div>
            </section>
        </div>
    );
}