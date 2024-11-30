import Image from "next/image";

const Certificate_Gallery = () => {
  return (
    <div className="w-full h-auto bg-gray-100">
      <h1 className="text-center font-semibold pt-5 text-[18px] md:text-[30px]">
        Certificate & Gallery
      </h1>
      <div className="py-16">
        <div className="grid md:grid-cols-2 space-y-16 md:space-x-5 md:px-5">
          <div className="w-full space-y-5">
            <div className="flex space-x-5 justify-center">
              <a
                href="/certificate/bd_nutrition_food.jpeg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="border border-gray-500 cursor-pointer shadow-lg shadow-slate-300 rounded-lg transform transition duration-500 hover:scale-110"
                  src="/certificate/bd_nutrition_food.jpeg"
                  width={200}
                  height={200}
                  alt="Nutrition Certificate"
                />
              </a>
              <a
                href="/certificate/bdscience.jpeg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="border border-gray-500 cursor-pointer shadow-lg shadow-slate-300 rounded-lg transform transition duration-500 hover:scale-110"
                  src="/certificate/bdscience.jpeg"
                  width={200}
                  height={200}
                  alt="dp"
                />
              </a>
            </div>
            <div className="flex space-x-5 justify-center">
              <a
                href="/certificate/abdul_malek.jpeg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="border border-gray-500 cursor-pointer shadow-lg shadow-slate-300 rounded-lg transform transition duration-500 hover:scale-110"
                  src="/certificate/abdul_malek.jpeg"
                  width={200}
                  height={200}
                  alt="dp"
                />
              </a>
              <a
                href="/certificate/halal.jpeg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="border border-gray-500 cursor-pointer shadow-lg shadow-slate-300 rounded-lg transform transition duration-500 hover:scale-110"
                  src="/certificate/halal.jpeg"
                  width={200}
                  height={200}
                  alt="dp"
                />
              </a>
            </div>
          </div>

          <div className="w-full space-y-5">
            <div className="flex space-x-5 justify-center">
              <a
                href="/gallery/training.jpeg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="border border-gray-500 cursor-pointer shadow-lg shadow-slate-300 rounded-lg transform transition duration-500 hover:scale-110"
                  src="/gallery/training.jpeg"
                  width={200}
                  height={200}
                  alt="dp"
                />
              </a>
              <a
                href="/gallery/cfmeet.jpeg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="border border-gray-500 cursor-pointer shadow-lg shadow-slate-300 rounded-lg transform transition duration-500 hover:scale-110"
                  src="/gallery/cfmeet.jpeg"
                  width={200}
                  height={200}
                  alt="dp"
                />
              </a>
            </div>
            <div className="flex space-x-5 justify-center">
              <a
                href="/gallery/thysonmeet.jpeg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="border border-gray-500 cursor-pointer shadow-lg shadow-slate-300 rounded-lg transform transition duration-500 hover:scale-110"
                  src="/gallery/thysonmeet.jpeg"
                  width={200}
                  height={200}
                  alt="dp"
                />
              </a>
              <a
                href="/gallery/seminar.jpeg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="border border-gray-500 cursor-pointer shadow-lg shadow-slate-300 rounded-lg transform transition duration-500 hover:scale-110"
                  src="/gallery/seminar.jpeg"
                  width={200}
                  height={200}
                  alt="dp"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate_Gallery;
