import Home from '@/app/components/ui/profilPage/home/page';
import AboutMe from "@/app/components/ui/profilPage/aboutme/page";
import Footer from "@/app/components/ui/footer/page";

export default function Page() {
    return (
        <div className='bg-background'>
            <Home />
            <main className='px-4 md:px-8'>
                <AboutMe />
            </main>
            <Footer />
        </div>
    );
}
