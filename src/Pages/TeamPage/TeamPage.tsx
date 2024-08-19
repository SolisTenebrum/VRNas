import PageTitle from '../../Components/PageTitle/PageTitle';
import Team from '../../Components/Team/Team';
import Subscribe from '../../Components/Subscribe/Subscribe';
import Statistics from '../../Components/Statistics/Statistics';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';

const TeamPage = () => {
  return (
    <>
      <ScrollToTop />
      <PageTitle variant='our-team-page'/>
      <Team variant='our-team-page'/>
      <Statistics variant='our-team-page'/>
      <Subscribe />
    </>
  );
};

export default TeamPage;
