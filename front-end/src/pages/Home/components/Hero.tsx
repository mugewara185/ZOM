import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full rounded-2xl overflow-hidden mb-10">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/90 via-red-500/80 to-orange-400/80 z-10" />

      {/* Background image (optional, you can swap URL) */}
      <img
        src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1600"
        alt="Delicious food background"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      {/* Hero Content */}
      <div className="relative z-20 text-center text-white py-20 px-6 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-4"
        >
          Discover the Best Food Around You 🍱
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg opacity-90 mb-8"
        >
          Order from your favorite restaurants or try something new today.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-white text-red-600 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
          onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })}
        >
          Explore Restaurants
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
