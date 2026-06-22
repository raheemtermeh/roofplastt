import { motion } from 'motion/react';

const clients = [
  { name: 'سازمان ورزش شهرداری تهران', logo: 'T' },
  { name: 'باشگاه پرسپولیس', logo: 'P' },
  { name: 'مجموعه ورزشی آزادی', logo: 'A' },
  { name: 'شرکت ملی نفت', logo: 'N' },
  { name: 'هتل اسپیناس پالاس', logo: 'S' },
  { name: 'مجموعه گلستان', logo: 'G' },
  { name: 'باشگاه استقلال', logo: 'E' },
  { name: 'شهرک ورزشی انقلاب', logo: 'I' }
];

export function Clients() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl mb-4 text-gray-900">
            مشتریان ما
          </h3>
          <p className="text-gray-600">
            افتخار همکاری با برندهای معتبر
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-8 flex flex-col items-center justify-center hover:bg-gray-100 transition-colors group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white text-2xl mb-3 group-hover:scale-110 transition-transform">
                {client.logo}
              </div>
              <p className="text-sm text-center text-gray-700">
                {client.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
