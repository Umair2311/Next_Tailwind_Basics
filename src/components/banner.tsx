import Image from "next/image"
import BannerImage from "../../public/metaverse_foto.jpeg"
function banner() {
  return (
    <div className="flex h-[calc(100vh-64px)] flex-wrap">
      <div className="flex items-center text-black lg:w-2/5 text-7xl py-1.5 px-6 relative z-10 w-full h-full bg-black-rgba lg:bg-transparent">
        <h1 className="md:max-w-xl max-w-md my-0 lg:mx-auto text-white lg:text-black ml-0 text-5xl md:text-7xl font-roboto-slab lg:font-extrabold">
          Welcome to Metaverse World
        </h1>
      </div>
      <div className="lg:w-3/5 absolute lg:static h-full w-full">
        <Image
          className="shadow-lg w-full h-full object-cover"
          src={BannerImage}
          alt=""
        />
      </div>
    </div>
  )
}

export default banner
