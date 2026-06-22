import { motion } from 'motion/react';
import { Trophy, Home, Building2, TreePine, School, Dumbbell, Phone, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import type { Page } from '../components/Navbar';

interface ApplicationsPageProps {
  onNavigate: (page: Page) => void;
}

const applications = [
  {
    icon: Trophy,
    title: 'زمین‌های فوتبال',
    subtitle: 'استانداردهای FIFA و AFC',
    description: 'زهکش مناسب برای زمین‌های فوتبال حرفه‌ای و نیمه‌حرفه‌ای با قابلیت تحمل بارندگی شدید و تخلیه فوری آب برای ادامه بازی در هر شرایط آب‌وهوایی.',
    image: 'https://images.unsplash.com/photo-1759722144303-bad4613b9c0f?w=800&q=80',
    color: 'from-blue-600 to-blue-800',
    features: ['تخلیه ۱۵۰ لیتر در دقیقه', 'مقاوم در برابر ضربه بازیکنان', 'سازگار با تمام انواع چمن ورزشی'],
  },
  {
    icon: Home,
    title: 'باغ‌ها و ویلاها',
    subtitle: 'فضاهای مسکونی و اختصاصی',
    description: 'راهکار ایده‌آل برای حیاط، پشت‌بام و باغ‌های خانگی. زیبایی و عملکرد بالا در کنار هم، با نصب سریع و بدون دردسر.',
    image: 'https://images.unsplash.com/photo-1759683527845-78059c8bca21?w=800&q=80',
    color: 'from-emerald-600 to-emerald-800',
    features: ['نصب آسان و بدون نیاز به متخصص', 'زیبایی ظاهری نامحدود', 'عمر بالای ۱۵ سال'],
  },
  {
    icon: Building2,
    title: 'روف‌گاردن',
    subtitle: 'پشت‌بام سبز تجاری و مسکونی',
    description: 'سیستم زهکش ویژه روف‌گاردن با محاسبه دقیق بار، مقاومت در برابر رطوبت دائمی و عایق‌بندی کامل.',
    image: 'https://images.unsplash.com/photo-1637028251652-cdef2b2b6100?w=800&q=80',
    color: 'from-teal-600 to-teal-800',
    features: ['مقاوم در برابر رطوبت دائم', 'بار کم روی سازه', 'عایق حرارتی مناسب'],
  },
  {
    icon: School,
    title: 'مدارس و زمین‌های بازی',
    subtitle: 'ایمنی کودکان در اولویت',
    description: 'زهکش ایمن و مقاوم برای محیط‌های آموزشی و بازی کودکان، با مواد اولیه فاقد مواد مضر و رنگ‌بندی شاد.',
    image: 'https://images.unsplash.com/photo-1761926523454-728e354df9ce?w=800&q=80',
    color: 'from-orange-500 to-orange-700',
    features: ['مواد ایمن و غیرسمی', 'رنگ‌بندی متنوع', 'مقاومت در برابر ضربه'],
  },
  {
    icon: TreePine,
    title: 'پارک‌ها و فضای عمومی',
    subtitle: 'زیرساخت پایدار شهری',
    description: 'راهکار مناسب برای پارک‌های شهری، پیاده‌روها و فضاهای عمومی که نیاز به دوام بالا و تخلیه سریع در بارندگی‌های سنگین دارند.',
    image: 'https://images.unsplash.com/photo-1712418516923-527799fb2bec?w=800&q=80',
    color: 'from-green-600 to-green-800',
    features: ['دوام بالا در استفاده عمومی', 'تخلیه سریع آب باران', 'هزینه نگهداری صفر'],
  },
  {
    icon: Dumbbell,
    title: 'سالن‌های ورزشی',
    subtitle: 'محیط‌های ورزشی سرپوشیده',
    description: 'زهکش ویژه سالن‌های ورزشی چندمنظوره و سرپوشیده برای مدیریت رطوبت، تهویه مناسب و جلوگیری از لغزندگی کف.',
    image: 'https://images.unsplash.com/photo-1637028251652-cdef2b2b6100?w=800&q=80',
    color: 'from-purple-600 to-purple-800',
    features: ['کنترل رطوبت دقیق', 'ضدلغزش', 'مناسب برای بارهای سنگین'],
  },
];

export function ApplicationsPage({ onNavigate }: ApplicationsPageProps) {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1712418516923-527799fb2bec?w=1200&q=50")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block bg-emerald-500/30 text-emerald-200 text-sm px-4 py-1.5 rounded-full mb-6 border border-emerald-400/30">
              کاربردها
            </span>
            <h1 className="text-5xl md:text-6xl mb-6">
              کجا می‌توان استفاده کرد؟
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              زهکش چمن مصنوعی ما در طیف گسترده‌ای از پروژه‌های ورزشی، مسکونی، تجاری و عمومی کاربرد دارد
            </p>
          </motion.div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-6xl mx-auto">
            {applications.map((app, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Image — alternate sides */}
                <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-50`} />
                    <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-xl p-3">
                      <app.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <span className="text-sm text-emerald-600 font-medium">{app.subtitle}</span>
                  <h2 className="text-3xl md:text-4xl mt-2 mb-4 text-gray-900">{app.title}</h2>
                  <div className="w-16 h-1 bg-emerald-600 mb-6" />
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">{app.description}</p>
                  <ul className="space-y-2 mb-8">
                    {app.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => onNavigate('contact')}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    مشاوره برای این کاربرد
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl mb-4">پروژه شما در کدام دسته است؟</h2>
            <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
              با کارشناسان ما تماس بگیرید تا بهترین راهکار را برای پروژه خود دریافت کنید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 px-10 py-6 text-lg gap-2" onClick={() => onNavigate('contact')}>
                <Phone className="w-5 h-5" />
                مشاوره رایگان
              </Button>
              <a href="https://wa.me/989121234567" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-emerald-700 px-10 py-6 text-lg gap-2 w-full">
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
