import { CalendarDays, Mail,  } from "lucide-react"

const Home = () => {
    const stats = [
    {id: 1, title: "Happy Clients", value: 52},
    {id: 2, title: "Years of Experience", value: 2},
    {id: 3, title: "Completed Tasks", value: 40},
    {id: 4, title: "Awards Received", value: 10},
  ];
  return (
    <>
    {/* INTRODUCTION DIV */}
      <section className='flex gap-2 items-center justify-center'>
        <div className='w-64 h-64 rounded-md bg-[#18181A]'>
          <img
              src={"/userImage.jpg"}
              alt={"User image at home page"}
              className='w-full h-full object-contain rounded-md'
            />
        </div>
        <div className='flex flex-col p-4'>
          <p className='text-heading-m font-semibold text-grey60'>👋 Hello I Am</p>
          <h3 className='text-heading-huge font-bold text-white'>Muhammad Ahmed</h3>
          <p className='text-grey60 font-semibold text-l mt-40/5'>
            Experienced software engineer from NUST Pakistan,
            <br />
            with a passion for crafting seamless digital 
            <br />
            experiences
            and a proven track record.</p>
         <div className="flex items-center gap-2 mt-5"> 
          
          <button className="flex items-center justify-center gap-2 shadow-md cursor-pointer flex-1 rounded-md py-3 text-grey60 font-bold text-m bg-[#18181A]">
            <Mail size={18}/>
            EMAIL ME
          </button>
          <button className="flex items-center justify-center gap-2  shadow-md cursor-pointer flex-1 rounded-md py-3 text-grey60 font-bold text-m bg-[#18181A]">
            <CalendarDays size={18}/>
            SCHEDULE CALL
          </button>
        </div>
        </div>
      </section>
      {/* STATS DIV */}
      <div className='flex gap-12 items-center justify-center py-5 border-y mt-15 border-[#18181A]'>
        {
          stats.map((item) => (
            <div key={item.id} className='flex flex-col items-center justify-center'>
              <h3 className='text-heading-huge font-bold text-white'> {item.value}+ </h3>
              <p  className='text-grey60 font-medium text-m mt-1.5'> {item.title} </p>
            </div>
          ))
        }

      </div> 
      </>
  )
}

export default Home