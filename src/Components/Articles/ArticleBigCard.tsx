import styles from './Articles.module.css';
import arrowRight from '../../assets/icons/arrow-thin-to-right.svg';

const ArticleBigCard = ({ image, title, span }: { image: string; title: string; span: string }) => {
  return (
    <div className={styles.articleFullImageContainer}>
        <img src={image} className={styles.articleFullImage} />
        <div className={styles.articleFullImageInfo}>
          <span className={styles.articleFullImageSpan}>{span}</span>
          <h4 className={styles.articleFullImageTitle}>{title}</h4>
        </div>
        <button className={styles.goButton}>
          <img src={arrowRight} className={styles.arrowRight} />
        </button>
    </div>
  );
};

export default ArticleBigCard;
