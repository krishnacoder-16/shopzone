import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

function Navbar() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity, 0
  );

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-4 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">ShopZone</h1>

        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-gray-600 dark:hover:text-gray-300 font-medium">
            Home
          </Link>
          <Link to="/shop" className="hover:text-gray-600 dark:hover:text-gray-300 font-medium">
            Shop
          </Link>
          <Link to="/cart" className="hover:text-gray-600 dark:hover:text-gray-300 font-medium">
            Cart ({totalItems})
          </Link>
          <Link to="/contact" className="hover:text-gray-600 dark:hover:text-gray-300 font-medium">
            Contact
          </Link>
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded bg-gray-700 hover:bg-gray-600 transition flex items-center justify-center"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
