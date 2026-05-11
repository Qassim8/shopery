import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

const Newsletter = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="max-w-md">
          <h3 className="text-xl font-bold text-[var(--title-color)]">
            Subcribe our Newsletter
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </p>
        </div>

        <div className="flex-1 max-w-xl w-full flex items-center bg-white border border-gray-200 rounded-full overflow-hidden">
          <input
            type="email"
            placeholder="Your email address"
            className="w-3/4 md:w-full md:flex-1 px-6 py-3 outline-none text-sm"
          />
          <button className="bg-(--main-color) text-white px-5 md:px-8 py-3 rounded-full text-sm md:text-[16px] md:font-semibold transition-hover hover:bg-green-700">
            Subscribe
          </button>
        </div>

        <div className="flex gap-2">
          {[FaFacebookF, FaTwitter, FaPinterestP, FaInstagram].map(
            (Icon, index) => (
              <div
                key={index}
                className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors hover:bg-[var(--main-color)] hover:text-white text-gray-600"
              >
                <Icon />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
