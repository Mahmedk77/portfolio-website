import { Mail, Github, Linkedin, Twitter, MapPin } from 'lucide-react'
import Heading from './Heading'
import Link from 'next/link'

const contactLinks = [
  {
    label: "Email",
    value: "mak.212601@gmail.com",
    href: "mailto:mak.212601@gmail.com",
    icon: <Mail className="text-grey60" size={24} />,
  },
  {
    label: "GitHub",
    value: "github.com/Mahmedk77",
    href: "https://github.com/Mahmedk77",
    icon: <Github className="text-grey60" size={24} />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mahmedkk",
    href: "https://linkedin.com/in/mahmedkk",
    icon: <Linkedin className="text-grey60" size={24} />,
  },
  {
    label: "Location",
    value: "Islamabad, Pakistan",
    href: null,
    icon: <MapPin className="text-grey60" size={24} />,
  },
]

const Contact = () => {
  return (
    <section className="text-white">
      <Heading
        icon={<Mail />}
        heading="Get In Touch"
        description="Open to new opportunities, collaborations, or just a conversation."
      />

      <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {contactLinks.map((item) => {
          const inner = (
            <div className="flex items-center gap-4 p-5 bg-dark4 rounded-md hover:bg-dark7 transition-all duration-300 w-full">
              <div className="p-2.5 bg-[#18181A] rounded-md flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-s text-grey60 font-medium">{item.label}</p>
                <p className="text-heading-xs font-semibold">{item.value}</p>
              </div>
            </div>
          )

          return item.href ? (
            <Link key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
              {inner}
            </Link>
          ) : (
            <div key={item.label}>{inner}</div>
          )
        })}
      </div>
    </section>
  )
}

export default Contact
