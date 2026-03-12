import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      title: "Indian Institute of Technology(IIT), Delhi",
      subtitle: "Bachelor of Technology (B.Tech)",
      year: "2015 â€“ 2019",
      desc: "Computer Science foundation, problem solving, data structures, algorithms and system design. Active in Formula Racing Club, Toastmasters & leadership activities."
    },
    {
      title: "Indian Institute of Technology(IIT), Delhi",
      subtitle: "Minor in Business Management",
      year: "2017 â€“ 2019",
      desc: "Studied accounting, finance, business strategy and management fundamentals to complement technical skills."
    },
    {
      title: "Super 30 (Anand Kumar)",
      subtitle: "IIT-JEE Preparation",
      year: "2014 â€“ 2015",
      desc: "Selected among top 30 from 15000+ students across India. Intensive training in Physics, Chemistry & Mathematics."
    },
    {
      title: "Jawahar Navodaya Vidyalaya (JNV)",
      subtitle: "Class 6th â€“ 12th (CBSE)",
      year: "2007 â€“ 2014",
      desc: "CGPA 9.8 in 10th, 87.4% in 12th. Represented school in chess tournaments. NCC training developed discipline & leadership."
    }
  ];

  return (
    <section className="bg-[#f3f8ff] text-slate-900 py-24 px-6">
      <h2 className="text-center text-5xl font-bold text-blue-700 mb-28">
        EDUCATION
      </h2>

      <div className="relative max-w-6xl mx-auto">
        <div className="absolute left-1/2 top-0 h-full w-[3px] bg-blue-200 -translate-x-1/2" />

        {education.map((item, i) => (
          <div
            key={i}
            className={`mb-24 flex items-center ${
              i % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="absolute left-1/2 -translate-x-1/2 z-10">
              <div className="
                w-14 h-14
                rounded-full
                flex items-center justify-center
                bg-white
                border border-blue-200
                shadow-[0_8px_24px_rgba(15,23,42,0.08)]
              ">
                <FaGraduationCap className="text-blue-700 text-2xl" />
              </div>
            </div>

            <div className="w-[42%] bg-white rounded-2xl p-8 border border-blue-100 shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-blue-800">
                  {item.title}
                </h3>

                <p className="text-slate-900 font-semibold mt-1">
                  {item.subtitle}
                </p>

                <p className="text-sm text-blue-700 mt-1">
                  {item.year}
                </p>

                <p className="text-slate-700 mt-3 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
