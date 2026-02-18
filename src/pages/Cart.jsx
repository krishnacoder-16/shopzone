import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, totalPrice } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-10 text-2xl">
        Your cart is empty 🛒
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-4"
        >
          <div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p>
              ${item.price} × {item.quantity}
            </p>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="text-right mt-6 text-2xl font-bold">
        Total: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
}

export default Cart;
