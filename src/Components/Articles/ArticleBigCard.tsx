import styles from './Articles.module.css';
import arrowRight from '../../assets/icons/arrow-thin-to-right.svg';
import { Link } from 'react-router-dom';
import { IArticle } from '../../types/types';

const ArticleBigCard = ({ article }: { article: IArticle }) => {
  return (
    <div className={styles.articleFullImageContainer}>
      <img src={article.mainImage} className={styles.articleFullImage} alt={article.alt} />
      <div className={styles.articleFullImageContainerBottom}>
        <div className={styles.articleFullImageInfo}>
          <span className={styles.articleFullImageSpan}>{article.category}</span>
          <Link to={`/blog/${article.id}`}>
            <h4 className={styles.articleFullImageTitle}>{article.title}</h4>
          </Link>
        </div>
        <Link to={`/blog/${article.id}`} className={styles.goButton}>
          <img src={arrowRight} className={styles.arrowRight} alt="Arrow to right" />
        </Link>
      </div>
    </div>
  );
};

export default ArticleBigCard;
