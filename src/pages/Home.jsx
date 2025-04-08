import { Link } from "react-router-dom";
import products from "../data/products";

const Home = ({ addToCart }) => (
  <div className="bg-gray-50 min-h-screen py-10">
    <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
      Explore Our Menu
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <div className="p-5">
            <h3 className="text-2xl font-semibold text-gray-800 mb-1">
              {product.name}
            </h3>
            <p className="text-gray-500 text-sm mb-3">{product.description}</p>
            <p className="text-lg font-bold text-orange-500">
              ${product.price}
            </p>

            <div className="flex justify-between mt-5">
              <Link
                to={`/item/${product.id}`}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
              >
                View
              </Link>
              <button
                onClick={() => addToCart(product)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Home;
