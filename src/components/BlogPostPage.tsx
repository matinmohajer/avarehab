import { ArrowRight, Clock, User, Calendar, Tag, Share2, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { blogPosts, BlogPost } from "../../data/blogPosts";

interface BlogPostPageProps {
  postId: number;
  onNavigate: (page: string) => void;
}

export function BlogPostPage({ postId, onNavigate }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <h2 className="text-2xl mb-4">مقاله یافت نشد</h2>
          <Button onClick={() => onNavigate("blog")} className="rounded-xl">
            <ArrowRight className="w-4 h-4 mr-2" />
            بازگشت به بلاگ
          </Button>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "video":
        return "ویدیو";
      case "podcast":
        return "پادکست";
      default:
        return "مقاله";
    }
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post.title;
    
    switch (platform) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
        break;
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, "_blank");
        break;
      case "linkedin":
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/20" dir="rtl">
      {/* Back Button */}
      <div className="bg-white border-b border-border sticky top-20 z-40 backdrop-blur-sm bg-white/95">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button
            variant="ghost"
            onClick={() => onNavigate("blog")}
            className="rounded-xl"
          >
            <ArrowRight className="w-4 h-4 mr-2" />
            بازگشت به بلاگ
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Categories and Type */}
          <div className="flex gap-3 mb-6">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              {post.categoryLabel}
            </Badge>
            <Badge className="bg-secondary/10 text-secondary border-secondary/20">
              {getTypeLabel(post.type)}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl mb-6">{post.title}</h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime} مطالعه</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12 shadow-lg">
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Share Buttons */}
          <Card className="p-6 mb-12 border-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-muted-foreground" />
                <span>اشتراک‌گذاری:</span>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-xl"
                  onClick={() => handleShare("facebook")}
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-xl"
                  onClick={() => handleShare("twitter")}
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-xl"
                  onClick={() => handleShare("linkedin")}
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Excerpt */}
          <div className="bg-primary/5 border-r-4 border-primary p-6 rounded-lg mb-12">
            <p className="text-lg leading-relaxed">{post.excerpt}</p>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none mb-12 [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:mt-8 [&>h3]:mb-4 [&>p]:mb-6 [&>p]:leading-relaxed [&>ul]:mb-6 [&>ul]:mr-6 [&>ol]:mb-6 [&>ol]:mr-6 [&>li]:mb-3"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <Separator className="my-12" />

          {/* Author Bio */}
          <Card className="p-8 border-2 mb-12">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white flex-shrink-0">
                <User className="w-12 h-12" />
              </div>
              <div className="flex-1">
                <h3 className="mb-2">نویسنده: {post.author}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {post.authorBio}
                </p>
              </div>
            </div>
          </Card>

          {/* Tags */}
          <div className="mb-12">
            <div className="flex items-center gap-3 flex-wrap">
              <Tag className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">برچسب‌ها:</span>
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="rounded-lg">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="p-8 text-center bg-gradient-to-br from-primary/10 to-secondary/10 border-2 mb-12">
            <MessageCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="mb-4">سوالی دارید؟</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              تیم متخصصین موسسه آوا آماده پاسخگویی به سوالات شما و ارائه مشاوره
              رایگان هستند.
            </p>
            <Button
              size="lg"
              className="rounded-xl"
              onClick={() => onNavigate("contact")}
            >
              دریافت مشاوره رایگان
            </Button>
          </Card>
        </motion.div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl mb-12 text-center">مقالات مرتبط</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className="overflow-hidden h-full border-2 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      onNavigate(`blog/${relatedPost.id}`);
                    }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/90 text-primary border-0">
                          {relatedPost.categoryLabel}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="mb-3 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                        {relatedPost.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-muted-foreground pt-4 border-t border-border">
                        <Clock className="w-4 h-4" />
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
