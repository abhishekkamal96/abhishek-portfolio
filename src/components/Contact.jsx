import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si"; // ⭐ only new import


export default function Contact() {

  const contacts = [
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/abhishekkumarkamal/" },

    { icon: <FaGithub />, link: "https://github.com/your-github-id" },

    // ⭐ LeetCode added (same style, no white bg)
    { icon: <SiLeetcode className="fill-current" />, link: "https://leetcode.com/your-username" },

    { icon: <FaEnvelope />, link: "mailto:snehanaik856@gmail.com" },

    { icon: <FaPhone />, link: "tel:+919560939353" },
  ];


 return (
<section id="contact" className="py-20 px-6">

      {/* Heading */}
      <h2 className="text-center text-5xl font-bold mb-16">
        <span className="text-white">GET IN</span>{" "}
        <span className="text-blue-500">TOUCH</span>
      </h2>


      {/* Icons row */}
      <div className="flex justify-center gap-6">

        {contacts.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noreferrer"

            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}

            className="
              w-16 h-16
              flex items-center justify-center
              rounded-md
              text-blue-500
              transition-all duration-300

              hover:scale-150
              hover:text-blue-300
              hover:shadow-[0_0_12px_rgba(59,130,246,0.9)]
            "
          >
            {/* same icon size */}
            <div className="text-4xl">
              {item.icon}
            </div>
          </motion.a>
        ))}

      </div>
    </section>
  );
}
