import styles from './Articles.module.css';
import ArticleSmallCard from './ArticleSmallCard';
import { articleContent } from '../../constants';
import ArticleSlider from './ArticleSlider';
import { Link } from 'react-router-dom';
import { clsx as cn } from 'clsx';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { shuffleArray } from '../../utils/shuffleArray';

const Articles = ({ variant }: { variant: string }) => {
  const shuffledArticles = shuffleArray(articleContent);

  const sliderArticles = shuffledArticles.slice(0, 4);

  const recentArticles = shuffledArticles.slice(4);

  return (
    <section className={styles.articles}>
      <div className={styles.container}>
        <div className={styles.containerTop}>
          <div className={styles.textContainer}>
            <p
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="700"
              data-aos-easing="ease"
              data-aos-offset="2200"
              className={cn(styles.subtitle, 'gradient-text')}
            >
              Our Articles
            </p>
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="700"
              data-aos-easing="ease"
              data-aos-offset="2200"
              className={styles.title}
            >
              Stay Up-to-Date with Our VR Insights
            </h2>
          </div>
          <Link
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
            data-aos-easing="ease"
            data-aos-offset="2200"
            to="/blog#blog"
            className={styles.button}
          >
            SEE ALL
          </Link>
        </div>
        <div className={styles.containerBottom}>
          <div className={styles.content}>
            <div
              data-aos="zoom-out"
              data-aos-delay="200"
              data-aos-duration="700"
              data-aos-easing="ease"
              data-aos-offset="2500"
              className={styles.firstColumn}
            >
              <h4 className={styles.subsubtitle}>Popular Article</h4>
              <ArticleSlider articles={sliderArticles} />
            </div>
            <div className={styles.secondColumn}>
              <h4
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="700"
                data-aos-easing="ease"
                data-aos-offset="2500"
                className={styles.subsubtitle}
              >
                Recent Article
              </h4>
              <ul
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="700"
                data-aos-easing="ease"
                data-aos-offset="2500"
                className={styles.articlesContainer}
              >
                <SimpleBar
                  className={styles.simpleBar}
                  forceVisible="y"
                  autoHide={false}
                  scrollbarMaxSize={100}
                  scrollbarMinSize={100}
                >
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
                </SimpleBar>
              </ul>
            </div>
          </div>
          <Link to="/blog#blog" className={cn(styles.button, styles.buttonMobile)}>
            SEE ALL
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Articles;
