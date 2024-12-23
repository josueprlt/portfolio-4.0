import Home from '@/app/components/ui/projectPage/home/page';
import Tools from "@/app/components/ui/projectPage/tools/page";
import Description from "@/app/components/ui/projectPage/description/page";
import Images from "@/app/components/ui/projectPage/images/page";
import Footer from "@/app/components/ui/footer/page";

export default function Page() {
    return (
        <div className='bg-background'>
            <Home />
            <main className='px-4 md:px-8'>
                <Tools />
                <Description />
                <Images />
            </main>
            <Footer />
        </div>
    );
}
