"use client"
import Tag from "./tag";

interface TagsProps {
    tags: [];
}

export default function Tags({ tags }: TagsProps) {
    
    return (
        <div className='flex items-center overflow-auto mt-4 px-4 gap-2 h-14 bg-filter rounded-3xl md:h-16 md:mt-0 md:col-span-3'>
            {tags.map((tag, index) => (
                <Tag key={index} name={tag} />
            ))}
        </div>
    );
}