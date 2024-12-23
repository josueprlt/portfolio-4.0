import Home from '@/app/components/ui/home/page';
import AboutMe from '@/app/components/ui/aboutme/page';
import MyWork from '@/app/components/ui/mywork/page';
import ContactMe from '@/app/components/ui/contactme/page';

export default function Page() {
  return (
    <div className='bg-background'>
      <Home />
      <main className='px-4 md:px-8'>
        <AboutMe />
        <MyWork />
        <ContactMe />
      </main>
    </div>
  );
}
