"use client"
import { useEffect, useRef } from "react";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HalteresIcon } from "@/app/components/ui/icons";
import { Dela_Gothic_One } from 'next/font/google';
import Paragraph from "@/app/components/ui/paragraph/paragraph";
import Button from "@/app/components/ui/button/button";

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

export default function AboutMe() {
    const paraRef = useRef<HTMLDivElement>(null);
    const imageRefs = useRef<HTMLImageElement[]>([]);
    const linkRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

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

        if (paraRef.current && linkRef.current) {
            gsap.fromTo(
                linkRef.current,
                { x: -25, opacity: 0 },
                {
                    delay: 1,
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: Power2.easeOut,
                    scrollTrigger: {
                        trigger: paraRef.current,
                        start: "top center",
                    },
                }
            );
        }
    }, []);

    return (
        <section className={`${DelaGothicOne.className} text-base text-justify md:text-4xl`}>

            <div className="md:grid md:grid-cols-2 md:gap-24">
                <div ref={paraRef} className="md:flex md:flex-col md:justify-between md:text-left">
                    <Paragraph
                        text="En perpétuelle quête de défis, je suis un passionné de code, mais aussi d’univers captivants comme ceux des jeux vidéo."
                        highlightedText="passionné de code"
                    />

                    <div ref={linkRef} className="pt-14 flex flex-wrap justify-center items-center gap-4 md:text-xl md:justify-start md:gap-6">
                        <Button href="/pdf/CV.pdf" theme="primary">Télécharger mon CV</Button>
                    </div>
                </div>
                <div className="relative w-full h-96 rounded-xl overflow-hidden mt-14 md:mt-0 md:h-[500px]">
                    <img ref={(el) => { if (el) imageRefs.current[1] = el }} src="/img/avatar-profil.webp" alt="Description of the image" className="relative w-full h-full object-cover z-10" />
                </div>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-12 md:grid-areas mt-24">
                <div className="md:order-2 mt-10 md:mt-0 md:text-right">
                    <Paragraph
                        text="Et quand je ne suis ni derrière mon clavier ni en train d’explorer de nouveaux concepts, je passe souvent du temps à la salle, appréciant le défi personnel que la musculation apporte."
                    />
                </div>

                <div className="md:order-1 flex justify-center items-center relative h-72 mt-14 md:mt-0 md:h-full">
                    <HalteresIcon className="max-h-56" />
                </div>
            </div>
        </section>
    );
}