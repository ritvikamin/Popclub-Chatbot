import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import ProductGrid from '../components/ProductGrid';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-24">
        <Hero />
        <HowItWorks />
        <ProductGrid />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
