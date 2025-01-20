"use client";

import { useEffect, useState, useRef } from "react";
import NavBar from "@/app/components/ui/navBar/page";
import { Climate_Crisis, Dela_Gothic_One } from "next/font/google";
import Image from "next/image";
import { Tooltip } from "@nextui-org/tooltip";
import { gsap, Power2 } from "gsap";
import { useRouter } from "next/router";

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
    date: string;
    category: string[];
    description: string;
    image: string[];
    link: string | null;
}

interface HomeProps {
    project: Project | null; // Permettre que project soit null
}

export default function Home({ project }: HomeProps) {
    const router = useRouter();
    const numberOfItem = 2;
    const sectionRef = useRef<HTMLDivElement>(null);
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const spanRefs = useRef<HTMLSpanElement[]>([]);
    const spanRef2 = useRef<HTMLSpanElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    const [animationsPlayed, setAnimationsPlayed] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('animationsPlayedHome') === 'true';
        }
        return false;
    });

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.removeItem('animationsPlayedHome');
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    useEffect(() => {
        const handleRouteChange = () => {
            setAnimationsPlayed(false);
            localStorage.removeItem('animationsPlayedHome');
        };

        router.events.on('routeChangeStart', handleRouteChange);
        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router]);

    useEffect(() => {
        if (animationsPlayed) return;
        
        if (document.fonts) {
            document.fonts.ready.then(() => {
                const spanElements = spanRefs.current;
                const spanElement2 = spanRef2.current;
                const h1Element = h1Ref.current;
                const imgElement = imageRef.current;

                if (spanElements.length > 0) {
                    gsap.from(spanElements, {
                        delay: .5,
                        opacity: 0,
                        x: 50,
                        duration: 1,
                        ease: Power2.easeOut,
                        stagger: 0.5,
                    });
                }

                if (spanElement2) {
                    gsap.from(spanElement2, {
                        delay: 1.5,
                        opacity: 0,
                        x: 50,
                        duration: 1,
                        ease: Power2.easeOut,
                    });
                }

                if (h1Element) {
                    gsap.from(h1Element, {
                        opacity: 0,
                        x: -50,
                        duration: 1,
                        ease: Power2.easeOut,
                    });
                }

                if (imgElement) {
                    gsap.from(imgElement, {
                        delay: 2,
                        filter: "grayscale(100%) blur(5px)",
                        duration: 1,
                        ease: Power2.easeOut,
                    });
                }
            });
        }

        setAnimationsPlayed(true);
        localStorage.setItem('animationsPlayedHome', 'true');
    }, [animationsPlayed]);

    if (!project) {
        return <div>Loading...</div>;
    }

    const remainingCount = project.category.length - numberOfItem;

    return (
        <header className={`${ClimateCrisis.className} flex flex-col p-4 md:p-8`}>
            <NavBar />

            <section
                ref={sectionRef}
                className="h-96 flex justify-center items-center relative overflow-hidden mt-20 rounded-2xl after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-foreground after:to-transparent after:z-5 md:justify-start md:items-end md:px-10 md:pb-8 md:after:h-full"
            >
                <div className="md:flex md:flex-row md:justify-between md:items-end md:w-full">
                    <h1
                        ref={h1Ref}
                        className="relative z-10 text-background text-4xl text-center md:text-7xl md:text-left"
                    >
                        {project.title}
                    </h1>

                    <div
                        className={`${DelaGothicOne.className} absolute flex flex-wrap-reverse gap-2 bottom-0 left-0 z-10 p-2 text-xs md:relative md:w-48 md:justify-end`}
                    >
                        {project.category.slice(0, numberOfItem).map((cat, index) => (
                            <span
                                ref={(el) => {
                                    if (el) spanRefs.current[index] = el;
                                }}
                                key={index}
                                className="bg-background text-foreground px-4 py-2 rounded-full"
                            >
                                {cat}
                            </span>
                        ))}
                        {remainingCount > 0 && (
                            <div ref={spanRef2} className="bg-background text-foreground px-4 py-2 rounded-full">
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
                            </div>
                        )}

                    </div>
                </div>

                <Image
                    ref={imageRef}
                    width={5000}
                    height={5000}
                    src={project.image[0]}
                    alt="Description of the image"
                    className="w-full h-full absolute top-0 left-0 z-0 object-cover"
                />
            </section>
        </header>
    );
}
