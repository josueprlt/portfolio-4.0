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

export default function ComponentDesktop({ data }) {
    gsap.registerPlugin(ScrollTrigger);
    const sectionRef = useRef<HTMLDivElement>(null);
    const socialRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const contactRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (sectionRef.current && contactRefs.current.length > 0 && socialRefs.current.length > 0) {
            const timelineContact = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                },
            });

            timelineContact.fromTo(sectionRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1, ease: Power2.easeOut }
            );

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
                        0.5 + index * 0.5);
                }
            });
        }
    }, []);

    return (
        <section ref={sectionRef} className={`${DelaGothicOne.className} hidden xl:grid relative h-80 grid grid-cols-2 mt-14 md:mt-40 outline outline-2 -outline-offset-2 outline-foreground rounded-2xl text-3xl`}>
            <div ref={(el) => (contactRefs.current[0] = el)} className="flex justify-center items-center h-48 gap-6 rounded-2xl">
                <EmailIcon className="w-11" />
                <p className="text-foreground">josue.perrault@etu.unilim.fr</p>
            </div>
            <div ref={(el) => (contactRefs.current[1] = el)} className="relative bg-gradient-to-r from-primary to-secondary h-48 rounded-2xl">
                <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center gap-6">
                    <PhoneIcon className="w-11 text-background" />
                    <p className="text-background">07 57 49 21 89</p>
                </div>
            </div>

            <div className="absolute -bottom-4 w-full flex justify-around items-center">
                {data.map((social, index) => (
                    <div key={index}>
                        <Link href={social.link} target="_blank" ref={(el) => (socialRefs.current[index] = el)} className={`${social.color} ${social.linkProperty} px-4 flex justify-center items-center gap-4 bg-background text-3xl`}>
                            {social.icon}
                            <p>{social.name}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}