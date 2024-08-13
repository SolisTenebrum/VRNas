import PageTitle from '../AboutUs/PageTitle/PageTitle';
import Subscribe from '../Homepage/Subscribe/Subscribe';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Terms from './TermsAndConditions/Terms';

const TermsAndConditionsPage = () => {
  return (
    <>
      <ScrollToTop />
      <PageTitle variant='terms-and-conditions-page'/>
      <Terms />
      <Subscribe />
    </>
  );
};

export default TermsAndConditionsPage;
