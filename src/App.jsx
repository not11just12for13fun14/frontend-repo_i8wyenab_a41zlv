import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAF6] text-neutral-800">
      <Navbar />

      <main className="mx-auto max-w-5xl">
        <Hero />

        <div className="mx-auto max-w-3xl px-6">
          <div className="h-px bg-neutral-200/80" />
        </div>

        <Section id="principles" title="Design Principles">
          <ul className="list-disc pl-6 space-y-3">
            <li>Wide margins and spacious line height for effortless scanning.</li>
            <li>Neutral off-white canvas with thin charcoal typography.</li>
            <li>One accent only: a soft sage for links and highlights.</li>
            <li>Subtle dividers guide rhythm without visual noise.</li>
            <li>Micro-interactions: gentle fade-in and smooth scrolling.</li>
          </ul>
        </Section>

        <div className="mx-auto max-w-3xl px-6">
          <div className="h-px bg-neutral-200/80" />
        </div>

        <Section id="essays" title="Highlighted Ideas">
          <p>
            This experience focuses on unhurried reading. Headings are light and elegant; body text sits at 18–19px, tuned for calm comprehension. Links and actionable elements use a soft sage hue with restrained hover motion.
          </p>
          <p className="mt-6">
            Content is organized into clear sections with a gentle vertical cadence. A simple hierarchy, ample white space, and quiet color keep attention on the words.
          </p>
        </Section>

        <div className="mx-auto max-w-3xl px-6">
          <div className="h-px bg-neutral-200/80" />
        </div>

        <Section id="resources" title="Resources">
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-sage-700 hover:text-sage-800 transition-colors underline decoration-sage-300/60 underline-offset-4">
                Core teachings overview
              </a>
            </li>
            <li>
              <a href="#" className="text-sage-700 hover:text-sage-800 transition-colors underline decoration-sage-300/60 underline-offset-4">
                Transcripts and archives
              </a>
            </li>
            <li>
              <a href="#" className="text-sage-700 hover:text-sage-800 transition-colors underline decoration-sage-300/60 underline-offset-4">
                Related materials
              </a>
            </li>
          </ul>
        </Section>
      </main>

      <Footer />

      {/* Accent + micro-interactions */}
      <style>{`
        :root {
          --sage-50: #f7faf7;
          --sage-100: #ecf3ec;
          --sage-200: #d9e7da;
          --sage-300: #c0d6c1;
          --sage-600: #6f8c73;
          --sage-700: #5f7c63;
          --sage-800: #4c6450;
        }
        .text-sage-700 { color: var(--sage-700); }
        .hover\\:text-sage-800:hover { color: var(--sage-800); }
        .decoration-sage-300\\/60 { text-decoration-color: rgba(192,214,193,0.6); }

        [data-fade] { opacity: 0; transform: translateY(6px); transition: opacity .6s ease, transform .6s ease; }
        [data-fade].show { opacity: 1; transform: translateY(0); }
      `}</style>

      <script dangerouslySetInnerHTML={{__html: `
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show')
          })
        }, { threshold: 0.08 })
        document.querySelectorAll('[data-fade]').forEach(el => observer.observe(el))
      `}} />
    </div>
  )
}

export default App
