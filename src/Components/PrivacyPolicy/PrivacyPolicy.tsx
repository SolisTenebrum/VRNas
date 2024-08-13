import PageTitle from '../AboutUs/PageTitle/PageTitle';
import Subscribe from '../Homepage/Subscribe/Subscribe';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Privacy from './Privacy/Privacy';

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
