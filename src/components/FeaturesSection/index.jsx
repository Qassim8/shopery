import { BsBoxSeam } from "react-icons/bs";
import { LiaShoppingBagSolid, LiaTruckSolid } from "react-icons/lia";
import { TbHeadset } from "react-icons/tb";

const Featuers = () => {
  const features = [
    {
      icon: <LiaTruckSolid />,
      title: "Free Shipping",
      description: "Free shipping on all your order",
    },
    {
      icon: <TbHeadset />,
      title: "Customer Support 24/7",
      description: "Instant acssess to support",
    },
    {
      icon: <LiaShoppingBagSolid />,
      title: "100% Secure Payment",
      description: "We ensure your money is save",
    },
    {
      icon: <BsBoxSeam />,
      title: "Money-Back Guranatee",
      description: "30 Days money-back guranatee",
    },
  ];
  return (
    <section className="py-3">
      <div className="container mx-auto px-3 md:px-0">
        <div className="bg-white p-10 shadow-lg rounded-md grid md:grid-cols-4 gap-5">
          {features.map(({ icon, title, description }, id) => (
            <div
              key={id}
              className={`flex items-center gap-3 ${id === 3 ? "" : "pb-4 md:pb-0"}`}
            >
              <div className="text-(--main-color) text-4xl">{icon}</div>
              <div>
                <h3 className="font-bold">{title}</h3>
                <p className="text-gray-500 text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featuers;
