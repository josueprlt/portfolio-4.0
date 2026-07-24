"use client";

import { useState, useEffect, ReactNode } from "react";

export default function ProjectClientWrapper({ children }: { children: ReactNode }) {
    const [colorMode, setColorMode] = useState("light");

    useEffect(() => {
        const savedColorMode = localStorage.getItem("color-mode") || "light";
        setColorMode(savedColorMode);
    }, []);

    return (
        <div className={`min-h-screen ${colorMode === 'light' ? 'bg-background text-foreground' : 'bg-foreground text-background'}`}>
            {children}
        </div>
    );
}
