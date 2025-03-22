"use client"

import { useEffect, useRef } from "react";
import { PhoneIcon, EmailIcon } from "@/app/components/ui/icons";
import { Dela_Gothic_One } from 'next/font/google';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, Power2, Circ } from "gsap";
import Link from 'next/link';

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

interface Social {
    link: string;
    color: string;
    linkProperty: string;
    icon: React.ReactNode;
    name: string;
}

interface ComponentMobileProps {
    data: Social[];
}

export default function ComponentMobile({ data }: ComponentMobileProps) {
    gsap.registerPlugin(ScrollTrigger);
    const sectionRefs = useRef<(HTMLElement | null)[]>([]);
    const socialRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const contactRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (sectionRefs.current.length > 0 && contactRefs.current.length > 0 && socialRefs.current.length > 0) {
            const timelineContact = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRefs.current[0],
                    start: "top center",
                },
            });

            sectionRefs.current.forEach((sectionRef) => {
                if (sectionRef) {
                    timelineContact.fromTo(sectionRef,
                        { opacity: 0 },
                        { opacity: 1, duration: 1, ease: Power2.easeOut }
                    );
                }
            });

            contactRefs.current.forEach((contactRef, index) => {
                if (contactRef) {
                    timelineContact.fromTo(contactRef,
                        { scale: 0 },
                        { scale: 1, duration: 0.5, ease: Circ.easeOut },
                        0.5 + index * 0.5);
                }
            });

            socialRefs.current.forEach((socialRef, index) => {
                if (socialRef) {
                    timelineContact.fromTo(socialRef,
                        { opacity: 0, y: 50 },
                        { opacity: 1, y: 0, duration: 0.5, ease: Power2.easeOut },
                        1.25 + index * 0.5);
                }
            });
        }
    }, []);

    return (
        <>
            <section ref={(el) => { if (el) sectionRefs.current[0] = el }} className={`${DelaGothicOne.className} block xl:hidden relative flex justify-center items-end h-52 mt-14 md:mt-40 outline outline-2 -outline-offset-2 outline-foreground rounded-2xl md:text-3xl`}>
                <div ref={(el) => { if (el) contactRefs.current[0] = el }} className="absolute top-0 left-0 flex justify-center items-center gap-6 bg-gradient-to-r from-primary to-secondary w-full h-1/2 rounded-2xl">
                    <PhoneIcon className="w-6 md:w-11 text-background" />
                    <p className="text-background">07 57 49 21 89</p>
                </div>
                <div ref={(el) => { if (el) contactRefs.current[1] = el }} className="flex justify-center h-1/2 items-center gap-6 rounded-2xl">
                    <EmailIcon className="w-6 md:w-11" />
                    <p className="text-foreground">josue.perrault@etu.unilim.fr</p>
                </div>
            </section>

            <section ref={(el) => { if (el) sectionRefs.current[1] = el }} className={`${DelaGothicOne.className} block xl:hidden relative flex justify-center items-end h-40 mt-14 md:mt-40 outline outline-2 -outline-offset-2 outline-foreground rounded-2xl before:absolute before:top-1/2 before:w-full before:h-0.5 before:bg-foreground md:text-3xl`}>
                {data.map((social, index) => (
                    <Link href={social.link} key={index} target="_blank" ref={(el) => { if (el) socialRefs.current[index] = el }} className={`absolute px-4 flex justify-center items-center gap-4 bg-background ${social.linkProperty} ${social.color}`}>
                        {social.icon}
                        <p>{social.name}</p>
                    </Link>
                ))}
            </section>
        </>
    );
}