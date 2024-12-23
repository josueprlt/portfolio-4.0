import { ButtonArrowIcon } from '@/app/components/ui/icons';
import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
});

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
});

export default function Description() {
    return (
        <div className="pt-10 md:pt-36">
            <h2 className={`${ClimateCrisis.className} text-xl md:text-7xl`}>Description</h2>

            <div className={`${DelaGothicOne.className} mt-5 md:mt-10`}>
                <p className="text-justify md:text-4xl">Dans un cadre personnel, l’objectif était de retranscrire en html, css et js la template de la page qui nous était donnée par BenjaminCode.</p>

                <div className='flex justify-center my-10 md:my-32'>
                    <button className="relative bg-gradient-to-r from-primary to-secondary text-background px-3 py-2 rounded-full pr-12 md:px-4 md:py-3 md:pr-14">
                        Accèder au projet
                        <div className="absolute top-1 right-1 w-8 h-8 rounded-full flex justify-center items-center bg-background md:top-[4px] md:right-[6px] md:w-10 md:h-10">
                            <ButtonArrowIcon fill="#262330" className="w-3 md:w-5" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}