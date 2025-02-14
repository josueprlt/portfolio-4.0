import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap, Power2 } from 'gsap';
import { SearchIcon } from '@/app/components/ui/icons';

interface ResearchBarProps {
    placeholder: string;
}

const ResearchBar: React.FC<ResearchBarProps> = ({ placeholder }) => {

    return (
        <div className='flex items-center px-4 gap-4 h-14 border-2 border-foreground rounded-3xl'>
            <SearchIcon className='w-4 h-4 md:w-8 md:h-8' />
            <input
                type="text"
                placeholder={placeholder}
                className='w-full h-full font-sans font-bold placeholder:text-base placeholder:text-secondaryGray'
                style={{
                    appearance: 'none',
                    border: 'none',
                    boxShadow: 'none',
                    outline: 'none',
                    background: 'none'
                }}
            />
        </div>
    );
};

export default ResearchBar;