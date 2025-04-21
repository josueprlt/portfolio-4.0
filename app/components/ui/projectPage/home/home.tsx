"use client";

import { useState, useEffect, useRef } from "react";
import NavBar from "@/app/components/ui/navBar/page";
import { Climate_Crisis, Dela_Gothic_One } from "next/font/google";
import { Tooltip } from "@nextui-org/tooltip";
import { gsap, Power2 } from "gsap";
import { ArrowIcon } from '@/app/components/ui/icons';
import Link from 'next/link';

const DelaGothicOne = Dela_Gothic_One({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});

const ClimateCrisis = Climate_Crisis({
    subsets: ["latin"],
    display: "swap",
});

interface Project {
    id: number;
    title: string;
    titleEn: string;
    date: string;
    category: string[];
    description: string;
    descriptionEn: string;
    image: string[];
    link: string | null;
}

interface HomeProps {
    project: Project | null; // Permettre que project soit null
}

export default function Home({ project }: HomeProps) {
    const [lang, setLang] = useState("fr");
    const [colorMode, setColorMode] = useState("light");
    const numberOfItem = 2;
    const sectionRef = useRef<HTMLDivElement>(null);
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const spanRefs = useRef<HTMLSpanElement[]>([]);
    const spanRef2 = useRef<HTMLAnchorElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const retourRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const savedLanguage = localStorage.getItem("lang") || "fr";
        setLang(savedLanguage);

        const savedColorMode = localStorage.getItem("color-mode") || "light";
        setColorMode(savedColorMode);
    }, [colorMode]);

    useEffect(() => {
        if (document.fonts) {
            document.fonts.ready.then(() => {
                const spanElements = spanRefs.current;
                const spanElement2 = spanRef2.current;
                const h1Element = h1Ref.current;
                const imgElement = imageRef.current;
                const retourElement = retourRef.current;

                if (spanElements.length > 0) {
                    gsap.fromTo(spanElements,
                        { opacity: 0, x: 50 },
                        { delay: .5, opacity: 1, x: 0, duration: 1, ease: Power2.easeOut, stagger: 0.5 }
                    );
                }

                if (spanElement2) {
                    gsap.fromTo(spanElement2,
                        { opacity: 0, x: 50 },
                        { delay: 1.5, opacity: 1, x: 0, duration: 1, ease: Power2.easeOut }
                    );
                }

                if (h1Element) {
                    gsap.fromTo(h1Element,
                        { opacity: 0, x: -50 },
                        { opacity: 1, x: 0, duration: 1, ease: Power2.easeOut }
                    );
                }

                if (imgElement) {
                    gsap.fromTo(imgElement,
                        { filter: "grayscale(100%) blur(5px)" },
                        { delay: 2.5, filter: "grayscale(0%) blur(0px)", duration: 1, ease: Power2.easeOut }
                    );
                }

                if (retourElement) {
                    gsap.fromTo(retourElement,
                        { opacity: 0, x: -50 },
                        { delay: 2, opacity: 1, x: 0, duration: 1, ease: Power2.easeOut }
                    );
                }
            });
        }
    }, []);

    if (!project) {
        return <div>Loading...</div>;
    }

    const remainingCount = project.category.length - numberOfItem;

    return (
        <header className={`${ClimateCrisis.className} flex flex-col p-4 md:p-8 ${colorMode === "light" && "bg-background"} ${colorMode === "dark" && "bg-foreground"}`}>
            <NavBar lang={lang} colorMode={colorMode} />

            <section
                ref={sectionRef}
                className="h-96 flex justify-center items-center relative overflow-hidden mt-10 rounded-2xl after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-foreground after:to-transparent after:z-5 md:justify-start md:items-end md:px-10 md:pb-8 md:after:h-full"
            >
                <div className="md:flex md:flex-row md:justify-between md:items-end md:w-full">
                    <Link ref={retourRef} href="/#works" className="absolute top-2 start-2 bg-background px-4 py-2 rounded-full z-10 md:top-8 md:start-10">
                        <ArrowIcon className="h-3 rotate-90 md:h-5" />
                    </Link>

                    <h1
                        ref={h1Ref}
                        className="relative z-10 text-background text-4xl text-center md:text-7xl md:text-left"
                    >
                        {lang === 'fr' && project.title}
                        {lang === 'en' && project.titleEn}
                    </h1>

                    <div
                        className={`${DelaGothicOne.className} absolute flex flex-wrap-reverse gap-2 bottom-0 left-0 z-10 p-2 text-xs md:relative md:w-48 md:justify-end`}
                    >
                        {project.category.slice(0, numberOfItem).map((cat, index) => (
                            <Link
                                href='/filter'
                                ref={(el) => {
                                    if (el) spanRefs.current[index] = el;
                                }}
                                key={index}
                                className="bg-background text-foreground px-4 py-2 rounded-full"
                            >
                                {cat}
                            </Link>
                        ))}
                        {remainingCount > 0 && (
                            <Link href="/filter" ref={spanRef2} className="bg-background text-foreground px-4 py-2 rounded-full">
                                <Tooltip
                                    content={project.category.slice(numberOfItem).join(", ")}
                                    className={`${DelaGothicOne.className} bg-background color-foreground text-xs`}
                                    showArrow={true}
                                >
                                    <span
                                        className=""
                                    >
                                        + {remainingCount}
                                    </span>
                                </Tooltip>
                            </Link>
                        )}

                    </div>
                </div>

                <img
                    ref={imageRef}
                    src={project.image[0]}
                    alt="Description of the image"
                    className="w-full h-full absolute top-0 left-0 z-0 object-cover"
                />
            </section>
        </header>
    );
}