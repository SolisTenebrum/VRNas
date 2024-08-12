import { Route } from 'react-router-dom';
import Homepage from '../Homepage';
import { Routes } from 'react-router-dom';
import AboutUs from '../../AboutUs/AboutUs';
import OurService from '../../OurService/OurService';
import DetailService from '../../DetailService/DetailService';
import NotFoundPage from '../../NotFoundPage/NotFoundPage';
import PricingPlan from '../../PricingPlan/PricingPlan';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path='service' element={<OurService />} />
        <Route path='/detail-service' element={<DetailService />} />
        <Route path='/pricing-plan' element={<PricingPlan />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};

export default Main;
