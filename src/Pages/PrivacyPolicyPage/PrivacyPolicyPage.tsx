import PageTitle from '../../Components/PageTitle/PageTitle';
import Subscribe from '../../Components/Subscribe/Subscribe';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import Privacy from '../../Components/Privacy/Privacy';

const PrivacyPolicy = () => {
  return (
    <>
      <ScrollToTop />
      <PageTitle variant='privacy-policy-page'/>
      <Privacy />
      <Subscribe />
    </>
  );
};

export default PrivacyPolicy;
