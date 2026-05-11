import { Link } from "react-router";

const Card = ({ item }) => {
  return (
    <Link
      className="bg-white text-center pb-4 rounded-md border border-gray-200
    group duration-300 hover:border-(--main-color) hover:scale-110"
    >
      <div className=" flex justify-center items-center">
        <img src={item.image} className="max-w-full w-36" alt="item-title" />
      </div>
      <h2 className="mt-5 duration-300 group-hover:text-(--main-color)">
        {item.title}
      </h2>
    </Link>
  );
};

export default Card;
