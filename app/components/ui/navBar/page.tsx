"use client"

import { useEffect, useRef, useState } from "react";
import { LogoIcon } from "@/app/components/ui/icons";
import Link from 'next/link';
import { gsap, Power2 } from "gsap";
import Drawer from './drawerNavbar';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const linkRef = useRef<HTMLAnchorElement>(null);
    const logoIconRef = useRef<SVGSVGElement>(null);
    const divNavbarRef = useRef<HTMLDivElement>(null);

    const onOpenChange = (open: boolean) => {
        setIsOpen(open);
    };

    useEffect(() => {
        const linkElement = linkRef.current;
        const logoIcon = logoIconRef.current;
        const divNavbar = divNavbarRef.current;

        if (linkElement && logoIcon && divNavbar) {
            gsap.fromTo(
                [divNavbar, logoIcon],
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 0.25, stagger: 0.35, ease: Power2.easeOut, delay: 1 }
            );

            const handleMouseEnter = () => {
                gsap.to(linkElement, {
                    scale: 1.25,
                    duration: 0.75,
                    ease: Power2.easeOut,
                });
                gsap.to(logoIcon.querySelector('path'), {
                    fill: 'url(#gradient)',
                    duration: 0.75,
                    ease: Power2.easeOut,
                });

                gsap.from('#gradient', {
                    rotate: '0deg'
                });
                gsap.to('#gradient', {
                    rotate: '360deg',
                    duration: 10,
                    ease: "none",
                    repeat: -1,
                });
            };

            const handleMouseLeave = () => {
                gsap.to(linkElement, {
                    scale: 1,
                    duration: 0.75,
                    ease: Power2.easeOut,
                });
                gsap.to(logoIcon.querySelector('path'), {
                    fill: 'currentColor',
                    duration: 0.75,
                    ease: Power2.easeOut,
                });
            };

            linkElement.addEventListener("mouseenter", handleMouseEnter);
            linkElement.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                linkElement.removeEventListener("mouseenter", handleMouseEnter);
                linkElement.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, []);

    return (
        <nav className="flex justify-between items-center">
            <Link href="/" ref={linkRef} className="relative flex justify-center items-center p-2">
                <LogoIcon ref={logoIconRef} className="relative w-8 h-8 z-20" />
            </Link>
            <div
                ref={divNavbarRef}
                className="flex justify-center items-end flex-col gap-2 h-full cursor-pointer"
                onClick={() => onOpenChange(true)}
            >
                <span className="block w-12 h-1 bg-foreground rounded-full"></span>
                <span className="block w-8 h-1 bg-foreground rounded-full"></span>
                <span className="block w-5 h-1 bg-foreground rounded-full"></span>
            </div>

            <Drawer isOpen={isOpen} onOpenChange={onOpenChange} />
        </nav>
    );
}