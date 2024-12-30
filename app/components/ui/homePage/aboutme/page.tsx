"use client"

import { useEffect, useRef } from "react";
import { ButtonArrowIcon } from "@/app/components/ui/icons";
import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const titleElement = titleRef.current;
        const textElement = textRef.current;

        if (titleElement) {
            gsap.fromTo(
                titleElement,
                { opacity: 0, x: -300 },
                {
                    opacity: 1, x: 0, duration: 1, ease: Power2.easeOut, scrollTrigger: {
                        trigger: titleElement,
                        start: "top 80%",
                        markers: true
                    }
                }
            );
        }
    }, []);

    return (
        <div className={`${ClimateCrisis.className} pt-20 md:pt-60`}>
            <h2 ref={titleRef} className="text-xl text-center relative z-10 md:text-7xl">A propos de moi</h2>
            {/* <span className="absolute -top-1 left-0 -z-1 text-3xl text-titleSecondary">A propos de moi</span> */}

            <section className={`${DelaGothicOne.className} text-base text-justify pt-14 md:pt-40 md:text-4xl`}>

                <div className="md:grid md:grid-cols-2 md:gap-24">
                    <div className="md:flex md:flex-col md:justify-between md:text-left">
                        <p ref={textRef}>Je m'appelle <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Josué Perrault</span>, j'ai 20 ans et je suis actuellement étudiant en 3ème année d'un BUT MMI (Métiers du Multimédia et de l'Internet) à l'IUT de Limoges.</p>

                        <div className="pt-14 flex flex-wrap justify-center items-center gap-4 md:text-xl md:justify-start md:gap-6">
                            <button className="relative bg-background text-foreground px-3 py-2 rounded-full pr-12 md:px-4 md:py-3 md:pr-14">
                                Télécharger mon CV
                                <div className="absolute top-1 right-1 w-8 h-8 rounded-full flex justify-center items-center bg-foreground md:top-[6px] md:right-[6px] md:w-10 md:h-10">
                                    <ButtonArrowIcon fill="#FEEFDD" className="w-3 md:w-5" />
                                </div>
                            </button>
                            <Link href="/profil" className="relative bg-foreground text-background px-3 py-2 rounded-full pr-12 md:px-4 md:py-3 md:pr-14">
                                Voir plus
                                <div className="absolute top-1 right-1 w-8 h-8 rounded-full flex justify-center items-center bg-background md:top-[6px] md:right-[6px] md:w-10 md:h-10">
                                    <ButtonArrowIcon fill="#262330" className="w-3 md:w-5" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full h-96 rounded-xl overflow-hidden mt-14 md:mt-0 md:h-full">
                        <Image width={1000} height={1000} src="/img/paysage.png" alt="Description of the image" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="md:grid md:grid-cols-2 md:gap-12 md:grid-areas mt-24">
                    <div className="md:order-2 mt-10 md:mt-0 md:text-right">
                        <p className="box">Ce portfolio a pour but de rassembler tous mes projets personnels et scolaires, tout en offrant une expérience utilisateur fluide et agréable. Vous y découvrirez des exemples concrets de mon travail.</p>
                        <p className="mt-6">Agréable visite !</p>
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