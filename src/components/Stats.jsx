import FadeInSection from "./FadeInSection";
import { motion } from "framer-motion";

export default function Stats() {
    return (
      <FadeInSection>
        <section className="py-20 bg-gradient-to-r from-indigo-700 to-purple-700 text-white text-center px-6 pt-20">
          <h2 className="text-3xl font-bold mb-4">Our Impact So Far</h2>
          <p className="mb-10">Real progress with real families and professionals.</p>
          <div className="flex justify-center gap-10 flex-wrap">
            <Stat number="2,500+" label="caregivers helped" />
            <Stat number="+38%" label="medication adherence improvement" />
            <Stat number="3+" label="clinical pilots in progress" />
          </div>
        </section>

      </FadeInSection>
    );
  }
  
  const Stat = ({ number, label }) => (
    <div>
      <motion.div
    whileHover={{ scale: 1.1 }}
    className="transition-transform duration-200"
  >
        <p className="text-4xl font-bold">{number}</p>
        <p>{label}</p>
      </motion.div>
    </div>
  );
  