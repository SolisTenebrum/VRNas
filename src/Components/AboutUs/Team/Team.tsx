import styles from './Team.module.css';
import memberOne from '../../../assets/people/Member1.png';
import memberTwo from '../../../assets/people/Member2.png';
import memberThree from '../../../assets/people/Member3.png';
import memberFour from '../../../assets/people/Member4.png';

const team = [
  {
    name: 'Bondan Prabowo',
    jobTitle: 'CEO',
    image: memberOne,
  },
  {
    name: 'Bayu Aji',
    jobTitle: 'VR Development',
    image: memberTwo,
  },
  {
    name: 'Agung Brandon',
    jobTitle: 'VR Artist',
    image: memberThree,
  },
  {
    name: 'Aril Laso',
    jobTitle: 'UI / UX Designer',
    image: memberFour,
  },
];

const TeamCard = ({ team }: { team: any }) => {
  return (
    <div className={styles.card}>
        <img src={team.image} alt="member" className={styles.cardImage} />
        <div className={styles.cardText}>
          <h4 className={styles.cardName}>{team.name}</h4>
          <p className={styles.cardJobTitle}>{team.jobTitle}</p>
        </div>
    </div>
  );
};

const Team = () => {
  return (
    <section className={styles.team}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.textContainer}>
            <h3 className={styles.subtitle}>OUR TEAM</h3>
            <h2 className={styles.title}>Our Professionals Team</h2>
          </div>
          <button className={styles.button}>SEE ALL</button>
        </div>
        <div className={styles.row}>
          {team.map((member, index) => {
            return <TeamCard key={index} team={member} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
