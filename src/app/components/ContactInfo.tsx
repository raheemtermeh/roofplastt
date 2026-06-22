import { motion } from 'motion/react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Calendar } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: 'تلفن تماس',
    details: ['۰۲۱-۱۲۳۴۵۶۷۸', '۰۲۱-۸۷۶۵۴۳۲۱'],
    description: 'پاسخگویی در ساعات اداری',
    color: 'from-blue-500 to-cyan-500',
    link: 'tel:+982112345678'
  },
  {
    icon: MessageCircle,
    title: 'واتساپ',
    details: ['۰۹۱۲-۱۲۳۴۵۶۷', '۰۹۱۲-۷۶۵۴۳۲۱'],
    description: 'پاسخگویی ۲۴ ساعته',
    color: 'from-green-500 to-emerald-500',
    link: 'https://wa.me/989121234567'
  },
  {
    icon: Mail,
    title: 'ایمیل',
    details: ['info@drainage.ir', 'support@drainage.ir'],
    description: 'پاسخ در کمتر از ۲۴ ساعت',
    color: 'from-purple-500 to-pink-500',
    link: 'mailto:info@drainage.ir'
  },
  {
    icon: MapPin,
    title: 'آدرس',
    details: ['تهران، میدان ونک', 'خیابان ملاصدرا، پلاک ۱۲۳'],
    description: 'دفتر مرکزی و کارخانه',
    color: 'from-orange-500 to-red-500',
    link: '#map'
  }
];

export function ContactInfo() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            راه‌های ارتباطی
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            از هر کانالی که راحت‌تر هستید با ما در ارتباط باشید
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 block"
            >
              <div className="relative inline-block mb-4">
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                <div className={`relative bg-gradient-to-br ${method.color} p-4 rounded-xl`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-xl mb-3 text-gray-900">
                {method.title}
              </h3>

              {method.details.map((detail, i) => (
                <p key={i} className="text-gray-700 font-medium mb-1 text-lg" dir="ltr">
                  {detail}
                </p>
              ))}

              <p className="text-sm text-gray-500 mt-3">
                {method.description}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Working Hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-emerald-500 to-green-500 p-3 rounded-xl">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl text-gray-900">ساعات کاری</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-900">شنبه تا چهارشنبه</span>
                  </div>
                  <span className="text-emerald-700 font-medium">۸:۰۰ - ۱۸:۰۰</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-900">پنج‌شنبه</span>
                  </div>
                  <span className="text-emerald-700 font-medium">۸:۰۰ - ۱۴:۰۰</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-100 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-900">جمعه و تعطیلات</span>
                  </div>
                  <span className="text-gray-700 font-medium">تعطیل</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl p-6 text-white flex flex-col justify-center">
                <MessageCircle className="w-12 h-12 mb-4 opacity-80" />
                <h4 className="text-xl mb-2">پشتیبانی آنلاین</h4>
                <p className="text-emerald-100 mb-4">
                  پاسخگویی سریع از طریق واتساپ در تمام ساعات شبانه‌روز
                </p>
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg w-fit">
                  <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                  <span className="text-sm">آنلاین</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
