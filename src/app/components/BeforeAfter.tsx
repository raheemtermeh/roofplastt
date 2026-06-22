import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterProps {
  title: string;
  location: string;
  beforeImage: string;
  afterImage: string;
}

const beforeAfterProjects: BeforeAfterProps[] = [
  {
    title: 'تحول زمین فوتبال شهرداری',
    location: 'تهران',
    beforeImage: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBzb2NjZXIlMjBmaWVsZCUyMGRhbWFnZWR8ZW58MXx8fHwxNzcyMDk1NTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    afterImage: 'https://images.unsplash.com/photo-1651043421470-88b023bb9636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbCUyMGZpZWxkJTIwc3RhZGl1bSUyMGFlcmlhbHxlbnwxfHx8fDE3NzIwOTU0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'بازسازی باغ ویلا',
    location: 'شمال کشور',
    beforeImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJlJTIwZ2FyZGVuJTIwc29pbHxlbnwxfHx8fDE3NzIwOTU1MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    afterImage: 'https://images.unsplash.com/photo-1472553384749-8596bacb90c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwZ3Jhc3MlMjBnYXJkZW4lMjB2aWxsYSUyMGJhY2t5YXJkfGVufDF8fHx8MTc3MjA5NTQzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'نوسازی زمین مدرسه',
    location: 'اصفهان',
    beforeImage: 'https://images.unsplash.com/photo-1597423498219-04418210827d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXB0eSUyMHBsYXlncm91bmQlMjBzY2hvb2x8ZW58MXx8fHwxNzcyMDk1NTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    afterImage: 'https://images.unsplash.com/photo-1710000853460-3650bada0d37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBwbGF5Z3JvdW5kJTIwYXJ0aWZpY2lhbCUyMHR1cmZ8ZW58MXx8fHwxNzcyMDk1NDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function BeforeAfter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const current = beforeAfterProjects[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterProjects.length);
    setSliderPosition(50);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterProjects.length) % beforeAfterProjects.length);
    setSliderPosition(50);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
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
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            قبل و بعد از اجرا
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            تفاوت چشمگیر قبل و بعد از نصب سیستم زهکش و چمن مصنوعی
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-2xl"
          >
            {/* Title */}
            <div className="text-center mb-6">
              <h3 className="text-3xl mb-2 text-gray-900">{current.title}</h3>
              <p className="text-gray-600">{current.location}</p>
            </div>

            {/* Before/After Slider */}
            <div 
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl cursor-ew-resize select-none"
              onMouseMove={handleMouseMove}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
            >
              {/* After Image */}
              <img 
                src={current.afterImage}
                alt="بعد"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Before Image with Clip */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img 
                  src={current.beforeImage}
                  alt="قبل"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-xl">
                  <div className="flex items-center gap-1">
                    <ChevronRight className="w-4 h-4 text-gray-700" />
                    <ChevronLeft className="w-4 h-4 text-gray-700" />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                قبل
              </div>
              <div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                بعد
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>

              <div className="flex gap-2">
                {beforeAfterProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setSliderPosition(50);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex ? 'bg-purple-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
