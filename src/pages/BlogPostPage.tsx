
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { allBlogPosts, BlogPost } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag as TagIcon } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import NotFound from "./NotFound";

// A simple markdown renderer
const renderMarkdown = (markdown: string): string => {
  // This is a very simple markdown renderer for demonstration
  // In a real project, use a proper markdown library like react-markdown
  
  // Convert headings
  let html = markdown
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-5 mb-2">$1</h3>');
  
  // Convert lists
  html = html.replace(/^\* (.*$)/gm, '<li class="ml-6 list-disc mb-1">$1</li>');
  html = html.replace(/^- (.*$)/gm, '<li class="ml-6 list-disc mb-1">$1</li>');
  html = html.replace(/^\d+\. (.*$)/gm, '<li class="ml-6 list-decimal mb-1">$1</li>');
  
  // Wrap lists
  html = html.replace(/<li class="ml-6 list-disc mb-1">(.*)<\/li>\n<li class="ml-6 list-disc mb-1">/gm, 
                     '<li class="ml-6 list-disc mb-1">$1</li><li class="ml-6 list-disc mb-1">');
  html = html.replace(/<li class="ml-6 list-decimal mb-1">(.*)<\/li>\n<li class="ml-6 list-decimal mb-1">/gm, 
                     '<li class="ml-6 list-decimal mb-1">$1</li><li class="ml-6 list-decimal mb-1">');
  
  // Wrap lists with ul/ol
  html = html.replace(/(<li class="ml-6 list-disc mb-1">.*<\/li>)/, '<ul class="my-4">$1</ul>');
  html = html.replace(/(<li class="ml-6 list-decimal mb-1">.*<\/li>)/, '<ol class="my-4">$1</ol>');
  
  // Convert paragraphs (two newlines)
  html = html.replace(/\n\n/g, '</p><p class="my-4">');
  
  // Convert single newlines to line breaks
  html = html.replace(/\n/g, '<br>');
  
  // Wrap the whole thing in a paragraph
  html = '<p class="my-4">' + html + '</p>';
  
  // Fix any double-wrapped paragraphs
  html = html.replace(/<p class="my-4"><p class="my-4">/g, '<p class="my-4">');
  html = html.replace(/<\/p><\/p>/g, '</p>');
  
  return html;
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [nextPost, setNextPost] = useState<BlogPost | null>(null);
  const [prevPost, setPrevPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (slug) {
      const currentPost = allBlogPosts.find(post => post.slug === slug);
      
      if (currentPost) {
        setPost(currentPost);
        
        // Find next and previous posts
        const currentIndex = allBlogPosts.findIndex(p => p.id === currentPost.id);
        setNextPost(allBlogPosts[currentIndex + 1] || null);
        setPrevPost(allBlogPosts[currentIndex - 1] || null);
        
        // Set page title for SEO
        document.title = `${currentPost.title} - Your Name`;
      } else {
        setPost(null);
      }
    }
  }, [slug]);

  // Share functionality
  const sharePost = async () => {
    if (!post) return;
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } else {
        // Fallback for browsers that don't support navigator.share
        navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copied!",
          description: "The link to this post has been copied to your clipboard.",
        });
      }
    } catch (error) {
      console.error("Error sharing:", error);
      toast({
        variant: "destructive",
        title: "Share failed",
        description: "Could not share this post. You can copy the URL manually.",
      });
    }
  };

  if (!post) {
    return <NotFound />;
  }

  return (
    <Layout>
      <article className="pt-32 pb-20">
        <div className="container-custom px-4">
          {/* Back button */}
          <div className="mb-8">
            <Link to="/blog">
              <Button variant="outline" className="gap-2">
                <ArrowLeft size={16} /> Back to Blog
              </Button>
            </Link>
          </div>

          {/* Featured image */}
          <div className="rounded-lg overflow-hidden shadow-lg mb-8 h-64 md:h-96">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Post header */}
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/blog?tag=${tag}`}
                  className="text-xs px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <User size={16} /> {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} /> {post.date}
              </div>
            </div>
          </header>

          {/* Post content */}
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
            />
          </div>

          {/* Tags */}
          <div className="max-w-3xl mx-auto mt-12 flex items-center flex-wrap gap-2">
            <TagIcon size={16} className="mr-2 text-gray-600" />
            {post.tags.map((tag) => (
              <Link
                key={tag}
                to={`/blog?tag=${tag}`}
                className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>

          {/* Share button */}
          <div className="max-w-3xl mx-auto mt-8">
            <Button onClick={sharePost} variant="outline" className="w-full sm:w-auto">
              Share this post
            </Button>
          </div>

          {/* Post navigation */}
          <nav className="max-w-3xl mx-auto mt-12 flex flex-col sm:flex-row justify-between gap-4">
            {prevPost && (
              <Link
                to={`/blog/${prevPost.slug}`}
                className="flex-1 p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <span className="text-sm text-gray-500 block mb-1">Previous Post</span>
                <h3 className="font-medium line-clamp-2">{prevPost.title}</h3>
              </Link>
            )}

            {nextPost && (
              <Link
                to={`/blog/${nextPost.slug}`}
                className="flex-1 p-4 border border-gray-200 rounded-lg text-right hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <span className="text-sm text-gray-500 block mb-1">Next Post</span>
                <h3 className="font-medium line-clamp-2">{nextPost.title}</h3>
              </Link>
            )}
          </nav>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPostPage;
