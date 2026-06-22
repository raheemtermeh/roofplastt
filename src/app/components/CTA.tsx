import { Phone, MessageCircle, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            همین الان تماس بگیرید
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-emerald-50">
            مشاوره رایگان و قیمت‌گذاری ویژه برای پروژه شما
            <br />
            کارشناسان ما آماده پاسخگویی به سوالات شما هستند
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-emerald-700 hover:bg-gray-100 px-10 py-7 text-xl gap-3 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all"
            >
              <Phone className="w-6 h-6" />
              ۰۲۱-۱۲۳۴۵۶۷۸
            </Button>
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-7 text-xl gap-3 shadow-2xl hover:scale-105 transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              پیام در واتساپ
            </Button>
          </div>

          {/* Additional Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-emerald-50">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>info@zahkesh.ir</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⏰</span>
              <span>شنبه تا پنج‌شنبه، ۸ صبح تا ۸ شب</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
