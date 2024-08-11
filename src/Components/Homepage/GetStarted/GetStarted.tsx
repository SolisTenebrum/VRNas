import styles from './GetStarted.module.css';
import { clsx as cn } from 'clsx';

const GetStarted = ({ variant }: { variant: string }) => {
  return (
    <section className={styles.getStarted}>
      <div className={styles.container}>
        <h3 className={styles.subtitle}>
          {variant === 'detail-service-page' ? 'OUR VR DESIGN PROJECT' : 'HOW TO GET STARTED'}
        </h3>
        <h2 className={cn(styles.title, variant === 'detail-service-page' ? styles.title_detailservice : '')}>
          {variant === 'detail-service-page'
            ? 'Revolutionize Your Experience with Our Cutting-Edge VR Design Project'
            : 'Bringing Your Virtual Reality Dreams to Life'}
        </h2>
        <div className={styles.video}>
          <div className={styles.videoInfo}>
            <span className={styles.videoSpan}>{variant === 'detail-service-page' ? 'VR Design' : 'VR Service'}</span>
            <h4 className={styles.videoTitle}>{variant === 'detail-service-page' ? 'VR Design Projects' : 'How to get started'}</h4>
          </div>
          <div className={cn(styles.videoImage, variant === 'detail-service-page' ? styles.videoImage_detailservice : '')}></div>
          <div className={styles.controls}>
            <div className={styles.playSmall}></div>
            <div className={styles.progressBar}></div>
          </div>
        </div>
        <button className={styles.button}>GET STARTED</button>
      </div>
    </section>
  );
};

export default GetStarted;
