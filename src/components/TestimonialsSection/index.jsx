import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// استيراد ستايلات Swiper
import "swiper/css";
import "swiper/css/navigation";
import TestimonialCard from "./TestimonialsCard";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const testimonialsData = [
  {
    id: 1,
    content:
      "Pellentesque eu nibh eget magna efficitur ultricies ac id eros. Volutpat ante neque, cursus ut velit sed, sollicitudin dictum lacus.",
    author: "Robert Fox",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
  },
  {
    id: 2,
    content:
      "Pellentesque eu nibh eget magna efficitur ultricies ac id eros. Volutpat ante neque, cursus ut velit sed, sollicitudin dictum lacus.",
    author: "Robert Fox",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 4.8,
  },
  {
    id: 3,
    content:
      "Pellentesque eu nibh eget magna efficitur ultricies ac id eros. Volutpat ante neque, cursus ut velit sed, sollicitudin dictum lacus.",
    author: "Robert Fox",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 4,
  },
  {
    id: 4,
    content:
      "Pellentesque eu nibh eget magna efficitur ultricies ac id eros. Volutpat ante neque, cursus ut velit sed, sollicitudin dictum lacus.",
    author: "Robert Fox",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
  },
  {
    id: 5,
    content:
      "Pellentesque eu nibh eget magna efficitur ultricies ac id eros. Volutpat ante neque, cursus ut velit sed, sollicitudin dictum lacus.",
    author: "Robert Fox",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container">
        {/* الهيدر مع أزرار التحكم */}
        <div className="flex justify-between items-end mb-5">
          <div>
            <h2 className="text-2xl font-bold">Client Testimonials</h2>
          </div>

          <div className="flex gap-2">
            <button className="prev-btn w-10 h-10 bg-white cursor-pointer rounded-full border border-gray-200 flex items-center justify-center hover:bg-(--main-color) hover:text-white transition-all">
              <IoArrowBack />
            </button>
            <button className="next-btn w-10 h-10 bg-white cursor-pointer rounded-full border border-gray-200 flex items-center justify-center hover:bg-(--main-color) hover:text-white transition-all">
              <IoArrowForward />
            </button>
          </div>
        </div>

        {/* السلايدر */}
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3000, // يتحرك كل 3 ثواني
            disableOnInteraction: false, // لا يتوقف إذا حركه المستخدم يدوياً
          }}
          loop={true}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonialsData.map((item) => (
            <SwiperSlide key={item.id}>
              <TestimonialCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
