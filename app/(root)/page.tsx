import Home from "@/components/shared/Home"
import Experience from "@/components/shared/Experience"
import Stacks from "@/components/shared/Stacks"
import Projects from "@/components/shared/Projects"
import Services from "@/components/shared/Services"
import Contact from "@/components/shared/Contact"

const page = () => {
  return (
    <section>
      <div id="home">
        <Home />
      </div>
      <div id="experience" className="mt-20">
        <Experience />
      </div>
      <div id="stacks" className="mt-20">
        <Stacks />
      </div>
      <div id="projects" className="mt-20">
        <Projects />
      </div>
      <div id="services" className="mt-20">
        <Services />
      </div>
      <div id="contact" className="mt-20 pb-10">
        <Contact />
      </div>
    </section>
  )
}

export default page
