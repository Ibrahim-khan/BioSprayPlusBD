"use client";

import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          {/* Social Media Icons */}
          <div className="hidden lg:flex gap-1">
            <div className="header_top__icon_wrapper">
              <a
                href="https://www.facebook.com/BioSpray.Official.page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </div>
            <div className="header_top__icon_wrapper">
              <a
                href="https://www.youtube.com/@BioSprayPlusColostrumLiquid/videos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </div>
            <div className="header_top__icon_wrapper">
              <FaLinkedin />
            </div>
            <div className="header_top__icon_wrapper">
              <FaTwitter />
            </div>
          </div>

          {/* Fixed Notice Text */}
          <div className="text-gray-700 ml-2 text-[16px] overflow-hidden whitespace-nowrap flex items-center">
            <b>নোটিশ:</b>
            {/* Scrolling Text */}
            <div className="scrolling-text ml-2">
              প্রতি শুক্রবার বায়ো স্প্রে প্লাস এর অফিসে ফ্রি সেমিনার এর আয়োজন
              করা হয় (সকাল ১০:০০ থেকে দুপুর ১২:৩০)। বায়ো স্প্রে প্লাস সম্পর্কে
              বিস্তারিত জানতে সেমিনারে আপনি আমন্ত্রিত।
            </div>
          </div>

          {/* Language Selector */}
          <div className="hidden lg:flex gap-4">
            <select
              className="text-gray-500 text-[12px] w-[80px]"
              name="language"
              id="language"
            >
              <option value="Bangla">Bangla</option>
              <option value="English">English</option>
            </select>
          </div>
        </div>
      </div>

      {/* CSS for scrolling effect */}
      <style jsx>{`
        .scrolling-text {
          display: inline-block;
          white-space: nowrap;
          animation: scroll 35s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default HeaderTop;
