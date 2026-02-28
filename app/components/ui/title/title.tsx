"use client"
import { useEffect, useRef } from 'react';
import { gsap, Power2 } from 'gsap';
import SplitType from "split-type";
import localFont from "next/font/local";

const ClimateCrisis = localFont({
    src: "../../../fonts/ClimateCrisis-Regular-VariableFont_YEAR.ttf",
    display: "swap",
});

interface TitleProps {
    children: React.ReactNode;
    className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className }) => {
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const titleElement = titleRef.current;

        if (titleElement) {
            const splitTitle = new SplitType(titleElement, { types: "chars" });
            gsap.from(splitTitle.chars, {
                y: -100,
                duration: 0.75,
                ease: Power2.easeOut,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: titleElement,
                    start: "top center",
                },
            });
        }
    }, []);

    return (
        <h2 ref={titleRef} className={`${ClimateCrisis.className} text-xl md:text-7xl clip-path ${className}`}>
            {children}
        </h2>
    );
};

export default Title;