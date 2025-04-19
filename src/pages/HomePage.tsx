
import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Achievements from "@/components/sections/Achievements";
import BlogPreview from "@/components/sections/BlogPreview";
import Contact from "@/components/sections/Contact";
// Removed VisitorCounter import

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      {/* Removed visitor counter div */}
      <Achievements />
      <BlogPreview />
      <Contact />
    </Layout>
  );
};

export default HomePage;

