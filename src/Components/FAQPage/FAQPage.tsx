import FAQ from '../AboutUs/FAQ/FAQ';
import PageTitle from '../AboutUs/PageTitle/PageTitle';
import Subscribe from '../Homepage/Subscribe/Subscribe';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const FAQPage = () => {
  return (
    <>
      <ScrollToTop />
      <PageTitle variant="faq-page" />
      <FAQ variant="faq-page" />
      <Subscribe />
    </>
  );
};

export default FAQPage;
