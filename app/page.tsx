import Home from '@/app/components/ui/home/page';
import AboutMe from '@/app/components/ui/aboutme/page';

export default function Page() {
  return (
    <div className='bg-background'>
      <Home />
      <main className='px-4 md:px-8'>
        <AboutMe />
      </main>
    </div>
  );
}
