import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap, Power2 } from 'gsap';
import { ButtonArrowIcon } from '@/app/components/ui/icons';

interface ButtonProps {
    href?: string;
    theme: 'primary' | 'secondary' | 'gradient' | 'disabled';
    children: React.ReactNode;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ href, theme, children, onClick }) => {
    const linkRef = useRef<HTMLElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const linkElement = linkRef.current;

        if (theme !== "disabled") {
            const handleMouseEnter = () => {
                const outlineColor = theme === 'gradient' ? '#FF4000' : theme === 'primary' ? '#262330' : 'transparent';

                gsap.to(divRef.current, {
                    scale: 15,
                    duration: 0.75,
                    ease: Power2.easeOut,
                });
                gsap.to(linkRef.current, {
                    color: linkRef.current.classList.contains('text-background') ? '#262330' : '#FEEFDD',
                    outline: `2px solid ${outlineColor}`,
                    duration: 0.5,
                    ease: Power2.easeIn,
                });
                gsap.to(arrowRef.current, {
                    rotate: '45deg',
                    duration: 0.5,
                    ease: Power2.easeOut,
                });
            };

            const handleMouseLeave = () => {
                gsap.to(divRef.current, {
                    scale: 1,
                    duration: 0.75,
                    ease: Power2.easeOut,
                });
                gsap.to(linkRef.current, {
                    color: linkRef.current.classList.contains('text-background') ? '#FEEFDD' : '#262330',
                    outline: '0px',
                    duration: 0.5,
                    ease: Power2.easeOut,
                });
                gsap.to(arrowRef.current, {
                    rotate: '0deg',
                    duration: 0.5,
                    ease: Power2.easeOut,
                });
            };

            if (linkElement) {
                linkElement.addEventListener("mouseenter", handleMouseEnter);
                linkElement.addEventListener("mouseleave", handleMouseLeave);

                return () => {
                    linkElement.removeEventListener("mouseenter", handleMouseEnter);
                    linkElement.removeEventListener("mouseleave", handleMouseLeave);
                };
            }
        }
    }, []);

    const themeClasses = {
        primary: 'bg-foreground text-background',
        secondary: 'bg-background text-foreground',
        gradient: 'bg-gradient-to-r from-primary to-secondary text-background',
        disabled: 'bg-gradient-to-r from-primaryGray to-secondaryGray cursor-not-allowed',
    };

    if (!href && !onClick) {
        console.error("Button component requires either 'href' or 'onClick' prop.");
        return null;
    }

    return href ? (
        <Link href={href} ref={linkRef} className={`relative ${themeClasses[theme]} text-base px-3 py-2 rounded-full pr-12 overflow-hidden md:px-4 md:py-3 md:pr-14 md:text-xl`}>
            <span className="relative z-30">{children}</span>
            <div ref={divRef} className={`absolute ${theme === "primary" || theme === "gradient" ? "bg-background" : "bg-foreground"} top-1 right-1 w-8 h-8 rounded-full md:top-[6px] md:right-[6px] md:w-10 md:h-10`}></div>
            <div ref={arrowRef} className="absolute top-[14px] right-[14px] md:top-4 md:right-4">
                <ButtonArrowIcon fill={theme === "primary" || theme === "gradient" ? "#262330" : "#FEEFDD"} className="w-3 md:w-5" />
            </div>
        </Link>
    ) : (
        <button onClick={onClick} ref={linkRef} className={`relative ${themeClasses[theme]} text-base px-3 py-2 rounded-full pr-12 overflow-hidden md:px-4 md:py-3 md:pr-14 md:text-xl`}>
            <span className="relative z-30">{children}</span>
            <div ref={divRef} className={`absolute ${theme === "primary" || theme === "gradient" ? "bg-background" : "bg-foreground"} top-1 right-1 w-8 h-8 rounded-full md:top-[6px] md:right-[6px] md:w-10 md:h-10`}></div>
            <div ref={arrowRef} className="absolute top-[14px] right-[14px] md:top-4 md:right-4">
                <ButtonArrowIcon fill={theme === "primary" || theme === "gradient" ? "#262330" : "#FEEFDD"} className="w-3 md:w-5" />
            </div>
        </button>
    );
};

export default Button;