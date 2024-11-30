import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-blackish text-gray-400 text-center py-5">
      <div className="container mx-auto px-4">
        {/* Adjusting the layout for responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-5">
          {/* Address Section */}
          <div className="text-center">
            <p>
              <b>Address:</b>
              <br />
              <i>
                Shadhin Online Public Ltd.
                <br />
                Ayesha Shopping Complex,
                <br />
                85, Siddeshwari road,
                <br />
                Dhaka-1217.
              </i>
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p>
              <b>Contact:</b>
              <br />
              Email: <i>ibrahim2013khan@gmail.com</i>
              <br />
              Phone: 01742 095 986.
              <br />
              WhatsApp & Imo Connect: +880 1742 095 986
            </p>
          </div>

          {/* Social Links Section */}
          <div className="flex justify-center space-x-5">
            <a
              href="https://www.facebook.com/BioSpray.Official.page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="header_top__icon_wrapper"
                src="/logo/fb.png"
                alt="facebook page"
                width={30}
                height={30}
              />
            </a>

            <a
              href="https://www.youtube.com/@BioSprayPlusColostrumLiquid/featured"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="header_top__icon_wrapper"
                src="/logo/youtube.png"
                alt="Youtube Channel"
                width={30}
                height={30}
              />
            </a>

            <a href="/">
              <Image
                className="header_top__icon_wrapper"
                src="/logo/linkedin.png"
                alt="Linkedin"
                width={30}
                height={30}
              />
            </a>

            <a
              href="http://www.abnutric.com/Web/products/ListOfProducts-bio.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="header_top__icon_wrapper"
                src="/logo/nutric.png"
                alt="Nutric"
                width={90}
                height={90}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
