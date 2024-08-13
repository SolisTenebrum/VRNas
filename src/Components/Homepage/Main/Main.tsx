import { Route, Routes } from 'react-router-dom';
import Homepage from '../Homepage';
import AboutUs from '../../AboutUs/AboutUs';
import OurService from '../../OurService/OurService';
import DetailService from '../../DetailService/DetailService';
import NotFoundPage from '../../NotFoundPage/NotFoundPage';
import PricingPlan from '../../PricingPlan/PricingPlan';
import BlogMainPage from '../../BlogMainPage/BlogMainPage';
import TeamPage from '../../TeamPage/TeamPage';
import ContactUsPage from '../../ContactUsPage/ContactUsPage';
import FAQPage from '../../FAQPage/FAQPage';
import TermsAndConditions from '../../TermsAndConditionsPage/TermsAndConditionsPage';
import PrivacyPolicy from '../../PrivacyPolicy/PrivacyPolicy';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="service" element={<OurService />} />
        <Route path="/detail-service" element={<DetailService />} />
        <Route path="/pricing-plan" element={<PricingPlan />} />
        <Route path="/blog" element={<BlogMainPage />} />
        <Route path="/our-team" element={<TeamPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};

export default Main;
