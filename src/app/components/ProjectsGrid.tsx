import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'مجموعه ورزشی آزادی تهران',
    location: 'تهران، منطقه ۶',
    description: 'اجرای سیستم زهکش حرفه‌ای برای ۲ زمین فوتبال استاندارد با مساحت ۱۰,۰۰۰ متر مربع. این پروژه یکی از بزرگترین پروژه‌های ورزشی تهران است.',
    imageUrl: 'https://images.unsplash.com/photo-1651043421470-88b023bb9636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbCUyMGZpZWxkJTIwc3RhZGl1bSUyMGFlcmlhbHxlbnwxfHx8fDE3NzIwOTU0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'بهمن ۱۴۰۲',
    category: 'ورزشی',
    features: [
      'مساحت: ۱۰,۰۰۰ متر مربع',
      'ظرفیت تخلیه: ۸۰ لیتر در دقیقه',
      'استاندارد FIFA'
    ]
  },
  {
    title: 'باغ ویلای شمال',
    location: 'مازندران، چالوس',
    description: 'نصب زهکش و چمن مصنوعی در یک باغ ویلای لوکس با طراحی منظره زیبا. ترکیبی از فضای سبز و امکانات ورزشی خانگی.',
    imageUrl: 'https://images.unsplash.com/photo-1472553384749-8596bacb90c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwZ3Jhc3MlMjBnYXJkZW4lMjB2aWxsYSUyMGJhY2t5YXJkfGVufDF8fHx8MTc3MjA5NTQzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'آذر ۱۴۰۲',
    category: 'مسکونی',
    features: [
      'مساحت: ۵۰۰ متر مربع',
      'نگهداری آسان',
      'مقاوم در برابر رطوبت'
    ]
  },
  {
    title: 'کمپلکس ورزشی انقلاب',
    location: 'اصفهان',
    description: 'اجرای سیستم زهکش برای مجموعه ورزشی شامل ۳ زمین فوتسال و یک زمین تنیس. پروژه‌ای جامع با استانداردهای بین‌المللی.',
    imageUrl: 'https://images.unsplash.com/photo-1758635957744-6ad5f3e2f7fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjb21wbGV4JTIwZmFjaWxpdHklMjBvdXRkb29yfGVufDF8fHx8MTc3MjA5NTQzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'مهر ۱۴۰۲',
    category: 'ورزشی',
    features: [
      'مساحت: ۶,۰۰۰ متر مربع',
      '۴ زمین ورزشی',
      'تخلیه سریع آب'
    ]
  },
  {
    title: 'دبستان دانش',
    location: 'شیراز',
    description: 'زمین بازی کودکان با استانداردهای ایمنی بالا. سطح نرم و ایمن برای فعالیت‌های ورزشی و بازی دانش‌آموزان.',
    imageUrl: 'https://images.unsplash.com/photo-1710000853460-3650bada0d37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBwbGF5Z3JvdW5kJTIwYXJ0aWZpY2lhbCUyMHR1cmZ8ZW58MXx8fHwxNzcyMDk1NDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'شهریور ۱۴۰۲',
    category: 'آموزشی',
    features: [
      'مساحت: ۱,۲۰۰ متر مربع',
      'ایمنی بالا برای کودکان',
      'سطح غیرلغزنده'
    ]
  },
  {
    title: 'روف گاردن برج سپهر',
    location: 'تهران، الهیه',
    description: 'طراحی و اجرای فضای سبز در بام یک برج مسکونی لوکس. ترکیبی از زیبایی و عملکرد در فضای محدود.',
    imageUrl: 'https://images.unsplash.com/photo-1764212515460-04fcb75657c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mdG9wJTIwZ2FyZGVuJTIwdXJiYW4lMjBncmVlbiUyMHNwYWNlfGVufDF8fHx8MTc3MjA5NTQzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'تیر ۱۴۰۲',
    category: 'مسکونی',
    features: [
      'مساحت: ۳۰۰ متر مربع',
      'وزن سبک',
      'محافظت از عایق‌بندی'
    ]
  },
  {
    title: 'باشگاه تنیس پارسیان',
    location: 'مشهد',
    description: 'نصب سیستم زهکش برای ۴ زمین تنیس استاندارد. پروژه با کیفیت بالا و مطابق با استانداردهای بین‌المللی تنیس.',
    imageUrl: 'https://images.unsplash.com/photo-1764906295268-3dd010afa9a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb3VydCUyMHNwb3J0cyUyMGZhY2lsaXR5fGVufDF8fHx8MTc3MjA5NTQzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'خرداد ۱۴۰۲',
    category: 'ورزشی',
    features: [
      'مساحت: ۳,۰۰۰ متر مربع',
      '۴ زمین تنیس',
      'سطح استاندارد بین‌المللی'
    ]
  },
  {
    title: 'استادیوم شهید کشوری',
    location: 'تبریز',
    description: 'بازسازی و نصب سیستم زهکش نسل جدید در یکی از استادیوم‌های معروف کشور. پروژه‌ای در مقیاس بزرگ با تجهیزات پیشرفته.',
    imageUrl: 'https://images.unsplash.com/photo-1617144519956-bba853571334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHBpdGNoJTIwZ3JlZW4lMjB0dXJmfGVufDF8fHx8MTc3MjA5NTQzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'اردیبهشت ۱۴۰۲',
    category: 'ورزشی',
    features: [
      'مساحت: ۱۲,۰۰۰ متر مربع',
      'تجهیزات پیشرفته',
      'استاندارد بین‌المللی'
    ]
  },
  {
    title: 'سالن ورزشی آریا',
    location: 'کرج',
    description: 'نصب زهکش برای سالن ورزشی سرپوشیده چند منظوره. فضایی مناسب برای انواع ورزش‌های داخل سالن.',
    imageUrl: 'https://images.unsplash.com/photo-1559369064-c4d65141e408?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBzcG9ydHMlMjBoYWxsJTIwZ3ltbmFzaXVtfGVufDF8fHx8MTc3MjA5NTQzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'فروردین ۱۴۰۲',
    category: 'ورزشی',
    features: [
      'مساحت: ۲,۰۰۰ متر مربع',
      'مناسب فضای سرپوشیده',
      'چند کاربردی'
    ]
  }
];

export function ProjectsGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
