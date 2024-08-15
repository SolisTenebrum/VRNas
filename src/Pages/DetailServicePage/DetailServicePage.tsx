import PageTitle from '../../Components/PageTitle/PageTitle';
import GetStarted from '../../Components/GetStarted/GetStarted';
import Pricing from '../../Components/Pricing/Pricing';
import Subscribe from '../../Components/Subscribe/Subscribe';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import VRService from '../../Components/VRService/VRService';

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
