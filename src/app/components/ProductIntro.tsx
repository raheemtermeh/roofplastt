import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { useRef, useState } from 'react';
import img1 from "../../assets/IMG-20250425-WA0002-removebg-preview (1) 1.png"
import img2 from "../../assets/Screenshot_2026-04-27_214437-removebg-preview 1.png"

// 🎯 کامپوننت کارت سه‌بعدی با Tilt Effect
function TiltCard({ 
  children, 
  className = '', 
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 15,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ProductIntro() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/50">
      
      {/*  پس‌زمینه متحرک با Mesh Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-emerald-400/20 via-teal-300/20 to-cyan-400/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-teal-400/20 via-emerald-300/20 to-lime-400/20 blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        
        {/* 🎯 هدر بخش */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto text-center mb-20 md:mb-28"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-emerald-700">تکنولوژی پیشرفته زهکش</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-800 bg-clip-text text-transparent leading-tight">
            زهکش تخصصی
            <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              چمن مصنوعی
            </span>
          </h2>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1.5 w-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"
          />

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 font-medium max-w-3xl mx-auto">
            سیستم زهکش ما به‌طور ویژه برای استفاده در زیر چمن‌های مصنوعی طراحی شده است 
            و با تخلیه سریع و کامل آب باران، از تجمع آب و آسیب به چمن جلوگیری می‌کند.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            این محصول با استفاده از مواد اولیه مرغوب و تکنولوژی روز تولید می‌شود و 
            در انواع پروژه‌های ورزشی، باغ‌ها، پارک‌ها و فضاهای تجاری کاربرد دارد.
          </p>
        </motion.div>

        {/* 🎴 کارت‌های محصولات */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* کارت اول - زمین‌های ورزشی */}
          <TiltCard delay={0.1}>
            <div className="group relative h-full">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-[2rem] opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-700" />
              
              <div className="relative h-full rounded-[2rem] bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-emerald-900/5 ">
                
                {/* Header Badge */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/30">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="text-xs font-bold text-white">پرفروش</span>
                  </div>
                </div>


                {/* بخش تصویر */}
                <div className="relative h-72 md:h-80 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
                  {/* Pattern Background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, #10b981 0, #10b981 1px, transparent 1px, transparent 20px)`,
                    }} />
                  </div>

                
                  {/* تصویر محصول با انیمیشن چرخش واضح */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center z-10"
                    animate={{
                      y: [0, -15, 0],
                      rotate: [35, 55, 35],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="relative">
                      {/* Shadow زیر تصویر */}
                      <motion.div
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 bg-emerald-900/20 rounded-full blur-xl"
                        animate={{
                          scale: [1, 0.8, 1],
                          opacity: [0.3, 0.15, 0.3],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      
                      <img
                        src={img1}
                        alt="تایل زیرسازی چمن و چوب"
                        className="relative h-full w-56 md:w-64 object-contain drop-shadow-2xl"
                        style={{
                          filter: 'drop-shadow(0 25px 30px rgba(16, 185, 129, 0.3))',
                        }}
                      />
                    </div>
                  </motion.div>

                </div>

                {/* بخش محتوا */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                      تایل زیرسازی چمن و چوب
                    </h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><span className="font-bold text-gray-900">ابعاد هر تایل:</span> 30 در 30 سانتیمتر</p>
                      <p><span className="font-bold text-gray-900">ضخامت:</span> 15 میلی متر</p>
                      <p><span className="font-bold text-gray-900">وزن:</span> 160 گرم</p>
                      <p><span className="font-bold text-gray-900">جنس:</span> مواد نو پلی اتیلنی با بالاترین کیفیت</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                      تایل زیرسازی بهترین گزینه برای پوشش کف تراس، بالکن، روف گاردن، حیاط خلوت، دور استخر، لابی و روف گاردن
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-emerald-100">
                    <p className="text-sm font-bold text-gray-900 mb-2">شماره تماس: 09124049247</p>
                    <p className="text-sm font-bold text-gray-900">اسدپور</p>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>

          {/* کارت دوم - فضای سبز */}
          <TiltCard delay={0.3}>
            <div className="group relative h-full">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 rounded-[2rem] opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-700" />
              
              <div className="relative h-full rounded-[2rem] bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-teal-900/5">
                
                {/* Header Badge */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 shadow-lg shadow-teal-500/30">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-xs font-bold text-white">پیشنهاد ویژه</span>
                  </div>
                </div>

             

                {/* بخش تصویر */}
                <div className="relative h-72 md:h-80 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
                  {/* Pattern Background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle, #14b8a6 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }} />
                  </div>


                  {/* تصویر محصول با انیمیشن چرخش واضح */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center z-10"
                    animate={{
                      y: [0, -15, 0],
                      rotate: [35, 55, 35],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    <div className="relative">
                      {/* Shadow زیر تصویر */}
                      <motion.div
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 bg-teal-900/20 rounded-full blur-xl"
                        animate={{
                          scale: [1, 0.8, 1],
                          opacity: [0.3, 0.15, 0.3],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                      />
                      
                      <img
                        src={img2}
                        alt="زهکش بام سبز"
                        className="relative w-56 md:w-64 object-contain drop-shadow-2xl"
                        style={{
                          filter: 'drop-shadow(0 25px 30px rgba(20, 184, 166, 0.3))',
                        }}
                      />
                    </div>
                  </motion.div>

                </div>

                {/* بخش محتوا */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                      زهکش بام سبز
                    </h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><span className="font-bold text-gray-900">ابعاد هر شیت:</span> 50*50 سانتیمتر (4 صفحه در هر یک مترمربع)</p>
                      <p><span className="font-bold text-gray-900">ضخامت:</span> 30 میلی متر</p>
                      <p><span className="font-bold text-gray-900">وزن هر متر مربع:</span> 650 گرم</p>
                      <p><span className="font-bold text-gray-900">رنگ:</span> مشکی</p>
                      <p><span className="font-bold text-gray-900">مقاومت فشاری:</span> 4 تن بر متر مربع</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-teal-100">
                    <p className="text-sm font-bold text-gray-900 mb-2">شماره تماس: 09124049247</p>
                    <p className="text-sm font-bold text-gray-900">اسدپور</p>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

        
      </div>
    </section>
  );
}