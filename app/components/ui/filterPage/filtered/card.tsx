import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap, Power2 } from 'gsap';
import { ButtonArrowIcon } from '@/app/components/ui/icons';

interface CardProps {
    img: string;
    title: string;
    href: string;
}

const Card: React.FC<CardProps> = ({ img, title, href }) => {

    return (
        <Link href={href} className="">
            <div>
                <Image width={1000} height={1000} src={img} alt={`Image du projet ${title}`} />
            </div>
            <p>{title}</p>
        </Link>
    );
};

export default Card;