import {
  FaLaptop,
  FaTshirt,
  FaMobileAlt,
  FaClock,
  FaGem,
  FaShoppingBag,
} from "react-icons/fa";

const categories = [
  { name: "All", value: "all", icon: FaShoppingBag },
  { name: "Beauty", value: "beauty", icon: FaGem },
  { name: "Fragrances", value: "fragrances", icon: FaClock },
  { name: "Smartphones", value: "smartphones", icon: FaMobileAlt },
  { name: "Laptops", value: "laptops", icon: FaLaptop },
  { name: "Mens Fashion", value: "mens-shirts", icon: FaTshirt },
];

export default function Categories() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Shop by Category</h2>
        <p className="text-gray-500 mt-2">
          Explore products from your favorite categories
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {categories.map((category) => (
          <div
            key={category.value}
            className="flex flex-col items-center justify-center gap-4 cursor-pointer"
          >
            <span className="text-4xl text-[#059669] hover:-translate-y-1 transition-all duration-300">
              <category.icon />
            </span>

            <h3 className="font-semibold text-gray-800 text-center">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}