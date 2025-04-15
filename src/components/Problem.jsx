import FadeInSection from "./FadeInSection";
import { motion } from "framer-motion";

export default function Problem() {
  return (
    <FadeInSection>
      <section className="bg-white py-20 px-6 text-center pt-20">
        <h2 className="text-3xl font-bold mb-4">The Challenges We’re Solving</h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto">
          Over 70% of dementia patients forget medications or appointments weekly. Families and doctors are left trying to fill the gap without tools. That’s where MemoTag steps in.
        </p>
        <div className="flex justify-center gap-10 flex-wrap">
          <Stat number="70%" label="forget meds weekly" />
          <Stat number="15M+" label="caregivers struggling in the US" />
          <Stat number="3X" label="more likely to miss appointments" />
        </div>
      </section>
    </FadeInSection>
  );
}

const Stat = ({ number, label }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="transition-transform duration-200"
  >
    <p className="text-4xl font-bold text-indigo-700">{number}</p>
    <p className="text-gray-600">{label}</p>
  </motion.div>
);
