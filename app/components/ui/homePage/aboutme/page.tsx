"use client"

import { useEffect, useRef } from "react";
import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';
import Image from 'next/image';
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "@/app/components/ui/title/page";
import Paragraph from "@/app/components/ui/paragraph/page";
import Button from "@/app/components/ui/button/page";

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
    const visiteRef = useRef<HTMLParagraphElement>(null);
    const textRefs = useRef<HTMLParagraphElement[]>([]);
    const btnRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const textsElement = textRefs.current;

        if (btnRef.current) {
            const buttons = btnRef.current.querySelectorAll('a');
            gsap.fromTo(buttons,
                { opacity: 0, x: -25 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: Power2.easeOut,
                    stagger: 0.5,
                    scrollTrigger: {
                        trigger: textsElement[0],
                        start: "top center",
                    },
                }
            );
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
    }, []);

    return (
        <div className={`${ClimateCrisis.className} pt-10 mt-10 md:pt-30 md:mt-30`} id="aboutme">
            <Title className="text-center">A propos de moi</Title>

            <section className={`${DelaGothicOne.className} text-base text-justify pt-14 md:pt-40 md:text-4xl`}>

                <div className="md:grid md:grid-cols-2 md:gap-24">
                    <div className="md:flex md:flex-col md:justify-between md:text-left">
                        <Paragraph
                            text="Je m'appelle Josué Perrault, j'ai 20 ans et je suis actuellement étudiant en 3ème année d'un BUT MMI (Métiers du Multimédia et de l'Internet) à l'IUT de Limoges."
                            highlightedText="Josué Perrault"
                        />

                        <div ref={btnRef} className="pt-14 flex flex-wrap justify-center items-center gap-4 md:text-xl md:justify-start md:gap-6">
                            <Button href="/" theme="secondary">Télécharger mon CV</Button>
                            <Button href="/profil" theme="primary">Voir plus</Button>
                        </div>
                    </div>
                    <div className="w-full h-96 rounded-xl overflow-hidden mt-14 md:mt-0 md:h-full">
                        <Image ref={imageRef} width={1000} height={1000} src="/img/paysage.png" alt="Description of the image" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="md:grid md:grid-cols-2 md:gap-12 md:grid-areas mt-24">
                    <div className="md:order-2 mt-10 md:mt-0 md:text-right">
                        <Paragraph
                            text="Ce portfolio a pour but de rassembler tous mes projets personnels et scolaires, tout en offrant une expérience utilisateur fluide et agréable. Vous y découvrirez des exemples concrets de mon travail."
                            className="text-end"
                        />
                        <Paragraph
                            text="Agréable visite !"
                            highlightedText="Agréable visite !"
                            className="mt-10 text-right"
                        />
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