"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { LogoIcon } from "@/app/components/ui/icons";

export default function LoadingScreen({ onComplete, colorMode="dark" }: { onComplete: () => void; colorMode: string }) {
    const loadingRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Détecter si l'utilisateur est sur un appareil mobile
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isMobile) {
            onComplete();
            return;
        }

        const animation = gsap.fromTo(
            loadingRef.current,
            { rotate: 0 },
            {
                rotate: 360,
                duration: 0.75,
                ease: "power2.inOut",
                repeat: -1,
            }
        );

        const finishLoading = () => {
            onComplete();
        };
        let timeout: NodeJS.Timeout;

        if (document.readyState === "complete") {
            timeout = setTimeout(finishLoading, 800);
        } else {
            window.addEventListener("load", finishLoading);
            timeout = setTimeout(finishLoading, 3000);
        }

        return () => {
            window.removeEventListener("load", finishLoading);
            clearTimeout(timeout);
            animation.kill();
        };
    }, [isMobile, onComplete]);

    return (
        <div
            className={`w-full h-screen flex items-center justify-center ${colorMode === "dark" ? "bg-foreground" : "bg-background"}`}>
            <div ref={loadingRef}>
                <LogoIcon fill={colorMode === 'light' ? '#262330' : '#FEEFDD'} className="w-10 h-10" />
            </div>
        </div>
    );
}