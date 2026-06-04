import { FaTimes } from "react-icons/fa";

export default function CartDrawer({ isCartOpen, setIsCartOpen }) {
  return (
    <>
      {isCartOpen && (
        <div
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[380px] bg-white shadow-2xl z-50 transform transition-transform duration-300 flex flex-col ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-xl font-bold">Shopping Cart</h2>

          <FaTimes
            onClick={() => {
              console.log("close clicked");
              setIsCartOpen(false);
            }}
            className="cursor-pointer text-xl"
          />
        </div>
      </div>
    </>
  );
}
