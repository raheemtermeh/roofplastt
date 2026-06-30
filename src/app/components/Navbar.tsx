import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export type Page = "home" | "product" | "applications" | "projects" | "contact";

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: { label: string; page: Page }[] = [
  { label: "صفحه اصلی", page: "home" },
  { label: "محصولات", page: "product" },
  { label: "کاربردها", page: "applications" },
  { label: "پروژه‌ها", page: "projects" },
  { label: "تماس با ما", page: "contact" },
];

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav("home")}
            className="text-2xl text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            زهکش چمن مصنوعی
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => handleNav(page)}
                className={`text-sm transition-colors ${
                  currentPage === page
                    ? "text-emerald-600 border-b-2 border-emerald-600 pb-0.5"
                    : "text-gray-700 hover:text-emerald-600"
                }`}
              >
                {label}
              </button>
            ))}
            <a
              href="tel:09124049247"
              className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-emerald-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              09124049247
            </a>
            <Button
              onClick={() => handleNav("contact")}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              دریافت مشاوره
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navItems.map(({ label, page }) => (
                <button
                  key={page}
                  onClick={() => handleNav(page)}
                  className={`text-right py-2 transition-colors ${
                    currentPage === page
                      ? "text-emerald-600"
                      : "text-gray-700 hover:text-emerald-600"
                  }`}
                >
                  {label}
                </button>
              ))}
              <a
                href="tel:09124049247"
                className="flex items-center gap-2 text-gray-700 py-2"
              >
                <Phone className="w-4 h-4" />
                ۰۲۱-۱۲۳۴۵۶۷۸
              </a>
              <a
                href="https://wa.me/989121234567"
                className="flex items-center gap-2 text-green-600 py-2"
              >
                <MessageCircle className="w-4 h-4" />
                واتساپ
              </a>
              <Button
                onClick={() => handleNav("contact")}
                className="bg-emerald-600 hover:bg-emerald-700 text-white w-full"
              >
                دریافت مشاوره رایگان
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
