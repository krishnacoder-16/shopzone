import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">ShopZone</h1>

        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/shop" className="hover:text-gray-300">
            Shop
          </Link>
          <Link to="/cart" className="hover:text-gray-300">
            Cart
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
