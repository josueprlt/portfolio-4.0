"use client"
import { useEffect, useRef } from 'react';
import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';
import { LogoIcon, PhoneIcon, EmailIcon, LinkIcon, LocationIcon } from '@/app/components/ui/icons';
import Image from 'next/image';
import { gsap, Power2 } from 'gsap';

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
    display: 'swap',
});

export default function BusinessCard() {
    const cardRef = useRef(null);
    const glowRef = useRef(null);
    const phoneRef = useRef<HTMLDivElement>(null);
    const emailRef = useRef<HTMLDivElement>(null);
    const linkRef = useRef<HTMLDivElement>(null);
    const locationRef = useRef<HTMLDivElement>(null);
    const phoneTextRef = useRef<HTMLParagraphElement>(null);
    const emailTextRef = useRef<HTMLParagraphElement>(null);
    const linkTextRef = useRef<HTMLParagraphElement>(null);
    const locationTextRef = useRef<HTMLParagraphElement>(null);
    let bounds;

    useEffect(() => {
        const $card = cardRef.current;

        function rotateToMouse(e) {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const leftX = mouseX - bounds.x;
            const topY = mouseY - bounds.y;
            const center = {
                x: leftX - bounds.width / 2,
                y: topY - bounds.height / 2
            }
            const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

            gsap.to($card, {
                scale: 1.04,
                rotateX: center.y / 25,
                rotateY: -center.x / 25,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                duration: 0.5,
                ease: 'power2.out',
            });

            if (glowRef.current) {
                gsap.to(glowRef.current, {
                    backgroundImage: `
                        radial-gradient(
                            circle at
                            ${center.x * 1 + bounds.width / 2}px
                            ${center.y * 1 + bounds.height / 2}px,
rgba(255, 255, 255, 0.16),
                            #0000000f
                        )
                    `,
                    duration: 0.5,
                    ease: 'power2.out',
                });
            }
        }

        const handleMouseEnter = () => {
            bounds = $card.getBoundingClientRect();
            document.addEventListener('mousemove', rotateToMouse);
        };

        const handleMouseLeave = () => {
            document.removeEventListener('mousemove', rotateToMouse);
            gsap.to($card, {
                scale: 1,
                rotateX: 0,
                rotateY: 0,
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                duration: 0.5,
                ease: 'power2.out',
            });
            if (glowRef.current) {
                gsap.to(glowRef.current, {
                    background: '',
                    duration: 0.5,
                    ease: 'power2.out',
                });
            }
        };

        $card.addEventListener('mouseenter', handleMouseEnter);
        $card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            $card.removeEventListener('mouseenter', handleMouseEnter);
            $card.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mousemove', rotateToMouse);
        };
    }, []);

    useEffect(() => {
        const phoneElement = phoneRef.current;
        const emailElement = emailRef.current;
        const linkElement = linkRef.current;
        const locationElement = locationRef.current;

        const handleClickText = (ref) => {
            const isVisible = ref.current.style.width !== '0px';
            gsap.to(ref.current, {
                width: isVisible ? 0 : 'auto',
                opacity: isVisible ? 0 : 1,
                duration: 0.75,
                ease: Power2.easeOut,
            });
        };

        if (phoneElement) {
            phoneElement.addEventListener("click", () => handleClickText(phoneTextRef));
        }

        if (emailElement) {
            emailElement.addEventListener("click", () => handleClickText(emailTextRef));
        }

        if (linkElement) {
            linkElement.addEventListener("click", () => handleClickText(linkTextRef));
        }

        if (locationElement) {
            locationElement.addEventListener("click", () => handleClickText(locationTextRef));
        }

        return () => {
            if (phoneElement) {
                phoneElement.removeEventListener("click", () => handleClickText(phoneTextRef));
            }

            if (emailElement) {
                emailElement.removeEventListener("click", () => handleClickText(emailTextRef));
            }

            if (linkElement) {
                linkElement.removeEventListener("click", () => handleClickText(linkTextRef));
            }

            if (locationElement) {
                locationElement.removeEventListener("click", () => handleClickText(locationTextRef));
            }
        };
    }, []);

    return (
        <div className={`${ClimateCrisis.className} pt-20 md:pt-60`}>

            <section ref={cardRef} className="max-w-96 mx-auto flex items-center flex-col gap-10 pt-10 bg-foreground rounded-lg drop-shadow shadow-lg overflow-hidden md:hidden">
                <div className='flex items-center flex-col gap-2'>
                    <p className='text-2xl text-background'>PERRAULT Josué</p>
                    <p className='text-xl text-secondary'>Développeur Web</p>
                </div>

                <div className='w-48 h-48 flex justify-center items-center bg-background rounded-full overflow-hidden'>
                    <Image src="/img/profil.png" alt="Image de profil" width={182} height={245} />
                </div>

                <div className='flex items-center flex-col gap-2'>
                    <div ref={phoneRef} className='flex flex-row gap-4 cursor-pointer'>
                        <PhoneIcon className='w-6 h-6 text-primary' />
                        <p ref={phoneTextRef} className='text-background w-0 overflow-hidden text-nowrap'>07 57 49 21 89</p>
                    </div>
                    <div ref={emailRef} className='flex flex-row gap-4 cursor-pointer'>
                        <EmailIcon className='w-6 h-6 text-primary' />
                        <p ref={emailTextRef} className='text-background w-0 overflow-hidden text-nowrap'>josue.perrault@etu.unilim.fr</p>
                    </div>
                    <div ref={linkRef} className='flex flex-row gap-4 cursor-pointer'>
                        <LinkIcon className='w-6 h-6' />
                        <p ref={linkTextRef} className='text-background w-0 overflow-hidden text-nowrap'>portfolio-josue.fr</p>
                    </div>
                    <div ref={locationRef} className='flex flex-row gap-4 cursor-pointer'>
                        <LocationIcon className='w-6 h-6' />
                        <p ref={locationTextRef} className='text-background w-0 overflow-hidden text-nowrap'>56430 Mauron</p>
                    </div>
                </div>

                <div ref={glowRef} className="absolute inset-0 pointer-events-none"></div>
                <span className='block mt-10 w-full h-5 bg-gradient-to-r from-primary to-secondary'></span>
            </section>

            <section ref={cardRef} className='relative hidden md:flex w-full pt-10 flex-col gap-10 bg-foreground rounded-xl shadow-lg overflow-hidden max-w-[994px] mx-auto'>
                <div className='flex justify-between w-full px-10'>
                    <div>
                        <p className='text-2xl text-background mb-5'>PERRAULT Josué</p>
                        <p className='text-xl text-secondary'>Développeur Web</p>
                    </div>
                    <div>
                        <LogoIcon className='text-background' />
                    </div>
                </div>

                <div className='flex flex-row justify-between lg:justify-around items-center px-10 py-5'>
                    <div className='w-56 h-56 flex justify-center items-center bg-background rounded-full overflow-hidden'>
                        <Image src="/img/profil.png" alt="Image de profil" width={182} height={245} />
                    </div>
                    <ul className={`${DelaGothicOne.className} flex items-start flex-col gap-6 text-background text-xl`}>
                        <li className='flex justify-center items-center flex-row gap-2'>
                            <PhoneIcon className='w-9 h-9 text-primary' />
                            <p className='text-background'>07 57 49 21 89</p>
                        </li>
                        <li className='flex justify-center items-center flex-row gap-2'>
                            <EmailIcon className='w-9 h-9 text-primary' />
                            <p className='text-background'>josue.perrault@etu.unilim.fr</p>
                        </li>
                        <li className='flex justify-center items-center flex-row gap-2'>
                            <LinkIcon className='w-9 h-9' />
                            <p className='text-background'>portfolio-josue.fr</p>
                        </li>
                        <li className='flex justify-center items-center flex-row gap-2'>
                            <LocationIcon className='w-9 h-9' />
                            <p className='text-background'>56430 Mauron</p>
                        </li>
                    </ul>
                </div>

                <div ref={glowRef} className="absolute inset-0 pointer-events-none"></div>
                <span className='block w-full h-5 bg-gradient-to-r from-primary to-secondary'></span>
            </section>
        </div>
    );
}