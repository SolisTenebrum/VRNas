import { NavLink } from 'react-router-dom';
import styles from './GetStarted.module.css';
import { clsx as cn } from 'clsx';

const GetStarted = ({ variant }: { variant: string }) => {
  return (
    <section className={styles.getStarted}>
      <div className={styles.container}>
        <p
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="700"
          data-aos-easing="ease"
          data-aos-offset="300"
          className={cn(styles.subtitle, 'gradient-text')}
        >
          {variant === 'detail-service-page' ? 'Our VR Design Project' : 'How To Get Started'}
        </p>
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700"
          data-aos-easing="ease"
          data-aos-offset="300"
          className={cn(styles.title, variant === 'detail-service-page' ? styles.title_detailservice : '')}
        >
          {variant === 'detail-service-page'
            ? 'Revolutionize Your Experience with Our Cutting-Edge VR Design Project'
            : 'Bringing Your Virtual Reality Dreams to Life'}
        </h2>
        <div
          data-aos="zoom-in-up"
          data-aos-delay="180"
          data-aos-duration="700"
          data-aos-easing="ease"
          data-aos-offset="700"
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
        </div>
        <NavLink
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="700"
          data-aos-easing="ease"
          to="/pricing-plan#prices"
          className={styles.button}
        >
          GET STARTED
        </NavLink>
      </div>
    </section>
  );
};

export default GetStarted;
