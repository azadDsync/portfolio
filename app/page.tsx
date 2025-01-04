import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="text-center pt-40 ">
        <h1 className="text-6xl md:text-8xl font-bold ">Hello World</h1>
      </div>
      <div className="relative pt-10 flex flex-col items-center justify-center  ">
        <div className="absolute  top-1 z-10 text-center">
          {/* <h2 className="text-xl md:text-2xl mt-2">Hello</h2> */}
          <h2 className="text-4xl md:text-6xl mt-2  font-bold">I'm Domendra</h2>
        </div>
        <div className="absolute inset-x-0 z-0 flex justify-between">
          <Image
            src="/left.png"
            alt="Left Hand"
            height={500}
            width={700}
            className="w-1/3 sm:w-1/2  md:w-auto opacity-90"
          />
          <Image
            src="/right.png"
            alt="Right Hand"
            height={500}
            width={700}
            className="w-1/3 sm:w-1/2  md:w-auto opacity-90"
          />
        </div>
      </div>
      <div className="w-full pt-20 px-10 z-20 flex justify-center">
        <p className="  text-6xl text-gray-700 px-4">
          4 weeks ago - Lorem ipsum (/ˈlɔːrəm ˈɪpsəm/) is a dummy or placeholder
          text commonly used in graphic design, publishing, and web development
          to fill empty spaces in a layout that does not yet have content.
        </p>
      </div>

      
    </div>
  );
}
