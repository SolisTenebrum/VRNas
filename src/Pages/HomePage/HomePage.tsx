import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import About from '../../Components/About/About';
import Articles from '../../Components/Articles/Articles';
import Benefits from '../../Components/Benefits/Benefits';
import Choose from '../../Components/Choose/Choose';
import GetStarted from '../../Components/GetStarted/GetStarted';
import Hero from '../../Components/Hero/Hero';
import Partners from '../../Components/Partners/Partners';
import Pricing from '../../Components/Pricing/Pricing';
import Service from '../../Components/Service/Service';
import Subscribe from '../../Components/Subscribe/Subscribe';
import Testimonials from '../../Components/Testimonials/Testimonials';

const Homepage = () => {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <Benefits variant="" />
      <About />
      <Service variant=''/>
      <Choose variant="" />
      <GetStarted variant=''/>
      <Testimonials />
      <Pricing variant=''/>
      <Partners />
      <Articles variant=''/>
      <Subscribe />
    </>
  );
};

export default Homepage;
