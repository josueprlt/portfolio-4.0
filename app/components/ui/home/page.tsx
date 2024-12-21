import { LogoIcon, ArrowIcon } from "@/app/components/ui/icons";
import { Roboto } from '@next/font/google';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    display: 'swap',
});

export default function Home() {
    return (
        <header className={roboto.className}>
            <nav className="flex justify-between items-center p-4">
                <LogoIcon />
                <div className="flex items-end flex-col gap-2 h-full cursor-pointer">
                    {/* <span className="block w-8 h-1 bg-foreground relative before:content-[''] before:block before:w-12 before:bg-foreground before:h-1 before:absolute before:-top-3 before:right-0 after:content-[''] after:block after:w-5 after:bg-foreground after:h-1 after:absolute after:top-3 after:right-0"></span> */}
                    <span className="block w-12 h-1 bg-foreground"></span>
                    <span className="block w-8 h-1 bg-foreground"></span>
                    <span className="block w-5 h-1 bg-foreground"></span>
                </div>
            </nav>

            <div>
                <p>Josué Perrault</p>
                <span></span>
                <ArrowIcon />
            </div>
        </header>
    );
}