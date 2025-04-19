"use client"
import { useEffect, useRef } from "react";
import { Climate_Crisis, Dela_Gothic_One } from 'next/font/google';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, Power2 } from "gsap";
import NavBar from "@/app/components/ui/navBar/page";
import Button from "@/app/components/ui/button/button";
import Paragraph from "@/app/components/ui/paragraph/paragraph";

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
    display: 'swap',
});

interface HomeProps {
    lang: string;
}

const Home: React.FC<HomeProps> = ({ lang }) => {
    gsap.registerPlugin(ScrollTrigger);
    const linkRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!linkRef.current) return;

        document.fonts.ready.then(() => {
            gsap.fromTo(linkRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.75,
                    ease: Power2.easeOut,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: linkRef.current,
                        start: "top center",
                    },
                });
        });
    }, []);

    return (
        <header className={`${ClimateCrisis.className} flex flex-col p-4 md:p-8 md:pb-0`}>
            <NavBar lang={lang} />

            <section className={`${DelaGothicOne.className} mt-20 md:px-10`}>
                <Paragraph
                    lang={lang}
                    textEn="I’m currently in my third year of a Bachelor's in Multimedia and Internet Professions (BUT MMI), on my way to becoming a web developer and always curious to explore new technologies !"
                    highlightedTextEn="web developer"
                    text="Je suis actuellement en 3ème année d’un BUT MMI (Métiers du Multimédia et de l'Internet), en route pour devenir développeur web et toujours curieux de découvrir de nouvelles technologies !"
                    highlightedText="développeur web"
                    className="md:text-4xl text-justify"
                />
                <Paragraph
                    lang={lang}
                    textEn="I navigate between lines of code and pixels, juggling front-end and back-end to create meaningful and captivating experiences."
                    text="Je navigue entre les lignes de code et les pixels, jonglant avec le front et le back pour créer des expériences qui ont du sens et qui captivent."
                    className="mt-8 text-sm md:text-3xl md:mt-16 text-justify"
                />

                <div className="flex justify-center my-20" ref={linkRef}>
                    <Button href="/filter" theme="gradient">
                        {lang === 'fr' && 'Voir mes projets'}
                        {lang === 'en' && 'View my projects'}
                    </Button>
                </div>
            </section>
        </header>
    );
}

export default Home;