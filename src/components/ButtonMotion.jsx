import { motion } from "framer-motion";

export default function ButtonMotion({ children, delay = 0 }) {
    return (
        <motion.button whileHover={{ scale: 1.05 }} className="bg-purple-500 px-6 py-3 rounded-full font-semibold hover:bg-purple-600">
            {children}
        </motion.button>
    );
  }