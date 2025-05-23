"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, Power2 } from "gsap";
import { LogoIcon } from "@/app/components/ui/icons";

export default function LoadingScreen({ onComplete, colorMode="dark" }: { onComplete: () => void; colorMode: string }) {
    const loadingRef = useRef<HTMLDivElement>(null);
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
            onComplete();
            return;
        }

        // Animation GSAP pour le logo
        const tl = gsap.timeline({
            onComplete: () => {
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
            onComplete();
        };

        window.addEventListener("load", handleLoad);

        // Fallback timeout pour désactiver le loader après 10 secondes
        const timeout = setTimeout(() => {
            onComplete();
        }, 10000); // 10 secondes

        return () => {
            window.removeEventListener("load", handleLoad);
            clearTimeout(timeout); // Nettoyer le timeout
        };
    }, [onComplete, isMobile]);
    
    return (
        <div className={`w-full h-screen flex items-center justify-center ${colorMode === "dark" && "bg-foreground"} ${colorMode === "light" && "bg-background"}`}>
            <div ref={loadingRef}>
                <LogoIcon fill={colorMode === 'light' ? '#262330' : '#FEEFDD'} className="w-10 h-10" />
            </div>
        </div>
    );
}