import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#f3f8ff] border-t border-blue-200 py-10">

      <motion.p
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}   // ⭐ key fix
        transition={{ duration: 0.5 }}

        className="text-center text-lg text-blue-800 font-semibold"
      >
        — Thanks for visiting —
      </motion.p>

    </footer>
  );
}
