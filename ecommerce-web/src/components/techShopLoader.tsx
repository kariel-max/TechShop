import { motion } from 'framer-motion';

const TechShopLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-700 text-white">
      <motion.div
        className="text-6xl mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
      >
        🛒
      </motion.div>
      <motion.p
        className="text-lg tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Carregando TechShop...
      </motion.p>
    </div>
  );''
};

export default TechShopLoader;
