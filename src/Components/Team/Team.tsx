import styles from './Team.module.css';
import { clsx as cn } from 'clsx';
import xIcon from '../../assets/logos/logo-x.svg';
import facebookIcon from '../../assets/logos/logo-fb.svg';
import instagramIcon from '../../assets/logos/logo-instagram.svg';
import { team } from '../../constants';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const TeamCard = ({ team, variant, index }: { team: any; variant: string; index: number }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1, transformOrigin: 'top' }}
      transition={{ duration: 0.1, easings: 'ease', delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className={styles.card}
    >
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
    </motion.div>
  );
};

const Team = ({ variant }: { variant: string }) => {
  const teamPreview = team.slice(0, 4);

  return (
    <section className={cn(styles.team, variant === 'our-team-page' ? styles.team_ourteam : '')}>
      <div className={styles.container}>
        <div className={cn(styles.row, variant === 'our-team-page' ? styles.row_ourteam : '')}>
          <div className={cn(styles.textContainer, variant === 'our-team-page' ? styles.textContainer_ourteam : '')}>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, easings: 'ease' }}
              viewport={{ once: true, amount: 0.5 }}
              className={cn(styles.subtitle, 'gradient-text')}
            >
              Our Team
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.title}
            >
              Our Professionals Team
            </motion.h2>
          </div>
          {variant !== 'our-team-page' && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Link to="/our-team" className={styles.button}>
                SEE ALL
              </Link>
            </motion.div>
          )}
        </div>
        <div className={cn(styles.row, variant === 'our-team-page' ? styles.row_ourteam : '')}>
          {(variant === 'our-team-page' ? team : teamPreview).map((member, index) => {
            return <TeamCard key={index} team={member} variant={variant} index={index} />;
          })}
        </div>
        {variant !== 'our-team-page' && (
          <MotionLink
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, easings: 'ease', delay: 0.1 }}
            viewport={{ once: true, amount: 0.6 }}
            to="/our-team"
            className={cn(styles.button, styles.buttonMobile)}
          >
            SEE ALL
          </MotionLink>
        )}
      </div>
    </section>
  );
};

export default Team;
