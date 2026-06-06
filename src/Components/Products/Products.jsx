import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

function Products({ search, selectedCategory }) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  const productsPerPage = 8;

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }, []);

  // Reset page when search/category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategory]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct =
    indexOfLastProduct - productsPerPage;

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            <div className="relative overflow-hidden bg-gray-50">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
              />

              <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full">
                {Math.round(product.discountPercentage)}% OFF
              </span>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                <button className="bg-white text-black px-5 py-2 rounded-full font-medium shadow-lg">
                  Quick View
                </button>
              </div>
            </div>

            <div className="p-5">
              <p className="text-sm text-green-600 font-medium capitalize">
                {product.category}
              </p>

              <h3 className="font-semibold text-lg mt-2 line-clamp-2 h-14">
                {product.title}
              </h3>

              <div className="flex items-center gap-1 mt-3">
                <span>⭐</span>
                <span className="font-medium">
                  {product.rating}
                </span>
                <span className="text-gray-400 text-sm">
                  ({product.stock} in stock)
                </span>
              </div>

              <div className="flex items-center gap-3 mt-4">
                <span className="text-2xl font-bold text-gray-900">
                  ₹{product.price}
                </span>

                <span className="text-gray-400 line-through">
                  ₹
                  {Math.round(
                    product.price +
                      (product.price *
                        product.discountPercentage) /
                        100
                  )}
                </span>
              </div>

              <button
                onClick={() => dispatch(addToCart(product))}
                className="w-full mt-5 bg-black text-white py-3 rounded-2xl font-medium hover:bg-[#059669] cursor-pointer transition"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
          <button
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage((prev) => prev - 1)
            }
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() =>
                setCurrentPage(index + 1)
              }
              className={`w-10 h-10 rounded-lg border transition ${
                currentPage === index + 1
                  ? "bg-[#059669] text-white border-[#059669]"
                  : "bg-white"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => prev + 1)
            }
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}

export default Products;