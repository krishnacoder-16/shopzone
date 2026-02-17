import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="border rounded-xl shadow-md p-4 hover:shadow-xl transition">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md"
      />

      <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>

      <Link
        to={`/product/${product.id}`}
        className="inline-block mt-3 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;
