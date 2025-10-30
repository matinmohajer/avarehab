"use client";
import { BookOpen, Clock, Tag, Search, Video, FileText, Headphones } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { blogPosts as posts } from "../../data/blogPosts";

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const router = useRouter();

  const categories = [
    { id: "all", label: "همه مقالات", icon: BookOpen },
    { id: "motor", label: "رشد حرکتی", icon: Tag },
    { id: "speech", label: "گفتار و زبان", icon: Tag },
    { id: "behavior", label: "رفتار و شناخت", icon: Tag },
    { id: "care", label: "سبک مراقبت", icon: Tag },
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="w-4 h-4" />;
      case "podcast":
        return <Headphones className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

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

  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              مقالات آموزشی
            </Badge>
            <h1 className="text-4xl lg:text-5xl mb-6 text-foreground">
              دانشنامه توانبخشی
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              مقالات، ویدیوها و پادکست‌های آموزشی برای والدین و متخصصان
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="جستجو در مقالات..."
                className="pr-12 h-14 rounded-xl border-2"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-border sticky top-20 z-40 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex-shrink-0 rounded-xl ${
                  selectedCategory === category.id
                    ? "bg-primary text-white"
                    : "border-2"
                }`}
              >
                <category.icon className="w-4 h-4 ml-2" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className="overflow-hidden h-full border-2 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group"
                    onClick={() => router.push(`/blog/${post.id}`)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Badge className="bg-white/90 text-primary border-0">
                          {post.categoryLabel}
                        </Badge>
                        <Badge className="bg-primary/90 text-white border-0 flex items-center gap-1">
                          {getTypeIcon(post.type)}
                          {getTypeLabel(post.type)}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span>{post.author}</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground">
                مقاله‌ای در این دسته‌بندی یافت نشد
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <BookOpen className="w-16 h-16 text-white/90 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl text-white mb-6">
              خبرنامه آوا
            </h2>
            <p className="text-lg text-white/90 mb-8">
              جدیدترین مقالات و منابع آموزشی را مستقیم در ایمیل خود دریافت کنید
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="ایمیل شما"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-xl h-12"
              />
              <Button className="bg-white text-primary hover:bg-white/90 rounded-xl px-8">
                عضویت
              </Button>
            </div>
            <p className="text-xs text-white/70 mt-4">
              ما ایمیل شما را با کسی به اشتراک نمی‌گذاریم
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">منابع بیشتر</h2>
            <p className="text-lg text-muted-foreground">
              دسترسی به کتابچه‌ها، چک‌لیست‌ها و ابزارهای آموزشی
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center border-2 hover:shadow-lg transition-shadow">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="mb-2">کتابچه‌های آموزشی</h4>
              <p className="text-sm text-muted-foreground mb-4">
                دانلود رایگان راهنماهای جامع
              </p>
              <Button variant="outline" className="rounded-xl">
                دانلود
              </Button>
            </Card>

            <Card className="p-6 text-center border-2 hover:shadow-lg transition-shadow">
              <Video className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="mb-2">ویدیوهای آموزشی</h4>
              <p className="text-sm text-muted-foreground mb-4">
                مشاهده کانال یوتیوب آوا
              </p>
              <Button variant="outline" className="rounded-xl">
                مشاهده
              </Button>
            </Card>

            <Card className="p-6 text-center border-2 hover:shadow-lg transition-shadow">
              <Headphones className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="mb-2">پادکست‌ها</h4>
              <p className="text-sm text-muted-foreground mb-4">
                گوش دادن به گفتگوهای تخصصی
              </p>
              <Button variant="outline" className="rounded-xl">
                گوش کنید
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
