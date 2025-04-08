import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-500">
          Foodie<span className="text-gray-800">App</span>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden md:block flex-1 mx-6">
          <input
            type="text"
            placeholder="Search for food, groceries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 items-center text-gray-700 font-medium">
          <li>
            <Link to="/checkout" className="hover:text-orange-500 transition">
              Checkout
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="flex items-center gap-1 hover:text-orange-500 transition"
            >
              <ShoppingCart size={20} />
              Cart
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-2">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />
      </div>

      {/* Mobile Links */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow">
          <ul className="space-y-3 text-gray-700 font-medium">
            <li>
              <Link
                to="/checkout"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-orange-500 transition"
              >
                Checkout
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-orange-500 transition"
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
