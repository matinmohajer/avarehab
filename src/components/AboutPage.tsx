"use client";
import { Target, Eye, Heart, Users, Award, Shield, BookOpen, Lightbulb } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "مهربانی و همدلی",
      description: "درک عمیق نیازهای خانواده‌ها و حمایت صمیمانه",
    },
    {
      icon: Award,
      title: "تخصص و کیفیت",
      description: "بالاترین استانداردهای علمی و درمانی",
    },
    {
      icon: Shield,
      title: "شفافیت و اعتماد",
      description: "مدیریت شفاف منابع و گزارش‌دهی دقیق",
    },
    {
      icon: Lightbulb,
      title: "نوآوری",
      description: "استفاده از روش‌های نوین و مبتنی بر شواهد",
    },
  ];

  const team = [
    {
      name: "دکتر سارا احمدی",
      role: "مدیر اجرایی و نورولوژیست اطفال",
      image: "https://images.unsplash.com/photo-1758206523745-1f334f702660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGhlYWx0aGNhcmUlMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc2MTIwMTcyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "مریم کریمی",
      role: "کاردرمانگر ارشد",
      image: "https://images.unsplash.com/photo-1709127347884-a106974ef58d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWMlMjByZWhhYmlsaXRhdGlvbiUyMGNoaWxkJTIwdGhlcmFweXxlbnwxfHx8fDE3NjEyOTI4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "دکتر رضا محمدی",
      role: "فیزیوتراپیست و مشاور توانبخشی",
      image: "https://images.unsplash.com/photo-1750082828854-61333b7b9e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGRldmVsb3BtZW50JTIwcGxheSUyMHRoZXJhcHl8ZW58MXx8fHwxNzYxMjkyODM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "فاطمه رضایی",
      role: "گفتاردرمانگر و مشاور تغذیه",
      image: "https://images.unsplash.com/photo-1758748101944-e06cb5fca43b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBiYWJ5JTIwYm9uZGluZyUyMGNhcmV8ZW58MXx8fHwxNzYxMjkyODM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const targetGroups = [
    "نوزادان نارس (زیر ۳۷ هفته)",
    "نوزادان با وزن کم هنگام تولد",
    "کودکان با فلج مغزی (CP)",
    "تأخیرهای رشد حرکتی و شناختی",
    "اختلالات طیف اوتیسم",
    "مشکلات گفتار و تغذیه",
  ];

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
              درباره موسسه آوا
            </Badge>
            <h1 className="text-4xl lg:text-5xl mb-6 text-foreground">
              سازمانی برای آینده‌ای روشن‌تر
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              موسسه توانبخشی نوزادان و کودکان آوا یک سازمان غیردولتی (NGO) غیرانتفاعی
              است که از سال ۱۳۹۴ با هدف ارائه خدمات توانبخشی زودهنگام به نوزادان و
              کودکان پرخطر فعالیت می‌کند.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full border-2 bg-gradient-to-br from-primary/5 to-transparent">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl mb-4 text-primary">ماموریت ما</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ارائه خدمات توانبخشی جامع، مبتنی بر شواهد و با رویکرد خانواده‌محور به
                  نوزادان و کودکان پرخطر، بدون توجه به وضعیت اقتصادی-اجتماعی خانواده‌ها.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  ما معتقدیم هر کودکی حق دارد به بهترین خدمات توانبخشی دسترسی داشته
                  باشد و والدین باید در این مسیر همراه و توانمند شوند.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full border-2 bg-gradient-to-br from-secondary/5 to-transparent">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h2 className="text-2xl mb-4 text-secondary-foreground">چشم‌انداز ما</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ایجاد جامعه‌ای که در آن همه نوزادان و کودکان پرخطر به خدمات توانبخشی
                  با کیفیت و زودهنگام دسترسی دارند و خانواده‌ها حمایت لازم را دریافت
                  می‌کنند.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  ما تلاش می‌کنیم تا الگوی پیشرو در حوزه توانبخشی نوزادان و کودکان در
                  کشور باشیم و با پژوهش و آموزش، دانش این حوزه را توسعه دهیم.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">ارزش‌های ما</h2>
            <p className="text-lg text-muted-foreground">
              اصولی که راهنمای همه فعالیت‌های ما هستند
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full border-2 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Groups */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1740853265752-fb0c80daed78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdib3JuJTIwYmFieSUyMGNhcmUlMjB0aGVyYXB5fGVufDF8fHx8MTc2MTI5MjgzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="مراقبت از نوزاد"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-right"
            >
              <Badge className="mb-4 bg-secondary/10 text-secondary-foreground border-secondary/20">
                گروه‌های هدف
              </Badge>
              <h2 className="text-3xl lg:text-4xl mb-6">چه کسانی را پوشش می‌دهیم؟</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                خدمات ما به طور ویژه برای نوزادان و کودکانی است که در معرض خطر
                تأخیرهای رشدی قرار دارند:
              </p>
              <div className="space-y-3">
                {targetGroups.map((group, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">{group}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-white to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              تیم ما
            </Badge>
            <h2 className="text-3xl lg:text-4xl mb-4">متخصصان و داوطلبان</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              تیمی از متخصصان مجرب و متعهد که با قلبی پر از مهربانی در کنار خانواده‌ها
              هستند
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-2 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="mb-2">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Transparency */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 lg:p-12 border-2 bg-gradient-to-br from-muted/30 to-transparent">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl mb-4">شفافیت و مسئولیت‌پذیری</h2>
              </div>

              <div className="space-y-6 text-right">
                <div>
                  <h4 className="mb-2 flex items-center justify-end gap-2">
                    <span>ساختار حکمرانی</span>
                    <Users className="w-5 h-5 text-primary" />
                  </h4>
                  <p className="text-muted-foreground">
                    مجمع عمومی، هیئت مدیره منتخب و کمیته‌های تخصصی نظارت بر فعالیت‌ها را
                    بر عهده دارند.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 flex items-center justify-end gap-2">
                    <span>وضعیت قانونی</span>
                    <BookOpen className="w-5 h-5 text-primary" />
                  </h4>
                  <p className="text-muted-foreground">
                    شماره ثبت: ۱۲۳۴۵ • مجوز وزارت بهداشت • عضو شبکه NGO های سلامت ایران
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 flex items-center justify-end gap-2">
                    <span>گزارش‌دهی مالی</span>
                    <Award className="w-5 h-5 text-primary" />
                  </h4>
                  <p className="text-muted-foreground">
                    گزارش‌های مالی سالانه به صورت عمومی منتشر می‌شوند و توسط حسابرس
                    مستقل بررسی می‌گردند.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
