import Title from "../SectionsTitle";
import image from "/corn.png";
import ProductCard from "../ProductsCard";

const products = [
  {
    image,
    title: "Green Apple",
    price: 14.99,
  },
  {
    image,
    title: "Fresh Indian Malta",
    price: 10.99,
  },
  {
    image,
    title: "Chinese cabbage",
    price: 22.85,
  },
  {
    image,
    title: "Green Lettuce",
    price: 4.99,
  },
  {
    image,
    title: "Eggplant",
    price: 11.0,
  },
  {
    image,
    title: "Big Potatoes",
    price: 35.68,
  },
  {
    image,
    title: "Corn",
    price: 17.29,
  },
  {
    image,
    title: "Fresh Cauliflower",
    price: 11.0,
  },
  {
    image,
    title: "Green Capsicum",
    price: 12.68,
  },
  {
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
