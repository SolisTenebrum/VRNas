import PageTitle from '../AboutUs/PageTitle/PageTitle';
import GetStarted from '../Homepage/GetStarted/GetStarted';
import Pricing from '../Homepage/Pricing/Pricing';
import Subscribe from '../Homepage/Subscribe/Subscribe';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import VRService from './VRService/VRService';

const DetailService = () => {
  return (
    <>
      <ScrollToTop />
      <PageTitle variant="detail-service-page" />
      <VRService />
      <GetStarted variant="detail-service-page" />
      <Pricing variant="detail-service-page" />
      <Subscribe />
    </>
  );
};

export default DetailService;
