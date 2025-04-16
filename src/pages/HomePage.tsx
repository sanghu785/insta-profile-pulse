
import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Achievements from "@/components/sections/Achievements";
import BlogPreview from "@/components/sections/BlogPreview";
import Contact from "@/components/sections/Contact";
import VisitorCounter from "@/components/VisitorCounter";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <div className="container-custom my-8">
        <VisitorCounter />
      </div>
      <Achievements />
      <BlogPreview />
      <Contact />
    </Layout>
  );
};

export default HomePage;
