"use client"

import { useState, useEffect, useRef } from "react";
import { PhoneIcon, EmailIcon, LinkedinIcon, GithubIcon, GitlabIcon } from "@/app/components/ui/icons";
import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, Power2, Circ } from "gsap";
import Link from 'next/link';
import Title from "@/app/components/ui/title/page";

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
    const sectionRefs = useRef<HTMLDivElement[]>([]);
    const socialRefs = useRef<HTMLAnchorElement[]>([]);
    const contactRefs = useRef<HTMLDivElement[]>([]);
    const [arrayOfSocialMedias, setArrayOfSocialMedias] = useState([
        {
            name: 'Github',
            icon: <GithubIcon className="w-6 md:w-9" />,
            link: 'https://github.com/josueprlt',
            linkTooltip: 'Josué Perrault',
            linkProperty: '-top-3 md:-top-5',
            color: 'text-github',
            bg: 'bg-github',
        },
        {
            name: 'LinkedIn',
            icon: <LinkedinIcon className="w-6 md:w-9" />,
            link: 'https://www.linkedin.com/in/josu%C3%A9-perrault-2a663a265',
            linkTooltip: 'Josué Perrault',
            linkProperty: 'top-[65px]',
            color: 'text-linkedin',
            bg: 'bg-linkedin',
        },
        {
            name: 'Gitlab',
            icon: <GitlabIcon className="w-6 md:w-9" />,
            link: 'https://gitlab.com/josueprlt',
            linkTooltip: 'jos9671',
            linkProperty: '-bottom-3 md:-bottom-5',
            color: 'text-gitlab',
            bg: 'bg-gitlab',
        },
    ]);

    useEffect(() => {
        if (sectionRefs.current.length > 0 && socialRefs.current.length > 0 && contactRefs.current.length > 0) {
            const timelineContact = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRefs.current[0],
                    start: "top center",
                },
            });

            sectionRefs.current.forEach((_, i) => {
                timelineContact.fromTo(sectionRefs.current[i],
                    { opacity: 0 },
                    { opacity: 1, duration: 1, ease: Power2.easeOut }
                );
            });

            contactRefs.current.forEach((_, i) => {
                timelineContact.fromTo(contactRefs.current[i],
                    { scale: 0 },
                    { scale: 1, duration: 0.5, ease: Circ.easeOut },
                    i * 0.5 + 0.5);
            });

            socialRefs.current.forEach((_, i) => {
                timelineContact.fromTo(socialRefs.current[i],
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 0.5, ease: Power2.easeOut },
                    i * 0.5 + 1.5);
            });
        }
    }, []);
    return (
        <div className={`${ClimateCrisis.className} mt-20 md:mt-60`} id="contact">
            <Title className="text-center">Contactez moi</Title>

            <section ref={(el) => sectionRefs.current[0] = el!} className={`${DelaGothicOne.className} block xl:hidden relative flex justify-center items-end h-52 mt-14 md:mt-40 outline outline-2 -outline-offset-2 outline-foreground rounded-2xl md:text-3xl`}>
                <div ref={(el) => contactRefs.current[0] = el!} className="absolute top-0 left-0 flex justify-center items-center gap-6 bg-gradient-to-r from-primary to-secondary w-full h-1/2 rounded-2xl">
                    <PhoneIcon className="w-6 md:w-11 text-background" />
                    <p className="text-background">07 57 49 21 89</p>
                </div>
                <div ref={(el) => contactRefs.current[1] = el!} className="flex justify-center h-1/2 items-center gap-6 rounded-2xl">
                    <EmailIcon className="w-6 md:w-11" />
                    <p className="text-foreground">josue.perrault@etu.unilim.fr</p>
                </div>
            </section>

            <section ref={(el) => sectionRefs.current[1] = el!} className={`${DelaGothicOne.className} block xl:hidden relative flex justify-center items-end h-40 mt-14 md:mt-40 outline outline-2 -outline-offset-2 outline-foreground rounded-2xl before:absolute before:top-1/2 before:w-full before:h-0.5 before:bg-foreground md:text-3xl`}>
                {arrayOfSocialMedias.map((social, index) => (
                    <Link href={social.link} key={index} target="_blank" ref={(el) => socialRefs.current[index] = el!} className={`absolute px-4 flex justify-center items-center gap-4 bg-background ${social.linkProperty} ${social.color}`}>
                        {social.icon}
                        <p>{social.name}</p>
                    </Link>
                ))}
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
                    {arrayOfSocialMedias.map((social, index) => (
                        <>
                            {/* <Tooltip
                                key={index}
                                content={social.linkTooltip}
                                className={`${DelaGothicOne.className} ${social.bg} text-background text-md`}
                                showArrow={true}
                            >
                            </Tooltip> */}
                            <Link href={social.link} key={index} target="_blank" ref={(el) => socialRefs.current[index + 3] = el!} className={`${social.color} ${social.linkProperty} px-4 flex justify-center items-center gap-4 bg-background text-3xl`}>
                                {social.icon}
                                <p>{social.name}</p>
                            </Link>
                        </>
                    ))}
                </div>
            </section>
        </div>
    );
}