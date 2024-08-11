import Choose from '../Homepage/Choose/Choose';
import Partners from '../Homepage/Partners/Partners';
import Subscribe from '../Homepage/Subscribe/Subscribe';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import About from './About/About';
import Choose2 from './Choose2/Choose2';
import FAQ from './FAQ/FAQ';
import PageTitle from './PageTitle/PageTitle';
import Team from './Team/Team';

const AboutUs = () => {
  return (
    <>
      <ScrollToTop />
      <PageTitle variant={'about-us-page'}/>
      <About />
      <Choose2 variant={'about-us-page'} />
      <Choose variant={'about-us-page'} />
      <Team />
      <Partners />
      <FAQ />
      <Subscribe />
    </>
  );
};

export default AboutUs;
