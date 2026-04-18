import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <header className="text-center py-8 bg-blue-500 text-white">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}