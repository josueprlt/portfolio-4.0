"use client"
import { Climate_Crisis } from 'next/font/google';
import NavBar from "@/app/components/ui/navBar/page";
import Title from "@/app/components/ui/title/page";

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
    display: 'swap',
});

export default function Home() {

    return (
        <header className={`${ClimateCrisis.className} flex flex-col p-4 md:p-8 md:pb-0`}>
            <NavBar />

            <Title className='my-14 text-center'>Projects</Title>
        </header>
    );
}