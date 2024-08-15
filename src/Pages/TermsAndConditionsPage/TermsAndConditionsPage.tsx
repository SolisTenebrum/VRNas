import PageTitle from '../../Components//PageTitle/PageTitle';
import Subscribe from '../../Components/Subscribe/Subscribe';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import Terms from '../../Components/TermsAndConditions/Terms';

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
