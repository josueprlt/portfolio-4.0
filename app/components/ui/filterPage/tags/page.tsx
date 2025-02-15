"use client"
import Tag from "./tag";

export default function Tags() {
    return (
        <div className='flex items-center overflow-auto mt-4 px-4 gap-2 h-14 bg-filter rounded-3xl'>
            <Tag name={"html"} />
            <Tag name={"dev web"} />
        </div>
    );
}