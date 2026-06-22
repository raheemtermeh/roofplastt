import { Award, Users, TrendingUp, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Award,
    title: 'کیفیت برتر',
    description: 'استفاده از بهترین مواد اولیه و استانداردهای جهانی در تولید'
  },
  {
    icon: Users,
    title: 'تیم متخصص',
    description: 'کادر مجرب با سال‌ها تجربه در صنعت زهکش و چمن مصنوعی'
  },
  {
    icon: TrendingUp,
    title: 'قیمت رقابتی',
    description: 'بهترین قیمت با توجه به کیفیت، بدون واسطه از تولیدکننده'
  },
  {
    icon: HeartHandshake,
    title: 'خدمات پس از فروش',
    description: 'پشتیبانی کامل، مشاوره رایگان و گارانتی محصول'
  }
];

export function WhyUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            چرا ما را انتخاب کنید؟
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            ویژگی‌هایی که ما را از رقبا متمایز می‌کند
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                <feature.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl mb-3">
                {feature.title}
              </h3>
              <p className="text-emerald-100 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-white/10 backdrop-blur-md rounded-3xl p-12 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">۱۵+</div>
              <div className="text-emerald-200">سال سابقه</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">۵۰۰+</div>
              <div className="text-emerald-200">پروژه تکمیل شده</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">۲۰۰+</div>
              <div className="text-emerald-200">مشتری راضی</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">۲۴/۷</div>
              <div className="text-emerald-200">پشتیبانی</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
