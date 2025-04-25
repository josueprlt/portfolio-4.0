"use client"
import { useState, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';
import competences from '@/app/data/competences.json';
import Title from '@/app/components/ui/title/title';
import CompetenceCard from './CompetenceCard';
import { gsap, Power2 } from 'gsap';

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
    display: 'swap',
});

const MyCompetences = () => {
    gsap.registerPlugin(ScrollTrigger);
    const sectionRef = useRef<HTMLElement>(null);
    const [colorMode, setColorMode] = useState("light");
    const [lang, setLang] = useState("fr");

    useEffect(() => {
        const savedColorMode = localStorage.getItem("color-mode") || "light";
        setColorMode(savedColorMode);

        const savedLang = localStorage.getItem("lang") || "fr";
        setLang(savedLang);
    }, [colorMode, lang]);

    useEffect(() => {
        if (sectionRef.current) {
            const toolElements = sectionRef.current.querySelectorAll('.competence-element');
            gsap.fromTo(toolElements,
                { opacity: 0, scale: 0.5 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.75,
                    ease: Power2.easeOut,
                    stagger: 0.25,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top center",
                    },
                }
            );
        }
    }, []);

    return (
        <div className={`${ClimateCrisis.className} pt-20 md:pt-60`}>
            {lang === 'fr' && <Title className='text-center'>Mes compétences</Title>}
            {lang === 'en' && <Title className='text-center'>My competences</Title>}

            <section ref={sectionRef} className={`${DelaGothicOne.className} flex flex-col gap-4 pt-14 md:pt-40 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6`}>
                {competences.map((competence, index) => (
                    <CompetenceCard lang={lang} colorMode={colorMode} key={index} competence={competence} />
                ))}
            </section>
        </div>
    );
}

export default MyCompetences;