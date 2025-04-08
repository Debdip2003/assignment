import React from "react";

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-40 object-cover"
    />
    <div className="p-4">
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-gray-500">${product.price.toFixed(2)}</p>
      <Link to={`/item/${product.id}`}>
        <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-xl w-full hover:bg-orange-600">
          Add to Cart
        </button>
      </Link>
    </div>
  </div>
);

export default ProductCard;
