import PageTitle from "../AboutUs/PageTitle/PageTitle";
import Subscribe from "../Homepage/Subscribe/Subscribe";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import BlogArticles from "./BlogArticles/BlogArticles";

const BlogMainPage = () => {
  return (
    <>
      <ScrollToTop />
      <PageTitle variant="blog-page"/>
      <BlogArticles />
      <Subscribe />
    </>
  );
};

export default BlogMainPage;
