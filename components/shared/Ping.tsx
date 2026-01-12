const Ping = () => {
  return (
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
      <span className="relative inline-flex h-2 w-2  rounded-full bg-green-600" />
    </span>
  )
}

export default Ping
