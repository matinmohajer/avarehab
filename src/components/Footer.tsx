import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-muted/30 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" dir="rtl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="text-right">
            <div className="flex items-center gap-3 justify-end mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <h3 className="text-primary">موسسه آوا</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              توانبخشی نوزادان و کودکان پرخطر با رویکرد مداخله زودهنگام و حمایت از خانواده‌ها
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-right">
            <h4 className="mb-4 text-foreground">دسترسی سریع</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  درباره ما
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  خدمات توانبخشی
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  مقالات آموزشی
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  فرصت‌های داوطلبی
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-right">
            <h4 className="mb-4 text-foreground">خدمات ما</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>توانبخشی چندرشته‌ای</li>
              <li>غربالگری و ارزیابی</li>
              <li>آموزش والدین</li>
              <li>مشاوره روانشناختی</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-right">
            <h4 className="mb-4 text-foreground">تماس با ما</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center justify-end gap-2">
                <span>تهران، خیابان ولیعصر</span>
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              </li>
              <li className="flex items-center justify-end gap-2">
                <span dir="ltr">021-12345678</span>
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              </li>
              <li className="flex items-center justify-end gap-2">
                <span dir="ltr">info@avarehab.ir</span>
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3 mt-4 justify-end">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © ۱۴۰۴ موسسه توانبخشی نوزادان و کودکان آوا • تمامی حقوق محفوظ است
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            سازمان غیردولتی (NGO) • شماره ثبت: ۱۲۳۴۵
          </p>
        </div>
      </div>
    </footer>
  );
}
