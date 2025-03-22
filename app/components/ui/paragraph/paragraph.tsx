"use client"
import React, { useEffect, useRef } from 'react';
import { gsap, Power2 } from 'gsap';
import SplitType from "split-type";

interface ParagraphProps {
    text: string;
    highlightedText?: string;
    className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text, highlightedText, className }) => {
    const paragraphRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const paragraphElement = paragraphRef.current;

        if (paragraphElement) {
            const split = new SplitType(paragraphElement, { types: 'lines' });
            gsap.from(split.lines, {
                opacity: 0,
                y: 20,
                duration: 1,
                ease: Power2.easeOut,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: paragraphElement,
                    start: "top center",
                },
            });
        }
    }, []);

    return (
        <p ref={paragraphRef} className={className}>
            {highlightedText ? (
                text.split(highlightedText).map((part, index) => (
                    <React.Fragment key={index}>
                        {part}
                        {index < text.split(highlightedText).length - 1 && (
                            <span className={`bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ${className}`}>{highlightedText}</span>
                        )}
                    </React.Fragment>
                ))
            ) : (
                text
            )}
        </p>
    );
};

export default Paragraph;