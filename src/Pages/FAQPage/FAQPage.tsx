import FAQ from '../../Components/FAQ/FAQ';
import PageTitle from '../../Components/PageTitle/PageTitle';
import Subscribe from '../../Components/Subscribe/Subscribe';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';

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
