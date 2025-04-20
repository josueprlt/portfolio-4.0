"use client"
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap, Power2 } from 'gsap';
import { ButtonArrowIcon, LightGithubIcon } from '@/app/components/ui/icons';
import { Dela_Gothic_One } from 'next/font/google';

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

interface ButtonProps {
    href?: string;
    theme: 'primary' | 'secondary' | 'gradient' | 'disabled' | 'github';
    children: React.ReactNode;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ href, theme, children, onClick }) => {
    const linkRef = useRef<HTMLElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const linkElement = linkRef.current;

        if (theme !== "disabled") {
            if (iconRef.current) {
                gsap.to(iconRef.current, {
                    fill: '#FEEFDD',
                    duration: 0,
                });
            }

            const handleMouseEnter = () => {
                const outlineColor = theme === 'gradient' ? '#FF4000' : theme === 'primary' ? '#262330' : theme === 'github' ? '#181717' : theme === 'secondary' ? '#FEEFDD' : 'transparent';

                if (divRef.current) {
                    gsap.to(divRef.current, {
                        scale: 15,
                        duration: 0.75,
                        ease: Power2.easeOut,
                    });
                }

                if (linkRef.current) {
                    gsap.to(linkRef.current, {
                        color: linkRef.current.classList.contains('text-background') ? '#262330' : '#FEEFDD',
                        outline: `2px solid ${outlineColor}`,
                        duration: 0.5,
                        ease: Power2.easeIn,
                    });
                }
                if (arrowRef.current) {
                    gsap.to(arrowRef.current, {
                        rotate: '45deg',
                        duration: 0.5,
                        ease: Power2.easeOut,
                    });
                }
                if (iconRef.current) {
                    gsap.to(iconRef.current, {
                        fill: '#262330',
                        duration: 0.75,
                        ease: Power2.easeOut,
                    });
                }
            };

            const handleMouseLeave = () => {
                if (divRef.current) {
                    gsap.to(divRef.current, {
                        scale: 1,
                        duration: 0.75,
                        ease: Power2.easeOut,
                    });
                }
                if (linkRef.current) {
                    gsap.to(linkRef.current, {
                        color: linkRef.current.classList.contains('text-background') ? '#FEEFDD' : '#262330',
                        outline: '0px',
                        duration: 0.5,
                        ease: Power2.easeOut,
                    });
                }
                if (arrowRef.current) {
                    gsap.to(arrowRef.current, {
                        rotate: '0deg',
                        duration: 0.5,
                        ease: Power2.easeOut,
                    });
                }
                if (iconRef.current) {
                    gsap.to(iconRef.current, {
                        fill: '#FEEFDD',
                        duration: 0.75,
                        ease: Power2.easeOut,
                    });
                }
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
    }, [theme]);

    const themeClasses = {
        primary: 'bg-foreground text-background',
        secondary: 'bg-background text-foreground',
        gradient: 'bg-gradient-to-r from-primary to-secondary text-background',
        disabled: 'bg-gradient-to-r from-primaryGray to-secondaryGray text-background cursor-not-allowed',
        github: 'bg-github text-background',
    };

    if (theme === "github") {
        return (
            <Link href={href || '#'} ref={linkRef as React.RefObject<HTMLAnchorElement>} target='_blank' className={`relative ${themeClasses[theme]} ${DelaGothicOne.className} flex items-center gap-3 text-base px-3 py-2 rounded-full pr-12 overflow-hidden md:px-4 md:py-3 md:pr-14 md:text-xl`}>
                <LightGithubIcon ref={iconRef} className="w-6 h-6 z-10" />
                <span className="relative z-30">{children}</span>
                <div ref={divRef} className={`absolute ${"bg-background"} top-1 right-1 w-8 h-8 rounded-full md:top-[6px] md:right-[6px] md:w-10 md:h-10`}></div>
                <div ref={arrowRef} className="absolute top-[14px] right-[14px] md:top-4 md:right-4">
                    <ButtonArrowIcon fill={"#262330"} className="w-3 md:w-5" />
                </div>
            </Link>
        );
    }

    return href ? (
        <Link href={href} ref={linkRef as React.RefObject<HTMLAnchorElement>} className={`relative ${themeClasses[theme]} ${DelaGothicOne.className} text-base px-3 py-2 rounded-full pr-12 overflow-hidden md:px-4 md:py-3 md:pr-14 md:text-xl`}>
            <span className="relative z-30">{children}</span>
            <div ref={divRef} className={`absolute ${theme === "primary" || theme === "gradient" ? "bg-background" : "bg-foreground"} top-1 right-1 w-8 h-8 rounded-full md:top-[6px] md:right-[6px] md:w-10 md:h-10`}></div>
            <div ref={arrowRef} className="absolute top-[14px] right-[14px] md:top-4 md:right-4">
                <ButtonArrowIcon fill={theme === "primary" || theme === "gradient" ? "#262330" : "#FEEFDD"} className="w-3 md:w-5" />
            </div>
        </Link>
    ) : (
        <button onClick={onClick} ref={linkRef as React.RefObject<HTMLButtonElement>} className={`relative ${themeClasses[theme]} ${DelaGothicOne.className} text-base px-3 py-2 rounded-full pr-12 overflow-hidden md:px-4 md:py-3 md:pr-14 md:text-xl`}>
            <span className="relative z-30">{children}</span>
            <div ref={divRef} className={`absolute ${theme === "primary" || theme === "gradient" ? "bg-background" : "bg-foreground"} top-1 right-1 w-8 h-8 rounded-full md:top-[6px] md:right-[6px] md:w-10 md:h-10`}></div>
            <div ref={arrowRef} className="absolute top-[14px] right-[14px] md:top-4 md:right-4">
                <ButtonArrowIcon fill={theme === "primary" || theme === "gradient" ? "#262330" : "#FEEFDD"} className="w-3 md:w-5" />
            </div>
        </button>
    );

};

export default Button;