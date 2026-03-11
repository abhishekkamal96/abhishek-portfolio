import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">

{/* ===== NAVBAR ===== */}
<nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">

  {/* Logo */}
  <h1 className="text-2xl font-bold text-blue-400 cursor-pointer">
    Abhishek Kumar Kamal
  </h1>

  {/* Links */}
  <div className="space-x-8 text-gray-300 font-medium">

    <a href="#about" className="hover:text-blue-400 transition">
      About
    </a>

    <a href="#skills" className="hover:text-blue-400 transition">
      Skills
    </a>

    <a href="#projects" className="hover:text-blue-400 transition">
      Projects
    </a>

    <a href="#experience" className="hover:text-blue-400 transition">
      Experience
    </a>

    <a href="#contact" className="hover:text-blue-400 transition">
      Contact
    </a>

  </div>
</nav>





{/* ===== HERO SECTION ===== */}
<section className="flex flex-col items-center justify-center text-center px-10 py-32 max-w-5xl mx-auto">

  {/* TEXT ONLY */}
  <div className="space-y-6">

    <h2 className="text-5xl font-bold">
      Hi, I'm <span className="text-blue-500">Abhishek</span> 👋
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
      Senior Software Engineer | Distributed Systems Design | Data Platforms | Backend Developer | Python, Kafka, Flink, GCP, Kubernetes, SQL | MLOps
    </p>

    <div className="space-x-4 pt-4">
      <button className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
        View Projects
      </button>

      <button className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition">
        Contact Me
      </button>

        {/* ⭐ Resume Button */}
  <a
    href="/resume.pdf"
    target="_blank"
    className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
  >
    Resume
  </a>


    </div>

  </div>

</section>



      {/* ✅ ABOUT SECTION ADDED HERE */}
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />



    </div>
  )
}
