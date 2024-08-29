import styles from './Articles.module.css';
import ArticleSmallCard from './ArticleSmallCard';
import { articleContent } from '../../constants';
import ArticleSlider from './ArticleSlider';
import { NavLink } from 'react-router-dom';
import { clsx as cn } from 'clsx';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export const shuffleArray = (array: any[]) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const Articles = ({ variant }: { variant: string }) => {
  const shuffledArticles = shuffleArray(articleContent);

  const sliderArticles = shuffledArticles.slice(0, 4);

  const recentArticles = shuffledArticles.slice(4);

  return (
    <section className={styles.articles}>
      <div className={styles.container}>
        <div className={styles.containerTop}>
          <div className={styles.textContainer}>
            <p className={cn(styles.subtitle, 'gradient-text')}>Our Articles</p>
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
              <ArticleSlider articles={sliderArticles} />
            </div>
            <div className={styles.secondColumn}>
              <h4 className={styles.subsubtitle}>Recent Article</h4>
              <SimpleBar className={styles.simpleBar} forceVisible="y" autoHide={false} scrollbarMaxSize={100}>
                <ul className={styles.articlesContainer}>
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
                </ul>
              </SimpleBar>
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
