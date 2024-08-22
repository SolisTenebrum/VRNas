import styles from './Articles.module.css';
import { useEffect, useRef } from 'react';
import ArticleSmallCard from './ArticleSmallCard';
import { articleContent } from '../../constants';
import ArticleSlider from './ArticleSlider';
import { NavLink } from 'react-router-dom';
import { clsx as cn } from 'clsx';

export const shuffleArray = (array: any[]) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const Articles = ({ variant }: { variant: string }) => {
  const articlesContainerRef = useRef<HTMLDivElement>(null);
  const scrollBarIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const articlesContainer = articlesContainerRef.current;
    const scrollBarIndicator = scrollBarIndicatorRef.current;

    const handleScroll = () => {
      if (!articlesContainer || !scrollBarIndicator) return;
      const scrollTop = articlesContainer.scrollTop;
      const scrollHeight = articlesContainer.scrollHeight - articlesContainer.clientHeight;
      const scrollRatio = scrollTop / scrollHeight;

      scrollBarIndicator.style.transform = `translateY(${scrollRatio * 252}%)`;
    };

    if (!articlesContainer || !scrollBarIndicator) return;
    articlesContainer.addEventListener('scroll', handleScroll);

    return () => {
      articlesContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

   const shuffledArticles = shuffleArray(articleContent);

   const sliderArticles = shuffledArticles.slice(0, 4);
 
   const recentArticles = shuffledArticles.slice(4);

  return (
    <section className={styles.articles}>
      <div className={styles.container}>
        <div className={styles.containerTop}>
          <div className={styles.textContainer}>
            <h3 className={styles.subtitle}>Our Articles</h3>
            <h2 className={styles.title}>Stay Up-to-Date with Our VR Insights</h2>
          </div>
          <NavLink to="/blog#blog" className={styles.link}>
            <button className={styles.button}>SEE ALL</button>
          </NavLink>
        </div>
        <div className={styles.containerBottom}>
          <div className={styles.content}>
            <div className={styles.firstColumn}>
              <h4 className={styles.subsubtitle}>Popular Article</h4>
              <div className={styles.sliderContainer}>
                <ArticleSlider articles={sliderArticles} />
              </div>
            </div>
            <div className={styles.secondColumn}>
              <h4 className={styles.subsubtitle}>Recent Article</h4>
              <div className={styles.articlesContainer} ref={articlesContainerRef}>
                {recentArticles.map((article, index) => (
                  <ArticleSmallCard
                    key={index}
                    image={article.mainImage}
                    title={article.title}
                    span={article.category}
                    variant={variant}
                    id={article.id}
                  />
                ))}
              </div>
              <div className={styles.scrollBar}>
                <div className={styles.scrollBarIndicator} ref={scrollBarIndicatorRef}></div>
              </div>
            </div>
          </div>
          <NavLink to="/blog#blog" className={styles.link}>
            <button className={cn(styles.button, styles.buttonMobile)}>SEE ALL</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Articles;
