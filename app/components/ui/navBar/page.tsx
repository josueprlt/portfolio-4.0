"use client"

import { useEffect, useRef } from "react";
import { LogoIcon } from "@/app/components/ui/icons";
import Link from 'next/link';
import { gsap, Power2 } from "gsap";

export default function NavBar() {
    const logoIconRef = useRef<HTMLAnchorElement>(null);
    const divNavbarRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLSpanElement>(null);
    const spanBlueRef = useRef<HTMLSpanElement>(null);
    const spanRedRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const logoIcon = logoIconRef.current;
        const divNavbar = divNavbarRef.current;
        const iconElement = iconRef.current;
        const spanBlueElement = spanBlueRef.current;
        const spanRedElement = spanRedRef.current;

        if (logoIcon) {
            gsap.fromTo(
                [divNavbar, logoIcon],
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 0.25, stagger: 0.35, ease: Power2.easeOut, delay: 1 }
            );

            const handleMouseEnter = () => {
                gsap.to(logoIcon, { color: '#FEEFDD', duration: .75 });
                gsap.to(iconElement, { width: 32, height: 32, duration: .75 });
                gsap.to(spanBlueElement, { translateX: 0, translateY: 0, duration: .75 });
                gsap.to(spanRedElement, { translateX: 0, translateY: 0, duration: .75 });
            };
            
            const handleMouseLeave = () => {
                gsap.to(logoIcon, { color: '#262330', duration: .75 });
                gsap.to(iconElement, { width: 28, height: 28, duration: .75 });
                gsap.to(spanBlueElement, { translateX: -48, translateY: 48, duration: .75 });
                gsap.to(spanRedElement, { translateX: 48, translateY: -48, duration: .75 });
            };

            logoIcon.addEventListener("mouseenter", handleMouseEnter);
            logoIcon.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                logoIcon.removeEventListener("mouseenter", handleMouseEnter);
                logoIcon.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, []);
    return (
        <nav className="flex justify-between items-center">
            <Link ref={logoIconRef} href="/" className="w-[48px] h-[48px] flex justify-center items-center overflow-hidden">
                <div className="flex justify-center items-center w-[48px] h-[48px] z-20">
                    <LogoIcon ref={iconRef} className="w-7 h-7 z-20" />
                </div>
                <span ref={spanBlueRef} className="absolute w-full h-full top-0 left-0 -translate-x-[48px] translate-y-[48px] linear-gradient-one z-10"></span>
                <span ref={spanRedRef} className="absolute w-full h-full top-0 left-0 translate-x-[48px] -translate-y-[48px] linear-gradient-two z-0"></span>
            </Link>
            <div ref={divNavbarRef} className="flex justify-center items-end flex-col gap-2 h-full cursor-pointer">
                {/* <span className="block w-8 h-1 bg-foreground relative before:content-[''] before:block before:w-12 before:bg-foreground before:h-1 before:absolute before:-top-3 before:right-0 after:content-[''] after:block after:w-5 after:bg-foreground after:h-1 after:absolute after:top-3 after:right-0"></span> */}
                <span className="block w-12 h-1 bg-foreground rounded-full"></span>
                <span className="block w-8 h-1 bg-foreground rounded-full"></span>
                <span className="block w-5 h-1 bg-foreground rounded-full"></span>
            </div>
        </nav>
    );
}