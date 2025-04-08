import { useState } from "react";

const Checkout = ({ cartItems }) => {
  const [deliveryOption, setDeliveryOption] = useState("standard");
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed! Thank you.");
  };

  const totalPrice =
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0) +
    (deliveryOption === "express" ? 5 : deliveryOption === "eco" ? 2 : 0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Checkout</h2>

      <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 space-y-4">
        <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">
          Order Summary
        </h3>
        {cartItems.map((item) => (
          <div className="flex justify-between text-gray-600" key={item.id}>
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="flex justify-between font-semibold text-gray-800 pt-2 border-t">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-sm p-6 space-y-5"
      >
        <h3 className="text-lg font-semibold text-gray-700">
          Delivery Details
        </h3>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="tel"
          name="contact"
          placeholder="Contact Number"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <textarea
          name="address"
          placeholder="Delivery Address"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-xl resize-none h-28 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <select
          value={deliveryOption}
          onChange={(e) => setDeliveryOption(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="standard">Standard Delivery (Free)</option>
          <option value="express">Express Delivery (+$5)</option>
          <option value="eco">Eco-Friendly Delivery (+$2)</option>
        </select>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
        >
          Confirm & Pay
        </button>
      </form>
    </div>
  );
};

export default Checkout;
