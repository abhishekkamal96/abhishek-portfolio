import { motion } from "framer-motion";

export default function Projects() {

  const projects = [
    {
      title: "Motivation Booster App",
      desc: <>
        Designed and developed a{" "}
        <span className="text-blue-400">motivational mobile application</span>{" "}
        delivering daily quotes and reminders with a scalable{" "}
        <span className="text-blue-400">Firebase backend</span>, push notifications
        and <span className="text-blue-400">AdMob monetization</span> to improve
        engagement and retention.
      </>,
      skills: "React Native • Firebase • AdMob • Notifications",
    },

    {
      title: "E-Commerce Platform",
      desc: <>
        Built a{" "}
        <span className="text-blue-400">full-stack e-commerce platform</span>{" "}
        with authentication, cart management and secure{" "}
        <span className="text-blue-400">Stripe payments</span>, along with an
        admin dashboard for inventory and order management.
      </>,
      skills: "React • Node • MongoDB • Stripe",
    },

    {
      title: "Task Manager",
      desc: <>
        Developed a{" "}
        <span className="text-blue-400">task and productivity system</span>{" "}
        to organize workflows and deadlines with analytics dashboards and
        optimized <span className="text-blue-400">REST APIs</span> for faster performance.
      </>,
      skills: "MERN • REST APIs • Charts • Auth",
    },

    {
      title: "AI Chat Assistant",
      desc: <>
        Created an{" "}
        <span className="text-blue-400">AI-powered chatbot</span>{" "}
        using NLP and OpenAI APIs enabling real-time conversations and scalable
        backend integrations.
      </>,
      skills: "Python • FastAPI • OpenAI • WebSockets",
    },

    {
      title: "Analytics Dashboard",
      desc: <>
        Built an interactive{" "}
        <span className="text-blue-400">analytics dashboard</span>{" "}
        to visualize large datasets with KPIs and charts, helping teams make
        smarter business decisions.
      </>,
      skills: "React • Recharts • PostgreSQL • APIs",
    },

    {
      title: "Portfolio Website",
      desc: <>
        Designed a modern{" "}
        <span className="text-blue-400">developer portfolio</span>{" "}
        with responsive layouts, smooth animations and clean UI to showcase
        skills and projects professionally.
      </>,
      skills: "React • Tailwind • Framer Motion • Vite",
    },
  ];


return (
<section id="projects" className="py-28 px-8">

  {/* Heading */}
  <h2 className="text-5xl font-bold text-blue-500 text-center mb-20">
    PROJECTS
  </h2>


  {/* ⭐ PREMIUM GRID WITH BETTER SPACING */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-12">

    {projects.map((p, i) => (

<motion.div
  key={i}

  initial={{ opacity: 0, x: -80 }}

  whileInView={{ opacity: 1, x: 0 }}

  viewport={{
    once: false,   // ⭐ IMPORTANT (repeat animation)
    amount: 0.4
  }}

  transition={{
    duration: 0.6,
    ease: "easeOut",
    delay: i * 0.04
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

        {/* Title */}
        <h3 className="text-2xl font-semibold text-blue-400 mb-2">
          {p.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-2sm leading-relaxed mb-4">
          {p.desc}
        </p>

        {/* Skills */}
        <p className="text-2xs text-blue-300 tracking-wide">
          {p.skills}
        </p>

      </motion.div>
    ))}

  </div>
</section>


  );
}  