import { Route, Routes } from 'react-router-dom';
import HomePage from '../../Pages/HomePage/HomePage';
import AboutUsPage from '../../Pages/AboutUsPage/AboutUsPage';
import OurServicePage from '../../Pages/OurServicePage/OurServicePage';
import DetailServicePage from '../../Pages/DetailServicePage/DetailServicePage';
import NotFoundPage from '../../Pages/NotFoundPage/NotFoundPage';
import PricingPlanPage from '../../Pages/PricingPlanPage/PricingPlanPage';
import BlogMainPage from '../../Pages/BlogMainPage/BlogMainPage';
import TeamPage from '../../Pages/TeamPage/TeamPage';
import ContactUsPage from '../../Pages/ContactUsPage/ContactUsPage';
import FAQPage from '../../Pages/FAQPage/FAQPage';
import TermsAndConditionsPage from '../../Pages/TermsAndConditionsPage/TermsAndConditionsPage';
import PrivacyPolicyPage from '../../Pages//PrivacyPolicyPage/PrivacyPolicyPage';
import ArticlePage from '../../Pages/ArticlePage/ArticlePage';
import { articleContent } from '../../constants';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="service" element={<OurServicePage />} />
        <Route path="/detail-service" element={<DetailServicePage />} />
        <Route path="/pricing-plan" element={<PricingPlanPage />} />
        <Route path="/blog" element={<BlogMainPage />} />
        <Route path="/our-team" element={<TeamPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path='/article-page' element={<ArticlePage articleContent={articleContent[0]}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};

export default Main;
