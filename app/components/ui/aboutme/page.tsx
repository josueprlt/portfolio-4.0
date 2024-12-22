import { LogoIcon, ArrowIcon } from "@/app/components/ui/icons";
import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';

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
    return (
        <div>
            <div className={`${ClimateCrisis.className} relative`}>
                <h2 className="text-xl text-center relative z-10">A propos de moi</h2>
                {/* <span className="absolute -top-1 left-0 -z-1 text-3xl text-titleSecondary">A propos de moi</span> */}

                <section className={`${DelaGothicOne.className} text-base text-justify`}>
                    <p>Je m'appelle <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Josué Perrault</span>, j'ai 20 ans et je suis actuellement étudiant en 3ème année d'un BUT MMI (Métiers du Multimédia et de l'Internet) à l'IUT de Limoges.</p>
                </section>
            </div>
        </div>
    );
}