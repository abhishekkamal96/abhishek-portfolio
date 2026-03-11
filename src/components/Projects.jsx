import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Configuration-Driven Data Ingestion Framework",
      bullets: [
        <>Built a <span className="text-blue-400">scalable, cost-effective ingestion framework</span> for onboarding external data sources.</>,
        <>Supported both <span className="text-blue-400">APIs and webhooks</span> through a configuration-driven ETL design.</>,
        <>Reduced engineering effort and turnaround time for adding new integrations.</>,
        <>Deployed on <span className="text-blue-400">GCP Cloud Functions</span> for fast and low-overhead scaling.</>,
      ],
      skills: "Python • GCP Cloud Functions • ETL • APIs • Webhooks • Kafka",
    },
    {
      title: "RAG-Based Account Intelligence Platform",
      bullets: [
        <>Designed and developed an <span className="text-blue-400">account intelligence platform</span> end to end.</>,
        <>Built data ingestion, fact generation, and embeddings pipelines for downstream retrieval.</>,
        <>Indexed facts and embeddings in <span className="text-blue-400">OpenSearch</span> for efficient querying.</>,
        <>Created backend endpoints that retrieved context and generated summaries using <span className="text-blue-400">LLM APIs</span>.</>,
        <>Delivered real-time actionable insights for account and sales teams.</>,
      ],
      skills: "Python • RAG • OpenSearch • Embeddings • LLM APIs • Backend APIs",
    },
    {
      title: "Cloud Infrastructure as Code Platform",
      bullets: [
        <>Created and managed <span className="text-blue-400">Google Cloud and Confluent Cloud infrastructure</span> using <span className="text-blue-400">Terraform</span>.</>,
        <>Provisioned IAM, reusable GCP modules, topics, permissions, and streaming infrastructure.</>,
        <>Supported platform services and <span className="text-blue-400">Flink-based</span> data workloads.</>,
        <>Improved repeatability, governance, and operational reliability across environments.</>,
      ],
      skills: "Terraform • GCP • Confluent Cloud • IAM • Kafka • Flink • IaC",
    },
    {
      title: "MLOps Platform for Model Lifecycle Automation",
      bullets: [
        <>Built an internal <span className="text-blue-400">MLOps platform</span> for end-to-end model lifecycle workflows.</>,
        <>Covered data loading, cleaning, training, testing, serving, and monitoring.</>,
        <>Used <span className="text-blue-400">Vertex AI</span> and CI/CD pipelines to standardize model deployment.</>,
        <>Supported migration of legacy model workflows from <span className="text-blue-400">Airflow</span> into the new platform.</>,
      ],
      skills: "MLOps • Vertex AI • CI/CD • Airflow Migration • Python • Model Serving",
    },
    {
      title: "BigQuery Cost Optimization Pipeline",
      bullets: [
        <>Designed an automated pipeline to <span className="text-blue-400">export and delete unused BigQuery assets</span>.</>,
        <>Moved cold data into lower-cost storage on <span className="text-blue-400">Google Cloud Storage</span>.</>,
        <>Improved warehouse hygiene and reduced unnecessary storage spend.</>,
        <><span className="text-blue-400">Saved approximately $5,000 per month</span> through automated cleanup.</>,
      ],
      skills: "BigQuery • GCS • Cost Optimization • Data Warehousing • GCP",
    },
    {
      title: "Automated Data Extraction and Ingestion Pipelines",
      bullets: [
        <>Developed automated extraction pipelines using <span className="text-blue-400">Selenium</span> and <span className="text-blue-400">BeautifulSoup</span>.</>,
        <>Collected data from multiple external sources for analytics and downstream processing.</>,
        <>Ingested extracted data into backend systems supporting AI/ML and reporting use cases.</>,
        <>Reduced manual effort and improved freshness of external data feeds.</>,
      ],
      skills: "Python • Selenium • BeautifulSoup • Data Extraction • ETL • Analytics • Docker • Kubernetes • CI/CD",
    },
  ];

  return (
    <section id="projects" className="py-28 px-8">
      {/* Heading */}
      <h2 className="text-5xl font-bold text-blue-500 text-center mb-20">
        PROJECTS
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-12">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: false,
              amount: 0.4,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: i * 0.04,
            }}
            className="
              bg-[#0b1220]
              rounded-xl
              p-7
              border border-blue-500/20
              shadow-[0_0_8px_rgba(59,130,246,0.18)]
              hover:-translate-y-1
              hover:border-blue-500/50
              hover:shadow-[0_0_22px_rgba(59,130,246,0.5)]
              transition-all duration-300
            "
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">
              {p.title}
            </h3>

            <ul className="text-gray-300 text-sm leading-relaxed mb-4 list-disc pl-5 space-y-2">
              {p.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>

            <p className="text-xs text-blue-300 tracking-wide">
              {p.skills}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
