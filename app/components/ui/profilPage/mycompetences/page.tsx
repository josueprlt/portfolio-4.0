"use client"
import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';
import competences from '@/app/data/competences.json';
import Title from '@/app/components/ui/title/page';
import CompetenceCard from './CompetenceCard';

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
    display: 'swap',
});

export default function MyJourney() {
    return (
        <div className={`${ClimateCrisis.className} pt-20 md:pt-60`}>
            <Title className='text-center'>Mes compétences</Title>

            <section className={`${DelaGothicOne.className} flex flex-col gap-4 pt-14 md:pt-40 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}>
                {competences.map((competence, index) => (
                    <CompetenceCard key={index} competence={competence} />
                ))}
            </section>
        </div>
    );
}