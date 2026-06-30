import { motion } from 'motion/react';
import { CheckCircle, Phone, MessageCircle, Download, Layers, Droplets, Weight, Shield, Ruler, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import type { Page } from '../components/Navbar';

interface ProductPageProps {
  onNavigate: (page: Page) => void;
}

const specs = [
  { label: 'جنس', value: 'پلی‌پروپیلن (PP) با UV Stabilizer', icon: Layers },
  { label: 'ابعاد', value: '۴۰×۶۰ سانتی‌متر (سفارشی نیز موجود)', icon: Ruler },
  { label: 'وزن', value: '۱.۸ تا ۲.۲ کیلوگرم بر متر مربع', icon: Weight },
  { label: 'ظرفیت تخلیه آب', value: 'حداکثر ۱۵۰ لیتر در دقیقه بر متر مربع', icon: Droplets },
  { label: 'مقاومت فشار', value: 'تا ۵ تن بر متر مربع', icon: Shield },
  { label: 'عمر مفید', value: 'بیش از ۲۰ سال', icon: Zap },
];

const features = [
  'تخلیه سریع و کامل آب باران در کمتر از ۱ دقیقه',
  'مقاوم در برابر UV، یخ‌زدگی و گرمای شدید',
  'سازگار با تمام انواع چمن مصنوعی',
  'نصب آسان و سریع بدون نیاز به ابزار خاص',
  'سبک وزن و مقاوم در برابر بار سنگین',
  'قابل بازیافت و سازگار با محیط زیست',
  'بدون نیاز به تعمیر و نگهداری',
  'گارانتی ۱۰ ساله محصول',
];

const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1712418516923-527799fb2bec?w=800&q=80',
    alt: 'زهکش زیر چمن مصنوعی فوتبال',
    label: 'زمین فوتبال',
  },
  {
    src: 'https://images.unsplash.com/photo-1759722144303-bad4613b9c0f?w=800&q=80',
    alt: 'نصب زهکش در زمین ورزشی',
    label: 'نصب حرفه‌ای',
  },
  {
    src: 'https://images.unsplash.com/photo-1759683527845-78059c8bca21?w=800&q=80',
    alt: 'زهکش در باغ و ویلا',
    label: 'باغ و ویلا',
  },
  {
    src: 'https://images.unsplash.com/photo-1637028251652-cdef2b2b6100?w=800&q=80',
    alt: 'تولید زهکش در کارخانه',
    label: 'خط تولید',
  },
];

export function ProductPage({ onNavigate }: ProductPageProps) {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1712418516923-527799fb2bec?w=1200&q=60")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-emerald-500/30 text-emerald-200 text-sm px-4 py-1.5 rounded-full mb-6 border border-emerald-400/30">
              محصول اصلی
            </span>
            <h1 className="text-5xl md:text-6xl mb-6 leading-tight">
              زهکش تخصصی
              <br />
              <span className="text-emerald-300">چمن مصنوعی</span>
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed mb-10">
              پیشرفته‌ترین سیستم تخلیه آب برای چمن‌های مصنوعی — ساخته‌شده با تکنولوژی روز اروپا، تولید ایران
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-6 text-lg gap-2"
                onClick={() => onNavigate('contact')}
              >
                <Phone className="w-5 h-5" />
                درخواست مشاوره رایگان
              </Button>
              <a href="https://wa.me/09124049247" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-2 border-white text-black hover:bg-white hover:text-emerald-900 px-8 py-6 text-lg gap-2 w-full">
                  <MessageCircle className="w-5 h-5" />
                  واتساپ
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl mb-6 text-gray-900">معرفی محصول</h2>
              <div className="w-16 h-1 bg-emerald-600 mb-8" />
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                سیستم زهکش چمن مصنوعی ما به‌طور ویژه برای استفاده در زیر لایه‌های چمن مصنوعی طراحی و تولید شده است.
                این محصول با ایجاد یک شبکه کانال‌کشی منسجم، آب باران و آب‌پاشی را به‌سرعت از زیر چمن تخلیه می‌کند.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                ساختار مشبک و بهینه‌شده این محصول ضمن حداکثر ظرفیت تخلیه، استحکام مکانیکی بالایی را نیز تضمین می‌کند
                و زیر بار سنگین‌ترین تجهیزات ورزشی تغییر شکل نمی‌دهد.
              </p>
              <ul className="space-y-3">
                {features.slice(0, 4).map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1759722144303-bad4613b9c0f?w=700&q=80"
                alt="زهکش چمن مصنوعی"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl mb-1">۱۵+</div>
                <div className="text-sm text-emerald-100">سال تجربه تولید</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specs Table */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">مشخصات فنی</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              اطلاعات دقیق فنی محصول برای استفاده در پروژه‌های مختلف
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {specs.map((spec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <spec.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{spec.label}</div>
                    <div className="text-gray-900 font-medium">{spec.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Full Specs Table */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="bg-emerald-600 px-6 py-4">
                <h3 className="text-xl text-white">جدول کامل مشخصات</h3>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['نام محصول', 'زهکش تخصصی چمن مصنوعی'],
                    ['کد محصول', 'ZCM-4060-PP'],
                    ['جنس اصلی', 'پلی‌پروپیلن (PP)'],
                    ['افزودنی', 'UV Stabilizer + Anti-Fungal'],
                    ['رنگ', 'سیاه (استاندارد)'],
                    ['ابعاد واحد', '۶۰ × ۴۰ سانتی‌متر'],
                    ['ضخامت', '۳.۵ سانتی‌متر'],
                    ['وزن واحد', '۴۲۰ گرم'],
                    ['وزن بر متر مربع', '۱.۸ کیلوگرم'],
                    ['ظرفیت تخلیه', '۱۵۰ لیتر / دقیقه / متر مربع'],
                    ['مقاومت فشاری', '۵۰ کیلو نیوتن / متر مربع'],
                    ['دمای کار', '−۴۰ تا ۸۰ درجه سانتیگراد'],
                    ['گارانتی', '۱۰ سال'],
                    ['استاندارد', 'ISO 9001:2015'],
                  ].map(([key, val], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-3 text-gray-600 border-b border-gray-100 w-1/2">{key}</td>
                      <td className="px-6 py-3 text-gray-900 border-b border-gray-100 font-medium">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">گالری تصاویر</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm">{img.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Features */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl mb-4 text-gray-900">مزایا و ویژگی‌ها</h2>
              <div className="w-24 h-1 bg-emerald-600 mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{f}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl mb-4">آماده سفارش هستید؟</h2>
            <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
              همین الان با کارشناسان ما تماس بگیرید و مشاوره رایگان دریافت کنید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-emerald-700 hover:bg-emerald-50 px-10 py-6 text-lg gap-2"
                onClick={() => onNavigate('contact')}
              >
                <Phone className="w-5 h-5" />
                تماس و مشاوره
              </Button>
              <a href="https://wa.me/09124049247" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-2 border-white text-black hover:bg-white hover:text-emerald-700 px-10 py-6 text-lg gap-2 w-full">
                  <MessageCircle className="w-5 h-5" />
                  واتساپ
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
