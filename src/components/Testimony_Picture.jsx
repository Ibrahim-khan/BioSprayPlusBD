import Image from "next/image";

const Testimony_Picture = () => {
  return (
    <div className="w-full h-auto">
      <h1 className="text-center font-semibold pt-5 text-[18px] md:text-[30px]">
        Testimony
      </h1>
      <div className="container pt-16 pb-16">
        {/* Adjusting grid and flex properties for responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {/* Each image container */}
          <div className="flex justify-center">
            <Image
              className="border border-gray-500 cursor-pointer shadow-lg shadow-slate-300 rounded-lg transform transition duration-500 hover:scale-110"
              src="/testimony/gangrine.jpg"
              width={200}
              height={200}
              alt="Gangrine Picture"
            />
          </div>
          <div className="flex justify-center">
            <Image
              className="border border-gray-500 cursor-pointer shadow-lg shadow-slate-300 rounded-lg transform transition duration-500 hover:scale-110"
              src="/testimony/brest.jpg"
              width={200}
              height={200}
              alt="Breast Cancer Picture"
            />
          </div>
          <div className="flex justify-center">
            <Image
              className="border border-gray-500 cursor-pointer shadow-lg shadow-slate-300 rounded-lg transform transition duration-500 hover:scale-110"
              src="/testimony/heart.jpg"
              width={200}
              height={200}
              alt="Heart Patient"
            />
          </div>
          <div className="flex justify-center">
            <Image
              className="border border-gray-500 cursor-pointer shadow-lg shadow-slate-300 rounded-lg transform transition duration-500 hover:scale-110"
              src="/testimony/beauty.jpg"
              width={200}
              height={200}
              alt="Anti Aging Picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony_Picture;
