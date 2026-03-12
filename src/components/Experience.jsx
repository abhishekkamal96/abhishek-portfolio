import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "Confluent",
      duration: "Sep 2023 - Present • Remote",
      details: [
        "Designed a scalable, configuration-driven ingestion framework for onboarding external sources through APIs and webhooks into Confluent Cloud.",
        "Developed multiple Flink pipelines powering the backend of customer and account intelligence platforms used by sales and account teams.",
        "Created and managed Google Cloud and Confluent Cloud infrastructure using Terraform, including IAM, topics, permissions, and platform modules.",
        "Built and automated an end-to-end MLOps platform using Google Vertex AI for data science teams covering entire ML lifecycle usecases like data loading, training, evaluation, serving, and deployment workflows.",
        "Designed an automated BigQuery cleanup and export workflow that moved unused data to lower-cost storage, saving roughly $5,000 per month.",
      ],
      skills: ["Kafka", "Flink", "Terraform", "GCP", "MLOps", "Distributed Systems", "Python", "CI/CD"],
    },
    {
      role: "Software Engineer (Backend)",
      company: "Jio Platforms - JioHealth",
      duration: "Apr 2020 - Sep 2023 • Hybrid",
      details: [
        "Built scalable backend microservices and REST APIs.",
        "Created large data pipelines and integrated Jio Big Data Lake for analytics, BI, and AI/ML workflows.",
        "Developed event-driven services and publishers/subscribers for real-time data movement across backend systems.",
        "Built diagnostic data ingestion workflows processing 200K+ test results per month and supporting large-scale healthcare use cases.",
        "Integrated HashiCorp Vault with Consul as backend storage for managing and securing JioHealth secrets.",
        "Led the integration of Ayushman Bharat Digital Mission (ABDM) with JioHealth to bridge workflows across healthcare stakeholders.",
      ],
      skills: ["Python", "MongoDB", "Microservices", "Event-Driven Systems", "APIs", "SQL", "Docker", "Kubernetes", "Azure Devops", "Kafka", "Azure Data Lake Storage"],
    },
    {
      role: "Data Scientist - AI Centre of Excellence",
      company: "Jio Platforms",
      duration: "Jul 2019 - Apr 2020 • Onsite",
      details: [
        "Built multilingual and multimodal AI-enabled digital solutions at scale, including Python-based services and microservices secured with cryptographic algorithms, CI/CD on Azure DevOps, and Dockerized deployments.",
        "Developed Selenium and BeautifulSoup-based scraping, extraction, and processing workflows for Covid-19 statistics, grocery, medicine, and YouTube data, serving high-scale backend and analytics use cases.",
        "Worked on products and platforms including the Machli React Native app, AI models such as face-match and medicine image classification, and a centralized knowledge platform for large-scale data processing.",
      ],
      skills: ["Python", "ML", "AI", "Selenium", "BeautifulSoup", "React Native"],
    },
    {
      role: "Co-Founder & President",
      company: "Jansevak Foundation (NGO)",
      duration: "2016 - 2019 • Part-time",
      details: [
        "Led strategy, PR, fundraising & operations.",
        "Managed teams and community initiatives.",
        "Built strong leadership & management experience.",
      ],
      skills: ["Leadership", "Team Building", "Management"],
    },
    {
      role: "Technical Analyst Intern",
      company: "GNY Capital",
      duration: "2018 • Internship",
      details: [
        "Automated financial research and portfolio analysis.",
        "Created algorithms for market insights.",
        "Worked with Python & financial datasets.",
      ],
      skills: ["Python", "Finance", "Data Analysis"],
    },
    {
      role: "Athletics Captain",
      company: "IIT Delhi",
      duration: "2016 - 2018",
      details: [
        "Led and guided sports teams.",
        "Improved team coordination and performance.",
      ],
      skills: ["Leadership", "Teamwork"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6">
      {/* Heading */}
      <h2 className="text-center text-5xl font-bold text-blue-700 mb-20">
        EXPERIENCE
      </h2>

      <div className="max-w-5xl mx-auto relative">
        {/* Vertical Line */}
        <div
          className="
            absolute left-4 top-0 h-full w-[2px]
            bg-blue-300
          "
        />

        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-14">
              {/* Dot */}
              <span
                className="
                  absolute left-[6px] top-6
                  w-4 h-4
                  rounded-full
                  bg-blue-700
                  shadow-[0_0_1px_rgba(29,78,216,0.7)]
                "
              />

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.01 }}
                transition={{ delay: i * 0.05 }}
                className="
                  bg-white
                  p-7
                  rounded-2xl
                  border border-blue-100
                  shadow-[0_8px_30px_rgba(15,23,42,0.08)]
                  hover:shadow-[0_14px_32px_rgba(37,99,235,0.14)]
                  hover:border-blue-300
                  transition-all duration-300
                "
              >
                <h3 className="text-xl font-bold text-blue-800">
                  {exp.role}
                </h3>

                <p className="text-slate-900 font-semibold">
                  {exp.company}
                </p>

                <p className="text-sm text-slate-500 mb-4">
                  {exp.duration}
                </p>

                <ul className="list-disc pl-5 text-slate-700 space-y-1 mb-4">
                  {exp.details.map((d, index) => (
                    <li key={index}>{d}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((s, index) => (
                    <span
                      key={index}
                      className="
                        text-xs
                        px-3 py-1
                        rounded-full
                        bg-blue-50
                        border border-blue-100
                        text-blue-800
                      "
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
