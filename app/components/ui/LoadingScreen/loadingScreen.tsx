"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, Power2 } from "gsap";
import { LogoIcon } from "@/app/components/ui/icons";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
    const loadingRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setIsLoading(false);
                onComplete();
            },
        });

        tl.fromTo(
            loadingRef.current,
            { rotate: 0 },
            {
                rotate: 360,
                duration: 0.75,
                ease: Power2.easeInOut,
                repeat: -1,
            }
        );

        const handleLoad = () => {
            setIsLoading(false);
            onComplete();
        };

        window.addEventListener("load", handleLoad);

        const timeout = setTimeout(() => {
            setIsLoading(false);
            onComplete();
        }, 4000);

        return () => {
            window.removeEventListener("load", handleLoad);
            clearTimeout(timeout); // Nettoyer le timeout
        };
    }, [onComplete]);

    if (!isLoading) return null;

    return (
        <div className="w-full h-screen flex items-center justify-center bg-background">
            <div ref={loadingRef}>
                <LogoIcon className="w-10 h-10" />
            </div>
        </div>
    );
}