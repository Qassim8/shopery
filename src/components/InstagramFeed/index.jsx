import React from "react";
import { FaInstagram } from "react-icons/fa";

const images = [
  "/insta-1.png",
  "/insta-2.png",
  "/insta-3.png",
  "/insta-4.png",
  "/insta-5.png",

  "/insta-6.png",
];

const InstagramFeed = () => {
  return (
    <section className="py-10">
      <h2 className="text-center text-2xl font-bold text-(--title-color) mb-8">
        Follow us on Instagram
      </h2>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden"
            >
              <img
                src={img}
                alt="Insta"
                className="w-full h-48 object-cover rounded-none transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <FaInstagram className="text-white text-3xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
