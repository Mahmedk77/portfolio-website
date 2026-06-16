import { CalendarDays, Mail } from "lucide-react"

const stats = [
  { id: 1, title: "Happy Clients", value: 52 },
  { id: 2, title: "Years of Experience", value: 2 },
  { id: 3, title: "Completed Tasks", value: 40 },
  { id: 4, title: "Awards Received", value: 10 },
]

const Home = () => {
  return (
    <>
      {/* INTRO */}
      <section className='flex flex-col md:flex-row gap-8 items-center justify-center'>
        <div className='w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-md bg-[#18181A]'>
          <img
            src={"/userImage4.png"}
            alt="Muhammad Ahmed"
            className='w-full h-full object-cover rounded-md border border-white'
          />
        </div>

        <div className='flex flex-col text-center md:text-left'>
          <p className='text-heading-m font-semibold text-grey60'>👋 Hello I Am</p>
          <h3 className='text-heading-huge font-bold text-white'>Muhammad Ahmed</h3>
          <p className='text-grey60 font-semibold text-l mt-2'>
            Experienced software engineer from NUST Pakistan,
            with a passion for crafting seamless digital experiences
            and a proven track record.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch gap-2 mt-5">
            <a
              href="mailto:mak.212601@gmail.com"
              className="flex items-center justify-center gap-2 shadow-md cursor-pointer flex-1 rounded-md py-3 text-grey60 font-bold text-m bg-[#18181A] hover:bg-dark13 transition-all duration-200"
            >
              <Mail size={18} />
              EMAIL ME
            </a>
            <button className="flex items-center justify-center gap-2 shadow-md cursor-pointer flex-1 rounded-md py-3 text-grey60 font-bold text-m bg-[#18181A] hover:bg-dark13 transition-all duration-200">
              <CalendarDays size={18} />
              SCHEDULE CALL
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className='flex flex-wrap gap-6 sm:gap-12 items-center justify-center py-5 border-y mt-10 border-[#18181A]'>
        {stats.map((item) => (
          <div key={item.id} className='flex flex-col items-center justify-center'>
            <h3 className='text-heading-huge font-bold text-white'>{item.value}+</h3>
            <p className='text-grey60 font-medium text-m mt-1.5'>{item.title}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
