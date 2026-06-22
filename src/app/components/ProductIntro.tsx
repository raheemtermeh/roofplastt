import { motion } from 'motion/react';

export function ProductIntro() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            زهکش تخصصی چمن مصنوعی
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            سیستم زهکش ما به‌طور ویژه برای استفاده در زیر چمن‌های مصنوعی طراحی شده است 
            و با تخلیه سریع و کامل آب باران، از تجمع آب و آسیب به چمن جلوگیری می‌کند.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            این محصول با استفاده از مواد اولیه مرغوب و تکنولوژی روز تولید می‌شود و 
            در انواع پروژه‌های ورزشی، باغ‌ها، پارک‌ها و فضاهای تجاری کاربرد دارد.
          </p>
        </motion.div>

        {/* Product Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img 
              src="https://images.unsplash.com/photo-1759722144303-bad4613b9c0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmaWVsZCUyMGdyZWVuJTIwYXJ0aWZpY2lhbCUyMHR1cmZ8ZW58MXx8fHwxNzcxODczMTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="کاربرد در زمین‌های ورزشی"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-2xl mb-2">زمین‌های ورزشی</h3>
                <p className="text-sm text-gray-200">مناسب برای فوتبال، تنیس و سایر ورزش‌ها</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img 
              src="https://images.unsplash.com/photo-1759683527845-78059c8bca21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBnYXJkZW4lMjBhcnRpZmljaWFsJTIwbGF3bnxlbnwxfHx8fDE3NzE4NzMyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="کاربرد در باغ‌ها و پارک‌ها"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-2xl mb-2">فضای سبز و باغ‌ها</h3>
                <p className="text-sm text-gray-200">زیبایی و عملکرد بالا در باغ‌های خانگی</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
