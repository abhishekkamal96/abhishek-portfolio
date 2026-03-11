import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-blue-400/20 py-10">

      <motion.p
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}   // ⭐ key fix
        transition={{ duration: 0.5 }}

        className="text-center text-lg text-blue-400 font-semibold"
      >
        — Thanks for visiting —
      </motion.p>

    </footer>
  );
}
