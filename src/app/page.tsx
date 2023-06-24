import Navbar from '@/components/navbar/navbar';
import Hero from '@/components/hero';
import {FeatureList} from '@/components/featureList';
import Footer from '@/components/footer';

export default function Home() {
  return (
      <main className="h-full">
        <Navbar/>
        <Hero/>
        <FeatureList/>
        <Footer/>
      </main>
  );
}
