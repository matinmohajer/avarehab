"use client";
import { Heart, Users, BookOpen, Stethoscope, Award, ArrowLeft, CheckCircle, Quote } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      icon: Stethoscope,
      title: "توانبخشی چندرشته‌ای",
      description: "کاردرمانی، فیزیوتراپی، گفتاردرمانی و تغذیه‌درمانی توسط تیم متخصص",
      color: "from-primary/10 to-primary/5",
    },
    {
      icon: Users,
      title: "غربالگری و ارزیابی",
      description: "تشخیص زودهنگام تأخیرهای رشدی و ارجاع به تیم‌های متخصص",
      color: "from-secondary/10 to-secondary/5",
    },
    {
      icon: BookOpen,
      title: "آموزش والدین",
      description: "کارگاه‌های آموزشی، جلسات مشاوره و پشتیبانی روان‌شناختی خانواده‌ها",
      color: "from-accent/20 to-accent/10",
    },
    {
      icon: Heart,
      title: "حمایت و تسهیلات",
      description: "بانک تجهیزات، کمک هزینه درمان و دسترسی به خدمات رایگان",
      color: "from-muted/50 to-muted/20",
    },
  ];

  const stats = [
    { number: "۲۵۰۰+", label: "نوزاد تحت پوشش", icon: Users },
    { number: "۱۵۰+", label: "کارگاه آموزشی", icon: BookOpen },
    { number: "۳۵+", label: "متخصص و داوطلب", icon: Award },
    { number: "۱۰", label: "سال تجربه", icon: CheckCircle },
  ];

  const testimonials = [
    {
      text: "تیم آوا با صبر و مهربانی کودکم را در مسیر بهبودی همراهی کردند. امروز شاهد پیشرفت‌های شگفت‌انگیز او هستیم.",
      author: "مریم احمدی",
      role: "والد کودک تحت درمان",
      image: "https://images.unsplash.com/photo-1758748101944-e06cb5fca43b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBiYWJ5JTIwYm9uZGluZyUyMGNhcmV8ZW58MXx8fHwxNzYxMjkyODM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      text: "آموزش‌های تخصصی آوا به ما کمک کرد تا نقش فعال‌تری در درمان فرزندمان داشته باشیم. حس می‌کنیم تنها نیستیم.",
      author: "رضا کریمی",
      role: "پدر نوزاد نارس",
      image: "https://images.unsplash.com/photo-1654613698246-b6d44aef0fd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBzdXBwb3J0JTIwY291bnNlbGluZ3xlbnwxfHx8fDE3NjEyOTI0Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const partners = [
    "دانشگاه علوم پزشکی تهران",
    "انجمن اطفال ایران",
    "سازمان بهزیستی",
    "کمیته امداد",
  ];

  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-right"
            >
              <Badge className="mb-4 bg-secondary/20 text-secondary-foreground border-secondary/30">
                سازمان غیردولتی (NGO)
              </Badge>
              <h1 className="text-4xl lg:text-5xl mb-6 text-foreground leading-relaxed">
                کمک به نوزادان پرخطر و خانواده‌ها با{" "}
                <span className="text-primary">توانبخشی زودهنگام</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                موسسه توانبخشی آوا با رویکرد علمی و انسانی، مسیر رشد و بهبودی نوزادان و
                کودکان پرخطر را هموار می‌کند. ما در کنار شما هستیم.
              </p>
              <div className="flex gap-4 justify-end">
                <Button
                  size="lg"
                  onClick={() => onNavigate("contact")}
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white rounded-xl"
                >
                  دریافت خدمات
                  <ArrowLeft className="w-5 h-5 mr-2 rotate-180" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate("about")}
                  className="rounded-xl border-2"
                >
                  بیشتر بدانید
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1740853265752-fb0c80daed78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdib3JuJTIwYmFieSUyMGNhcmUlMjB0aGVyYXB5fGVufDF8fHx8MTc2MTI5MjgzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="نوزاد تحت مراقبت"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-3xl opacity-20 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-3xl opacity-20 blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2">
                  <stat.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <div className="text-3xl mb-2 text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              خدمات ما
            </Badge>
            <h2 className="text-3xl lg:text-4xl mb-4">
              چگونه به شما کمک می‌کنیم؟
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              خدمات جامع و تخصصی برای نوزادان و کودکان پرخطر
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all hover:-translate-y-1 border-2">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}
                  >
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              onClick={() => onNavigate("services")}
              variant="outline"
              size="lg"
              className="rounded-xl border-2"
            >
              مشاهده تمام خدمات
              <ArrowLeft className="w-5 h-5 mr-2 rotate-180" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary-foreground border-secondary/20">
              داستان‌های واقعی
            </Badge>
            <h2 className="text-3xl lg:text-4xl mb-4">صدای خانواده‌ها</h2>
            <p className="text-lg text-muted-foreground">
              تجربه والدینی که در کنار آوا بودند
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-8 border-2 hover:shadow-xl transition-shadow">
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-right">
                      <div className="text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-muted-foreground mb-8">
            همکاران و حامیان ما
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white rounded-xl border border-border shadow-sm"
              >
                <span className="text-sm text-muted-foreground">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heart className="w-16 h-16 text-white/90 mx-auto mb-6" fill="currentColor" />
            <h2 className="text-3xl lg:text-4xl text-white mb-6">
              بخشی از تغییر باشید
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              حمایت شما می‌تواند آینده یک کودک را تغییر دهد. با ما همراه شوید و امید را
              به خانواده‌ها هدیه دهید.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                onClick={() => onNavigate("contact")}
                className="bg-white text-primary hover:bg-white/90 rounded-xl"
              >
                حمایت مالی
                <Heart className="w-5 h-5 mr-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("contact")}
                className="border-2 border-white text-white hover:bg-white/10 rounded-xl"
              >
                داوطلب شوید
                <Users className="w-5 h-5 mr-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
