import { Trophy, Home, Building2, TreePine } from 'lucide-react';
import { motion } from 'motion/react';

const applications = [
  {
    icon: Trophy,
    title: 'زمین‌های ورزشی',
    description: 'فوتبال، تنیس، بسکتبال و سایر ورزش‌ها',
    image: 'https://images.unsplash.com/photo-1759722144303-bad4613b9c0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmaWVsZCUyMGdyZWVuJTIwYXJ0aWZpY2lhbCUyMHR1cmZ8ZW58MXx8fHwxNzcxODczMTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-blue-600 to-blue-800'
  },
  {
    icon: Home,
    title: 'باغ‌های خانگی',
    description: 'حیاط، ویلا، پشت‌بام و فضاهای مسکونی',
    image: 'https://images.unsplash.com/photo-1759683527845-78059c8bca21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBnYXJkZW4lMjBhcnRpZmljaWFsJTIwbGF3bnxlbnwxfHx8fDE3NzE4NzMyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-emerald-600 to-emerald-800'
  },
  {
    icon: Building2,
    title: 'فضاهای تجاری',
    description: 'هتل‌ها، رستوران‌ها، مراکز خرید و نمایشگاه‌ها',
    image: 'https://images.unsplash.com/photo-1637028251652-cdef2b2b6100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NzE4NzMyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-purple-600 to-purple-800'
  },
  {
    icon: TreePine,
    title: 'پارک‌ها و فضای سبز',
    description: 'پارک‌های شهری، مناطق تفریحی و فضای عمومی',
    image: 'https://images.unsplash.com/photo-1761926523454-728e354df9ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb3VydCUyMGdyZWVuJTIwc3VyZmFjZXxlbnwxfHx8fDE3NzE4NzMyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-green-600 to-green-800'
  }
];

export function Applications() {
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
            کاربردها
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            زهکش چمن مصنوعی ما در طیف گسترده‌ای از پروژه‌ها قابل استفاده است
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${app.color} opacity-80 group-hover:opacity-90 transition-opacity`}></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-80 flex flex-col justify-end text-white">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <app.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl mb-2">
                  {app.title}
                </h3>
                <p className="text-sm text-white/90">
                  {app.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}