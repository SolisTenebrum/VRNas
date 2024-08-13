import PageTitle from '../AboutUs/PageTitle/PageTitle';
import Team from '../AboutUs/Team/Team';
import Subscribe from '../Homepage/Subscribe/Subscribe';
import Numbers from '../OurService/Numbers/Numbers';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const TeamPage = () => {
  return (
    <>
      <ScrollToTop />
      <PageTitle variant='our-team-page'/>
      <Team variant='our-team-page'/>
      <Numbers />
      <Subscribe />
    </>
  );
};

export default TeamPage;
