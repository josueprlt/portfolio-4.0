"use client"
import NavBar from "@/app/components/ui/navBar/page";
import { Climate_Crisis, Dela_Gothic_One } from 'next/font/google';
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

export default function Home() {
    return (
        <header className={`${ClimateCrisis.className} flex flex-col p-4 md:p-8 md:pb-0`}>
            <NavBar />

            <section className={`${DelaGothicOne.className} mt-20 md:px-10`}>
                <p className="md:text-4xl text-justify">Je suis actuellement en 3ème année d’un BUT MMI (Métiers du Multimédia et de l'Internet), en route pour devenir <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">développeur web</span> et toujours curieux de découvrir de nouvelles technologies !</p>
                <p className="mt-8 text-sm md:text-3xl md:mt-16 text-justify">Je navigue entre les lignes de code et les pixels, jonglant avec le front et le back pour créer des expériences qui ont du sens et qui captivent.</p>

                <div className="flex justify-center my-20">
                    <Button href="/#competences" theme="gradient">Voir mes projets</Button>
                </div>
            </section>
        </header>
    );
}