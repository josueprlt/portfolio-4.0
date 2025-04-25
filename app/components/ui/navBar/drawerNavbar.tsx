"use client"

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from "@heroui/drawer";
import { LogoIcon, ButtonArrowIcon, LinkedinIcon, GithubIcon, GitlabIcon } from "@/app/components/ui/icons";
import { gsap, Power2 } from 'gsap';
import { Climate_Crisis, Dela_Gothic_One } from 'next/font/google';
import ColorSelector from "@/app/components/ui/colorSelector/page";
import LangSelector from "@/app/components/ui/langSelector/page";

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
    lang: string;
    colorMode: string;
    onOpenChange?: (open: boolean) => void;
    isOpen?: boolean;
}

const DrawerNavbar: React.FC<DrawerProps> = ({ lang, colorMode, onOpenChange, isOpen }) => {
    const [arrayOfLinks] = useState([
        { href: '/', labelFr: 'Accueil', labelEn: 'Home' },
        { href: '/profil', labelFr: 'Mon Profil', labelEn: 'My Profile' },
        { href: '/#works', labelFr: 'Mon Travail', labelEn: 'My Work' },
        { href: '/filter', labelFr: 'Filtre', labelEn: 'Filter' },
        { href: '/#contact', labelFr: 'Contact', labelEn: 'Contact' },
    ]);
    const [arrayOfSocials, setArrayOfSocials] = useState([
        { href: 'https://github.com/josueprlt', name: 'Github', icon: <GithubIcon className="w-10 h-10" fill={colorMode === 'dark' ? '#FEEFDD' : '#171818'} /> },
        { href: 'https://www.linkedin.com/in/josu%C3%A9-perrault-2a663a265', name: 'Linkedin', icon: <LinkedinIcon className="w-10 h-10" /> },
        { href: 'https://gitlab.com/josueprlt', name: 'Gitlab', icon: <GitlabIcon className="w-10 h-10" /> },
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

    useEffect(() => {
        setArrayOfSocials((prev) =>
          prev.map((social) => {
            if (social.name === "Github") {
              return {
                ...social,
                icon: <GithubIcon className="w-6 md:w-9" fill={colorMode === "dark" ? "#FEEFDD" : "#262330"} />,
              };
            }
            return social;
          })
        );
      }, [colorMode]);

    return (
        <Drawer className={`h-full rounded-se-none rounded-ee-none ${colorMode === 'light' && 'bg-background text-foreground'} ${colorMode === 'dark' && 'bg-foreground text-background'}`} backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
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
                                    <p ref={(el) => { if (el) textRefs.current[index] = el }}>
                                        {lang === 'fr' && link.labelFr}
                                        {lang === 'en' && link.labelEn}
                                    </p>
                                    <ButtonArrowIcon ref={(el) => { if (el) iconRefs.current[index] = el }} className="w-4 h-4" />
                                    <span ref={(el) => { if (el) spanRefs.current[index] = el }} className={`absolute bottom-0 left-0 h-px ${colorMode === 'light' && 'bg-foreground'} ${colorMode === 'dark' && 'bg-background'}`}></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </DrawerBody>
                <DrawerFooter className="flex flex-col justify-start items-start gap-16">
                    <div className='flex flex-col gap-4'>
                        <LangSelector />
                        <ColorSelector />
                    </div>
                    <div className='flex flex-row gap-4'>
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
                    </div>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default DrawerNavbar;