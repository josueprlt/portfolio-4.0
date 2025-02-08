"use client"
import { HalteresIcon } from "@/app/components/ui/icons";
import { Dela_Gothic_One } from 'next/font/google';
import Button from "@/app/components/ui/button/page";
import Image from 'next/image';

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

export default function AboutMe() {
    return (
        <section className={`${DelaGothicOne.className} text-base text-justify md:text-4xl`}>

            <div className="md:grid md:grid-cols-2 md:gap-24">
                <div className="md:flex md:flex-col md:justify-between md:text-left">
                    <p>En perpétuelle quête de défis, je suis un <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">passionné de code</span>, mais aussi d’univers captivants comme ceux des jeux vidéo.</p>

                    <div className="pt-14 flex flex-wrap justify-center items-center gap-4 md:text-xl md:justify-start md:gap-6">
                        <Button href="/" theme="primary">Télécharger mon CV</Button>
                    </div>
                </div>
                <div className="w-full h-96 rounded-xl overflow-hidden mt-14 md:mt-0 md:h-full">
                    <Image width={1000} height={1000} src="/img/paysage.png" alt="Description of the image" className="w-full h-full object-cover" />
                </div>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-12 md:grid-areas mt-24">
                <div className="md:order-2 mt-10 md:mt-0 md:text-right">
                    <p>Et quand je ne suis ni derrière mon clavier ni en train d’explorer de nouveaux concepts, je passe souvent du temps à la salle, appréciant le défi personnel que la musculation apporte.</p>
                </div>

                <div className="md:order-1 flex justify-center items-center relative h-72 mt-14 md:mt-0 md:h-full">
                    <HalteresIcon className="max-h-56" />
                </div>
            </div>
        </section>
    );
}