import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} from "../../redux/cartSlice";

export default function CartDrawer({ isCartOpen, setIsCartOpen }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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
        {/* HEADER */}
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-xl font-bold">Shopping Cart</h2>

          <FaTimes
            onClick={() => setIsCartOpen(false)}
            className="cursor-pointer text-xl"
          />
        </div>

        {/* ITEMS */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-center mt-20 text-gray-500">
              Cart is empty
            </p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 border-b pb-3"
              >
                <img
                  src={item.thumbnail}
                  className="w-14 h-14 object-cover rounded"
                />

                <div className="flex-1">
                  <h3 className="text-sm font-semibold line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    ₹{item.price}
                  </p>

                  {/* QUANTITY CONTROLS */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        dispatch(decreaseQty(item.id))
                      }
                      className="px-3  font-bold py-1 bg-gray-200 rounded cursor-pointer"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        dispatch(increaseQty(item.id))
                      }
                      className="px-3 font-bold  py-1 bg-gray-200 rounded cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() =>
                    dispatch(removeFromCart(item.id))
                  }
                  className="text-red-500 text-sm cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* FOOTER */}
        {cartItems.length > 0 && (
          <div className="border-t p-4 space-y-3">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

            <button
              onClick={() => dispatch(clearCart())}
              className="w-full bg-red-500 text-white py-2 rounded cursor-pointer"
            >
              Clear Cart
            </button>

            <button className="w-full bg-green-600 text-white py-2 rounded cursor-pointer">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}