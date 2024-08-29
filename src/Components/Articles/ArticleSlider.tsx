import styles from './Articles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { clsx as cn } from 'clsx';
import { useRef, useState } from 'react';
import ArticleBigCard from './ArticleBigCard';
import { IArticle, IArticleSliderProps } from '../../types/types';

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
        modules={[Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 4000,
        }}
      >
        {articles.map((article: IArticle, index: number) => {
          return (
            <SwiperSlide key={index}>
              <ArticleBigCard article={article}/>
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
