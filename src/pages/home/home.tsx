import Postes from "../../components/postes";
import Hero from "../../components/hero/hero";
import { motion } from "motion/react";

export default function Home() {
  return (
    <motion.div
      transition={{ duration: 0.6, delay: 2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="home"
    >
      <Hero />
      <Postes />
    </motion.div>
  );
}
