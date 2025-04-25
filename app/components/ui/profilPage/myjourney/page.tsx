"use client"
import { useState, useEffect, useRef } from "react";
import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from '@/app/components/ui/title/title';
import JourneyCard from './JourneyCard';
import journeys from '@/app/data/journeys.json';

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
    display: 'swap',
});

function isOdd(num: number) {
    const result = num % 2;
    if (result === 0) {
        return "right"
    } else {
        return "left"
    }
}

const MyJourney = () => {
    gsap.registerPlugin(ScrollTrigger);
    const spansContainerRef = useRef<HTMLDivElement>(null);
    const beforeRef = useRef<HTMLDivElement>(null);
    const afterRef = useRef<HTMLDivElement>(null);
    const [colorMode, setColorMode] = useState("light");
    const [lang, setLang] = useState("fr");

    useEffect(() => {
        const savedColorMode = localStorage.getItem("color-mode") || "light";
        setColorMode(savedColorMode);

        const savedLang = localStorage.getItem("lang") || "fr";
        setLang(savedLang);
    }, [colorMode, lang]);

    useEffect(() => {
        if (spansContainerRef.current) {
            const spans = spansContainerRef.current.querySelectorAll('.journey-span');
            spans.forEach((span) => {
                gsap.fromTo(span,
                    { scale: 0, transformOrigin: "top" },
                    {
                        scale: 1,
                        duration: 1,
                        ease: Power2.easeOut,
                        scrollTrigger: {
                            trigger: span,
                            start: "center center",
                        },
                    }
                );
            });
        }

        if (beforeRef.current) {
            gsap.fromTo(beforeRef.current,
                { scale: 0 },
                {
                    scale: 1,
                    duration: 1,
                    ease: Power2.easeOut,
                    scrollTrigger: {
                        trigger: beforeRef.current,
                        start: "center center",
                    },
                }
            );
        }

        if (afterRef.current) {
            gsap.fromTo(afterRef.current,
                { scale: 0 },
                {
                    scale: 1,
                    duration: 1,
                    ease: Power2.easeOut,
                    scrollTrigger: {
                        trigger: afterRef.current,
                        start: "center center",
                    },
                }
            );
        }
    }, []);

    return (
        <div className={`${ClimateCrisis.className} pt-20 md:pt-60`}>
            {lang === 'fr' && <Title className='text-center'>Mon Parcours</Title>}
            {lang === 'en' && <Title className='text-center'>My Experience</Title>}

            <section className={`${DelaGothicOne.className} text-lg pt-14 md:pt-40 text-center`}>
                <div ref={spansContainerRef} className="relative flex justify-center items-center flex-col">
                    <div ref={beforeRef} className={`absolute -top-[31px] w-8 h-8 rounded-full ${colorMode === 'light' && 'bg-foreground'} ${colorMode === 'dark' && 'bg-background'}`}></div>
                    <span className={`journey-span block w-2 h-52 md:h-96 ${colorMode === 'light' && 'bg-foreground'} ${colorMode === 'dark' && 'bg-background'}`}></span>
                    {journeys.map((journey, index) => (
                        <div key={index} className="flex flex-col justify-center items-center">
                            <JourneyCard
                                lang={lang}
                                colorMode={colorMode}
                                date={journey.date}
                                dateEn={journey.dateEn}
                                title={journey.title}
                                titleEn={journey.titleEn}
                                description={journey.description}
                                descriptionEn={journey.descriptionEn}
                                imageSrc={journey.image}
                                imageAlt="image experience"
                                position={isOdd(index)}
                            />
                            <span className={`journey-span block w-2 h-52 md:h-96 ${colorMode === 'light' && 'bg-foreground'} ${colorMode === 'dark' && 'bg-background'}`}></span>
                        </div>
                    ))}
                    <div ref={afterRef} className={`absolute -bottom-[31px] w-8 h-8 rounded-full ${colorMode === 'light' && 'bg-foreground'} ${colorMode === 'dark' && 'bg-background'}`}></div>
                </div>
            </section>
        </div>
    );
}

export default MyJourney;