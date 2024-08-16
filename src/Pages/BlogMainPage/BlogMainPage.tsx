import PageTitle from '../../Components/PageTitle/PageTitle';
import Subscribe from '../../Components/Subscribe/Subscribe';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import BlogArticles from '../../Components/BlogArticles/BlogArticles';
import scrollToElement from '../../utils/scrollToElement';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BlogMainPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    scrollToElement(hash);
  }, [hash]);
  
  return (
    <>
      <ScrollToTop />
      <PageTitle variant="blog-page" />
      <BlogArticles />
      <Subscribe />
    </>
  );
};

export default BlogMainPage;
