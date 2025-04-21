import { useRef } from 'react';
import { Dela_Gothic_One } from 'next/font/google';
import Link from 'next/link';
import { gsap, Power2 } from 'gsap';

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

interface CardProps {
    lang: string;
    colorMode: string;
    img: string;
    title: string;
    titleEn: string;
    href: string;
}

const Card: React.FC<CardProps> = ({ lang, colorMode, img, title, titleEn, href }) => {
    const imageRef = useRef<HTMLImageElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    
    const handleMouseEnter = () => {
        gsap.to(imageRef.current, {
            scale: 1.1,
            duration: 0.3,
            ease: Power2.easeOut,
        });
        gsap.to(textRef.current, {
            x: 5,
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
        gsap.to(textRef.current, {
            x: 0,
            duration: 0.3,
            ease: Power2.easeOut,
        });
    };

    const truncateText = (text: string, maxLength: number = 15) => {
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`w-full rounded-3xl border-2 overflow-hidden card-element ${colorMode === 'light' && 'border-foreground'} ${colorMode === 'dark' && 'border-background'}`}
        >
            <Link href={href} className="w-full h-full">
                <div className='h-40 rounded-b-3xl md:h-56 overflow-hidden'>
                    <img ref={imageRef} src={img} alt={`Image du projet ${title}`} className='w-full h-full object-cover' />
                </div>
                <p ref={textRef} className={`${DelaGothicOne.className} h-auto p-4 text-xl md:p-6 md:text-2xl`}>
                    {lang === 'fr' && truncateText(title)}
                    {lang === 'en' && truncateText(titleEn)}
                </p>
            </Link>
        </div>
    );
};

export default Card;