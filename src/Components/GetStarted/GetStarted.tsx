import { NavLink } from 'react-router-dom';
import styles from './GetStarted.module.css';
import { clsx as cn } from 'clsx';
import { motion } from 'framer-motion';

const GetStarted = ({ variant }: { variant: string }) => {
  return (
    <section className={styles.getStarted}>
      <div className={styles.container}>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, easings: 'ease' }}
          viewport={{ once: true, amount: 0.5 }}
          className={cn(styles.subtitle, 'gradient-text')}
        >
          {variant === 'detail-service-page' ? 'Our VR Design Project' : 'How To Get Started'}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className={cn(styles.title, variant === 'detail-service-page' ? styles.title_detailservice : '')}
        >
          {variant === 'detail-service-page'
            ? 'Revolutionize Your Experience with Our Cutting-Edge VR Design Project'
            : 'Bringing Your Virtual Reality Dreams to Life'}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className={styles.video}
        >
          <div className={styles.videoInfo}>
            <span className={styles.videoSpan}>{variant === 'detail-service-page' ? 'VR Design' : 'VR Service'}</span>
            <h4 className={styles.videoTitle}>
              {variant === 'detail-service-page' ? 'VR Design Projects' : 'How to get started'}
            </h4>
          </div>
          <div
            className={cn(styles.videoImage, variant === 'detail-service-page' ? styles.videoImage_detailservice : '')}
          ></div>
          <div className={styles.controls}>
            <div className={styles.playSmall}></div>
            <div className={styles.progressBar}></div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <NavLink to="/pricing-plan#prices" className={styles.button}>
            GET STARTED
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;
