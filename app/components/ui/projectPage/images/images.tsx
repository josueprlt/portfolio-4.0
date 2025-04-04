"use client";

import { useEffect, useState, useRef } from "react";
import { Dela_Gothic_One } from "next/font/google";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, Power2 } from "gsap";
import Button from "@/app/components/ui/button/button";
import Title from "@/app/components/ui/title/title";
import Modal from "./modal";

const DelaGothicOne = Dela_Gothic_One({
    subsets: ["latin"],
    weight: ["400"],
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
    project: Project | null;
}

export default function Images({ project }: HomeProps) {
    gsap.registerPlugin(ScrollTrigger);
    const [projet, setProjet] = useState<Project | null>(null);
    const [visibleImages, setVisibleImages] = useState<number>(2);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const divRefs = useRef<HTMLDivElement[]>([]);
    const imagesRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        setProjet(project);
        if (window.innerWidth >= 768) setVisibleImages(3);
        if (window.innerWidth >= 1024) setVisibleImages(4);
        if (window.innerWidth >= 1280) setVisibleImages(5);
        if (window.innerWidth >= 1536) setVisibleImages(6);
    }, [project]);

    const handleLoadMore = () => {
        setVisibleImages((prev) => prev + visibleImages);
    };

    const handleOpenModal = (index: number) => {
        setCurrentIndex(index);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (!projet) return;

        document.fonts.ready.then(() => {
            gsap.from(divRefs.current, {
                opacity: 0,
                duration: 0.75,
                ease: Power2.easeOut,
                stagger: 0.25,
                scrollTrigger: {
                    trigger: divRefs.current,
                    start: "top center",
                },
            });

            imagesRefs.current.forEach((img) => {
                img.addEventListener("mouseenter", () => {
                    gsap.to(img, { scale: 1.05, duration: 0.5, ease: Power2.easeInOut });
                });

                img.addEventListener("mouseleave", () => {
                    gsap.to(img, { scale: 1, duration: 0.5, ease: Power2.easeInOut });
                });
            });
        });
    }, [projet]);

    if (!projet) {
        return <div>Loading...</div>;
    }

    return (
        <div className="mb-28 md:mb-0">
            <Title className="text-start">Images</Title>

            <section
                className={`${DelaGothicOne.className} flex flex-col gap-4 mt-5 md:mt-10 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
            >
                {projet.image.slice(0, visibleImages).map((img, index) => (
                    <div
                        ref={(el) => { if (el) divRefs.current[index] = el! }}
                        key={index}
                        onClick={() => handleOpenModal(index)}
                        className="w-full h-48 rounded-xl overflow-hidden cursor-pointer"
                    >
                        <Image
                            ref={(el) => { if (el) imagesRefs.current[index] = el! }}
                            width={5000}
                            height={5000}
                            src={img}
                            alt={`Image ${index}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </section>

            {visibleImages < projet.image.length && (
                <div className={`${DelaGothicOne.className} flex justify-center mt-4 md:mt-16`}>
                    <Button onClick={handleLoadMore} theme="primary">Voir plus</Button>
                </div>
            )}

            <Modal
                project={projet}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    );
}