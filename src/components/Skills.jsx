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
  ];

return (
<section id="skills" className="py-20 px-6">

  {/* Heading */}
  <h2 className="text-center text-5xl font-bold text-blue-500 mb-12">
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
bg-blue-100



          border border-blue-400/40
          shadow-[0_0_8px_rgba(96,165,250,0.25)]
          hover:shadow-[0_0_25px_rgba(59,130,246,0.85)]
          hover:border-blue-500
          hover:-translate-y-2
          transition-all duration-300
          cursor-pointer
        "
      >
        <div className="text-5xl text-blue-500 mb-1">
          {skill.icon}
        </div>

<p className="text-base text-blue-900 font-bold">
          {skill.name}
        </p>
      </motion.div>
    ))}

  </div>
</section>


);

}
