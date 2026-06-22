import Slider from 'react-slick';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    id: 1,
    title: 'زمین فوتبال شهر تهران',
    location: 'تهران، منطقه ۲',
    area: '۷۰۰۰ متر مربع',
    image: 'https://images.unsplash.com/photo-1759722144303-bad4613b9c0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmaWVsZCUyMGdyZWVuJTIwYXJ0aWZpY2lhbCUyMHR1cmZ8ZW58MXx8fHwxNzcxODczMTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    title: 'مجموعه ورزشی اسپادانا',
    location: 'اصفهان',
    area: '۵۰۰۰ متر مربع',
    image: 'https://images.unsplash.com/photo-1712418516923-527799fb2bec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwZ3Jhc3MlMjBzcG9ydHMlMjBmaWVsZHxlbnwxfHx8fDE3NzE4NzMxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 3,
    title: 'زمین تنیس کیش',
    location: 'جزیره کیش',
    area: '۲۰۰۰ متر مربع',
    image: 'https://images.unsplash.com/photo-1761926523454-728e354df9ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb3VydCUyMGdyZWVuJTIwc3VyZmFjZXxlbnwxfHx8fDE3NzE4NzMyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 4,
    title: 'باغ خانگی شیراز',
    location: 'شیراز',
    area: '۳۰۰ متر مربع',
    image: 'https://images.unsplash.com/photo-1759683527845-78059c8bca21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBnYXJkZW4lMjBhcnRpZmljaWFsJTIwbGF3bnxlbnwxfHx8fDE3NzE4NzMyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 5,
    title: 'مرکز خرید پالادیوم',
    location: 'تهران',
    area: '۱۰۰۰ متر مربع',
    image: 'https://images.unsplash.com/photo-1637028251652-cdef2b2b6100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NzE4NzMyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );
}

export function ProjectsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            نمونه پروژه‌ها
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            نگاهی به برخی از پروژه‌های موفق ما در سراسر کشور
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto" dir="ltr">
          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.id} className="px-3">
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-800 hover:shadow-emerald-500/20 transition-all duration-300">
                  <div className="relative h-64 overflow-hidden group">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>📍 {project.location}</span>
                      <span>📐 {project.area}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
