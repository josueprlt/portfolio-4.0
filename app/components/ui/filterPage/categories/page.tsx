"use client"
import { useState } from "react";
import { WrenchIcon, CadreIcon, CalendarIcon } from "@/app/components/ui/icons";

export default function Categories() {
    const [categories, setCategories] = useState(
        [
            { name: "outils", icon: <WrenchIcon /> },
            { name: "cadre", icon: <CadreIcon /> },
            { name: "date", icon: <CalendarIcon /> }
        ]
    );

    return (
        <div className='flex items-center overflow-auto mt-4 px-4 gap-2 h-14 bg-filter rounded-3xl'>
            <ul className="w-full flex justify-around">
                {categories.map((categorie, index) => (
                    <li key={index} className="flex items-center p-2 gap-2 cursor-pointer">
                        {categorie.icon}
                        <p className="font-sans font-bold">{categorie.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}