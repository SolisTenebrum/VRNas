import About from "./About/About";
import Articles from "./Articles/Articles";
import Benefits from "./Benefits/Benefits";
import Choose from "./Choose/Choose";
import GetStarted from "./GetStarted/GetStarted";
import Hero from "./Hero/Hero";
import Partners from "./Partners/Partners";
import Pricing from "./Pricing/Pricing";
import Service from "./Service/Service";
import Subscribe from "./Subscribe/Subscribe";
import Testimonials from "./Testimonials/Testimonials";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Benefits variant=""/>
      <About />
      <Service />
      <Choose variant=""/>
      <GetStarted />
      <Testimonials />
      <Pricing />
      <Partners />
      <Articles />
      <Subscribe />
    </>
  );
};

export default Homepage;
