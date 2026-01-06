import Home from "@/components/shared/Home.jsx"
import Experince from "@/components/shared/Experience.jsx"

const page = () => {
  return (
  <section className=''>
    <div className="border">
      <Home />
    </div>
    <div className="mt-25">
      <Experince />
    </div>
  </section>
  )
}

export default page