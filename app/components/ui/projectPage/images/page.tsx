"use client";

import { useEffect, useState, useRef } from "react";
import { Dela_Gothic_One, Climate_Crisis } from "next/font/google";
import Image from "next/image";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@heroui/modal";
import { Pagination } from "@heroui/pagination";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, Power2 } from "gsap";
import SplitType from "split-type";

const DelaGothicOne = Dela_Gothic_One({
    subsets: ["latin"],
    weight: ["400"],
});

const ClimateCrisis = Climate_Crisis({
    subsets: ["latin"],
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
    project: Project;
}

export default function Images({ project }: HomeProps) {
    gsap.registerPlugin(ScrollTrigger);
    const [projet, setProjet] = useState<Project | null>(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const divRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        setProjet(project);
    }, [project]);

    const handleOpenModal = (index: number) => {
        setCurrentIndex(index); // Met à jour l'index de l'image actuelle
        setCurrentPage(index + 1); // Synchronise la pagination
        onOpen(); // Ouvre la modal
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page); // Met à jour la page actuelle
        setCurrentIndex(page - 1); // Met à jour l'image affichée
    };

    useEffect(() => {
        if (!projet) return;

        document.fonts.ready.then(() => {
            const splitTitle = new SplitType(h1Ref.current, { types: "chars" });
            gsap.from(splitTitle.chars, {
                y: -100,
                duration: 0.75,
                ease: Power2.easeOut,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: h1Ref.current,
                    start: "top center",
                },
            });

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
        });
    }, [projet]);

    if (!projet) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2 ref={h1Ref} className={`${ClimateCrisis.className} text-xl md:text-7xl clip-path`}>Images</h2>

            <section
                className={`${DelaGothicOne.className} flex flex-col gap-4 mt-5 md:mt-10 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
            >
                {projet.image.map((img, index) => (
                    <div
                        ref={(el) => divRefs.current[index] = el!}
                        key={index}
                        onClick={() => handleOpenModal(index)}
                        className="w-full h-48 rounded-xl overflow-hidden cursor-pointer scale__elt"
                    >
                        <Image
                            width={5000}
                            height={5000}
                            src={img}
                            alt={`Image ${index}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </section>

            <Modal isOpen={isOpen} onOpenChange={(isOpen) => !isOpen && onClose()} size="5xl" backdrop="blur" className="bg-background">
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1">Image {currentIndex + 1}</ModalHeader>
                        <ModalBody>
                            <Image
                                width={5000}
                                height={5000}
                                src={projet.image[currentIndex]}
                                alt={`Modal Image ${currentIndex}`}
                                className="w-full h-full object-cover"
                            />
                        </ModalBody>
                        <ModalFooter className="flex justify-center">
                            <Pagination
                                page={currentPage}
                                total={project.image.length}
                                onChange={handlePageChange}
                                variant="light"
                            />
                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </div>
    );
}
