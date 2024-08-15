import ScrollToTop from '../ScrollToTop/ScrollToTop';
import PageTitle from '../AboutUs/PageTitle/PageTitle';
import Service from '../Homepage/Service/Service';
import Statistics from './Statistics/Statistics';
import Pricing from '../Homepage/Pricing/Pricing';
import Testimonials from '../Homepage/Testimonials/Testimonials';
import Subscribe from '../Homepage/Subscribe/Subscribe';

const OurService = () => {
  return (
    <>
      <ScrollToTop />
      <PageTitle variant={'our-service-page'}/>
      <Service variant={'our-service-page'}/>
      <Statistics />
      <Pricing variant={'our-service-page'}/>
      <Testimonials />
      <Subscribe />
    </>
  );
};

export default OurService;
