import styles from './Articles.module.css';
import arrowRight from '../../../assets/icons/arrow-thin-right.svg';
import { clsx as cn } from 'clsx';

const ArticleSmallCard = ({
  image,
  title,
  span,
  variant,
}: {
  image: string;
  title: string;
  span: string;
  variant: string;
}): JSX.Element => {
  return (
    <div className={cn(styles.articleCard, variant === 'blog-page' ? styles.articleCard_blogpage : '')}>
      <div className={cn(styles.articleCardImageContainer, variant === 'blog-page' ? styles.articleCardImageContainer_blogpage : '')}>
        <img src={image} className={styles.articleCardImage} />
      </div>
      <div className={cn(styles.articleCardInfo, variant === 'blog-page' ? styles.articleCardInfo_blogpage : '')}>
        <span className={cn(styles.articleCardSpan, variant === 'blog-page' ? styles.articleCardSpan_blogpage : '')}>
          {span}
        </span>
        <h4 className={cn(styles.articleCardTitle, variant === 'blog-page' ? styles.articleCardTitle_blogpage : '')}>
          {title}
        </h4>
      </div>
      {variant !== 'blog-page' && (
        <button className={styles.articleCardGoButton}>
          <img src={arrowRight} className={styles.arrowRight} />
        </button>
      )}
    </div>
  );
};

export default ArticleSmallCard;
