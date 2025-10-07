import Navbar from './Navbar';
import CarouselBanner from './CarouselBanner';
import TopProducts from './TopProducts';
import TrustedBrands from './TrustedBrands';
import Footer from './Footer';

function HomePage() {
  return (
    <>
      <Navbar />
      <CarouselBanner />
      <main>
        <TopProducts />
        <TrustedBrands />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;