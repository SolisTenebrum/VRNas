import ScrollToTop from '../ScrollToTop/ScrollToTop';
import About from './About/About';
import Articles from './Articles/Articles';
import Benefits from './Benefits/Benefits';
import Choose from './Choose/Choose';
import GetStarted from './GetStarted/GetStarted';
import Hero from './Hero/Hero';
import Partners from './Partners/Partners';
import Pricing from './Pricing/Pricing';
import Service from './Service/Service';
import Subscribe from './Subscribe/Subscribe';
import Testimonials from './Testimonials/Testimonials';

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
