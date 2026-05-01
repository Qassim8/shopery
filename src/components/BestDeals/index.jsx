import React from "react";
import image1 from "/best-deal-1.png";
import image2 from "/best-deal-2.png";
import image3 from "/best-deal-3.png";
import BestDealsCard from "./BestDealCard";

const times = [
  { time: 0o0, desc: "DAYS", sign: ":" },
  { time: 0o2, desc: "HOURS", sign: ":" },
  { time: 18, desc: "MINS", sign: ":" },
  { time: 46, desc: "SECS" },
];

const BestDeals = () => {
  const deals = [
    {
      id: 1,
      image: image1,
      title: "BEST DEALS",
      subtitle: "Sale of the Month",
      color: "white",
    },
    {
      id: 2,
      image: image2,
      title: "85% FAT FREE",
      subtitle: "Low-Fat Meat",
      color: "white",
    },
    {
      id: 3,
      image: image3,
      title: "SUMMER SALE",
      subtitle: "100% Fresh Fruit",
      color: "gray-800",
    },
  ];
  return (
    <section className="py-10">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-3">
        {deals.map((info) => (
          <BestDealsCard
            info={info}
            description={
              info.id === 1 ? (
                <div className="flex items-center gap-5">
                  {times.map((time, index) => (
                    <div
                      className="flex items-center gap-5 text-white"
                      key={index}
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-lg">{time.time}</span>
                        <span>{time.desc}</span>
                      </div>
                      <div>{time.sign}</div>
                    </div>
                  ))}
                </div>
              ) : info.id === 2 ? (
                <p className="text-white md:my-4">
                  Started at <span className="text-amber-500">$79.99</span>
                </p>
              ) : (
                <p className="text-gray-800 md:my-4">
                  Up to
                  <span className="ms-2 p-2 text-amber-400 bg-gray-800 rounded-md">
                    %64 OFF
                  </span>
                </p>
              )
            }
            key={info.id}
          />
        ))}
      </div>
    </section>
  );
};

export default BestDeals;
