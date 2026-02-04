import React, { useState, useMemo } from "react";
import LandingNav from "../components/LandingNav";
import ProductCard from "../components/ProductCard";
import {
  FaFilter,
  FaTimes,
  FaThLarge,
  FaList,
  FaChevronDown,
} from "react-icons/fa";
import { Link, useParams, useSearchParams } from "react-router-dom";

import { allProducts } from "../data/products";

// Helper function moved to module scope (or could be imported if we wanted to share it)
const getCategoryFromSlug = (slug) => {
  const categoryMap = {
    electronics: "Electronics",
    fashion: "Fashion",
    "home-garden": "Home",
    home: "Home",
    sports: "Sports",
    "beauty-health": "Beauty",
    beauty: "Beauty",
    automobiles: "Auto",
    auto: "Auto",
  };
  return categoryMap[slug];
};

const ProductListing = () => {
  const { categorySlug } = useParams();
  const [prevSlug, setPrevSlug] = useState(categorySlug);

  const [selectedCategories, setSelectedCategories] = useState(() => {
    if (categorySlug) {
      const mapped = getCategoryFromSlug(categorySlug);
      return mapped ? [mapped] : [];
    }
    return [];
  });

  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedDiscount, setSelectedDiscount] = useState(0);
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  // Sync search query with URL params
  React.useEffect(() => {
    const query = searchParams.get("search");
    if (query !== null) {
      setSearchQuery(query);
    }
  }, [searchParams]);
  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const itemsPerPage = 12;

  const categories = [
    "Electronics",
    "Fashion",
    "Home",
    "Sports",
    "Beauty",
    "Auto",
  ];

  // Adjust state when URL param changes (Render-time update pattern)
  if (categorySlug !== prevSlug) {
    setPrevSlug(categorySlug);
    const mapped = getCategoryFromSlug(categorySlug);
    setSelectedCategories(mapped ? [mapped] : []);

    // Reset filters when switching categories
    setPriceRange([0, 2000]);
    setSelectedRating(0);
    setSelectedDiscount(0);
    setSearchQuery("");
    setCurrentPage(1);
  }

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) =>
        selectedCategories.includes(p.category),
      );
    }

    // Price range filter
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1],
    );

    // Rating filter
    if (selectedRating > 0) {
      filtered = filtered.filter((p) => p.rating >= selectedRating);
    }

    // Discount filter
    if (selectedDiscount > 0) {
      filtered = filtered.filter(
        (p) => p.discount && p.discount >= selectedDiscount,
      );
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Sorting
    switch (sortBy) {
      case "price-low":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered = [...filtered].reverse();
        break;
      default:
        break;
    }

    return filtered;
  }, [
    selectedCategories,
    priceRange,
    selectedRating,
    selectedDiscount,
    searchQuery,
    sortBy,
  ]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
    setCurrentPage(1);
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 2000]);
    setSelectedRating(0);
    setSelectedDiscount(0);
    setSearchQuery("");
    setCurrentPage(1);
  };

  const activeFiltersCount =
    selectedCategories.length +
    (selectedRating > 0 ? 1 : 0) +
    (selectedDiscount > 0 ? 1 : 0) +
    (priceRange[0] !== 0 || priceRange[1] !== 2000 ? 1 : 0);

  return (
    <>
      <LandingNav />

      <div className="bg-gray-50 min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="px-4 md:px-12 lg:px-24 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-semibold">Shop</span>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-12 lg:px-24 py-8">
          <div className="flex gap-8">
            {/* Desktop Sidebar Filters */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                  {activeFiltersCount > 0 && (
                    <button
                      onClick={clearAllFilters}
                      className="text-sm text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label
                        key={category}
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCategoryToggle(category)}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Price Range
                  </h3>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="w-full accent-blue-600"
                    />
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>₦{priceRange[0]}</span>
                      <span>₦{priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Rating Filter */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Rating</h3>
                  <div className="space-y-2">
                    {[5, 4, 3].map((rating) => (
                      <label
                        key={rating}
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="rating"
                          checked={selectedRating === rating}
                          onChange={() => {
                            setSelectedRating(rating);
                            setCurrentPage(1);
                          }}
                          className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
                          {rating}+ Stars
                        </span>
                      </label>
                    ))}
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="rating"
                        checked={selectedRating === 0}
                        onChange={() => {
                          setSelectedRating(0);
                          setCurrentPage(1);
                        }}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
                        All Ratings
                      </span>
                    </label>
                  </div>
                </div>

                {/* Discount Filter */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Discount</h3>
                  <div className="space-y-2">
                    {[50, 20, 10, 0].map((discount) => (
                      <label
                        key={discount}
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="discount"
                          checked={selectedDiscount === discount}
                          onChange={() => {
                            setSelectedDiscount(discount);
                            setCurrentPage(1);
                          }}
                          className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
                          {discount > 0
                            ? `${discount}% or more`
                            : "All Products"}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
              {/* Search and Sort Bar */}
              <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    {/* Mobile Filter Button */}
                    <button
                      onClick={() => setIsFilterOpen(true)}
                      className="lg:hidden flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <FaFilter size={16} />
                      <span>Filters</span>
                      {activeFiltersCount > 0 && (
                        <span className="bg-white text-blue-600 px-2 py-0.5 rounded-full text-xs font-bold">
                          {activeFiltersCount}
                        </span>
                      )}
                    </button>

                    {/* Search */}
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="flex-1 md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex items-center gap-4 w-full md:w-auto justify-between">
                    {/* Results Count */}
                    <span className="text-sm text-gray-600">
                      {filteredProducts.length} products
                    </span>

                    {/* Sort */}
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Best Rating</option>
                      <option value="newest">Newest</option>
                    </select>

                    {/* View Toggle */}
                    <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                      <button
                        onClick={() => setViewMode("grid")}
                        className={`p-2 rounded ${viewMode === "grid" ? "bg-white shadow-sm" : "text-gray-500"}`}
                      >
                        <FaThLarge size={16} />
                      </button>
                      <button
                        onClick={() => setViewMode("list")}
                        className={`p-2 rounded ${viewMode === "list" ? "bg-white shadow-sm" : "text-gray-500"}`}
                      >
                        <FaList size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              {paginatedProducts.length > 0 ? (
                <>
                  <div
                    className={`grid gap-4 md:gap-6 mb-8 ${
                      viewMode === "grid"
                        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                        : "grid-cols-1"
                    }`}
                  >
                    {paginatedProducts.map((product) => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                      <button
                        onClick={() =>
                          setCurrentPage((prev) => Math.max(1, prev - 1))
                        }
                        disabled={currentPage === 1}
                        className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        Previous
                      </button>

                      <div className="flex gap-2">
                        {[...Array(totalPages)].map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-4 py-2 rounded-lg transition-colors ${
                              currentPage === i + 1
                                ? "bg-blue-600 text-white"
                                : "border border-gray-300 hover:bg-gray-50"
                            }`}
                          >
                            {i + 1}
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(totalPages, prev + 1),
                          )
                        }
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              ) : (
                // Empty State
                <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                  <div className="text-gray-400 mb-4">
                    <FaFilter size={64} className="mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your filters or search query
                  </p>
                  <button
                    onClick={clearAllFilters}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-xs bg-white shadow-xl overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              {activeFiltersCount > 0 && (
                <button
                  onClick={() => {
                    clearAllFilters();
                    setIsFilterOpen(false);
                  }}
                  className="w-full mb-6 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
                >
                  Clear All Filters
                </button>
              )}

              {/* Mobile Categories */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label
                      key={category}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryToggle(category)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Mobile Price Range */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Price Range
                </h3>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-full accent-blue-600"
                  />
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Mobile Rating */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Rating</h3>
                <div className="space-y-2">
                  {[5, 4, 3].map((rating) => (
                    <label
                      key={rating}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="rating-mobile"
                        checked={selectedRating === rating}
                        onChange={() => setSelectedRating(rating)}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">
                        {rating}+ Stars
                      </span>
                    </label>
                  ))}
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="rating-mobile"
                      checked={selectedRating === 0}
                      onChange={() => setSelectedRating(0)}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">All Ratings</span>
                  </label>
                </div>
              </div>

              {/* Mobile Discount */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Discount</h3>
                <div className="space-y-2">
                  {[50, 20, 10, 0].map((discount) => (
                    <label
                      key={discount}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="discount-mobile"
                        checked={selectedDiscount === discount}
                        onChange={() => setSelectedDiscount(discount)}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">
                        {discount > 0 ? `${discount}% or more` : "All Products"}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductListing;
