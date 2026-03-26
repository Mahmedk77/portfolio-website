
interface Props {
    icon: React.ReactNode;
    heading: String;
    description: String;
}

const ServiceCard = ({icon, heading, description}: Props) => {
  return (
    <>
    <div className="flex flex-col gap-2 items-start justify-center px-5 py-4 bg-dark4  rounded-md">
        {/* HEADER */}
        <div className="flex justify-start items-center w-full my-1 gap-2 ">
            <div className="p-2.5 bg-[#18181A] border-dark13 rounded-md">
                {icon}
            </div>
            <h3 className="flex-1 text-heading-m text-white font-bold">
                {heading}
            </h3>
        </div>
        <div>
            <p className="text-m text-grey60 font-bold ">
                {description}
            </p>
        </div>

    </div>
    </>
  )
}

export default ServiceCard