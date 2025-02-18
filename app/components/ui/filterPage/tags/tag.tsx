import { useRef } from 'react';
import { gsap, Power2 } from 'gsap';
import { CloseIcon } from '@/app/components/ui/icons';

interface TagProps {
    name: string;
    onClick: () => void;
}

const Tag: React.FC<TagProps> = ({ name, onClick }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    const handleMouseEnter = () => {
        gsap.to(divRef.current, {
            scale: 10,
            x: -10,
            transformOrigin: "left",
            duration: 0.3,
            ease: Power2.easeOut,
        });
        gsap.to(textRef.current, {
            color: '#FEEFDD',
            duration: 0.3,
            ease: Power2.easeOut,
        });
    };

    const handleMouseLeave = () => {
        gsap.to(divRef.current, {
            scale: 1,
            x: 0,
            duration: 0.3,
            ease: Power2.easeOut,
        });
        gsap.to(textRef.current, {
            color: '#262330',
            duration: 0.3,
            ease: Power2.easeOut,
        });
    };

    return (
        <button
            className='relative flex items-center whitespace-nowrap p-[5px] pr-4 gap-2 border-2 border-foreground rounded-full overflow-hidden min-w-max'
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className='relative bg-secondary rounded-full z-10'>
                <CloseIcon className='w-[25px] h-[25px]' />
            </div>
            <div className='relative z-10'>
                <p ref={textRef} className='font-sans font-bold md:text-xl'>{name}</p>
            </div>
            <div ref={divRef} className='absolute w-[25px] h-[25px] bg-secondary rounded-full z-0'></div>
        </button>

    );
};

export default Tag;