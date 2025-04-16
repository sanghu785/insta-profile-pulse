
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { useEffect, useState } from "react";

const BlogPreview = () => {
  const [recentPosts, setRecentPosts] = useState(blogPosts.slice(0, 3));

  // Re-initialize blog posts when component becomes visible
  useEffect(() => {
    // Initial setup
    setRecentPosts(blogPosts.slice(0, 3));

    // Handle visibility change (laptop closing/opening)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Refresh blog posts when tab becomes visible again
        setRecentPosts([...blogPosts.slice(0, 3)]);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <section id="blog" className="section scroll-mt">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Latest Blog Posts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-on-scroll">
            Thoughts, ideas, and insights I've shared recently.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentPosts.map((post, index) => (
            <Link 
              to={`/blog/${post.slug}`} 
              key={post.id}
              className="group"
            >
              <div 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-on-scroll border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.coverImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {post.tags.slice(0, 2).map(tag => (
                      <span 
                        key={tag} 
                        className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-xl mb-2 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="text-blue-600 text-sm font-medium group-hover:underline">
                      Read more
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center animate-on-scroll">
          <Link to="/blog">
            <Button variant="outline" className="px-6">
              View All Posts <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
