import styles from './Articles.module.css';
import arrowRight from '../../assets/icons/arrow-thin-to-right.svg';
import { NavLink } from 'react-router-dom';
import { IArticle } from '../../types/types';

const ArticleBigCard = ({ article }: { article: IArticle }) => {
  return (
    <div className={styles.articleFullImageContainer}>
      <img src={article.mainImage} className={styles.articleFullImage} />
      <div className={styles.articleFullImageContainerBottom}>
        <div className={styles.articleFullImageInfo}>
          <span className={styles.articleFullImageSpan}>{article.category}</span>
          <NavLink to={`/blog/${article.id}`}>
            <h4 className={styles.articleFullImageTitle}>{article.title}</h4>
          </NavLink>
        </div>
        <NavLink to={`/blog/${article.id}`}>
          <button className={styles.goButton}>
            <img src={arrowRight} className={styles.arrowRight} />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ArticleBigCard;
