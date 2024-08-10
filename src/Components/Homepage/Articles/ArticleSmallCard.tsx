import styles from './Articles.module.css';
import arrowRight from '../../../assets/icons/arrow-thin-right.svg';

const ArticleSmallCard = ({ image, title, span }: {image: string, title: string, span: string}): JSX.Element => {
  return (
    <div className={styles.articleCard}>
      <div className={styles.articleCardImageContainer}>
        <img src={image} className={styles.articleCardImage} />
      </div>
      <div className={styles.articleCardInfo}>
        <span className={styles.articleCardSpan}>{span}</span>
        <h4 className={styles.articleCardTitle}>{title}</h4>
      </div>
      <button className={styles.articleCardGoButton}>
        <img src={arrowRight} className={styles.arrowRight} />
      </button>
    </div>
  );
};

export default ArticleSmallCard;
