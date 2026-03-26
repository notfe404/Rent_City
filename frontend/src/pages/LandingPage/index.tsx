
import Header from './Header';
import Hero from './Hero';
import Filter from './Filter';
import CarCollection from './CarCollection';
import HowItWorks from './HowItWorks';
import Services from './Services';
import Testimonial from './Testimonial';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-deepBlack text-white selection:bg-gold selection:text-deepBlack">
      <Header />
      <Hero />
      <Filter />
      <CarCollection />
      <HowItWorks />
      <Services />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default LandingPage;
