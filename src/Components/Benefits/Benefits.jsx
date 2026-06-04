import {
  FaShippingFast,
  FaLock,
  FaUndo,
  FaHeadset,
} from "react-icons/fa";

export default function Benefits() {
  const benefits = [
    {
      icon: <FaShippingFast />,
      title: "Free Shipping",
      description: "Free shipping on all orders over ₹999.",
    },
    {
      icon: <FaLock />,
      title: "Secure Payment",
      description: "100% secure and trusted payment methods.",
    },
    {
      icon: <FaUndo />,
      title: "Easy Returns",
      description: "Hassle-free returns within 7 days.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      description: "Friendly customer support anytime.",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Why Choose Us
        </h2>
        <p className="text-gray-500 mt-3">
          We provide the best shopping experience for our customers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-3xl text-[#059669]">
                {item.icon}
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-500 text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}