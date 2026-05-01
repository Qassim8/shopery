import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";

const TestimonialCard = ({ content, author, role, image, rating }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex flex-col h-full">
      {/* أيقونة الاقتباس باللون الأخضر المميز للتصميم */}
      <div className="mb-2">
        <RiDoubleQuotesR className="text-(--main-color) text-4xl opacity-40" />
      </div>

      {/* نص الرأي */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6 grow">
        {content}
      </p>

      {/* معلومات العميل والتقييم */}
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-3">
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-[#3a2d2d] text-sm">{author}</h4>
            <p className="text-gray-400 text-xs">{role}</p>
          </div>
        </div>

        {/* النجوم */}
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={i < rating ? "text-orange-400" : "text-gray-200"}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
