"use client"
import { useRef, useEffect } from "react";
import Tag from "./tag";
import { gsap, Power1 } from 'gsap';

interface TagsProps {
    tags: string[];
    onTagRemove: (tag: string) => void;
}

export default function Tags({ tags, onTagRemove }: TagsProps) {
    const tagsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (tagsRef.current) {
            gsap.fromTo(tagsRef.current, 
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.5, ease: Power1.easeOut, delay: 0.7 }
            );
        }
    }, []);

    return (
        <div ref={tagsRef} className='flex items-center overflow-auto mt-4 px-4 gap-2 h-14 bg-filter rounded-3xl md:h-16 md:mt-0 md:col-span-3'>
            {tags.length > 0 ? (
                <>
                    {tags.map((tag, index) => (
                        <Tag key={index} name={tag} onClick={() => onTagRemove(tag)} />
                    ))}
                </>
            ) : (
                <p className="text-sans text-base font-bold pl-2 text-secondaryGray italic md:text-xl md:pl-4">Aucun filtre ajouté</p>
            )}
        </div>
    );
}