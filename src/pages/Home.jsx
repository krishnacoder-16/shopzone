import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to <span className="text-black">ShopZone</span> 🛍️
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Discover the latest products at unbeatable prices. Shop now and enjoy a seamless shopping experience with us!
        </p>

        <Link
          to="/shop"
          className="bg-black text-white px-8 py-3 rounded-lg text-lg hover:bg-gray-800 transition"
        >
          Start Shopping
        </Link>
      </div>
    </div>
  );
}

export default Home;
