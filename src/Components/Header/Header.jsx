
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";


const Header = () => {

 
  
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
  <div className="max-w-[1400px] mx-auto px-4 h-20 flex items-center justify-between gap-6">

  
    <div>
      <h1 className="text-2xl md:text-3xl font-extrabold">
        
        <span className="text-black">Shop</span>
        <span className="text-[#059669]">Sphere</span>
      
        
      </h1>
    </div>

  
    <div className="flex flex-1 max-w-xl">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full py-3 pl-5 pr-4 bg-gray-100 rounded-full outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>
    </div>

    <nav className="hidden lg:flex items-center gap-8 font-medium">
      <a href="/" className="hover:text-[#059669] transition">
        Home
      </a>
      <a href="/shop" className="hover:text-[#059669] transition">
        Shop
      </a>
      <a href="/categories" className="hover:text-[#059669] transition">
        Categories
      </a>
    </nav>

  
    <div className="flex items-center gap-5">

      <div className="relative cursor-pointer">
        <span className="absolute -top-2 -right-2 bg-[#059669] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
          0
        </span>
        <FaShoppingCart className="text-2xl hover:text-[#059669] transition"   onClick={() => setIsCartOpen(true)} />
      </div>
    </div>

  </div>
</header>
  );
};

export default Header;
