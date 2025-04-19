
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
      <section id="about">
        <About />
      </section>
      {/* Removed visitor counter div */}
      <section id="achievements">
        <Achievements />
      </section>
      <section id="blog">
        <BlogPreview />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </Layout>
  );
};

export default HomePage;
