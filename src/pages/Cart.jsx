import { Link } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is currently empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white shadow-sm border border-gray-200 p-5 rounded-2xl"
            >
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500">
                  ${item.price} x {item.quantity}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline font-medium"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-6">
            <p className="text-xl font-bold text-gray-800">
              Total:{" "}
              <span className="text-orange-500">${totalPrice.toFixed(2)}</span>
            </p>

            <Link to="/checkout">
              <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
