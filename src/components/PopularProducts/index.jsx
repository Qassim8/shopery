import Title from "../SectionsTitle";
import image from "/corn.png";
import ProductCard from "../ProductsCard";

const products = [
  {
    id: 1,
    image,
    title: "Green Apple",
    price: 14.99,
  },
  {
    id: 2,
    image,
    title: "Fresh Indian Malta",
    price: 10.99,
  },
  {
    id: 3,
    image,
    title: "Chinese cabbage",
    price: 22.85,
  },
  {
    id: 4,
    image,
    title: "Green Lettuce",
    price: 4.99,
  },
  {
    id: 5,
    image,
    title: "Eggplant",
    price: 11.0,
  },
  {
    id: 6,
    image,
    title: "Big Potatoes",
    price: 35.68,
  },
  {
    id: 7,
    image,
    title: "Corn",
    price: 17.29,
  },
  {
    id: 8,
    image,
    title: "Fresh Cauliflower",
    price: 11.0,
  },
  {
    id: 9,
    image,
    title: "Green Capsicum",
    price: 12.68,
  },
  {
    id: 10,
    image,
    title: "Green Chill",
    price: 34.0,
  },
];

const PopularProducts = () => {
  return (
    <section className="py-10">
      <div className="container">
        <Title title="Popular Products" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {products.map((item, idx) => (
            <ProductCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
