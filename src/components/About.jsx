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


      {/* Single Professional Paragraph */}
      <p className="text-gray-300 text-lg leading-loose">
        I am a <span className="text-white font-semibold">Senior Software Engineer</span> with around 7 years of experience in backend, data, and platform engineering, specializing in building scalable distributed systems and real-time data platforms. My work focuses on designing <span className="text-blue-400 font-semibold">cloud-native, high-performance architectures</span> using technologies such as Kafka, Flink, Kubernetes, and GCP to deliver reliable and production-ready solutions at scale. I have strong expertise in problem-solving, data structures, system design, and database architecture, enabling me to create efficient, cost-optimized, and resilient systems.

        <br /><br />

        Currently, I work at <span className="text-blue-400 font-semibold">Confluent</span>, where I design and develop large-scale production data platforms and end-to-end ML pipelines. I hold a B.Tech degree from <span className="text-blue-400 font-semibold">IIT Delhi</span> with a Minor in Business Management and am also an alumnus of Super 30. Outside of work, I enjoy reading books, playing chess, biking, and traveling, which help me stay balanced, focused, and continuously curious.
      </p>


      {/* Highlights */}
      <div className="pt-8 space-y-2 text-blue-300 font-medium">
        <p>• Built large-scale real-time data platforms</p>
        <p>• Designed systems processing millions of events daily</p>
        <p>• Strong foundation in DSA & problem solving</p>
      </div>
    </section>
  );
}
