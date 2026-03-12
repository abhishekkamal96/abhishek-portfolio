import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const contacts = {
  email: "abhishekkamalcareer@gmail.com",
  emailHref:
    "https://mail.google.com/mail/?view=cm&fs=1&to=abhishekkamalcareer@gmail.com",
  phone: "+91 9560939353",
  phoneHref: "tel:+919560939353",
  github: "https://github.com/abhishekkamal96",
  linkedin: "https://www.linkedin.com/in/abhishekkumarkamal/",
  leetcode: "https://leetcode.com/u/abhishekkamal96/",
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <h2 className="text-center text-5xl font-bold mb-16">
        <span className="text-slate-900">GET IN</span>{" "}
        <span className="text-blue-700">TOUCH</span>
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="
          max-w-3xl mx-auto
          rounded-2xl
          bg-white
          border border-blue-100
          shadow-[0_8px_30px_rgba(15,23,42,0.08)]
          p-8 md:p-10
        "
      >
        <div className="w-fit mx-auto space-y-4 text-lg text-slate-700 text-left">
          <p className="flex items-center gap-3">
            <span className="text-blue-700 text-xl">
              <FaEnvelope />
            </span>
            <span className="font-semibold text-slate-900">Email:</span>{" "}
            <a
              href={contacts.emailHref}
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 underline underline-offset-4 hover:text-blue-800 transition cursor-pointer"
            >
              {contacts.email}
            </a>
          </p>

          <p className="flex items-center gap-3">
            <span className="text-blue-700 text-xl">
              <FaPhone />
            </span>
            <span className="font-semibold text-slate-900">Phone:</span>{" "}
            <a
              href={contacts.phoneHref}
              className="text-blue-700 underline underline-offset-4 hover:text-blue-800 transition cursor-pointer"
            >
              {contacts.phone}
            </a>
          </p>

          <p className="flex items-center gap-3">
            <span className="text-blue-700 text-xl">
              <FaLinkedin />
            </span>
            <span className="font-semibold text-slate-900">LinkedIn:</span>{" "}
            <a
              href={contacts.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 underline underline-offset-4 hover:text-blue-800 transition cursor-pointer"
            >
              View profile
            </a>
          </p>

          <p className="flex items-center gap-3">
            <span className="text-blue-700 text-xl">
              <SiLeetcode />
            </span>
            <span className="font-semibold text-slate-900">LeetCode:</span>{" "}
            <a
              href={contacts.leetcode}
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 underline underline-offset-4 hover:text-blue-800 transition cursor-pointer"
            >
              View my profile
            </a>
          </p>

          <p className="flex items-center gap-3">
            <span className="text-blue-700 text-xl">
              <FaGithub />
            </span>
            <span className="font-semibold text-slate-900">GitHub:</span>{" "}
            <a
              href={contacts.github}
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 underline underline-offset-4 hover:text-blue-800 transition cursor-pointer"
            >
              View profile
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
