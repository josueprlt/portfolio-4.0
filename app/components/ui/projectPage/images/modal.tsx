import { useState, useEffect } from "react";
import {
    Modal as HeroModal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "@heroui/modal";
import { Pagination } from "@heroui/pagination";
import Image from "next/image";

interface Project {
    image: string[];
}

interface ModalProps {
    project: Project;
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
    isOpen: boolean;
    onClose: () => void;
}

export default function Modal({ project, currentIndex, setCurrentIndex, isOpen, onClose }: ModalProps) {
    const [currentPage, setCurrentPage] = useState<number>(currentIndex + 1);

    useEffect(() => {
        setCurrentPage(currentIndex + 1);
    }, [currentIndex]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        setCurrentIndex(page - 1);
    };

    return (
        <HeroModal isOpen={isOpen} onOpenChange={(isOpen) => !isOpen && onClose()} size="5xl" backdrop="blur" className="bg-background">
            <ModalContent>
                <>
                    <ModalHeader className="flex flex-col gap-1">Image {currentIndex + 1}</ModalHeader>
                    <ModalBody>
                        <div className="w-full max-h-[500px] overflow-scroll">
                            <Image
                                width={5000}
                                height={5000}
                                src={project.image[currentIndex]}
                                alt={`Modal Image ${currentIndex}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </ModalBody>
                    <ModalFooter className="flex justify-center">
                        <Pagination
                            className="text-background"
                            page={currentPage}
                            total={project.image.length}
                            onChange={handlePageChange}
                            variant="light"
                            color="secondary"
                            key={"#262330"}
                        />
                    </ModalFooter>
                </>
            </ModalContent>
        </HeroModal>
    );
}