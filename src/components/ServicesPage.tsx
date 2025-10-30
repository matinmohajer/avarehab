"use client";
import {
  Heart,
  Activity,
  MessageCircle,
  UtensilsCrossed,
  Baby,
  ClipboardCheck,
  Users,
  GraduationCap,
  Truck,
  Microscope,
  Phone,
  Calendar,
  DollarSign,
  ArrowLeft,
} from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const mainServices = [
    {
      icon: Activity,
      title: "کاردرمانی (OT)",
      description:
        "توسعه مهارت‌های حرکتی ظریف، خودمراقبتی، بازی و یکپارچگی حسی برای کودکان",
      image: "https://images.unsplash.com/photo-1750082828854-61333b7b9e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGRldmVsb3BtZW50JTIwcGxheSUyMHRoZXJhcHl8ZW58MXx8fHwxNzYxMjkyODM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "ارزیابی عملکرد حرکتی و حسی",
        "برنامه‌های یکپارچگی حسی",
        "آموزش مهارت‌های خودمراقبتی",
        "مداخلات بازی‌محور",
      ],
    },
    {
      icon: Heart,
      title: "فیزیوتراپی (PT)",
      description:
        "بهبود تحرک، قدرت عضلانی، تعادل و توانایی‌های حرکتی درشت کودکان",
      image: "https://images.unsplash.com/photo-1709127347884-a106974ef58d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWMlMjByZWhhYmlsaXRhdGlvbiUyMGNoaWxkJTIwdGhlcmFweXxlbnwxfHx8fDE3NjEyOTI4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "درمان اختلالات عصبی-عضلانی",
        "برنامه‌های تقویت عضلانی",
        "آموزش راه رفتن و تعادل",
        "مدیریت درد و انقباضات",
      ],
    },
    {
      icon: MessageCircle,
      title: "گفتاردرمانی",
      description: "توسعه مهارت‌های گفتار، زبان، ارتباط و بلع برای کودکان",
      image: "https://images.unsplash.com/photo-1740853265752-fb0c80daed78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdib3JuJTIwYmFieSUyMGNhcmUlMjB0aGVyYXB5fGVufDF8fHx8MTc2MTI5MjgzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "ارزیابی و درمان تأخیر گفتاری",
        "مداخلات ارتباطی AAC",
        "درمان اختلالات تلفظی",
        "مشاوره تغذیه و بلع",
      ],
    },
    {
      icon: UtensilsCrossed,
      title: "تغذیه‌درمانی",
      description: "مشاوره تغذیه‌ای و درمان اختلالات تغذیه برای نوزادان و کودکان",
      image: "https://images.unsplash.com/photo-1758748101944-e06cb5fca43b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBiYWJ5JTIwYm9uZGluZyUyMGNhcmV8ZW58MXx8fHwxNzYxMjkyODM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "برنامه‌ریزی تغذیه‌ای شخصی",
        "درمان اختلالات تغذیه‌ای",
        "آموزش شیردهی و تغذیه کمکی",
        "مشاوره رشد و وزن‌گیری",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: ClipboardCheck,
      title: "غربالگری و ارزیابی رشد",
      description: "تشخیص زودهنگام تأخیرهای رشدی و اختلالات نوروموتوری",
    },
    {
      icon: Truck,
      title: "تیم‌های سیار",
      description: "ارائه خدمات در مناطق دورافتاده و محروم",
    },
    {
      icon: GraduationCap,
      title: "کارگاه‌های والدین",
      description: "آموزش مهارت‌های مراقبتی و تحریک رشد در خانه",
    },
    {
      icon: Users,
      title: "مشاوره روان‌شناختی",
      description: "حمایت عاطفی و روانی از خانواده‌ها",
    },
    {
      icon: Heart,
      title: "بانک تجهیزات کمکی",
      description: "امانت و اهدای ابزار کمکی به خانواده‌های نیازمند",
    },
    {
      icon: Microscope,
      title: "پژوهش و آموزش",
      description: "همکاری در تحقیقات بالینی و آموزش دانشجویان",
    },
  ];

  const processSteps = [
    {
      number: "۱",
      title: "تماس اولیه",
      description: "تماس با ما یا تکمیل فرم درخواست آنلاین",
      icon: Phone,
    },
    {
      number: "۲",
      title: "ارزیابی جامع",
      description: "بررسی وضعیت کودک توسط تیم چندرشته‌ای",
      icon: ClipboardCheck,
    },
    {
      number: "۳",
      title: "طراحی برنامه",
      description: "تدوین برنامه توانبخشی شخصی‌سازی شده",
      icon: Calendar,
    },
    {
      number: "۴",
      title: "شروع درمان",
      description: "جلسات منظم توانبخشی با نظارت مستمر",
      icon: Activity,
    },
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
              خدمات توانبخشی
            </Badge>
            <h1 className="text-4xl lg:text-5xl mb-6 text-foreground">
              خدمات جامع و تخصصی
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              تیم چندرشته‌ای آوا با رویکردی علمی و انسانی، بهترین خدمات توانبخشی را
              برای نوزادان و کودکان شما فراهم می‌کند.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services with Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">خدمات توانبخشی چندرشته‌ای</h2>
            <p className="text-lg text-muted-foreground">
              تیم متخصص ما در چهار حوزه اصلی به کودکان شما خدمت می‌کند
            </p>
          </div>

          <Tabs defaultValue="0" className="w-full" dir="rtl">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 h-auto">
              {mainServices.map((service, index) => (
                <TabsTrigger
                  key={index}
                  value={index.toString()}
                  className="flex items-center gap-2 py-3"
                >
                  <service.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{service.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {mainServices.map((service, index) => (
              <TabsContent key={index} value={index.toString()}>
                <Card className="overflow-hidden border-2">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-auto">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl">{service.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <h4 className="mb-4">ویژگی‌های خدمات:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">خدمات تکمیلی</h2>
            <p className="text-lg text-muted-foreground">
              خدمات حمایتی و آموزشی برای خانواده‌ها
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full border-2 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h3 className="mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary-foreground border-secondary/20">
              فرآیند دریافت خدمات
            </Badge>
            <h2 className="text-3xl lg:text-4xl mb-4">چگونه شروع کنیم؟</h2>
            <p className="text-lg text-muted-foreground">
              مراحل ساده برای دسترسی به خدمات توانبخشی
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <Card className="p-6 text-center h-full border-2">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                    {step.number}
                  </div>
                  <step.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h4 className="mb-3">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-0 w-6 h-0.5 bg-gradient-to-r from-primary to-secondary transform translate-x-1/2 -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Support */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 lg:p-12 border-2 bg-gradient-to-br from-accent/20 to-white">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h2 className="text-2xl lg:text-3xl mb-4">هزینه‌ها و حمایت مالی</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-right">
                <div>
                  <h4 className="mb-4 text-primary">تعرفه خدمات</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>تعرفه‌های منصفانه بر اساس هزینه واقعی خدمات</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>امکان پرداخت اقساطی برای خانواده‌ها</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>خدمات رایگان برای خانواده‌های تحت پوشش</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-4 text-secondary-foreground">حمایت و کمک هزینه</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>بررسی وضعیت اقتصادی-اجتماعی خانواده</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>اعطای کمک هزینه و بورس درمانی</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>ارجاع به صندوق‌های حمایتی</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-xl text-center">
                <p className="text-muted-foreground mb-4">
                  هیچ کودکی به دلیل مشکلات مالی از دریافت خدمات توانبخشی محروم نمی‌شود.
                </p>
                <p className="text-sm text-primary">
                  اطلاعات مالی شما کاملاً محرمانه است
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Baby className="w-16 h-16 text-white/90 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl text-white mb-6">
              آماده شروع هستید؟
            </h2>
            <p className="text-lg text-white/90 mb-8">
              برای دریافت خدمات یا مشاوره رایگان با ما تماس بگیرید
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                onClick={() => onNavigate("contact")}
                className="bg-white text-primary hover:bg-white/90 rounded-xl"
              >
                درخواست ارزیابی
                <Calendar className="w-5 h-5 mr-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("contact")}
                className="border-2 border-white text-white hover:bg-white/10 rounded-xl"
              >
                تماس با ما
                <Phone className="w-5 h-5 mr-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
