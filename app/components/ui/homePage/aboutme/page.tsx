"use client"

import { useState, useEffect, useRef } from "react";
import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "@/app/components/ui/title/title";
import Paragraph from "@/app/components/ui/paragraph/paragraph";
import Button from "@/app/components/ui/button/button";

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
    display: 'swap',
});

const AboutMe = () => {
    const [colorMode, setColorMode] = useState("light");
    const [lang, setLang] = useState("fr");
    gsap.registerPlugin(ScrollTrigger);
    const divRef = useRef<HTMLDivElement>(null);
    const visiteRef = useRef<HTMLParagraphElement>(null);
    const btnRef = useRef<HTMLDivElement>(null);
    const imageRefs = useRef<HTMLImageElement[]>([]);
    const spanRefs = useRef<HTMLSpanElement[]>([]);

    useEffect(() => {
        if (divRef.current && btnRef.current) {
            const buttons = btnRef.current.querySelectorAll('a, button');
            gsap.fromTo(buttons,
                { opacity: 0, x: -25 },
                {
                    delay: 1.25,
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: Power2.easeOut,
                    stagger: 0.5,
                    scrollTrigger: {
                        trigger: divRef.current,
                        start: "top center",
                    },
                }
            );
        }

        if (imageRefs.current.length > 0) {
            imageRefs.current.forEach((image) => {
                gsap.fromTo(
                    image,
                    { filter: "grayscale(100%) blur(5px)" },
                    {
                        filter: "grayscale(0%) blur(0px)",
                        duration: 1,
                        ease: Power2.easeOut,
                        scrollTrigger: {
                            trigger: image,
                            start: "top center",
                        },
                    }
                );
            });
        }

        if (visiteRef.current) {
            gsap.from(
                visiteRef.current,
                {
                    y: 100,
                    opacity: 0,
                    scale: 0.5,
                    duration: 1,
                    ease: Power2.easeOut,
                    scrollTrigger: {
                        trigger: visiteRef.current,
                        start: "top center",
                    },
                }
            );
        }

        if (spanRefs.current.length > 0) {
            gsap.to(spanRefs.current[0], {
                scale: 0.8,
                duration: 1,
                repeat: -1,
                delay: 0,
                yoyo: true,
                ease: Power2.easeInOut,
            });
            gsap.to(spanRefs.current[1], {
                scale: 0.8,
                duration: 1,
                repeat: -1,
                delay: 1,
                yoyo: true,
                ease: Power2.easeInOut,
            });
        }
    }, []);

    useEffect(() => {
        const savedColorMode = localStorage.getItem("color-mode") || "light";
        setColorMode(savedColorMode);

        const savedLang = localStorage.getItem("lang") || "fr";
        setLang(savedLang);
    }, [colorMode, lang]);

    return (
        <div className={`${ClimateCrisis.className} mt-10 pt-10 md:mt-32 md:pt-[64px] ${colorMode === 'light' && 'bg-background text-foreground'} ${colorMode === 'dark' && 'bg-foreground text-ground'}`} id="aboutme">
            {lang === 'fr' && <Title className="text-center">À propos de moi</Title>}
            {lang === 'en' && <Title className="text-center">About me</Title>}

            <section className={`${DelaGothicOne.className} text-base text-justify pt-14 md:pt-40 md:text-4xl`}>

                <div ref={divRef} className="md:grid md:grid-cols-2 md:gap-24">
                    <div className="md:flex md:flex-col md:justify-between md:text-left">
                        <Paragraph
                            lang={lang}
                            textEn="My name is Josué Perrault, I am 21 years old and I am currently a third-year student in a Bachelor's degree in Multimedia and Internet Technologies (BUT MMI) at the IUT of Limoges."
                            highlightedTextEn="Josué Perrault"
                            text="Je m'appelle Josué Perrault, j'ai 21 ans et je suis actuellement étudiant en 3ème année d'un BUT MMI (Métiers du Multimédia et de l'Internet) à l'IUT de Limoges."
                            highlightedText="Josué Perrault"
                        />

                        <div ref={btnRef} className="pt-14 flex flex-wrap justify-center items-center gap-4 md:text-xl md:justify-start md:gap-6">
                            <Button href="/pdf/CV.pdf" theme="secondary">
                                {lang === 'fr' && 'Télécharger mon CV'}
                                {lang === 'en' && 'Download my CV'}
                            </Button>
                            <Button href="/profil" theme="primary">
                                {lang === 'fr' && 'Voir plus'}
                                {lang === 'en' && 'See more'}
                            </Button>
                        </div>
                    </div>
                    <div className="relative w-full h-96 rounded-xl overflow-hidden mt-14 md:mt-0 md:h-full md:max-h-[600px]">
                        <img ref={(el) => { if (el) imageRefs.current[1] = el }} src="/img/avatar-profil.webp" alt="Description of the image" className="relative w-full h-full object-cover z-10" />
                    </div>
                </div>

                <div className="md:grid md:grid-cols-2 md:gap-12 md:grid-areas mt-24">
                    <div className="md:order-2 mt-10 md:mt-0 md:text-right">
                        <Paragraph
                            lang={lang}
                            textEn="This portfolio brings together all my personal and academic projects, while providing a smooth and enjoyable user experience. You’ll find concrete examples of my work throughout."
                            text="Ce portfolio rassemble tous mes projets personnels et scolaires, tout en offrant une expérience utilisateur fluide et agréable. Vous y découvrirez des exemples concrets de mon travail."
                            className="text-end"
                        />
                        <Paragraph
                            lang={lang}
                            textEn="Enjoy your visit !"
                            highlightedTextEn="Enjoy your visit !"
                            text="Agréable visite !"
                            highlightedText="Agréable visite !"
                            className="mt-10 text-right"
                        />
                    </div>

                    <div className="md:order-1 relative h-72 mt-5 md:mt-0 md:h-full">
                        <span ref={(el) => { if (el) spanRefs.current[0] = el }} className="absolute bottom-0 left-0 w-52 h-52 bg-gradient-to-b from-primary to-secondary rounded-full md:bottom-10 md:left-10"></span>
                        <span ref={(el) => { if (el) spanRefs.current[1] = el }} className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-t from-primary to-secondary rounded-full md:top-10 md:right-10"></span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutMe;