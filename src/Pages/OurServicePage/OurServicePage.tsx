import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import PageTitle from '../../Components/PageTitle/PageTitle';
import Service from '../../Components/Service/Service';
import Statistics from '../../Components/Statistics/Statistics';
import Pricing from '../../Components/Pricing/Pricing';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Subscribe from '../../Components/Subscribe/Subscribe';

const OurService = () => {
  return (
    <>
      <ScrollToTop />
      <PageTitle variant='our-service-page'/>
      <Service variant='our-service-page'/>
      <Statistics variant='our-service-page'/>
      <Pricing variant='our-service-page'/>
      <Testimonials />
      <Subscribe />
    </>
  );
};

export default OurService;
