import { Route } from 'react-router-dom';
import Homepage from '../Homepage';
import { Routes } from 'react-router-dom';
import AboutUs from '../../AboutUs/AboutUs';
import OurService from '../../OurService/OurService';
import DetailService from '../../DetailService/DetailService';
import NotFoundPage from '../../NotFoundPage/NotFoundPage';
import PricingPlan from '../../PricingPlan/PricingPlan';
import BlogMainPage from '../../BlogMainPage/BlogMainPage';
import TeamPage from '../../TeamPage/TeamPage';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path='service' element={<OurService />} />
        <Route path='/detail-service' element={<DetailService />} />
        <Route path='/pricing-plan' element={<PricingPlan />} />
        <Route path='/blog' element={<BlogMainPage />} />
        <Route path='/our-team' element={<TeamPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};

export default Main;
