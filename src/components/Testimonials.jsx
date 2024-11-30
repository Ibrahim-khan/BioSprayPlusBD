import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="container py-10">
      <div className="grid grid-cols-1 md:grid-cols-[25%,75%] gap-0 md:gap-4 lg:my-10">
        {/* Testimonial part */}
        <div className="border border-gray-300 rounded-2xl p-4 flex flex-col justify-center items-center">
          <div className="text-center flex flex-col items-center gap-4">
            <Image
              className="rounded-full inline-block"
              src="/images/khan.jpg"
              width={80}
              height={80}
              alt="Ambassador Picture"
            />
            <h2 className="text-gray-500 font-black text-[20px]">
              Ibrahim Khan
            </h2>
            <p className="text-gray-500 text-center">
              Ambassador <br /> (ABNutric Bangladesh)
            </p>
            <p className="text-gray-500 px-2 text-center">
              বায়ো স্প্রে প্লাস (Bio Spray Plus) সম্পর্কিত যেকোনো তথ্যের জন্য
              যোগাযোগ করুনঃ +880 1742 095 986
            </p>
          </div>
        </div>

        {/* Video part */}
        <div className="h-[500px] md:h-[500px] lg:h-[500px] grid place-items-center">
          <div className="relative w-full max-w-full aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/ovmdHhi1dMA?si=kPQipkBOBOfKMkrg"
              title="Bio Spray Plus ki ki kaj kore"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
