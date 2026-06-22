import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Phone, MessageCircle, Image } from 'lucide-react';

export function ProjectsCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-6 py-3 rounded-full mb-6">
              <Image className="w-5 h-5" />
              <span className="text-lg">پروژه شما</span>
            </div>

            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              پروژه بعدی ما، پروژه شماست!
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              آیا می‌خواهید پروژه شما نیز در این لیست قرار بگیرد؟ 
              همین حالا با ما تماس بگیرید و از مشاوره رایگان بهره‌مند شوید.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 hover:shadow-lg transition-shadow gap-3 text-lg"
              >
                <Phone className="w-5 h-5" />
                تماس با ما
              </Button>

              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 gap-3 text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                چت در واتساپ
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>مشاوره تخصصی رایگان</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>بازدید و اندازه‌گیری رایگان</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>قیمت‌گذاری شفاف</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
