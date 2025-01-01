"use client"

import { useEffect, useRef } from "react";
import { PhoneIcon, EmailIcon, WhatsappIcon, LinkedinIcon, InstagramIcon } from "@/app/components/ui/icons";
import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';
import { gsap, Power2, Circ } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
    display: 'swap',
});

export default function ContactMe() {
    gsap.registerPlugin(ScrollTrigger);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const sectionRefs = useRef<HTMLDivElement[]>([]);
    const socialRefs = useRef<HTMLDivElement[]>([]);
    const contactRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const titleElement = titleRef.current;

        if (titleElement) {
            gsap.from(
                titleElement, {
                opacity: 0,
                x: -300,
                scrollTrigger: {
                    trigger: titleElement,
                    start: "top center",
                },
            });
        }

        if (sectionRefs.current.length > 0 && socialRefs.current.length > 0 && contactRefs.current.length > 0) {
            const timelineContact = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRefs.current[0],
                    start: "top center"
                },
            });

            sectionRefs.current.forEach((_, i) => {
                timelineContact.from(sectionRefs.current[i], {
                    opacity: 0,
                    duration: 1,
                    ease: Power2.easeOut,
                });
            });

            contactRefs.current.forEach((_, i) => {
                timelineContact.from(contactRefs.current[i], {
                    scale: 0,
                    duration: 0.5,
                    ease: Circ.easeOut,
                }, i * 0.5 + 0.5);
            });

            socialRefs.current.forEach((_, i) => {
                timelineContact.from(socialRefs.current[i], {
                    opacity: 0,
                    y: 50,
                    duration: 0.5,
                    ease: Power2.easeOut,
                }, i * 0.5 + 1.5);
            });
        }

    }, []);
    return (
        <div className={`${ClimateCrisis.className} pt-20 md:pt-60`}>
            <h2 ref={titleRef} className="text-xl text-center relative z-10 md:text-7xl">Contact Me</h2>

            <section ref={(el) => sectionRefs.current[0] = el!} className={`${DelaGothicOne.className} block xl:hidden relative flex justify-center items-end h-48 mt-14 md:mt-40 outline outline-2 -outline-offset-2 outline-foreground rounded-2xl md:text-3xl`}>
                <div ref={(el) => contactRefs.current[0] = el!} className="absolute top-0 left-0 flex justify-center items-center gap-6 bg-gradient-to-r from-primary to-secondary w-full h-24 rounded-2xl">
                    <PhoneIcon className="w-6 md:w-11 text-background" />
                    <p className="text-background">07 57 49 21 89</p>
                </div>
                <div ref={(el) => contactRefs.current[1] = el!} className="flex justify-center h-24 items-center gap-6 rounded-2xl">
                    <EmailIcon className="w-6 md:w-11" />
                    <p className="text-foreground">josue.perrault@etu.unilim.fr</p>
                </div>
            </section>

            <section ref={(el) => sectionRefs.current[1] = el!} className={`${DelaGothicOne.className} block xl:hidden relative flex justify-center items-end h-40 mt-14 md:mt-40 outline outline-2 -outline-offset-2 outline-foreground rounded-2xl before:absolute before:top-1/2 before:w-full before:h-0.5 before:bg-foreground md:text-3xl`}>
                <div ref={(el) => socialRefs.current[0] = el!} className="absolute -top-3 md:-top-5 px-4 flex justify-center items-center gap-4 text-whatsapp bg-background">
                    <WhatsappIcon className="w-6 md:w-9" />
                    <p>WhatsApp</p>
                </div>
                <div ref={(el) => socialRefs.current[1] = el!} className="absolute top-1/2 -translate-y-3 px-4 flex justify-center items-center gap-4 text-linkedin bg-background">
                    <LinkedinIcon className="w-6 md:w-9" />
                    <p>LinkedIn</p>
                </div>
                <div ref={(el) => socialRefs.current[2] = el!} className="absolute -bottom-3 md:-bottom-5 px-4 flex justify-center items-center gap-4 text-instagram bg-background">
                    <InstagramIcon className="w-6 md:w-9" />
                    <p>Instagram</p>
                </div>
            </section>

            <section ref={(el) => sectionRefs.current[2] = el!} className={`${DelaGothicOne.className} hidden xl:grid relative h-80 grid grid-cols-2 mt-14 md:mt-40 outline outline-2 -outline-offset-2 outline-foreground rounded-2xl text-3xl`}>
                <div ref={(el) => contactRefs.current[2] = el!} className="flex justify-center items-center h-48 gap-6 rounded-2xl">
                    <EmailIcon className="w-11" />
                    <p className="text-foreground">josue.perrault@etu.unilim.fr</p>
                </div>
                <div ref={(el) => contactRefs.current[3] = el!} className="relative bg-gradient-to-r from-primary to-secondary h-48 rounded-2xl">
                    <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center gap-6">
                        <PhoneIcon className="w-11 text-background" />
                        <p className="text-background">07 57 49 21 89</p>
                    </div>
                </div>

                <div className="absolute -bottom-4 w-full flex justify-around items-center">
                    <div ref={(el) => socialRefs.current[3] = el!} className="px-4 flex justify-center items-center gap-4 text-whatsapp bg-background text-3xl">
                        <WhatsappIcon className="w-9" />
                        <p>WhatsApp</p>
                    </div>
                    <div ref={(el) => socialRefs.current[4] = el!} className="px-4 flex justify-center items-center gap-4 text-linkedin bg-background text-3xl">
                        <LinkedinIcon className="w-9" />
                        <p>LinkedIn</p>
                    </div>
                    <div ref={(el) => socialRefs.current[5] = el!} className="px-4 flex justify-center items-center gap-4 text-instagram bg-background text-3xl">
                        <InstagramIcon className="w-9" />
                        <p>Instagram</p>
                    </div>
                </div>
            </section>
        </div>
    );
}