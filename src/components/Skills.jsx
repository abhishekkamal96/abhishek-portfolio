import { motion } from "framer-motion";
import {
  SiPython,
  SiMysql,
  SiApachekafka,
  SiKubernetes,
  SiGooglecloud,
  SiDocker,
  SiApacheflink,
  SiTerraform,
  SiGooglebigquery,
  SiSelenium,
  SiMongodb,
} from "react-icons/si";

import { TbTopologyStar3 } from "react-icons/tb";
import { BsDiagram3 } from "react-icons/bs";
import { FaNetworkWired, FaRobot, FaCodeBranch } from "react-icons/fa";
import { MdSchema } from "react-icons/md";

export default function Skills() {

  const skills = [
    { name: "Python", icon: <SiPython /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "Kafka", icon: <SiApachekafka /> },
    { name: "Apache Flink", icon: <SiApacheflink /> },
    { name: "GCP", icon: <SiGooglecloud /> },
    { name: "Terraform", icon: <SiTerraform /> },
    { name: "BigQuery", icon: <SiGooglebigquery /> },
    { name: "MLOps", icon: <FaCodeBranch /> },
    { name: "RAG Systems", icon: <FaRobot /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Distributed Systems", icon: <FaNetworkWired /> },
    { name: "Systems Design", icon: <TbTopologyStar3 /> },
    { name: "Microservices", icon: <BsDiagram3 /> },
    { name: "Data Ingestion", icon: <MdSchema /> },
    { name: "CI/CD", icon: <FaCodeBranch /> },
    { name: "Selenium", icon: <SiSelenium /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ];

return (
<section id="skills" className="py-24 px-6">

  {/* Heading */}
  <h2 className="text-center text-5xl font-bold text-blue-700 mb-12">
    SKILLS
  </h2>

  {/* Grid */}
  <div className="max-w-5xl mx-auto grid grid-cols-6 gap-8">

    {skills.map((skill, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ delay: i * 0.05, duration: 0.45 }}

        className="
          w-32 h-28
          flex flex-col items-center justify-center
          rounded-xl
bg-white



          border border-blue-100
          shadow-[0_8px_30px_rgba(15,23,42,0.08)]
          hover:shadow-[0_14px_32px_rgba(37,99,235,0.14)]
          hover:border-blue-300
          hover:-translate-y-2
          transition-all duration-300
          cursor-pointer
        "
      >
        <div className="text-5xl text-blue-700 mb-1">
          {skill.icon}
        </div>

<p className="text-base text-slate-800 font-bold text-center">
          {skill.name}
        </p>
      </motion.div>
    ))}

  </div>
</section>


);

}
