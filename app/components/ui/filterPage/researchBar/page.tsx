"use client"
import { useEffect, useRef, useState } from 'react';
import { SearchIcon } from '@/app/components/ui/icons';

interface ResearchBarProps {
    placeholder: string;
}

const ResearchBar: React.FC<ResearchBarProps> = ({ placeholder }) => {
    const [inputValue, setInputValue] = useState('');
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            console.log(value);
        }, 1000);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <div className='flex items-center px-4 gap-4 h-14 border-2 border-foreground rounded-3xl md:h-16 md:col-span-2'>
            <SearchIcon className='w-4 h-4 md:w-8 md:h-8' />
            <input
                type="text"
                placeholder={placeholder}
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
        </div>
    );
};

export default ResearchBar;