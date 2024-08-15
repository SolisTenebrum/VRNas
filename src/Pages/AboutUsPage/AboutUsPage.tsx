import Choose from '../../Components/Choose/Choose';
import Partners from '../../Components/Partners/Partners';
import Subscribe from '../../Components/Subscribe/Subscribe';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import About from '../../Components/AboutFull/About';
import BenefitsFull from '../../Components/BenefitsFull/BenefitsFull';
import FAQ from '../../Components/FAQ/FAQ';
import PageTitle from '../../Components/PageTitle/PageTitle';
import Team from '../../Components/Team/Team';

const AboutUs = () => {
  return (
    <>
      <ScrollToTop />
      <PageTitle variant='about-us-page'/>
      <About />
      <BenefitsFull variant='about-us-page' />
      <Choose variant='about-us-page' />
      <Team variant=''/>
      <Partners />
      <FAQ variant='about-us-page'/>
      <Subscribe />
    </>
  );
};

export default AboutUs;
