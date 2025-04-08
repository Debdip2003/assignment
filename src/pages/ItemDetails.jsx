import { useParams } from "react-router-dom";
import products from "../data/products";

const ItemDetails = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto py-10 text-center text-gray-600">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded-2xl shadow-sm"
      />

      {/* Product Info */}
      <div className="space-y-5">
        <h2 className="text-4xl font-semibold text-gray-800">{product.name}</h2>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
        <p className="text-2xl font-bold text-orange-500">${product.price}</p>

        <button
          onClick={() => addToCart(product)}
          className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemDetails;
