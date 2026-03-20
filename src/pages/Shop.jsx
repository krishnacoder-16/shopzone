import { useEffect, useState, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import { setCategory, setMaxPrice } from "../redux/filterSlice";

function Shop() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  
  // Read active filters from Redux
  const category = useSelector((state) => state.filter.category);
  const maxPrice = useSelector((state) => state.filter.maxPrice);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  // Memoize categories to prevent recalculation on every render
  const categories = useMemo(
    () => ["All", ...new Set(products.map((p) => p.category))],
    [products] // Only recalculate when the fetched products array changes
  );

  // Memoize filter logic so we don't iterate arrays unnecessarily
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = category === "All" || product.category === category;
      const matchesPrice = product.price <= maxPrice;
      return matchesCategory && matchesPrice;
    });
  }, [products, category, maxPrice]); // Only recalculate when products or filters change

  // Memoize handlers to prevent creating new function instances on every render
  const handleCategoryChange = useCallback(
    (e) => dispatch(setCategory(e.target.value)),
    [dispatch]
  );

  const handlePriceChange = useCallback(
    (e) => dispatch(setMaxPrice(Number(e.target.value))),
    [dispatch]
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Shop Products</h2>

      {/* Filter Controls (UI unaffected below this row) */}
      <div className="flex flex-col md:flex-row gap-6 mb-8 bg-white p-4 rounded-lg shadow-sm border">
        {/* Category Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-600 mb-1">
            Category
          </label>
          <select
            value={category}
            onChange={handleCategoryChange}
            className="border p-2 rounded-md outline-none focus:ring-2 focus:ring-black"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Price Filter */}
        <div className="flex flex-col w-full max-w-xs">
          <label className="text-sm font-semibold text-gray-600 mb-1">
            Max Temp Price: ${maxPrice}
          </label>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-gray-500">$0</span>
            <input
              type="range"
              min="0"
              max="2000"
              step="10"
              value={maxPrice}
              onChange={handlePriceChange}
              className="flex-grow cursor-pointer"
            />
            <span className="text-xs text-gray-500">$2000</span>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center text-gray-500 text-xl mt-10">
          No products found matching your filters.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Shop;
