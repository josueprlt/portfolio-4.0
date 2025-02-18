"use client"
import { useEffect, useRef } from "react";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HalteresIcon } from "@/app/components/ui/icons";
import { Dela_Gothic_One } from 'next/font/google';
import Paragraph from "@/app/components/ui/paragraph/page";
import Button from "@/app/components/ui/button/page";
import Image from 'next/image';

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

export default function AboutMe() {
    const paraRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const linkRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
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

        if (paraRef.current && linkRef.current) {
            gsap.fromTo(
                linkRef.current,
                { x:-25, opacity: 0 },
                {
                    delay: 1,
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: Power2.easeOut,
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: "top center",
                    },
                }
            );
        }
    }, []);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/pdf/cv.pdf';
        link.download = 'Josue-Perrault-CV.pdf';
        link.click();
    };

    return (
        <section className={`${DelaGothicOne.className} text-base text-justify md:text-4xl`}>

            <div className="md:grid md:grid-cols-2 md:gap-24">
                <div ref={paraRef} className="md:flex md:flex-col md:justify-between md:text-left">
                    <Paragraph
                        text="En perpétuelle quête de défis, je suis un passionné de code, mais aussi d’univers captivants comme ceux des jeux vidéo."
                        highlightedText="passionné de code"
                    />

                    <div ref={linkRef} className="pt-14 flex flex-wrap justify-center items-center gap-4 md:text-xl md:justify-start md:gap-6">
                        <Button onClick={handleDownload} theme="primary">Télécharger mon CV</Button>
                    </div>
                </div>
                <div className="w-full h-96 rounded-xl overflow-hidden mt-14 md:mt-0 md:h-full">
                    <Image ref={imageRef} width={1000} height={1000} src="/img/paysage.png" alt="Description of the image" className="w-full h-full object-cover" />
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