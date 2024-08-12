import FAQ from '../AboutUs/FAQ/FAQ';
import PageTitle from '../AboutUs/PageTitle/PageTitle';
import Choose from '../Homepage/Choose/Choose';
import Subscribe from '../Homepage/Subscribe/Subscribe';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Prices from './Prices/Prices';

const PricingPlan = () => {
  return (
    <>
      <ScrollToTop />
      <PageTitle variant="pricing-plan-page" />
      <Prices />
      <Choose variant="pricing-plan-page" />
      <FAQ variant="pricing-plan-page" />
      <Subscribe />
    </>
  );
};

export default PricingPlan;
