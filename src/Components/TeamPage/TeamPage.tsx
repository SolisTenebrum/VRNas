import PageTitle from '../AboutUs/PageTitle/PageTitle';
import Team from '../AboutUs/Team/Team';
import Subscribe from '../Homepage/Subscribe/Subscribe';
import Statistics from '../OurService/Statistics/Statistics';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const TeamPage = () => {
  return (
    <>
      <ScrollToTop />
      <PageTitle variant='our-team-page'/>
      <Team variant='our-team-page'/>
      <Statistics />
      <Subscribe />
    </>
  );
};

export default TeamPage;
