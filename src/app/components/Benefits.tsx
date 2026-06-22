import { Droplets, Shield, Zap, DollarSign, Wrench, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

const benefits = [
  {
    icon: Droplets,
    title: 'تخلیه سریع آب',
    description: 'سیستم تخلیه فوری آب باران و جلوگیری از تجمع آب در سطح چمن',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Shield,
    title: 'مقاومت بالا',
    description: 'ساخته شده از مواد با دوام که در برابر فشار و شرایط جوی مقاوم است',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50'
  },
  {
    icon: Zap,
    title: 'نصب آسان',
    description: 'طراحی ساده برای نصب سریع و بدون نیاز به تخصص خاص',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50'
  },
  {
    icon: DollarSign,
    title: 'مقرون به صرفه',
    description: 'قیمت مناسب با کیفیت بالا، مستقیم از تولیدکننده',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Wrench,
    title: 'تعمیر و نگهداری کم',
    description: 'بدون نیاز به مراقبت خاص و هزینه‌های نگهداری',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: CheckCircle,
    title: 'گارانتی کیفیت',
    description: 'محصول با گارانتی و پشتیبانی کامل از تولیدکننده',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  }
];

export function Benefits() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            مزایای زهکش ما
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            چرا زهکش چمن مصنوعی ما بهترین انتخاب برای پروژه شماست؟
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`${benefit.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>
              <h3 className="text-2xl mb-3 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
