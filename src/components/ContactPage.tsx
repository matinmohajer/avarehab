"use client";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Heart,
  HandHeart,
  Users,
  Stethoscope,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { motion } from "motion/react";
import { useState } from "react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "تماس تلفنی",
      details: ["۰۲۱-۱۲۳۴۵۶۷۸", "۰۲۱-۸۷۶۵۴۳۲۱"],
      description: "شنبه تا پنجشنبه، ۸ تا ۱۸",
    },
    {
      icon: Mail,
      title: "ایمیل",
      details: ["info@avarehab.ir", "support@avarehab.ir"],
      description: "پاسخگویی حداکثر ۲۴ ساعته",
    },
    {
      icon: MapPin,
      title: "آدرس مرکز",
      details: ["تهران، خیابان ولیعصر", "پلاک ۱۲۳، طبقه ۲"],
      description: "نقشه را ببینید",
    },
    {
      icon: Clock,
      title: "ساعات کاری",
      details: ["شنبه تا پنجشنبه", "۸:۰۰ تا ۱۸:۰۰"],
      description: "جمعه‌ها تعطیل",
    },
  ];

  const donationOptions = [
    {
      icon: Heart,
      title: "کمک مالی یک‌باره",
      description: "حمایت مالی برای ادامه فعالیت‌های موسسه",
      amount: "مبلغ دلخواه",
    },
    {
      icon: HandHeart,
      title: "کمک ماهیانه",
      description: "حمایت مستمر و پایدار از کودکان",
      amount: "از ۱۰۰ هزار تومان",
    },
    {
      icon: Users,
      title: "حمایت از یک کودک",
      description: "تأمین هزینه درمان کامل یک کودک",
      amount: "ماهیانه ۵۰۰ هزار تومان",
    },
  ];

  const categories = [
    { value: "help", label: "درخواست کمک / مراجعه" },
    { value: "volunteer", label: "داوطلبی" },
    { value: "donate", label: "حمایت مالی" },
    { value: "collaboration", label: "همکاری و مشارکت" },
    { value: "other", label: "سایر موارد" },
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
              تماس با ما
            </Badge>
            <h1 className="text-4xl lg:text-5xl mb-6 text-foreground">
              در کنار شما هستیم
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              برای دریافت خدمات، مشاوره رایگان، داوطلبی یا حمایت مالی با ما در ارتباط
              باشید
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full border-2 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="mb-3">{method.title}</h3>
                  {method.details.map((detail, idx) => (
                    <p
                      key={idx}
                      className="text-sm text-muted-foreground mb-1"
                      dir={method.icon === Phone || method.icon === Mail ? "ltr" : "rtl"}
                    >
                      {detail}
                    </p>
                  ))}
                  <p className="text-xs text-primary mt-3">{method.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border-2">
                <div className="mb-6">
                  <h2 className="text-2xl mb-2">فرم تماس</h2>
                  <p className="text-muted-foreground">
                    پیام خود را برای ما ارسال کنید
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">نام و نام خانوادگی *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="rounded-xl h-12"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">ایمیل *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="rounded-xl h-12"
                        dir="ltr"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">تلفن تماس *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="rounded-xl h-12"
                        dir="ltr"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">موضوع تماس *</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) =>
                        setFormData({ ...formData, category: value })
                      }
                    >
                      <SelectTrigger className="rounded-xl h-12">
                        <SelectValue placeholder="انتخاب کنید" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat.value} value={cat.value}>
                            {cat.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">پیام شما *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="rounded-xl min-h-32"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 rounded-xl"
                  >
                    ارسال پیام
                    <Send className="w-5 h-5 mr-2" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    اطلاعات شما محرمانه است و با کسی به اشتراک گذاشته نمی‌شود
                  </p>
                </form>
              </Card>
            </motion.div>

            {/* Map & Social */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map */}
              <Card className="overflow-hidden border-2 h-80">
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                    <p className="text-muted-foreground">نقشه موقعیت</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      تهران، خیابان ولیعصر، پلاک ۱۲۳
                    </p>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="p-6 border-2">
                <h3 className="mb-4">ما را در شبکه‌های اجتماعی دنبال کنید</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 transition-all"
                  >
                    <Instagram className="w-5 h-5 text-primary" />
                    <span className="text-sm">اینستاگرام</span>
                  </a>
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 transition-all"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                    <span className="text-sm">لینکدین</span>
                  </a>
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 transition-all"
                  >
                    <Facebook className="w-5 h-5 text-primary" />
                    <span className="text-sm">فیسبوک</span>
                  </a>
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="p-6 border-2 bg-gradient-to-br from-accent/20 to-transparent">
                <h3 className="mb-4">دسترسی سریع</h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-between rounded-xl h-12"
                  >
                    <span>درخواست ارزیابی رایگان</span>
                    <Stethoscope className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-between rounded-xl h-12"
                  >
                    <span>ثبت‌نام داوطلب</span>
                    <Users className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-between rounded-xl h-12"
                  >
                    <span>دانلود بروشور</span>
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary-foreground border-secondary/20">
              حمایت مالی
            </Badge>
            <h2 className="text-3xl lg:text-4xl mb-4">با کمک شما، امید می‌دهیم</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              هر کمک مالی، هر چند کوچک، می‌تواند آینده یک کودک را تغییر دهد
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {donationOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full border-2 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h3 className="mb-3">{option.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {option.description}
                  </p>
                  <p className="text-primary mb-6">{option.amount}</p>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 rounded-xl">
                    حمایت کنید
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <Card className="p-8 border-2 bg-gradient-to-br from-muted/30 to-transparent">
            <div className="text-center mb-6">
              <h3 className="mb-2">شفافیت مالی و اعتماد</h3>
              <p className="text-sm text-muted-foreground">
                تمام کمک‌های مالی صرف توانبخشی کودکان می‌شود
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="px-6 py-3 bg-white rounded-xl border border-border shadow-sm">
                <span className="text-sm text-muted-foreground">گزارش مالی سالانه</span>
              </div>
              <div className="px-6 py-3 bg-white rounded-xl border border-border shadow-sm">
                <span className="text-sm text-muted-foreground">حسابرسی مستقل</span>
              </div>
              <div className="px-6 py-3 bg-white rounded-xl border border-border shadow-sm">
                <span className="text-sm text-muted-foreground">درگاه امن پرداخت</span>
              </div>
              <div className="px-6 py-3 bg-white rounded-xl border border-border shadow-sm">
                <span className="text-sm text-muted-foreground">رسید الکترونیکی</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Users className="w-16 h-16 text-white/90 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl text-white mb-6">
              داوطلب آوا شوید
            </h2>
            <p className="text-lg text-white/90 mb-8">
              اگر متخصص بهداشت و درمان، دانشجو یا فعال اجتماعی هستید، می‌توانید با ما
              همکاری کنید
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 rounded-xl"
            >
              ثبت‌نام داوطلب
              <Heart className="w-5 h-5 mr-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
