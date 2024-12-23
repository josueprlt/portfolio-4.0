import { ButtonArrowIcon } from "@/app/components/ui/icons";
import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';
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

export default function MyWork() {
    return (
        <div className={`${ClimateCrisis.className} pt-20 md:pt-60`}>
            <h2 className="text-xl text-center relative z-10 md:text-7xl">Mon travail</h2>

            <ul className={`${DelaGothicOne.className} text-base text-justify pt-14 md:pt-40 md:text-4xl`}>
                <li className="flex justify-between items-center py-5 px-5 border-b-2 border-foreground md:py-10 cursor-pointer">
                    <p>Cartes de Tarot</p>
                    <ButtonArrowIcon fill="#262330" className="w-4 h-4 md:w-7 md:h-7" />
                </li>
                <li className="flex justify-between items-center py-5 px-5 border-b-2 border-foreground md:py-10 cursor-pointer">
                    <p>Challenge BenjaminCode</p>
                    <ButtonArrowIcon fill="#262330" className="w-4 h-4 md:w-7 md:h-7" />
                </li>
                <li className="flex justify-between items-center py-5 px-5 border-b-2 border-foreground md:py-10 cursor-pointer">
                    <p>Site OnePage</p>
                    <ButtonArrowIcon fill="#262330" className="w-4 h-4 md:w-7 md:h-7" />
                </li>
                <li className="flex justify-between items-center py-5 px-5 border-b-2 border-foreground md:py-10 cursor-pointer">
                    <p>Site de trailer de films</p>
                    <ButtonArrowIcon fill="#262330" className="w-4 h-4 md:w-7 md:h-7" />
                </li>
                <li className="flex justify-between items-center py-5 px-5 border-b-2 border-foreground md:py-10 cursor-pointer">
                    <p>Site To-Do List</p>
                    <ButtonArrowIcon fill="#262330" className="w-4 h-4 md:w-7 md:h-7" />
                </li>
                <li className="flex justify-between items-center py-5 px-5 border-b-2 border-foreground md:py-10 cursor-pointer">
                    <p>Site vente de vélo</p>
                    <ButtonArrowIcon fill="#262330" className="w-4 h-4 md:w-7 md:h-7" />
                </li>
            </ul>
        </div>
    );
}