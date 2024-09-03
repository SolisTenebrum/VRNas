import styles from './Articles.module.css';
import ArticleSmallCard from './ArticleSmallCard';
import { articleContent } from '../../constants';
import ArticleSlider from './ArticleSlider';
import { Link } from 'react-router-dom';
import { clsx as cn } from 'clsx';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { shuffleArray } from '../../utils/shuffleArray';
import { motion } from 'framer-motion';

const Articles = ({ variant }: { variant: string }) => {
  const shuffledArticles = shuffleArray(articleContent);

  const sliderArticles = shuffledArticles.slice(0, 4);
  const recentArticles = shuffledArticles.slice(4);

  return (
    <section className={styles.articles}>
      <div className={styles.container}>
        <div className={styles.containerTop}>
          <div className={styles.textContainer}>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, easings: 'ease' }}
              viewport={{ once: true, amount: 0.5 }}
              className={cn(styles.subtitle, 'gradient-text')}
            >
              Our Articles
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.title}
            >
              Stay Up-to-Date with Our VR Insights
            </motion.h2>
          </div>
          <motion.div
            style={{ alignSelf: 'end' }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Link to="/blog#blog" className={styles.button}>
              SEE ALL
            </Link>
          </motion.div>
        </div>
        <div className={styles.containerBottom}>
          <div className={styles.content}>
            <motion.div
              initial={{ opacity: 0, scale: 1.5, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.firstColumn}
            >
              <h4 className={styles.subsubtitle}>Popular Article</h4>
              <ArticleSlider articles={sliderArticles} />
            </motion.div>
            <div className={styles.secondColumn}>
              <motion.h4
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, easings: 'ease' }}
                viewport={{ once: true, amount: 0.5 }}
                className={styles.subsubtitle}
              >
                Recent Article
              </motion.h4>
              <motion.ul
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, easings: 'ease' }}
                viewport={{ once: true, amount: 0.5 }}
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
                      alt={article.alt}
                    />
                  ))}
                </SimpleBar>
              </motion.ul>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, easings: 'ease', delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Link to="/blog#blog" className={cn(styles.button, styles.buttonMobile)}>
              SEE ALL
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
