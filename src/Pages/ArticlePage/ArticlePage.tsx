import styles from './ArticlePage.module.css';
import arrow from '../../assets/icons/menu-arrow.svg';
import ArticleSmallCard from '../../Components/Articles/ArticleSmallCard';
import xIcon from '../../assets/logos/logo-x.svg';
import facebookIcon from '../../assets/logos/logo-fb.svg';
import instagramIcon from '../../assets/logos/logo-instagram.svg';
import { Navigate, NavLink, useParams } from 'react-router-dom';
import { articleContent } from '../../constants';
import { useEffect, useState } from 'react';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import Subscribe from '../../Components/Subscribe/Subscribe';
import { shuffleArray } from '../../utils/shuffleArray';
import { IArticleProps } from '../../types/types';
import { motion } from 'framer-motion';

const Article = ({ category, title, author, date, mainImage, paragraphs, articleImages, postTags }: IArticleProps) => {
  return (
    <>
      <motion.span
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
        className={styles.articleSpan}
      >
        {category}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
        className={styles.articleTitle}
      >
        {title}
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}
        className={styles.articleSubtitle}
      >
        {author} | {date}
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, scale: 1.2, y: 100 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
        className={styles.articleMainImageContainer}
      >
        <img className={styles.articleMainImage} alt='Article image' src={mainImage} />
      </motion.div>
      {paragraphs?.slice(0, 4).map((paragraph, index) => (
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className={styles.articleText}
          key={index}
        >
          {paragraph}
        </motion.p>
      ))}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
        className={styles.articleImagesContainer}
      >
        {articleImages.map((image, index) => (
          <img className={styles.articleImage} src={image} alt='Article image' key={index} />
        ))}
      </motion.div>
      {paragraphs?.slice(4).map((paragraph, index) => (
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className={styles.articleText}
          key={index}
        >
          {paragraph}
        </motion.p>
      ))}
      <motion.h4
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
        className={styles.postTagsTitle}
      >
        Post Tags:
      </motion.h4>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
        className={styles.postTags}
      >
        {postTags}
      </motion.p>
      <motion.h4
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
        className={styles.shareTitle}
      >
        Share:
      </motion.h4>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
        className={styles.shareContainer}
      >
        <img className={styles.shareIcon} alt="X icon" src={xIcon} />
        <img className={styles.shareIcon} alt="Facebook icon" src={facebookIcon} />
        <img className={styles.shareIcon} alt="Instagram icon" src={instagramIcon} />
      </motion.div>
    </>
  );
};

const ArticlePage = () => {
  const shuffledArticles = shuffleArray(articleContent);

  const recentArticles = shuffledArticles.slice(4);

  const params = useParams();
  const [noArticle, setNoArticle] = useState<boolean>(false);

  useEffect(() => {
    const articleId = Number(params.id);
    if (isNaN(articleId) || articleId <= 0 || articleId > articleContent.length) {
      setNoArticle(true);
    }
  }, [params.id]);

  if (noArticle) {
    return <Navigate to="/404" replace />;
  }

  const articleIndex = Number(params.id) - 1;
  const article = articleContent[articleIndex];

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <ScrollToTop />
      <section className={styles.articlePage}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
            className={styles.path}
          >
            <p className={styles.pathText}>
              <NavLink to="/" className={styles.pathLink}>
                Home
              </NavLink>
              <img className={styles.arrow} alt="Arrow icon" src={arrow} />
              <NavLink to="/blog" className={styles.pathLink}>
                Blog
              </NavLink>
              <img className={styles.arrow} alt="Arrow icon" src={arrow} />
            </p>
            <span className={styles.pathSpan}>{article.title}</span>
          </motion.div>
          <div className={styles.content}>
            <div className={styles.column}>
              <Article {...article} />
            </div>
            <div className={styles.column}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.5 }}
                className={styles.recentArticles}
              >
                <h4 className={styles.subsubtitle}>Recent Article</h4>
                <div className={styles.articlesContainer}>
                  {recentArticles.map((article, index) => (
                    <ArticleSmallCard
                      key={index}
                      image={article.mainImage}
                      title={article.title}
                      span={article.category}
                      variant="blog-page"
                      id={article.id}
                      alt={article.alt}
                    />
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.5 }}
                className={styles.popularHashTags}
              >
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
};

export default ArticlePage;
