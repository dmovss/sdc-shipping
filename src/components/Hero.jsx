import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Профессиональные международные перевозки
          </h1>
          <p className="text-xl mb-8">
            Полное сопровождение перевозок из США в Ирландию и страны ЕС. 
            Таможенное оформление, страховка, юридическая поддержка.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-accent hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Заказать консультацию
            </button>
            <button className="bg-transparent hover:bg-blue-800 text-white font-bold py-3 px-6 border-2 border-white rounded-lg transition duration-300">
              Подробнее об услугах
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;