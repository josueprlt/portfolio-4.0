"use client"
import { useEffect, useRef } from "react";
import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from '@/app/components/ui/title/page';
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
    let result = num % 2;
    if (result === 0) {
        return "right"
    } else {
        return "left"
    }
}

export default function MyJourney() {
    gsap.registerPlugin(ScrollTrigger);
    const spansContainerRef = useRef<HTMLDivElement>(null);
    const beforeRef = useRef<HTMLDivElement>(null);
    const afterRef = useRef<HTMLDivElement>(null);

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
                            start: "center 65%",
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
            <Title className='text-center'>Mon Parcours</Title>

            <section className={`${DelaGothicOne.className} text-lg pt-14 md:pt-40 text-center`}>
                <div ref={spansContainerRef} className="relative flex justify-center items-center flex-col">
                    <div ref={beforeRef} className="absolute -top-[31px] w-8 h-8 bg-foreground rounded-full"></div>
                    <span className="journey-span block w-2 h-96 bg-foreground"></span>
                    {journeys.map((journey, index) => (
                        <div key={index} className="flex flex-col justify-center items-center">
                            <JourneyCard
                                date={journey.date}
                                title={journey.title}
                                description={journey.description}
                                imageSrc={journey.image}
                                imageAlt="Lycée La Mennais"
                                position={isOdd(index)}
                            />
                            <span className="journey-span block w-2 h-96 bg-foreground"></span>
                        </div>
                    ))}
                    <div ref={afterRef} className="absolute -bottom-[31px] w-8 h-8 bg-foreground rounded-full"></div>
                </div>
            </section>
        </div>
    );
}