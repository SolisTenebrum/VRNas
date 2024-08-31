import styles from './Articles.module.css';
import arrowRight from '../../assets/icons/arrow-thin-to-right.svg';
import { clsx as cn } from 'clsx';
import { Link } from 'react-router-dom';

const ArticleSmallCard = ({
  image,
  title,
  span,
  variant,
  id,
}: {
  image: string;
  title: string;
  span: string;
  variant: string;
  id: number;
}): JSX.Element => {
  return (
    <li className={cn(styles.articleCard, variant === 'blog-page' ? styles.articleCard_blogpage : '')}>
      <div
        className={cn(
          styles.articleCardImageContainer,
          variant === 'blog-page' ? styles.articleCardImageContainer_blogpage : ''
        )}
      >
        <img src={image} className={styles.articleCardImage} />
      </div>
      <div className={cn(styles.articleCardInfo, variant === 'blog-page' ? styles.articleCardInfo_blogpage : '')}>
        <span className={cn(styles.articleCardSpan, variant === 'blog-page' ? styles.articleCardSpan_blogpage : '')}>
          {span}
        </span>
        <Link to={`/blog/${id}`}>
          <h4 className={cn(styles.articleCardTitle, variant === 'blog-page' ? styles.articleCardTitle_blogpage : '')}>
            {title}
          </h4>
        </Link>
      </div>
      {variant !== 'blog-page' && (
        <Link to={`/blog/${id}`} className={styles.articleCardGoButton}>
          <img src={arrowRight} className={styles.arrowRight} />
        </Link>
      )}
    </li>
  );
};

export default ArticleSmallCard;
