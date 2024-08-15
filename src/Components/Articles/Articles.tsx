import styles from './Articles.module.css';
import { useEffect, useRef } from 'react';
import ArticleSmallCard from './ArticleSmallCard';
import { smallArticles, bigArticles } from '../../constants';
import ArticleSlider from './ArticleSlider';

const Articles = ({variant}: {variant: string}) => {
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

  return (
    <section className={styles.articles}>
      <div className={styles.container}>
        <div className={styles.containerTop}>
          <div className={styles.textContainer}>
            <h3 className={styles.subtitle}>Our Articles</h3>
            <h2 className={styles.title}>Stay Up-to-Date with Our VR Insights</h2>
          </div>
          <button className={styles.button}>SEE ALL</button>
        </div>
        <div className={styles.containerBottom}>
          <div className={styles.content}>
            <div className={styles.firstColumn}>
              <h4 className={styles.subsubtitle}>Popular Article</h4>
              <div className={styles.sliderContainer}>
                <ArticleSlider articles={bigArticles} />
              </div>
            </div>
            <div className={styles.secondColumn}>
              <h4 className={styles.subsubtitle}>Recent Article</h4>
              <div className={styles.articlesContainer} ref={articlesContainerRef}>
                {smallArticles.map((article, index) => (
                  <ArticleSmallCard key={index} image={article.image} title={article.title} span={article.span} variant={variant} />
                ))}
              </div>
              <div className={styles.scrollBar}>
                <div className={styles.scrollBarIndicator} ref={scrollBarIndicatorRef}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;

