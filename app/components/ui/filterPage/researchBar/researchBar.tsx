"use client"
import { useEffect, useRef, useState } from 'react';
import { SearchIcon, CloseIcon } from '@/app/components/ui/icons';
import { gsap, Power1 } from 'gsap';

interface Project {
    title: string;
}

interface ResearchBarProps {
    lang: string;
    colorMode: string;
    placeholder: string;
    placeholderEn: string;
    projects: Project[];
    onProjectsFiltered: (searchTerm: string) => void;
}

const ResearchBar: React.FC<ResearchBarProps> = ({ lang, colorMode, placeholder, placeholderEn, onProjectsFiltered }) => {
    const [inputValue, setInputValue] = useState('');
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const researchBarRef = useRef<HTMLDivElement>(null);
    const closeRef = useRef<HTMLDivElement>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            onProjectsFiltered(value);
        }, 500);
    };

    const handleClearInput = () => {
        setInputValue('');
        onProjectsFiltered('');
    };

    useEffect(() => {
        if (researchBarRef.current) {
            gsap.fromTo(researchBarRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.5, ease: Power1.easeOut, delay: 0.5 }
            );
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (inputValue) {
            gsap.to(closeRef.current,
                { x: 0, opacity: 1, duration: 0.5, ease: Power1.easeOut }
            );
        } else {
            gsap.to(closeRef.current,
                { x: 10, opacity: 0, duration: 0.5, ease: Power1.easeOut }
            );
        }
    }, [inputValue]);

    return (
        <div ref={researchBarRef} className={`flex items-center px-4 gap-4 h-14 border-2 rounded-3xl md:h-16 md:col-span-2 ${colorMode === 'light' && 'border-foreground'} ${colorMode === 'dark' && 'border-background'}`}>
            <SearchIcon fill={colorMode === 'light' ? '#262330' : '#feefdd'} className='w-4 h-4 md:w-8 md:h-8' />
            <input
                type="text"
                placeholder={lang === 'en' ? placeholderEn : placeholder}
                value={inputValue}
                onChange={handleInputChange}
                className='w-full h-full font-sans font-bold text-base placeholder:text-base placeholder:text-secondaryGray md:placeholder:text-xl md:text-xl'
                style={{
                    appearance: 'none',
                    border: 'none',
                    boxShadow: 'none',
                    outline: 'none',
                    background: 'none'
                }}
            />
            <div ref={closeRef} className='rounded-full bg-secondary cursor-pointer' onClick={handleClearInput} style={{ opacity: 0 }}>
                <CloseIcon
                    className='w-4 h-4 md:w-8 md:h-8'
                />
            </div>
        </div>
    );
};

export default ResearchBar;