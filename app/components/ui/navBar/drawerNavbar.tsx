"use client"

import { useState, useRef } from 'react';
import Link from 'next/link';
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from "@heroui/drawer";
import { LogoIcon, ButtonArrowIcon, LinkedinIcon, GithubIcon, GitlabIcon } from "@/app/components/ui/icons";
import { gsap, Power2 } from 'gsap';
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

interface DrawerProps {
    onOpenChange?: (open: boolean) => void;
    isOpen?: boolean;
}

const DrawerNavbar: React.FC<DrawerProps> = ({ onOpenChange, isOpen }) => {
    const [arrayOfLinks] = useState([
        { href: '/', label: 'Accueil' },
        { href: '/profil', label: 'Mon Profil' },
        { href: '/#works', label: 'Mon Travail' },
        { href: '/filter', label: 'Filtre' },
        { href: '/#contact', label: 'Contact' },
    ]);
    const [arrayOfSocials] = useState([
        { href: 'https://github.com/josueprlt', icon: <GithubIcon className="w-10 h-10" /> },
        { href: 'https://www.linkedin.com/in/josu%C3%A9-perrault-2a663a265', icon: <LinkedinIcon className="w-10 h-10" /> },
        { href: 'https://gitlab.com/josueprlt', icon: <GitlabIcon className="w-10 h-10" /> },
    ]);

    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
    const iconRefs = useRef<(SVGSVGElement | null)[]>([]);
    const spanRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const socialRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleLinkMouseEnter = (index: number) => {
        gsap.to(textRefs.current[index], { x: 10, duration: 0.3, ease: Power2.easeOut });
        gsap.to(iconRefs.current[index], { rotate: 45, duration: 0.3, ease: Power2.easeOut });
        gsap.to(spanRefs.current[index], { width: '100%', duration: 0.3, ease: Power2.easeOut });
    };

    const handleLinkMouseLeave = (index: number) => {
        gsap.to(textRefs.current[index], { x: 0, duration: 0.3, ease: Power2.easeOut });
        gsap.to(iconRefs.current[index], { rotate: 0, duration: 0.3, ease: Power2.easeOut });
        gsap.to(spanRefs.current[index], { width: '0%', duration: 0.3, ease: Power2.easeOut });
    };

    const handleSocialMouseEnter = (index: number) => {
        gsap.to(socialRefs.current[index], { scale: 1.2, duration: 0.3, ease: Power2.easeOut });
    };

    const handleSocialMouseLeave = (index: number) => {
        gsap.to(socialRefs.current[index], { scale: 1, duration: 0.3, ease: Power2.easeOut });
    };

    const handleLinkClick = () => {
        if (onOpenChange) {
            onOpenChange(false);
        }
    };

    return (
        <Drawer className="h-full rounded-se-none rounded-ee-none bg-background" backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
            <DrawerContent className="p-5">
                <DrawerHeader className="flex flex-row items-right gap-4">
                    <LogoIcon className="relative w-6 h-6 z-20" />
                    <h2 className={`${ClimateCrisis.className}`}>Menu</h2>
                </DrawerHeader>
                <DrawerBody>
                    <ul className={`${DelaGothicOne.className} flex flex-col gap-4 mt-8`}>
                        {arrayOfLinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    href={link.href}
                                    className="relative flex flex-row justify-between items-center py-4"
                                    onMouseEnter={() => handleLinkMouseEnter(index)}
                                    onMouseLeave={() => handleLinkMouseLeave(index)}
                                    onClick={handleLinkClick}
                                    ref={(el) => { if (el) linkRefs.current[index] = el }}
                                >
                                    <p ref={(el) => { if (el) textRefs.current[index] = el }}>{link.label}</p>
                                    <ButtonArrowIcon ref={(el) => { if (el) iconRefs.current[index] = el }} className="w-4 h-4" />
                                    <span ref={(el) => { if (el) spanRefs.current[index] = el }} className='absolute bottom-0 left-0 h-px bg-foreground'></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </DrawerBody>
                <DrawerFooter className="flex flex-row justify-start items-center gap-4">
                    {arrayOfSocials.map((social, index) => (
                        <Link
                            key={index}
                            href={social.href}
                            onMouseEnter={() => handleSocialMouseEnter(index)}
                            onMouseLeave={() => handleSocialMouseLeave(index)}
                            onClick={handleLinkClick}
                            target='_blank'
                        >
                            <div ref={(el) => { if (el) socialRefs.current[index] = el }}>
                                {social.icon}
                            </div>
                        </Link>
                    ))}
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default DrawerNavbar;