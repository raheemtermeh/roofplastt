import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Send,
  MessageCircle,
} from "lucide-react";
import type { Page } from "./Navbar";

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const navLinks: { label: string; page: Page }[] = [
  { label: "صفحه اصلی", page: "home" },
  { label: "محصولات", page: "product" },
  { label: "کاربردها", page: "applications" },
  { label: "پروژه‌ها", page: "projects" },
  { label: "تماس با ما", page: "contact" },
];

export function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl text-white mb-4">زهکش چمن مصنوعی</h3>
            <p className="text-sm leading-relaxed mb-4">
              تولیدکننده تخصصی سیستم‌های زهکش برای چمن‌های مصنوعی با بیش از ۱۵
              سال تجربه
            </p>
            <div className="flex gap-3 mb-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/989121234567"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg text-white mb-4">دسترسی سریع</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map(({ label, page }) => (
                <li key={page}>
                  <button
                    onClick={() => handleNav(page)}
                    className="hover:text-emerald-400 transition-colors text-right w-full"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg text-white mb-4">خدمات</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="hover:text-emerald-400 transition-colors cursor-default">
                  تولید زهکش
                </span>
              </li>
              <li>
                <button
                  onClick={() => handleNav("contact")}
                  className="hover:text-emerald-400 transition-colors"
                >
                  مشاوره رایگان
                </button>
              </li>
              <li>
                <span className="hover:text-emerald-400 transition-colors cursor-default">
                  نصب و راه‌اندازی
                </span>
              </li>
              <li>
                <span className="hover:text-emerald-400 transition-colors cursor-default">
                  خدمات پس از فروش
                </span>
              </li>
              <li>
                <span className="hover:text-emerald-400 transition-colors cursor-default">
                  گارانتی محصول
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg text-white mb-4">تماس با ما</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:09124049247"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    ۰۲۱-۱۲۳۴۵۶۷۸
                  </a>
                  <br />
                  <a
                    href="tel:09121234567"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    ۰۹۱۲-۱۲۳۴۵۶۷
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@zahkesh.ir"
                  className="hover:text-emerald-400 transition-colors"
                >
                  info@zahkesh.ir
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>تهران، خیابان ولیعصر، پلاک ۱۲۳</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 mt-8 flex flex-col md:flex-row items-center justify-between text-sm gap-4">
          <p>© ۱۴۰۳ زهکش چمن مصنوعی — تمامی حقوق محفوظ است</p>
          <div className="flex gap-4">
            <a
              href="tel:09124049247"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              تماس
            </a>
            <a
              href="https://wa.me/989121234567"
              className="flex items-center gap-1.5 text-green-400 hover:text-green-300 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              واتساپ
            </a>
            <button
              onClick={() => handleNav("contact")}
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              درخواست مشاوره
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
