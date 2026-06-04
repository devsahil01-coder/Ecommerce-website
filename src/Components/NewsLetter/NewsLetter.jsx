export default function Newsletter() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 py-16">
      <div className="bg-[#059669] rounded-3xl p-8 md:p-16 text-center text-white">
        
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Subscribe To Our Newsletter
        </h2>

        <p className="max-w-2xl mx-auto text-lg mb-8 text-green-50">
          Get the latest updates on new arrivals, exclusive offers,
          discounts, and special promotions.
        </p>

        <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-5 py-4 rounded-xl bg-white text-black outline-none"
          />

          <button className="bg-black text-white px-8 py-4 rounded-xl hover:opacity-90 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}