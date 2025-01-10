import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="bg-primary text-white py-16 animate-fade-in relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          ACPE OmniCall Center
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-gray-200"
        >
          Plateforme unifiée pour une gestion optimale des interactions
        </motion.p>
      </div>
    </section>
  );
};