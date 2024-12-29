import Home from '@/app/components/ui/projectPage/home/page';
import Tools from "@/app/components/ui/projectPage/tools/page";
import Description from "@/app/components/ui/projectPage/description/page";
import Images from "@/app/components/ui/projectPage/images/page";

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
