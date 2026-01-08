import Home from "@/components/shared/Home"
import Experince from "@/components/shared/Experience"
import Stacks from "@/components/shared/Stacks"

const page = () => {
  return (
  <section className=''>
    <div className="">
      <Home />
    </div>
    <div className="mt-25">
      <Experince />
    </div>
    <div className="mt-25">
      <Stacks />
    </div>
  </section>
  )
}

export default page