import { LogoIcon, ArrowIcon } from "@/app/components/ui/icons";
import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

// Configuration pour Climate Crisis
const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
    display: 'swap',
});

export default function Home() {
    return (
        <header className={`${ClimateCrisis.className} flex flex-col justify-between h-screen`}>
            <nav className="flex justify-between items-center p-4">
                <LogoIcon />
                <div className="flex items-end flex-col gap-2 h-full cursor-pointer">
                    {/* <span className="block w-8 h-1 bg-foreground relative before:content-[''] before:block before:w-12 before:bg-foreground before:h-1 before:absolute before:-top-3 before:right-0 after:content-[''] after:block after:w-5 after:bg-foreground after:h-1 after:absolute after:top-3 after:right-0"></span> */}
                    <span className="block w-12 h-1 bg-foreground rounded-full"></span>
                    <span className="block w-8 h-1 bg-foreground rounded-full"></span>
                    <span className="block w-5 h-1 bg-foreground rounded-full"></span>
                </div>
            </nav>

            <section className="flex flex-col justify-center items-center gap-16">
                <div className="flex items-center flex-col gap-7">
                    <h1 className="text-3xl text-center">Josué Perrault</h1>
                    <span className="w-52 h-1.5 bg-gradient-to-r from-bgPrimary to-bgSecondary rounded-full"></span>
                </div>
                <ArrowIcon className="cursor-pointer" />
            </section>

            <section className="flex justify-between items-center gap-3 p-4">
                <h2 className="text-xl">Portfolio</h2>
                <span className="w-full h-px bg-foreground translate-y-2"></span>
                <h2 className="flex items-center gap-2 text-xl before:block before:w-3 before:h-3 before:bg-foreground before:rounded-full before:translate-y-1">2024</h2>
            </section>
        </header>
    );
}