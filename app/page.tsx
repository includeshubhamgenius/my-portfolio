import HomeSection from '@/sections/HomeSection'
import ContactSection from '@/sections/ContactSection'
import AboutSection from '@/sections/AboutSection'
import ProjectSection from '@/sections/ProjectSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <HomeSection />
      <ContactSection />
      <AboutSection />
      <ProjectSection />
    </main>
  )
}
