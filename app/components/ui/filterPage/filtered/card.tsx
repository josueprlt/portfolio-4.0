import { useEffect, useRef } from 'react';
import { Dela_Gothic_One } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { gsap, Power2 } from 'gsap';

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

interface CardProps {
    img: string;
    title: string;
    href: string;
}

const Card: React.FC<CardProps> = ({ img, title, href }) => {
    const imageRef = useRef<HTMLImageElement>(null);

    const handleMouseEnter = () => {
        gsap.to(imageRef.current, {
            scale: 1.1,
            duration: 0.3,
            ease: Power2.easeOut,
        });
    };

    const handleMouseLeave = () => {
        gsap.to(imageRef.current, {
            scale: 1,
            duration: 0.3,
            ease: Power2.easeOut,
        });
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='w-full rounded-3xl border-2 border-foreground overflow-hidden card-element'
        >
            <Link href={href} className="w-full h-full">
                <div className='h-40 rounded-3xl md:h-56'>
                    <Image ref={imageRef} width={1000} height={1000} src={img} alt={`Image du projet ${title}`} className='w-full h-full object-cover' />
                </div>
                <p className={`${DelaGothicOne.className} h-auto p-4 text-xl md:p-6 md:text-2xl`}>{title}</p>
            </Link>
        </div>
    );
};

export default Card;