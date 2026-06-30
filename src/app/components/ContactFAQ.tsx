import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'چگونه می‌توانم سفارش دهم؟',
    answer: 'شما می‌توانید از طریق تماس تلفنی، واتساپ یا پر کردن فرم تماس با ما، درخواست خود را ارسال کنید. کارشناسان ما در اسرع وقت با شما تماس گرفته و مراحل سفارش را راهنمایی می‌کنند.'
  },
  {
    question: 'آیا بازدید و مشاوره رایگان است؟',
    answer: 'بله، کارشناسان ما به صورت کاملاً رایگان به محل پروژه شما مراجعه کرده، اندازه‌گیری انجام داده و مشاوره تخصصی ارائه می‌دهند.'
  },
  {
    question: 'زمان تحویل چقدر است؟',
    answer: 'زمان تحویل بستگی به مساحت و نوع پروژه دارد. معمولاً برای پروژه‌های استاندارد، زمان تحویل بین ۱ تا ۲ هفته است. برای پروژه‌های بزرگ‌تر، زمان دقیق پس از بازدید اعلام می‌شود.'
  },
  {
    question: 'آیا نصب را هم انجام می‌دهید؟',
    answer: 'بله، ما علاوه بر تولید زهکش، خدمات نصب حرفه‌ای را نیز ارائه می‌دهیم. تیم متخصص ما با بهترین کیفیت نصب را انجام می‌دهد.'
  },
  {
    question: 'آیا گارانتی دارید؟',
    answer: 'بله، تمام محصولات ما دارای گارانتی کتبی هستند. علاوه بر این، نصب توسط تیم ما نیز دارای گارانتی می‌باشد.'
  },
  {
    question: 'هزینه نصب چقدر است؟',
    answer: 'هزینه نصب بستگی به مساحت، نوع زمین و موقعیت مکانی دارد. برای دریافت قیمت دقیق، لطفاً با ما تماس بگیرید تا کارشناسان ما قیمت نهایی را اعلام کنند.'
  }
];

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full mb-6">
            <HelpCircle className="w-5 h-5" />
            <span className="text-lg">سوالات متداول</span>
          </div>

          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            پرسش‌های پرتکرار
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            پاسخ سوالات رایج شما در اینجا
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-emerald-300 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-right hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-900 flex-1">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-emerald-600 flex-shrink-0 mr-4 transition-transform ${openIndex === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                >
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8"
          >
            <p className="text-lg text-gray-700 mb-4">
              سوال دیگری دارید؟
            </p>
            <p className="text-gray-600 mb-6">
              تیم پشتیبانی ما آماده پاسخگویی به تمام سوالات شماست
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+982112345678"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl transition-colors"
              >
                تماس تلفنی
              </a>
              <a
                href="https://wa.me/09124049247"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl transition-colors"
              >
                چت در واتساپ
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
