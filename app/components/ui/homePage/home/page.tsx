"use client"

import { useEffect, useRef } from "react";
import { ArrowIcon } from "@/app/components/ui/icons";
import NavBar from "@/app/components/ui/navBar/page";
import { Climate_Crisis } from 'next/font/google';
import { gsap, Power2, Circ } from "gsap";
import Link from "next/link";

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
    display: 'swap',
});

export default function Home() {
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const spanFirstnameRef = useRef<HTMLSpanElement>(null);
    const spanNameRef = useRef<HTMLSpanElement>(null);
    const spanLinearRef = useRef<HTMLSpanElement>(null);
    const arrowRef = useRef<HTMLAnchorElement>(null);
    const hiddenSpanRef = useRef<HTMLSpanElement>(null);
    const portfolioRef = useRef<HTMLHeadingElement>(null);
    const lineRef = useRef<HTMLSpanElement>(null);
    const yearRef = useRef<HTMLHeadingElement>(null);
    const span1Ref = useRef<HTMLSpanElement>(null);
    const span2Ref = useRef<HTMLSpanElement>(null);
    const span3Ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const h1Element = h1Ref.current;
        const firstnameElement = spanFirstnameRef.current;
        const nameElement = spanNameRef.current;
        const linearElement = spanLinearRef.current;
        const arrowElement = arrowRef.current;
        const hiddenSpan = hiddenSpanRef.current;
        const portfolioElement = portfolioRef.current;
        const lineElement = lineRef.current;
        const yearElement = yearRef.current;

        const isMobile = window.innerWidth <= 768;
        const size = isMobile ? 24 : 72;
        const widthLinear = isMobile ? 208 : 384;

        gsap.fromTo(
            firstnameElement,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 1, ease: Power2.easeOut, delay: 1.5 }
        );
        gsap.fromTo(
            nameElement,
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 1, ease: Power2.easeOut, delay: 1.5 }
        );
        gsap.fromTo(
            linearElement,
            { opacity: 0, width: 0 },
            { opacity: 1, width: widthLinear, duration: 1, ease: Power2.easeOut, delay: 2.5 }
        );
        gsap.fromTo(
            arrowElement,
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 1, ease: Power2.easeOut, delay: 3 }
        );

        gsap.fromTo(
            [portfolioElement, yearElement],
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.25, stagger: 0.7, ease: Power2.easeOut }
        );

        gsap.fromTo(
            lineElement,
            { width: '0%' },
            { width: '100%', duration: 2, ease: Circ.easeOut, delay: 0.25 }
        );

        if (h1Element && hiddenSpan) {
            const handleMouseEnter = () => {
                gsap.fromTo(
                    hiddenSpan,
                    { width: 0, height: 0 },
                    { width: size, height: size, opacity: 1, duration: .75 }
                );
            };

            const handleMouseLeave = () => {
                gsap.to(hiddenSpan, { width: 0, height: 0, opacity: 0, duration: 1 });
            };

            h1Element.addEventListener("mouseenter", handleMouseEnter);
            h1Element.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                h1Element.removeEventListener("mouseenter", handleMouseEnter);
                h1Element.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, []);

    const handleArrowMouseEnter = () => {
        gsap.to(span1Ref.current, { height: 60, y: -10, duration: 0.3, ease: Power2.easeOut })
        gsap.to(span2Ref.current, { height: 28, x: 5, y: -5, duration: 0.3, delay: .05, ease: Power2.easeOut })
        gsap.to(span3Ref.current, { height: 28, x: -5, y: -5, duration: 0.3, delay: .05, ease: Power2.easeOut });
    };

    const handleArrowMouseLeave = () => {
        gsap.to(span2Ref.current, { height: 32, x: 0, y: 0, duration: 0.3, ease: Power2.easeOut })
        gsap.to(span3Ref.current, { height: 32, x: 0, y: 0, duration: 0.3, ease: Power2.easeOut });
        gsap.to(span1Ref.current, { height: 64, y: 0, duration: 0.3, delay: .05, ease: Power2.easeOut })
    };

    return (
        <header className={`${ClimateCrisis.className} flex flex-col justify-between h-screen p-4 md:p-8`}>
            <NavBar />

            <section className="flex flex-col justify-center items-center gap-16">
                <div className="flex items-center flex-col gap-7">
                    <h1 ref={h1Ref} className="text-3xl flex justify-center items-center flex-wrap gap-2 text-center md:gap-4 md:text-7xl">
                        <span ref={spanFirstnameRef} className="animate-span">Josué</span>
                        <span ref={hiddenSpanRef} className="hidden-span w-0 h-0 rounded-full bg-gradient-to-b from-primary to-secondary"></span>
                        <span ref={spanNameRef} className="animate-span">Perrault</span>
                    </h1>
                    <span ref={spanLinearRef} className="w-52 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full md:w-96 md:h-3"></span>
                </div>
                <Link
                    href="#aboutme"
                    ref={arrowRef}
                    className="relative w-16 h-16 flex justify-center"
                    onMouseEnter={handleArrowMouseEnter}
                    onMouseLeave={handleArrowMouseLeave}
                >
                    <span ref={span1Ref} className="block w-1.5 h-16 bg-foreground rounded-xl"></span>
                    <span ref={span2Ref} className="absolute -bottom-[3.5px] right-[19px] w-1.5 h-8 bg-foreground rounded-xl rotate-45"></span>
                    <span ref={span3Ref} className="absolute -bottom-[3.5px] left-[19px] w-1.5 h-8 bg-foreground rounded-xl -rotate-45"></span>
                </Link>
            </section>

            <section className="flex justify-left items-center gap-3">
                <h2 ref={portfolioRef} className="text-xl md:text-4xl">Portfolio</h2>
                <span ref={lineRef} className="w-full h-px bg-foreground translate-y-[7px] md:translate-y-[13px]"></span>
                <h2 ref={yearRef} className="flex items-center gap-2 text-xl before:block before:w-2 before:h-2 before:bg-foreground before:rounded-full before:translate-y-[5px] md:text-4xl md:before:w-4 md:before:h-4 md:before:translate-y-[6px]">2025</h2>
            </section>
        </header>
    );
}