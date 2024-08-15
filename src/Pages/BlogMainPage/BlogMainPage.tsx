import PageTitle from "../../Components/PageTitle/PageTitle";
import Subscribe from "../../Components/Subscribe/Subscribe";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import BlogArticles from "../../Components/BlogArticles/BlogArticles";

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
