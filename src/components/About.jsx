export default function About() {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-8 py-28 text-center"
    >
      {/* Heading */}
      <h2 className="text-5xl font-bold mb-14">
        About <span className="text-blue-500">Me</span>
      </h2>

      {/* Professional Paragraph */}
      <p className="text-gray-300 text-lg leading-loose">
        I am a <span className="text-white font-semibold">Senior Software Engineer</span> with 7 years of experience designing and building <span className="text-blue-400 font-semibold">backend systems, distributed data platforms, and cloud-native infrastructure</span>, with a strong focus on reliability, maintainability, and operational efficiency.

        <br /><br />

        My work includes designing and developing <span className="text-white font-semibold">scalable, reliable, and cost-effective backend microservices</span> and event-driven data pipelines processing over a million events per day built on technologies such as <span className="text-white font-semibold">Kafka</span> and cloud data platforms. Earlier in my career, I also built automated data extraction systems using <span className="text-white font-semibold">Selenium</span> and <span className="text-white font-semibold">BeautifulSoup</span> to collect external data for analytics and downstream processing.

        <br /><br />

        More recently, I have focused on platform engineering and streaming systems, building configuration-driven data ingestion frameworks on <span className="text-white font-semibold">GCP</span>, developing <span className="text-white font-semibold">Kafka</span> and <span className="text-white font-semibold">Flink</span> pipelines, managing infrastructure with <span className="text-white font-semibold">Terraform</span>, contributing to internal <span className="text-white font-semibold">MLOps</span> platforms and cost optimization initiatives, and building a <span className="text-white font-semibold">RAG-based account intelligence platform</span> that delivers real-time actionable insights to account and sales teams.
      </p>

      {/* Highlights */}
      <div className="pt-8 space-y-2 text-blue-300 font-medium">
        <p>- 7 years across backend systems, data platforms, and cloud-native infrastructure</p>
        <p>- Event-driven pipelines processing millions of events daily</p>
        <p>- Platform engineering with Kafka, Flink, GCP, Terraform, and MLOps</p>
        <p>- Built RAG-based account intelligence delivering real-time business insights</p>
        <p>- Strong foundation in distributed systems, system design, and problem solving</p>
      </div>
    </section>
  );
}