import { ArrowIcon } from "@/app/components/ui/icons";
import NavBar from "@/app/components/ui/navBar/page";
import { Climate_Crisis } from 'next/font/google';

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
    display: 'swap',
});

export default function Home() {
    return (
        <header className={`${ClimateCrisis.className} flex flex-col justify-between h-screen p-4 md:p-8`}>
            <NavBar />
            
            <section className="flex flex-col justify-center items-center gap-16">
                <div className="flex items-center flex-col gap-7">
                    <h1 className="text-3xl text-center md:text-7xl">Josué Perrault</h1>
                    <span className="w-52 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full md:w-96 md:h-3"></span>
                </div>
                <ArrowIcon className="cursor-pointer" />
            </section>

            <section className="flex justify-between items-center gap-3">
                <h2 className="text-xl md:text-4xl">Portfolio</h2>
                <span className="w-full h-px bg-foreground translate-y-[7px] md:translate-y-[13px]"></span>
                <h2 className="flex items-center gap-2 text-xl before:block before:w-2 before:h-2 before:bg-foreground before:rounded-full before:translate-y-[5px] md:text-4xl md:before:w-4 md:before:h-4 md:before:translate-y-[6px]">2024</h2>
            </section>
        </header>
    );
}