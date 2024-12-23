import { ButtonArrowIcon } from '@/app/components/ui/icons';
import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';
import Image from 'next/image';

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
});

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
});

export default function Images() {
    return (
        <div>
            <h2 className={`${ClimateCrisis.className} text-xl md:text-7xl`}>Images</h2>

            <section className={`${DelaGothicOne.className} flex flex-col gap-4 mt-5 md:mt-10 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}>
                <div className='w-full h-48 rounded-xl overflow-hidden cursor-pointer'>
                    <Image width={5000} height={5000} src="/img/paysage.png" alt="Description of the image" className="w-full h-full object-cover" />
                </div>
                <div className='w-full h-48 rounded-xl overflow-hidden cursor-pointer'>
                    <Image width={5000} height={5000} src="/img/paysage.png" alt="Description of the image" className="w-full h-full object-cover" />
                </div>
                <div className='w-full h-48 rounded-xl overflow-hidden cursor-pointer'>
                    <Image width={5000} height={5000} src="/img/paysage.png" alt="Description of the image" className="w-full h-full object-cover" />
                </div>
                <div className='w-full h-48 rounded-xl overflow-hidden cursor-pointer'>
                    <Image width={5000} height={5000} src="/img/paysage.png" alt="Description of the image" className="w-full h-full object-cover" />
                </div>
                <div className='w-full h-48 rounded-xl overflow-hidden cursor-pointer'>
                    <Image width={5000} height={5000} src="/img/paysage.png" alt="Description of the image" className="w-full h-full object-cover" />
                </div>
                <div className='w-full h-48 rounded-xl overflow-hidden cursor-pointer'>
                    <Image width={5000} height={5000} src="/img/paysage.png" alt="Description of the image" className="w-full h-full object-cover" />
                </div>
            </section>
        </div>
    );
}