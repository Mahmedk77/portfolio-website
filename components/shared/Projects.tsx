import { projects } from "@/constants/index"
import Heading from "./Heading"
import Link from "next/link"
import { ExternalLink, FolderGit2, CodeXml} from "lucide-react"

const Projects = () => {
  return (
    <section className="text-white">
      <Heading
        icon={<FolderGit2 />}
        heading="My Projects"
        description="Production-grade applications built and deployed live."
      />

      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col bg-dark4 rounded-lg overflow-hidden hover:bg-dark7 transition-colors duration-300"
          >
            {/* THUMBNAIL */}
            <div className="relative w-full aspect-video overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a1d] to-[#0d0d0f] group-hover:brightness-75 transition-all duration-300">
                  <p className="text-grey40 text-heading-xs font-semibold text-center px-6 leading-snug">
                    {project.name}
                  </p>
                </div>
              )}

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 backdrop-blur-sm bg-black/50 flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-[#111113]/80 border border-[#2a2a2a] flex items-center justify-center
                    hover:bg-white  hover:border-white hover:scale-115 transition-all duration-200 text-white hover:text-black"
                  title="View on GitHub"
                >
                  <CodeXml size={24} />
                </Link>
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-[#111113]/80 border border-[#2a2a2a] flex items-center justify-center
                    hover:bg-white  hover:border-white hover:scale-115 transition-all duration-200 text-white hover:text-black"
                  title="Visit live site"
                >
                  <ExternalLink size={24} />
                </Link>
              </div>
            </div>

            {/* CARD BODY */}
            <div className="flex flex-col gap-3 p-5">
              <h3 className="text-heading-s font-semibold leading-snug">{project.name}</h3>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-s font-medium px-2.5 py-0.5 rounded-full bg-[#18181A] text-grey60 border border-[#2a2a2a]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-m text-grey60 font-medium leading-relaxed">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
