import { FaArrowRight } from "react-icons/fa";
import ShopNowBtn from "../ShopNowBtn";

const AddsSection = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-3 md:px-0 grid md:grid-cols-3 gap-5">
        <div className="relative h-90 md:h-150 rounded-[10px] p-10 bg-[url('/first-add.jpg')] bg-cover overflow-hidden md:col-span-2 md:row-span-2">
          <div className="absolute top-0 start-0 w-full h-full bg-linear-to-r from-black/60 to-slate-50/5 "></div>
          <div className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-8 md:max-w-md">
            <h2 className="text-white text-[32px] md:text-[48px] leading-[120%] font-bold">
              Fresh & Healthy Organic Food
            </h2>
            <div className="flex flex-col md:gap-3 ps-2 border-s-[#84d187] border-s-2">
              <div className="text-white flex items-center gap-3 font-bold md:text-[20px]">
                <span>Sale up to</span>
                <span className="py-1 px-3 bg-[#ff8a00] rounded-[5px]">
                  30% OFF
                </span>
              </div>
              <div className="text-gray-300">
                free shipping on all you order.
              </div>
            </div>
            <ShopNowBtn color="(--main-color)" bg="white" needed={1} />
          </div>
        </div>
        <div className="relative h-72 rounded-[10px] p-10 bg-[url('/second-add.jpg')] bg-cover overflow-hidden transform scale-x-[-1]">
          <div className="flex flex-col gap-3 inset-0 transform scale-x-[-1]">
            <p className="font-bold">SUMMER SALE</p>
            <h2 className="text-[24px] md:text-[32px] leading-[120%] font-bold">
              75% OFF
            </h2>
            <p className="py-2 text-gray-600">Only fruite & Vigitable</p>
            <ShopNowBtn color="(--main-color)" start={1} />
          </div>
        </div>
        <div className="relative h-72 rounded-[10px] p-10 text-center bg-[url('/third-add.jpg')] bg-cover overflow-hidden">
          <div className="absolute top-0 start-0 w-full h-full bg-slate-900/70"></div>
          <div className="absolute text-white flex flex-col gap-5 start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            <p>BEST DEAL</p>
            <h2 className="font-bold text-[24px] md:text-[32px] leading-[120%]">
              Special Products Deal of the Month
            </h2>
            <ShopNowBtn color="(--main-color)" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddsSection;
