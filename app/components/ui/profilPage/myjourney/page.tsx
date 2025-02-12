"use client"
import { Dela_Gothic_One, Climate_Crisis } from 'next/font/google';
import Image from 'next/image';
import Title from '@/app/components/ui/title/page';

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
            <Title className='text-center'>Mon Parcours</Title>

            <section className={`${DelaGothicOne.className} text-lg pt-14 md:pt-40 text-center`}>
                <div className="relative flex justify-center items-center flex-col before:absolute before:-top-[31px] before:w-8 before:h-8 before:bg-foreground before:rounded-full after:absolute after:-bottom-[31px] after:w-8 after:h-8 after:bg-foreground after:rounded-full">                    
                    <span className="block w-2 h-96 bg-foreground"></span>
                    <div className="relative px-6 py-4 rounded-full text-background bg-foreground">
                        <p>Septembre 2019</p>
                        <div className="hidden md:absolute md:flex md:flex-row md:-top-20 md:-right-[270px] md:text-start md:w-64 md:text-foreground md:before:absolute md:before:w-1 md:before:bg-gradient-to-b md:before:from-primary md:before:to-secondary md:before:h-full md:before:bg-foreground md:before:rounded-lg lg:w-80 lg:-top-10 lg:-right-[350px] xl:w-96 xl:-top-[35px] xl:-right-[475px] 2xl:w-[500px] 2xl:-top-[25px] 2xl:-right-[600px] xl:after:absolute xl:after:top-1/2 xl:after:-left-20 xl:after:w-14 xl:after:h-0.5 xl:after:bg-foreground">
                            <div className="relative pl-4">
                                <h3>Baccalauréat Technologique</h3>
                                <p className="font-sans pt-5">Après avoir obtenu mon brevet, j'ai choisi de poursuivre mes études au lycée La Mennais de Ploërmel.</p>

                                <div className="absolute w-full left-0 -top-52 flex flex-col items-center lg:-top-64 xl:-top-80 2xl:-top-96">
                                    <Image src="/img/lamennais.png" alt="Lycée La Mennais" width={5000} height={5000} className="w-full h-full object-cover rounded-lg" />
                                    <span className="block w-px h-4 bg-foreground"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="block w-2 h-96 bg-foreground"></span>
                    <div className="relative px-6 py-4 rounded-full text-background bg-foreground">
                        <p>Juillet 2022</p>
                        <div className="hidden md:absolute md:flex md:flex-row md:-top-14 md:-left-[270px] md:text-end md:w-64 md:text-foreground md:before:absolute md:before:right-0 md:before:w-1 md:before:bg-gradient-to-b md:before:from-primary md:before:to-secondary md:before:h-full md:before:bg-foreground md:before:rounded-lg lg:w-80 lg:-top-10 lg:-left-[350px] xl:w-96 xl:-top-[20px] xl:-left-[475px] 2xl:w-[500px] 2xl:-top-[20px] 2xl:-left-[600px] xl:after:absolute xl:after:top-1/2 xl:after:-right-20 xl:after:w-14 xl:after:h-0.5 xl:after:bg-foreground">
                            <div className="relative pr-4">
                                <h3>Obtention du BAC Technologique</h3>
                                <p className="font-sans pt-5">Originaire de Bretagne, j'ai obtenu mon bac STI2D au lycée La Mennais de Ploërmel.</p>

                                <div className="absolute w-full left-0 -top-52 flex flex-col items-center lg:-top-64 xl:-top-80 2xl:-top-96">
                                    <Image src="/img/lamennais2.png" alt="Lycée La Mennais" width={5000} height={5000} className="w-full h-full object-cover rounded-lg" />
                                    <span className="block w-px h-4 bg-foreground"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="block w-2 h-96 bg-foreground"></span>
                    <div className="relative px-6 py-4 rounded-full text-background bg-foreground">
                        <p>Septembre 2022</p>
                        <div className="hidden md:absolute md:flex md:flex-row md:-top-14 md:-right-[270px] md:text-start md:w-64 md:text-foreground md:before:absolute md:before:w-1 md:before:bg-gradient-to-b md:before:from-primary md:before:to-secondary md:before:h-full md:before:bg-foreground md:before:rounded-lg lg:w-80 lg:-top-10 lg:-right-[350px] xl:w-96 xl:-top-[35px] xl:-right-[475px] 2xl:w-[500px] 2xl:-top-[35px] 2xl:-right-[600px] xl:after:absolute xl:after:top-1/2 xl:after:-left-20 xl:after:w-14 xl:after:h-0.5 xl:after:bg-foreground">
                            <div className="relative pl-4">
                                <h3>BUT MMI</h3>
                                <p className="font-sans pt-5">Après avoir obtenu mon BAC et souhaitant approfondir mes connaissances sur le web, je me suis inscrit à cette formation à Limoges.</p>

                                <div className="absolute w-full left-0 -top-52 flex flex-col items-center lg:-top-64 xl:-top-80 2xl:-top-96">
                                    <Image src="/img/mmi.png" alt="Lycée La Mennais" width={5000} height={5000} className="w-full h-full object-cover rounded-lg" />
                                    <span className="block w-px h-4 bg-foreground"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="block w-2 h-96 bg-foreground"></span>
                    <div className="relative px-6 py-4 rounded-full text-background bg-foreground">
                        <p>Avril 2024</p>
                        <div className="hidden md:absolute md:flex md:flex-row md:-top-20 md:-left-[270px] md:text-end md:w-64 md:text-foreground md:before:absolute md:before:right-0 md:before:w-1 md:before:bg-gradient-to-b md:before:from-primary md:before:to-secondary md:before:h-full md:before:bg-foreground md:before:rounded-lg lg:w-80 lg:-top-20 lg:-left-[350px] xl:w-96 xl:-top-[53px] xl:-left-[475px] 2xl:w-[500px] 2xl:-top-[35px] 2xl:-left-[600px] xl:after:absolute xl:after:top-1/2 xl:after:-right-20 xl:after:w-14 xl:after:h-0.5 xl:after:bg-foreground">
                            <div className="relative pr-4">
                                <h3>Stage chez M. Etienne Leriche</h3>
                                <p className="font-sans pt-5">Ce stage s'est déroulé du 8 avril au 31 mai 2024. J’ai beaucoup appris sur la création web et j’ai amélioré mes compétences en développement web.</p>

                                <div className="absolute w-full left-0 -top-52 flex flex-col items-center lg:-top-64 xl:-top-80 2xl:-top-96">
                                    <Image src="/img/etienne.png" alt="Lycée La Mennais" width={5000} height={5000} className="w-full h-full object-cover rounded-lg" />
                                    <span className="block w-px h-4 bg-foreground"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="block w-2 h-96 bg-foreground"></span>
                    <div className="relative px-6 py-4 rounded-full text-background bg-foreground">
                        <p>Juillet 2024</p>
                        <div className="hidden md:absolute md:flex md:flex-row md:-top-14 md:-right-[270px] md:text-start md:w-64 md:text-foreground md:before:absolute md:before:w-1 md:before:bg-gradient-to-b md:before:from-primary md:before:to-secondary md:before:h-full md:before:bg-foreground md:before:rounded-lg lg:w-80 lg:-top-5 lg:-right-[350px] xl:w-96 xl:-top-[25px] xl:-right-[475px] 2xl:w-[500px] 2xl:-top-[25px] 2xl:-right-[600px] xl:after:absolute xl:after:top-1/2 xl:after:-left-20 xl:after:w-14 xl:after:h-0.5 xl:after:bg-foreground">
                            <div className="relative pl-4">
                                <h3>Obtention du DUT MMI</h3>
                                <p className="font-sans pt-5">J’ai obtenu le DUT MMI à la fin de la deuxième année universitaire.</p>

                                <div className="absolute w-full left-0 -top-52 flex flex-col items-center lg:-top-64 xl:-top-80 2xl:-top-96">
                                    <Image src="/img/butmmi.png" alt="Lycée La Mennais" width={5000} height={5000} className="w-full h-full object-cover rounded-lg" />
                                    <span className="block w-px h-4 bg-foreground"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="block w-2 h-96 bg-foreground"></span>
                </div>
            </section>
        </div>
    );
}