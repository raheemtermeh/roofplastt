import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('پیام شما با موفقیت ارسال شد! به زودی با شما تماس خواهیم گرفت.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            ارسال پیام
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            فرم زیر را پر کنید تا کارشناسان ما در اسرع وقت با شما تماس بگیرند
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    نام و نام خانوادگی *
                  </label>
                  <div className="relative">
                    <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pr-12 pl-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors text-gray-900"
                      placeholder="نام کامل خود را وارد کنید"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    شماره تماس *
                  </label>
                  <div className="relative">
                    <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pr-12 pl-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors text-gray-900"
                      placeholder="۰۹۱۲-۱۲۳۴۵۶۷"
                      dir="ltr"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    ایمیل
                  </label>
                  <div className="relative">
                    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pr-12 pl-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors text-gray-900"
                      placeholder="example@email.com"
                      dir="ltr"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    موضوع *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors text-gray-900"
                  >
                    <option value="">موضوع را انتخاب کنید</option>
                    <option value="consultation">مشاوره رایگان</option>
                    <option value="pricing">استعلام قیمت</option>
                    <option value="project">اجرای پروژه</option>
                    <option value="support">پشتیبانی</option>
                    <option value="other">سایر</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  پیام شما *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute right-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full pr-12 pl-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors resize-none text-gray-900"
                    placeholder="توضیحات خود را بنویسید..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-green-600 text-white border-0 hover:shadow-lg transition-shadow gap-3 px-12 py-6 text-lg"
                >
                  <Send className="w-5 h-5" />
                  ارسال پیام
                </Button>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>پاسخ در کمتر از ۲۴ ساعت</span>
                </div>
              </div>
            </form>

            {/* Info Box */}
            <div className="mt-8 pt-8 border-t border-emerald-200">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-white rounded-xl">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">۲۴ ساعت</div>
                  <div className="text-sm text-gray-600">زمان پاسخگویی</div>
                </div>
                <div className="p-4 bg-white rounded-xl">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">۱۰۰٪</div>
                  <div className="text-sm text-gray-600">رضایت مشتریان</div>
                </div>
                <div className="p-4 bg-white rounded-xl">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">رایگان</div>
                  <div className="text-sm text-gray-600">مشاوره تخصصی</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
