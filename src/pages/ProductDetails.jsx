import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../services/api";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const data = await fetchSingleProduct(id);
      setProduct(data);
    };

    getProduct();
  }, [id]);

  if (!product) {
    return <div className="text-center mt-10 text-2xl">Loading...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full rounded-xl shadow-md"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-6">${product.price}</p>

          <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
