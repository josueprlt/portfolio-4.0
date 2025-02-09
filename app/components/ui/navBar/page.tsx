"use client"

import { useEffect, useRef, useState } from "react";
import { LogoIcon, ButtonArrowIcon, WhatsappIcon, LinkedinIcon, InstagramIcon } from "@/app/components/ui/icons";
import Link from 'next/link';
import { gsap, Power2 } from "gsap";
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from "@heroui/drawer";
import { Climate_Crisis, Dela_Gothic_One } from 'next/font/google';

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
    display: 'swap',
});

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const linkRef = useRef<HTMLAnchorElement>(null);
    const logoIconRef = useRef<HTMLAnchorElement>(null);
    const divNavbarRef = useRef<HTMLDivElement>(null);
    const [arrayOfLinks, setArrayOfLinks] = useState([
        { href: '/', label: 'Accueil' },
        { href: '/profil', label: 'Mon Profil' },
        { href: '/#works', label: 'Mon Travail' },
        { href: '/#contact', label: 'Contact' },
    ]);

    const onOpenChange = (open) => {
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

            <Drawer className="h-full rounded-se-none rounded-ee-none bg-background" backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
                <DrawerContent className="p-5">
                    <DrawerHeader className="flex flex-row items-right gap-4">
                        <LogoIcon ref={logoIconRef} className="relative w-6 h-6 z-20" />
                        <h2 className={`${ClimateCrisis.className}`}>Menu</h2>
                    </DrawerHeader>
                    <DrawerBody>
                        <ul className={`${DelaGothicOne.className} flex flex-col gap-4 mt-8`}>
                            {arrayOfLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="flex flex-row justify-between items-center py-4 border-b border-foreground">
                                        <p>{link.label}</p>
                                        <ButtonArrowIcon className="w-4 h-4" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </DrawerBody>
                    <DrawerFooter className="flex flex-row justify-start items-center gap-4">
                        <Link href="#">
                            <WhatsappIcon className="w-10 h-10" />
                        </Link>
                        <Link href="#">
                            <LinkedinIcon className="w-10 h-10" />
                        </Link>
                        <Link href="#">
                            <InstagramIcon className="w-10 h-10" />
                        </Link>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </nav>
    );
}