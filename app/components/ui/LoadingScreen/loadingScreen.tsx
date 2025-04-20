"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, Power2 } from "gsap";
import { LogoIcon } from "@/app/components/ui/icons";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
    const loadingRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    // Détecter si l'utilisateur est sur un appareil mobile
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Considérer <768px comme mobile
        };

        handleResize(); // Vérifier au chargement
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        // Si mobile, désactiver immédiatement le loader
        if (isMobile) {
            setIsLoading(false);
            onComplete();
            return;
        }

        // Animation GSAP pour le logo
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

        // Gestion de l'événement 'load'
        const handleLoad = () => {
            setIsLoading(false);
            onComplete();
        };

        window.addEventListener("load", handleLoad);

        // Fallback timeout pour désactiver le loader après 10 secondes
        const timeout = setTimeout(() => {
            setIsLoading(false);
            onComplete();
        }, 10000); // 10 secondes

        return () => {
            window.removeEventListener("load", handleLoad);
            clearTimeout(timeout); // Nettoyer le timeout
        };
    }, [onComplete, isMobile]);

    if (!isLoading) return null;

    return (
        <div className={`w-full h-screen flex items-center justify-center bg-background`}>
            <div ref={loadingRef}>
                <LogoIcon fill="" className="w-10 h-10" />
            </div>
        </div>
    );
}