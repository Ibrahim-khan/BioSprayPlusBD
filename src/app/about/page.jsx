import Image from "next/image";

const Page = () => {
  return (
    <div className="container mx-auto px-4">
      {/* About Us Section */}
      <section className="py-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold">About Us</h1>
        </div>
        <div className="text-gray-700 space-y-6">
          <p>
            <b>Welcome to Nutric:</b> Your Trusted Source for Nutrition
          </p>
          <p>
            At Nutric, we are dedicated to providing you with the highest
            quality nutrition products and information to support your health
            and well-being. We understand the importance of proper nutrition in
            leading a balanced and fulfilling lifestyle, and we are committed to
            being your reliable partner on this journey.
          </p>
          <p>
            <b>Our Mission:</b>
            <br />
            Our mission is to empower individuals to make informed choices about
            their nutrition and achieve optimal health. We strive to offer a
            comprehensive range of top-quality nutrition products that are
            carefully formulated to meet your unique dietary needs. We believe
            that everyone deserves access to high-quality nutrition, and we are
            here to make it accessible and convenient for you.
          </p>
          <p>
            <b>Quality Assurance:</b>
            <br />
            We take pride in maintaining the highest standards of quality in all
            our products. From sourcing the finest ingredients to employing
            rigorous manufacturing processes, we ensure that every product you
            receive is safe, effective, and meets our strict quality guidelines.
            Your health and satisfaction are our top priorities.
          </p>
          <p>
            <b>Expert Guidance:</b>
            <br />
            Nutric is not just a place to buy nutrition products; it’s a
            community where you can find reliable information and guidance from
            our team of nutrition experts. Our knowledgeable professionals are
            passionate about helping you make educated choices for your health.
            Whether you have specific dietary goals or need personalized advice,
            we are here to support you every step of the way.
          </p>
          <p>
            <b>Customer Satisfaction:</b>
            <br />
            We value your trust and strive to provide exceptional customer
            service. Your satisfaction is our ultimate goal, and we are
            committed to delivering a seamless shopping experience from start to
            finish. If you have any questions, concerns, or feedback, our
            friendly customer support team is always ready to assist you.
          </p>
          <p>
            <b>Join Our Nutric Community:</b>
            <br />
            We invite you to explore our wide range of nutrition products and
            join our ever-growing Nutric community. By choosing Nutric, you are
            choosing quality, expertise, and a trusted partner in your journey
            towards a healthier and happier life.
          </p>
          <p>
            Thank you for choosing Nutric. We look forward to serving you and
            being a part of your wellness story.
          </p>
        </div>
      </section>
      {/* Management Section */}
      <section className="py-16">
        <div className="text-center mb-8">
          <h1 className="text-xl md:text-3xl font-semibold">Management</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Management Member 1 */}
          <div className="text-center">
            <a
              href="/management/lim.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/management/lim.png"
                alt="Mr. Lim Chee Wei"
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
            </a>
            <h2 className="font-semibold mt-4">Mr. Lim Chee Wei</h2>
            <p>Group Chairman</p>
          </div>
          {/* Management Member 2 */}
          <div className="text-center">
            <a
              href="/management/joseph.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/management/joseph.png"
                alt="Mr. Joseph Thong"
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
            </a>
            <h2 className="font-semibold mt-4">Mr. Joseph Thong</h2>
            <p>Group CEO</p>
          </div>
          {/* Management Member 3 */}
          <div className="text-center">
            <a
              href="/management/leslie.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/management/leslie.png"
                alt="Mr. Leslie Chiong"
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
            </a>
            <h2 className="font-semibold mt-4">Mr. Leslie Chiong</h2>
            <p>Group Executive Director</p>
          </div>
          {/* Management Member 4 */}
          <div className="text-center">
            <a
              href="/management/chuichui.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/management/chuichui.png"
                alt="Ms. Yu Chui Chui"
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
            </a>
            <h2 className="font-semibold mt-4">Ms. Yu Chui Chui</h2>
            <p>Group Executive Director</p>
          </div>
          {/* Management Member 5 */}
          <div className="text-center">
            <a
              href="/management/tyson.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/management/tyson.png"
                alt="Mr. Tyson Lim"
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
            </a>
            <h2 className="font-semibold mt-4">Mr. Tyson Lim</h2>
            <p>Regional Manager</p>
          </div>
          {/* Management Member 6 */}
          <div className="text-center">
            <a
              href="/management/cf.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/management/cf.png"
                alt="Mr. Chooi Chan Fei"
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
            </a>
            <h2 className="font-semibold mt-4">Mr. Chooi Chan Fei</h2>
            <p>Country Manager</p>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-16">
        <div className="text-center mb-8">
          <h1 className="text-xl md:text-3xl font-semibold">Certification</h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          <a
            href="/certificate/bd_nutrition_food.jpeg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/certificate/bd_nutrition_food.jpeg"
              alt="Institute of Nutrition and Food Science"
              width={200}
              height={200}
              className="w-full h-auto object-cover rounded-lg border-4 border-gray-300 hover:border-indigo-500 transition-all duration-300"
            />
          </a>
          <a
            href="/certificate/abdul_malek.jpeg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/certificate/abdul_malek.jpeg"
              alt="Doctor's Certificate"
              width={200}
              height={200}
              className="w-full h-auto object-cover rounded-lg border-4 border-gray-300 hover:border-indigo-500 transition-all duration-300"
            />
          </a>
          <a
            href="/certificate/atom.jpeg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/certificate/atom.jpeg"
              alt="BCSIR Analysis report"
              width={200}
              height={200}
              className="w-full h-auto object-cover rounded-lg border-4 border-gray-300 hover:border-indigo-500 transition-all duration-300"
            />
          </a>
          <a
            href="/certificate/halal.jpeg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/certificate/halal.jpeg"
              alt="Halal Certificate"
              width={200}
              height={200}
              className="w-full h-auto object-cover rounded-lg border-4 border-gray-300 hover:border-indigo-500 transition-all duration-300"
            />
          </a>
          <a
            href="/certificate/dsam.jpeg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/certificate/dsam.jpeg"
              alt="Direct selling association of Malaysia"
              width={200}
              height={200}
              className="w-full h-auto object-cover rounded-lg border-4 border-gray-300 hover:border-indigo-500 transition-all duration-300"
            />
          </a>
          <a
            href="/certificate/fda.jpeg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/certificate/fda.jpeg"
              alt="FDA registration"
              width={200}
              height={200}
              className="w-full h-auto object-cover rounded-lg border-4 border-gray-300 hover:border-indigo-500 transition-all duration-300"
            />
          </a>
          <a
            href="/certificate/bdscience.jpeg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/certificate/bdscience.jpeg"
              alt="BD Science"
              width={200}
              height={200}
              className="w-full h-auto object-cover rounded-lg border-4 border-gray-300 hover:border-indigo-500 transition-all duration-300"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Page;
