import styles from './ArticlePage.module.css';
import arrow from '../../assets/icons/arrowDown.svg';
import { smallArticles } from '../../constants';
import ArticleSmallCard from '../Homepage/Articles/ArticleSmallCard';
import twitterIcon from '../../assets/logos/logo-twitter.svg';
import facebookIcon from '../../assets/logos/logo-fb.svg';
import instagramIcon from '../../assets/logos/logo-instagram.svg';
import { NavLink } from 'react-router-dom';

interface IArticleProps {
  category: string;
  title: string;
  author: string;
  date: string;
  mainImage: string;
  paragraphs: string[];
  articleImages: string[];
  postTags: string;
}

const Article = ({ category, title, author, date, mainImage, paragraphs, articleImages, postTags }: IArticleProps) => {
  return (
    <>
      <span className={styles.articleSpan}>{category}</span>
      <h2 className={styles.articleTitle}>{title}</h2>
      <h3 className={styles.articleSubtitle}>
        {author} | {date}
      </h3>
      <img className={styles.articleMainImage} src={mainImage} />
      {paragraphs.slice(0, 4).map((paragraph, index) => (
        <p className={styles.articleText} key={index}>
          {paragraph}
        </p>
      ))}
      <div className={styles.articleImageContainer}>
        {articleImages.map((image, index) => (
          <img className={styles.articleImage} src={image} key={index} />
        ))}
      </div>
      {paragraphs.slice(4).map((paragraph, index) => (
        <p className={styles.articleText} key={index}>
          {paragraph}
        </p>
      ))}
      <h4 className={styles.postTagsTitle}>Post Tags:</h4>
      <p className={styles.postTags}>{postTags}</p>
      <h4 className={styles.shareTitle}>Share:</h4>
      <div className={styles.shareContainer}>
        <img className={styles.shareIcon} src={twitterIcon} />
        <img className={styles.shareIcon} src={facebookIcon} />
        <img className={styles.shareIcon} src={instagramIcon} />
      </div>
    </>
  );
};

const ArticlePage = ({ articleContent }: any) => {
  return (
    <section className={styles.articlePage}>
      <div className={styles.container}>
        <div className={styles.path}>
          <p className={styles.pathText}>
            <NavLink to="/" className={styles.pathLink}>Home</NavLink>
            <img className={styles.arrow} src={arrow} /> <NavLink to="/blog" className={styles.pathLink}>Blog</NavLink> <img className={styles.arrow} src={arrow} />
          </p>
          <span className={styles.pathSpan}>{articleContent.title}</span>
        </div>
        <div className={styles.content}>
          <div className={styles.column}>
            <Article {...articleContent} />
          </div>
          <div className={styles.column}>
            <div className={styles.recentArticles}>
              <h4 className={styles.subsubtitle}>Recent Article</h4>
              <div className={styles.articlesContainer}>
                {smallArticles.map((article, index) => (
                  <ArticleSmallCard
                    key={index}
                    image={article.image}
                    title={article.title}
                    span={article.span}
                    variant="blog-page"
                  />
                ))}
              </div>
            </div>
            <div className={styles.popularHashTags}>
              <h4 className={styles.subsubtitle}>Popular Hashtag</h4>
              <div className={styles.hashTags}>
                <span className={styles.hashTag}>#VRDesign</span>
                <span className={styles.hashTag}>#ArchitectureInnovation</span>
                <span className={styles.hashTag}>#DesignThinking</span>
                <span className={styles.hashTag}>#VirtualRealityArchitecture</span>
                <span className={styles.hashTag}>#BringingDesignsToLife</span>
                <span className={styles.hashTag}>#DesignVisualization</span>
                <span className={styles.hashTag}>#ArchitecturalVisualization</span>
                <span className={styles.hashTag}>#RevolutionizingArchitecture</span>
                <span className={styles.hashTag}>#BuildingInVR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlePage;
