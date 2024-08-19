import styles from './BlogArticles.module.css';
import { clsx as cn } from 'clsx';
import { useEffect, useState } from 'react';
import { blogCards } from '../../constants';
import { NavLink } from 'react-router-dom';

const BlogArticleCard = ({
  image,
  subtitle,
  title,
  span,
  id,
}: {
  image: string;
  subtitle: string;
  title: string;
  span: string;
  id: number;
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} />
      </div>
      <div className={styles.textContainer}>
        <h4 className={styles.subtitle}>{subtitle}</h4>
        <h3 className={styles.title}>{title}</h3>
        <NavLink to={`/blog/${id}`} className={styles.link}>
          <span className={styles.span}>{span}</span>
        </NavLink>
      </div>
    </div>
  );
};

const BlogArticles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 431) {
        setCardsPerPage(6);
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
          />
        ))}
      </div>
      <div className={styles.pagination}>
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
      </div>
    </section>
  );
};

export default BlogArticles;
