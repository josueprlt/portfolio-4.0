"use client"

import { useEffect, useRef } from "react";
import { LogoIcon } from "@/app/components/ui/icons";
import Link from 'next/link';
import { gsap, Power2 } from "gsap";

export default function NavBar() {
    const logoIconRef = useRef<HTMLAnchorElement>(null);
    const divNavbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const logoIcon = logoIconRef.current;
        const divNavbar = divNavbarRef.current;

        gsap.fromTo(
            [divNavbar, logoIcon],
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 0.25, stagger: 0.35, ease: Power2.easeOut, delay: 1 }
        );

        if (logoIcon) {
            const handleMouseEnter = () => {

                gsap.from(
                    logoIcon,
                    { scale: 0.9, duration: .75 }
                );
            };

            const handleMouseLeave = () => {
                gsap.to(logoIcon, { scale: 1, duration: .75 });
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
            <Link ref={logoIconRef} href="/">
                <LogoIcon />
            </Link>
            <div ref={divNavbarRef} className="flex items-end flex-col gap-2 h-full cursor-pointer">
                {/* <span className="block w-8 h-1 bg-foreground relative before:content-[''] before:block before:w-12 before:bg-foreground before:h-1 before:absolute before:-top-3 before:right-0 after:content-[''] after:block after:w-5 after:bg-foreground after:h-1 after:absolute after:top-3 after:right-0"></span> */}
                <span className="block w-12 h-1 bg-foreground rounded-full"></span>
                <span className="block w-8 h-1 bg-foreground rounded-full"></span>
                <span className="block w-5 h-1 bg-foreground rounded-full"></span>
            </div>
        </nav>
    );
}