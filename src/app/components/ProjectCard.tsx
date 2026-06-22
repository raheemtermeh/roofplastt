import { motion } from 'motion/react';
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  location: string;
  description: string;
  imageUrl: string;
  date: string;
  category: string;
  features: string[];
}

export function ProjectCard({ 
  title, 
  location, 
  description, 
  imageUrl, 
  date, 
  category,
  features 
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
          {category}
        </div>

        {/* Date Badge */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
          <Calendar className="w-4 h-4 text-emerald-600" />
          <span className="text-sm text-gray-900">{date}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-2xl mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin className="w-4 h-4 text-emerald-600" />
          <span>{location}</span>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          {description}
        </p>

        {/* Features */}
        <div className="space-y-2 pt-4 border-t border-gray-100">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
