import styles from './Articles.module.css';
import arrowRight from '../../assets/icons/arrow-thin-to-right.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { clsx as cn } from 'clsx';
import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

interface IArticle {
  id: number;
  category: string;
  title: string;
  author: string;
  date: string;
  mainImage: string;
  paragraphs: string[];
  articleImages: string[];
  postTags: string;
}

interface IArticleSliderProps {
  articles: IArticle[];
}

const ArticleSlider: React.FC<IArticleSliderProps> = ({ articles }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <div className={styles.articleSlider}>
      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
        ref={swiperRef}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={0}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        // modules={[Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 4000,
        }}
      >
        {articles.map((article: IArticle, index: number) => {
          return (
            <SwiperSlide key={index}>
              <div className={styles.articleFullImageContainer}>
                <img src={article.mainImage} className={styles.articleFullImage} />
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
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={styles.indicators}>
        {articles.map((_, index: number) => {
          return (
            <div className={cn(styles.indicator, activeIndex === index && styles.indicatorActive)} key={index}></div>
          );
        })}
      </div>
    </div>
  );
};

export default ArticleSlider;
