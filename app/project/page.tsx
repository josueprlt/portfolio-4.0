import Home from '@/app/components/ui/projectPage/home/home';
import Tools from "@/app/components/ui/projectPage/tools/tools";
import Description from "@/app/components/ui/projectPage/description/description";
import Images from "@/app/components/ui/projectPage/images/images";

export default function Page() {
    return (
        <>
            <Home />
            <main className='px-4 md:px-8'>
                <Tools />
                <Description />
                <Images />
            </main>
        </>
    );
}
