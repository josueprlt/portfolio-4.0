import { Dela_Gothic_One } from 'next/font/google';

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

export default function BusinessCard() {
    return (
        <div className={`${DelaGothicOne.className} pt-20 md:pt-60`}>

            <div className="flex flex-col gap-4">
                
            </div>
        </div>
    );
}