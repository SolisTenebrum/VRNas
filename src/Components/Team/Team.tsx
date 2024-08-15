import styles from './Team.module.css';
import { clsx as cn } from 'clsx';
import xIcon from '../../assets/logos/logo-x.svg';
import facebookIcon from '../../assets/logos/logo-fb.svg';
import instagramIcon from '../../assets/logos/logo-instagram.svg';
import { team } from '../../constants';


const TeamCard = ({ team, variant }: { team: any; variant: string }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.overlay} />
        <img src={team.image} alt="team-member" className={styles.cardImage} />
        {variant === 'our-team-page' ? (
          <div className={styles.socials}>
            <div className={styles.socialIconContainer}>
              <img src={instagramIcon} className={styles.socialIcon} />
            </div>
            <div className={styles.socialIconContainer}>
              <img src={facebookIcon} className={styles.socialIcon} />
            </div>
            <div className={styles.socialIconContainer}>
              <img src={xIcon} className={styles.socialIcon} />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className={styles.cardText}>
        <h4 className={styles.cardName}>{team.name}</h4>
        <p className={styles.cardJobTitle}>{team.jobTitle}</p>
      </div>
    </div>
  );
};

const Team = ({ variant }: { variant: string }) => {
  const teamPreview = team.slice(0, 4);

  return (
    <section className={styles.team}>
      <div className={styles.container}>
        <div className={cn(styles.row, variant === 'our-team-page' ? styles.row_ourteam : '')}>
          <div className={cn(styles.textContainer, variant === 'our-team-page' ? styles.textContainer_ourteam : '')}>
            <h3 className={styles.subtitle}>Our Team</h3>
            <h2 className={styles.title}>Our Professionals Team</h2>
          </div>
          {variant !== 'our-team-page' && <button className={styles.button}>SEE ALL</button>}
        </div>
        <div className={cn(styles.row, variant === 'our-team-page' ? styles.row_ourteam : '')}>
          {(variant === 'our-team-page' ? team : teamPreview).map((member, index) => {
            return <TeamCard key={index} team={member} variant={variant} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
