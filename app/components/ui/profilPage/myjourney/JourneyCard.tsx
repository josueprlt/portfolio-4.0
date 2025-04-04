import { useEffect, useRef } from 'react';
import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { Dela_Gothic_One } from 'next/font/google';
import Button from '@/app/components/ui/button/button'
import {
    Modal as HeroModal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@heroui/modal";

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

interface JourneyCardProps {
    date: string;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    position: 'left' | 'right';
}

const JourneyCard: React.FC<JourneyCardProps> = ({ date, title, description, imageSrc, imageAlt, position }) => {
    gsap.registerPlugin(ScrollTrigger);
    const isLeft = position === 'left';

    const dateRef = useRef<HTMLParagraphElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const beforeRef = useRef<HTMLSpanElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if (dateRef.current && titleRef.current && beforeRef.current && descriptionRef.current && imageRef.current && spanRef.current) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: dateRef.current,
                    start: "center 85%",
                },
            });

            timeline.fromTo(dateRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.75,
                    ease: Power2.easeOut,
                }
            );

            timeline.fromTo(imageRef.current,
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.75,
                    ease: Power2.easeOut,
                },
                "-=0.25"
            );

            timeline.fromTo(titleRef.current,
                { opacity: 0, y: -20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.75,
                    ease: Power2.easeOut,
                },
                "-=0"
            );

            timeline.fromTo(spanRef.current,
                { scaleY: 0, transformOrigin: "top" },
                {
                    scaleY: 1,
                    duration: 1,
                    ease: Power2.easeOut,
                },
                "-=0.25"
            );

            timeline.fromTo(descriptionRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.75,
                    ease: Power2.easeOut,
                },
                "-=0.25"
            );
        }
    }, []);

    const handleClick = () => {
        if (window.innerWidth < 768) {
            onOpen();
        }
    };

    return (
        <>
            <div ref={dateRef} className="relative px-2 py-1 md:px-6 md:py-4 rounded-full text-background bg-foreground md:cursor-default cursor-pointer" onClick={handleClick}>
                <p>{date}</p>
                <div className={`hidden md:absolute md:flex md:flex-row ${isLeft ? 'md:-left-[270px]' : 'md:-right-[270px]'} ${isLeft ? 'md:text-end' : 'md:text-start'} md:w-64 md:text-foreground lg:w-80 ${isLeft ? 'lg:-left-[350px]' : 'lg:-right-[350px]'} xl:w-96 ${isLeft ? 'xl:-left-[475px]' : 'xl:-right-[475px]'} 2xl:w-[500px] ${isLeft ? '2xl:-left-[600px]' : '2xl:-right-[600px]'} xl:after:absolute xl:after:top-1/2 ${isLeft ? 'xl:after:-right-20' : 'xl:after:-left-20'} xl:after:w-14 xl:after:h-0.5 xl:after:bg-foreground`}>
                    <span ref={spanRef} className={`absolute ${isLeft ? 'right-0' : ''} w-1 bg-gradient-to-b from-primary to-secondary h-full bg-foreground rounded-lg`}></span>
                    <div className={`relative ${isLeft ? 'pr-4' : 'pl-4'}`}>
                        <h3 ref={titleRef}>{title}</h3>
                        <p ref={descriptionRef} className="font-sans pt-5">{description}</p>

                        <div ref={imageRef} className="absolute w-full left-0 -top-52 flex flex-col items-center lg:-top-64 xl:-top-80 2xl:-top-96">
                            <Image src={imageSrc} alt={imageAlt} width={5000} height={5000} className="w-full h-56 object-cover rounded-lg" />
                            <span ref={beforeRef} className="block w-px h-4 bg-foreground"></span>
                        </div>
                    </div>
                </div>
            </div>

            <HeroModal isOpen={isOpen} onClose={onClose} className='bg-background'>
                <ModalContent>
                    <ModalHeader className={`${DelaGothicOne.className} flex flex-col`}>
                        {title}
                        <span className={`block w-full h-0.5 mt-4 bg-gradient-to-l from-primary to-secondary bg-foreground rounded-lg`}></span>
                    </ModalHeader>
                    <ModalBody>
                        <p>{description}</p>
                        <Image src={imageSrc} alt={imageAlt} width={5000} height={5000} className="w-full h-full object-cover rounded-lg mt-4" />
                    </ModalBody>
                    <ModalFooter>
                        <Button theme='primary' onClick={onClose}>Close</Button>
                        {/* <button onClick={onClose} className="bg-primary text-background px-4 py-2 rounded">Close</button> */}
                    </ModalFooter>
                </ModalContent>
            </HeroModal>
        </>
    );
};

export default JourneyCard;