import { motion } from 'motion/react';
import { ArrowRight, Award } from 'lucide-react';

export function ProjectsHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1651043421470-88b023bb9636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbCUyMGZpZWxkJTIwc3RhZGl1bSUyMGFlcmlhbHxlbnwxfHx8fDE3NzIwOTU0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="پروژه‌ها"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 to-gray-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 text-purple-300 mb-4">
            <a href="/" className="hover:text-white transition-colors">خانه</a>
            <ArrowRight className="w-4 h-4" />
            <span>پروژه‌ها</span>
          </div>
          
          <div className="inline-flex items-center gap-3 bg-purple-500/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <Award className="w-6 h-6" />
            <span className="text-lg">نمونه کارها</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl mb-6">
            پروژه‌های اجرا شده
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            مجموعه‌ای از موفق‌ترین پروژه‌های زهکش چمن مصنوعی در سراسر کشور
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
