import styles from './BlogArticles.module.css';
import { clsx as cn } from 'clsx';
import { useEffect, useState } from 'react';
import { blogCards } from '../../constants';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IBlogArticleCardProps } from '../../types/types';

const BlogArticleCard = ({
  image,
  subtitle,
  title,
  span,
  id,
  alt,
}: IBlogArticleCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, easings: 'ease', delay: 0.2, type: 'spring' }}
      viewport={{ once: true, amount: 0.1 }}
      className={styles.card}
    >
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt={alt} />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.category}>{subtitle}</p>
        <h3 className={styles.title}>{title}</h3>
        <Link to={`/blog/${id}`} className={styles.span}>
          {span}
        </Link>
      </div>
    </motion.div>
  );
};

const BlogArticles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 431) {
        setCardsPerPage(6);
      } else if (window.innerWidth < 993 && window.innerWidth > 768) {
        setCardsPerPage(10);
      } else {
        setCardsPerPage(9);
      }
    };

    updateCardsPerPage();

    window.addEventListener('resize', updateCardsPerPage);

    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  const totalPages = Math.ceil(blogCards.length / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = blogCards.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);

    window.scrollTo({
      top: 400,
      behavior: 'smooth',
    });
  };

  return (
    <section className={styles.blogArticles} id="blog">
      <div className={styles.container}>
        {currentCards.map((card, index) => (
          <BlogArticleCard
            key={index}
            image={card.image}
            subtitle={card.subtitle}
            title={card.title}
            span={card.span}
            id={card.id}
            alt={card.alt}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, easings: 'ease', delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className={styles.pagination}
      >
        {Array.from({ length: totalPages }, (_, index) => {
          return (
            <button
              key={index}
              className={cn(styles.paginationButton, currentPage === index + 1 ? styles.paginationButtonActive : '')}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          );
        })}
      </motion.div>
    </section>
  );
};

export default BlogArticles;
