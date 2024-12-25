import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';
import Image from 'next/image';

const DelaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

const ClimateCrisis = Climate_Crisis({
    subsets: ['latin'],
    display: 'swap',
});

export default function MyJourney() {
    return (
        <div className={`${ClimateCrisis.className} pt-20 md:pt-60`}>
            <h2 className="text-xl text-center relative z-10 md:text-7xl">Mes compétences</h2>

            <section className={`${DelaGothicOne.className} flex flex-col gap-4 pt-14 md:pt-40 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}>
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

            <div className="relative w-full h-64 mt-10 perspective-1000">
                <div className="w-full h-full bg-red-500 rounded-xl shadow-lg transform transition-transform duration-500 hover:rotate-y-12 hover:rotate-x-6">
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2">Compétence 3D</h3>
                        <p className="text-gray-700">Voici une description de la compétence en 3D. Cette carte se déplace en fonction de la position de la souris.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}