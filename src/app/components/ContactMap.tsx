import { motion } from 'motion/react';
import { MapPin, Navigation, Phone } from 'lucide-react';
import { Button } from './ui/button';

export function ContactMap() {
  return (
    <section className="py-20 bg-gray-50" id="map">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            موقعیت مکانی
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            دفتر مرکزی و کارخانه ما در تهران
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Google Maps Embed - You should replace this with your actual location */}
                <div className="relative h-[500px] bg-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.2080765086384!2d51.40838931525889!3d35.70154098019124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0a77c5d231de30c!2sVanak%20Square!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="موقعیت دفتر مرکزی"
                  ></iframe>
                </div>
              </div>
            </motion.div>

            {/* Location Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Main Office */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-emerald-500 to-green-500 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">دفتر مرکزی</h3>
                </div>
                
                <div className="space-y-3 text-gray-700">
                  <p className="leading-relaxed">
                    تهران، میدان ونک، خیابان ملاصدرا، پلاک ۱۲۳، طبقه ۴، واحد ۱۲
                  </p>
                  
                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm">۰۲۱-۱۲۳۴۵۶۷۸</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm">۰۲۱-۸۷۶۵۴۳۲۱</span>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full mt-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white border-0 gap-2"
                  onClick={() => window.open('https://www.google.com/maps/dir//Vanak+Square', '_blank')}
                >
                  <Navigation className="w-4 h-4" />
                  مسیریابی با گوگل مپ
                </Button>
              </div>

              {/* Factory */}
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl shadow-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">کارخانه تولید</h3>
                </div>
                
                <p className="text-emerald-100 leading-relaxed mb-4">
                  تهران، جاده مخصوص کرج، شهرک صنعتی صفادشت، بلوار صنعت، پلاک ۴۵
                </p>

                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="w-2 h-2 bg-green-300 rounded-full"></span>
                  <span className="text-sm">قابل بازدید با هماهنگی قبلی</span>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-blue-500 rounded-2xl shadow-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">تماس سریع</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  برای دریافت مشاوره رایگان همین الان تماس بگیرید
                </p>
                <a 
                  href="tel:+982112345678"
                  className="block text-center bg-white text-blue-600 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
                >
                  ۰۲۱-۱۲۳۴۵۶۷۸
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
