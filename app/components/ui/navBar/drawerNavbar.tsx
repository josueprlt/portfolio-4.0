import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from "@heroui/drawer";
import { LogoIcon, ButtonArrowIcon, WhatsappIcon, LinkedinIcon, InstagramIcon } from "@/app/components/ui/icons";
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
    const [arrayOfLinks, setArrayOfLinks] = useState([
        { href: '/', label: 'Accueil' },
        { href: '/profil', label: 'Mon Profil' },
        { href: '/#works', label: 'Mon Travail' },
        { href: '/filter', label: 'Filtre' },
        { href: '/#contact', label: 'Contact' },
    ]);

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
    );
};

export default DrawerNavbar;