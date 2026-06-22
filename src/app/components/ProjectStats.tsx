import { motion } from 'motion/react';
import { Building2, MapPin, Users, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    value: '۵۰۰+',
    label: 'پروژه تکمیل شده',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: MapPin,
    value: '۳۰+',
    label: 'شهر کشور',
    color: 'from-emerald-500 to-green-500'
  },
  {
    icon: Users,
    value: '۳۰۰+',
    label: 'مشتری راضی',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: TrendingUp,
    value: '۱۰۰٪',
    label: 'رضایت مشتریان',
    color: 'from-orange-500 to-red-500'
  }
];

export function ProjectStats() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 text-white relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl mb-6">
            دستاوردهای ما در اعداد
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            سابقه درخشان ما در اجرای پروژه‌های موفق در سراسر ایران
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                <div className={`relative bg-gradient-to-br ${stat.color} p-6 rounded-2xl`}>
                  <stat.icon className="w-10 h-10 text-white mx-auto" />
                </div>
              </div>
              
              <div className="text-4xl md:text-5xl mb-3">
                {stat.value}
              </div>
              
              <div className="text-gray-400 text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl text-purple-300 mb-4">
            با افتخار در خدمت ورزش و فضای سبز کشور
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            از استادیوم‌های بزرگ گرفته تا باغچه‌های خانگی، هر پروژه برای ما یک فرصت برای ارائه بهترین کیفیت و خدمات است.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
