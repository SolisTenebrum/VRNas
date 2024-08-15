import FAQ from '../../Components/FAQ/FAQ';
import PageTitle from '../../Components/PageTitle/PageTitle';
import Choose from '../../Components//Choose/Choose';
import Subscribe from '../../Components//Subscribe/Subscribe';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import Prices from '../../Components/Prices/Prices';

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
