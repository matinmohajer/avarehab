import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "خانه" },
    { id: "about", label: "درباره ما" },
    { id: "services", label: "خدمات" },
    { id: "blog", label: "مقالات" },
    { id: "contact", label: "تماس با ما" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Title - RTL aligned to right */}
          <div className="flex-shrink-0 flex items-center gap-3 order-2 lg:order-1">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-md">
              <Heart className="w-7 h-7 text-white" fill="currentColor" />
            </div>
            <div className="hidden md:block text-right">
              <h1 className="text-primary">موسسه توانبخشی آوا</h1>
              <p className="text-xs text-muted-foreground">نوزادان و کودکان</p>
            </div>
          </div>

          {/* Desktop Navigation - RTL */}
          <nav className="hidden lg:flex items-center gap-1 order-1 lg:order-2" dir="rtl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3 order-1 lg:order-3">
            <Button
              onClick={() => onNavigate("contact")}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-xl"
            >
              <span className="hidden sm:inline">حمایت کنید</span>
              <Heart className="w-4 h-4 sm:mr-2" />
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-white" dir="rtl">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-right px-4 py-3 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
