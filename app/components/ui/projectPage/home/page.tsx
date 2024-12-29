import NavBar from "@/app/components/ui/navBar/page";
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

            <section className="h-96 flex justify-center items-center relative overflow-hidden mt-20 rounded-2xl after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-foreground after:to-transparent after:z-5 md:justify-start md:items-end md:px-10 md:pb-8 md:after:h-48">

                <div className="md:flex md:flex-row md:justify-between md:items-end md:w-full">
                    <h1 className="relative z-10 text-background text-4xl md:text-7xl">Project 1</h1>
                    <div className={`${DelaGothicOne.className} absolute flex flex-wrap-reverse gap-2 bottom-0 left-0 z-10 p-2 text-xs md:relative md:w-48 md:justify-end`}>
                        <span className="bg-background text-foreground px-4 py-2 rounded-full">Scolaire</span>
                        <span className="bg-background text-foreground px-4 py-2 rounded-full">Dev Web</span>
                        <span className="bg-background text-foreground px-4 py-2 rounded-full">test</span>
                    </div>
                </div>
                <Image width={5000} height={5000} src="/img/paysage.png" alt="Description of the image" className="w-full h-full absolute top-0 left-0 z-0 object-cover" />
            </section>
        </header>
    );
}