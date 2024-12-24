import NavBar from "@/app/components/ui/navBar/page";
import { ButtonArrowIcon } from '@/app/components/ui/icons';
import { Climate_Crisis, Dela_Gothic_One } from 'next/font/google';
import Image from 'next/image';

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
        <header className={`${ClimateCrisis.className} flex flex-col p-4 md:p-8`}>
            <NavBar />

            <section className={`${DelaGothicOne.className} mt-20 md:px-10 md:pb-8`}>
                <p className="md:text-4xl">Je suis actuellement en 3ème année d’un BUT MMI (Métiers du Multimédia et de l'Internet), en route pour devenir <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">développeur web</span> et toujours curieux de découvrir de nouvelles technologies !</p>
                <p className="mt-8 text-sm md:text-3xl md:mt-16">Je navigue entre les lignes de code et les pixels, jonglant avec le front et le back pour créer des expériences qui ont du sens et qui captivent.</p>

                <div className="flex justify-center my-28">
                    <button className="relative bg-gradient-to-r from-primary to-secondary text-background px-3 py-2 rounded-full pr-12 md:px-4 md:py-3 md:pr-14 md:text-xl">
                        Voir mes projets
                        <div className="absolute top-1 right-1 w-8 h-8 rounded-full flex justify-center items-center bg-background md:top-[4px] md:right-[6px] md:w-10 md:h-10">
                            <ButtonArrowIcon fill="#262330" className="w-3 md:w-5" />
                        </div>
                    </button>
                </div>
            </section>
        </header>
    );
}