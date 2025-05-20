import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="min-h-screen bg-white dark:bg-[#0F172A]">
        <Navbar />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <section id="home" className="py-16 md:py-24">
              <Hero />
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="projects" className="py-16 md:py-24">
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] dark:text-white mb-12 text-center">
                My Projects
              </h2>
              <Projects />
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="skills" className="py-16 md:py-24">
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] dark:text-white mb-12 text-center">
                Skills & Expertise
              </h2>
              <Skills />
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="experience" className="py-16 md:py-24">
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] dark:text-white mb-12 text-center">
                Work Experience
              </h2>
              <Experience />
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="testimonials" className="py-16 md:py-24">
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] dark:text-white mb-12 text-center">
                Client Testimonials
              </h2>
              <Testimonials />
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="contact" className="py-16 md:py-24">
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] dark:text-white mb-12 text-center">
                Get In Touch
              </h2>
              <Contact />
            </section>
          </ScrollReveal>
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  )
}
