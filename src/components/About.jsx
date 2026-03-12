export default function About() {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-8 pt-6 pb-24 text-center"
    >
      {/* Heading */}
      <h2 className="text-5xl font-bold mb-14">
        About <span className="text-blue-700">Me</span>
      </h2>

      {/* Professional Paragraph */}
      <div className="max-w-3xl mx-auto space-y-6 text-left">
        <p className="text-slate-700 text-lg leading-loose">
          I am a <span className="text-slate-900 font-semibold">Senior Software Engineer</span> with 7 years of experience designing and building <span className="text-blue-700 font-semibold">backend systems, distributed data platforms, and cloud-native infrastructure</span>, with a strong focus on reliability, maintainability, and operational efficiency.
        </p>

        <p className="text-slate-700 text-lg leading-loose">
          My work includes designing and developing <span className="text-slate-900 font-semibold">scalable, reliable, and cost-effective backend microservices</span> and event-driven data pipelines processing over a million events per day built on technologies such as <span className="text-slate-900 font-semibold">Kafka</span> and cloud data platforms. Earlier in my career, I also built automated data extraction systems using <span className="text-slate-900 font-semibold">Selenium</span> and <span className="text-slate-900 font-semibold">BeautifulSoup</span> to collect external data for analytics and downstream processing.
        </p>

        <p className="text-slate-700 text-lg leading-loose">
          More recently, I have focused on platform engineering and streaming systems, building configuration-driven data ingestion frameworks on <span className="text-slate-900 font-semibold">GCP</span>, developing <span className="text-slate-900 font-semibold">Kafka</span> and <span className="text-slate-900 font-semibold">Flink</span> pipelines, managing infrastructure with <span className="text-slate-900 font-semibold">Terraform</span>, contributing to internal <span className="text-slate-900 font-semibold">MLOps</span> platforms and cost optimization initiatives, and building a <span className="text-slate-900 font-semibold">RAG-based account intelligence platform</span> that delivers real-time actionable insights to account and sales teams.
        </p>
      </div>

      {/* Highlights */}
      <ul className="max-w-3xl mx-auto w-fit pt-8 space-y-2 list-disc pl-6 text-left text-blue-800 font-medium">
        <li>7 years across backend systems, data platforms, and cloud-native infrastructure</li>
        <li>Event-driven pipelines processing millions of events daily</li>
        <li>Platform engineering with Kafka, Flink, GCP, Terraform, and MLOps</li>
        <li>Built RAG-based account intelligence delivering real-time business insights</li>
        <li>Strong foundation in distributed systems, system design, and problem solving</li>
      </ul>
    </section>
  );
}
