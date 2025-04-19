"use client"
import { Climate_Crisis } from 'next/font/google';
import NavBar from "@/app/components/ui/navBar/page";
import Title from "@/app/components/ui/title/title";

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
    display: 'swap',
});

interface HomeProps {
    lang: string;
}

const Home: React.FC<HomeProps> = ({ lang }) => {

    return (
        <header className={`${ClimateCrisis.className} flex flex-col p-4 md:p-8 md:pb-0`}>
            <NavBar lang={lang} />

            {lang === 'fr' && <Title className='mt-2 text-center md:mb-10'>Projets</Title>}
            {lang === 'en' && <Title className='mt-2 text-center md:mb-10'>Projects</Title>}
        </header>
    );
}

export default Home;