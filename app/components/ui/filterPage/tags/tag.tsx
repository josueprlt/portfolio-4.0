import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap, Power2 } from 'gsap';
import { CloseIcon } from '@/app/components/ui/icons';

interface TagProps {
    name: string;
}

const Tag: React.FC<TagProps> = ({ name }) => {

    return (
        <button className='flex items-center whitespace-nowrap p-[5px] pr-4 gap-2 border-2 border-foreground rounded-full'>
            <CloseIcon className='md:w-8 md:h-8' />
            <p className='font-sans font-bold md:text-xl'>{name}</p>
        </button>
    );
};

export default Tag;