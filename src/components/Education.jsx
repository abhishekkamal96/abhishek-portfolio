import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {

  const education = [
    {
      title: "Indian Institute of Technology, Delhi",
      subtitle: "Bachelor of Technology (B.Tech)",
      year: "2015 – 2019",
      desc: "Computer Science foundation, problem solving, data structures, algorithms and system design. Active in Formula Racing Club, Toastmasters & leadership activities."
    },
    {
      title: "Indian Institute of Technology, Delhi",
      subtitle: "Minor in Business Management",
      year: "2017 – 2019",
      desc: "Studied accounting, finance, business strategy and management fundamentals to complement technical skills."
    },
    {
      title: "Super 30 (Anand Kumar)",
      subtitle: "IIT-JEE Preparation",
      year: "2014 – 2015",
      desc: "Selected among top 30 from 15000+ students across India. Intensive training in Physics, Chemistry & Mathematics."
    },
    {
      title: "Jawahar Navodaya Vidyalaya (JNV)",
      subtitle: "Class 6th – 12th (CBSE)",
      year: "2007 – 2014",
      desc: "CGPA 9.8 in 10th, 87% in 12th. Represented school in chess tournaments. NCC training developed discipline & leadership."
    }
  ];



  return (
    <section className="bg-black text-white py-28 px-6">

      {/* Heading */}
      <h2 className="text-center text-5xl font-bold text-blue-500 mb-28">
        EDUCATION
      </h2>


      {/* Timeline wrapper */}
      <div className="relative max-w-6xl mx-auto">

        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-[3px] bg-blue-500/30 -translate-x-1/2" />


        {education.map((item, i) => (

          <div
            key={i}
            className={`mb-24 flex items-center ${
              i % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >

            {/* Circle node */}
            <div className="absolute left-1/2 -translate-x-1/2 z-10">

          <div className="
  w-14 h-14
  rounded-full
  flex items-center justify-center
  bg-[#0f172a]           /* ⭐ transparent */
  border border-blue-400
  shadow-[0_0_6px_rgba(59,130,246,0.6)]
">
  <FaGraduationCap className="text-white text-2xl" />  {/* ⭐ white icon */}
</div>


            </div>



            {/* Card */}
            <div className="w-[42%] bg-[#0f172a] rounded-2xl p-8 border border-blue-400/40 shadow-[0_0_10px_rgba(96,165,250,0.25)]">

              {/* ⭐ ONLY TEXT ANIMATION */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.6 }}
              >

                <h3 className="text-xl font-bold text-blue-400">
                  {item.title}
                </h3>

                <p className="text-white font-semibold mt-1">
                  {item.subtitle}
                </p>

                <p className="text-sm text-blue-300 mt-1">
                  {item.year}
                </p>

                <p className="text-gray-300 mt-3 text-sm leading-relaxed">
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
