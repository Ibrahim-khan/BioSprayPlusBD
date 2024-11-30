import Image from "next/image";

const page = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Profile Section */}
      <div className="place-items-center space-y-5 lg:space-y-8">
        {/* Profile Image */}
        <div className="profilepic mb-6 lg:mb-0">
          <Image
            src="/profile.png"
            width={300}
            height={400}
            alt="Bangladesh-Malaysia"
            className="w-full h-auto max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Profile Description */}
        <div className="profile text-gray-700 bg-gray-100 p-5 rounded-md shadow-lg border border-dashed border-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Company Profile
          </h2>
          <p className="text-sm lg:text-base leading-relaxed">
            <span className="block mb-2">
              * Nutric group, a leader in regenerative health supplements since
              2000.
            </span>
            <span className="block mb-2">
              * Expanded its reach in Bangladesh since 2012.
            </span>
            <span className="block mb-2">
              * Officially launched in Bangladesh on 11th May 2012.
            </span>
            <span className="block mb-2">
              * Our flagship product, Bio Spray Plus, is one of the best-selling
              products around the world.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
