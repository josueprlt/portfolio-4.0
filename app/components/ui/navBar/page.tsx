"use client"

import { useEffect, useRef, useState } from "react";
import { LogoIcon } from "@/app/components/ui/icons";
import Link from 'next/link';
import { gsap, Power2 } from "gsap";
import Drawer from './drawerNavbar';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const linkRef = useRef<HTMLAnchorElement>(null);
    const logoIconRef = useRef<SVGSVGElement>(null);
    const divNavbarRef = useRef<HTMLDivElement>(null);
    const [colorMode, setColorMode] = useState("light");
    const [lang, setLang] = useState("fr");

    useEffect(() => {
        const savedColorMode = localStorage.getItem("color-mode") || "light";
        setColorMode(savedColorMode);

        const savedLang = localStorage.getItem("lang") || "fr";
        setLang(savedLang);
    }, [colorMode, lang]);

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
                    fill: colorMode === 'dark' ? '#FEEFDD' : '#262330',
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
    }, [colorMode]);

    return (
        <nav className="flex justify-between items-center">
            <Link href="/" ref={linkRef} className="relative flex justify-center items-center p-2">
                <LogoIcon ref={logoIconRef} fill={colorMode === 'light' ? '#262330' : '#FEEFDD'} className="relative w-8 h-8 z-20" />
            </Link>
            <div
                ref={divNavbarRef}
                className="flex justify-center items-end flex-col gap-2 h-full cursor-pointer"
                onClick={() => onOpenChange(true)}
            >
                <span className={`block w-12 h-1 rounded-full ${colorMode === 'light' && 'bg-foreground'} ${colorMode === 'dark' && 'bg-background'}`}></span>
                <span className={`block w-8 h-1 rounded-full ${colorMode === 'light' && 'bg-foreground'} ${colorMode === 'dark' && 'bg-background'}`}></span>
                <span className={`block w-5 h-1 rounded-full ${colorMode === 'light' && 'bg-foreground'} ${colorMode === 'dark' && 'bg-background'}`}></span>
            </div>

            <Drawer lang={lang} colorMode={colorMode} isOpen={isOpen} onOpenChange={onOpenChange} />
        </nav>
    );
}

export default Navbar;