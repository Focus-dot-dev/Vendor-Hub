import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaStar,
  FaShoppingCart,
  FaHeart,
  FaChevronLeft,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import LandingNav from "../components/LandingNav";
import { getProductById, allProducts } from "../data/products";
import ProductCard from "../components/ProductCard";

const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <LandingNav />
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Product Not Found
          </h2>
          <Link to="/shop" className="text-blue-600 hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  // Related products (same category, excluding current)
  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Mock thumbnails (using the main image for now)
  const images = [product.image, product.image, product.image, product.image];

  const handleQuantityChange = (type) => {
    if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === "increase" && quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <LandingNav />

      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 md:px-12 lg:px-24 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-blue-600 transition-colors">
              Shop
            </Link>
            <span>/</span>
            <Link
              to={`/category/${product.category.toLowerCase()}`}
              className="hover:text-blue-600 transition-colors"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold truncate max-w-[200px]">
              {product.title}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 lg:px-24 py-8">
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative group">
                <img
                  src={images[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                {product.discount && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    -{product.discount}%
                  </span>
                )}
              </div>
              <div className="grid grid-cols-4 gap-4">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                      selectedImage === idx
                        ? "border-blue-600 ring-2 ring-blue-100"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`View ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-serif">
                {product.title}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < product.rating ? "fill-current" : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm font-medium ml-2">
                    ({product.rating}.0)
                  </span>
                </div>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="text-green-600 text-sm font-medium">
                  In Stock
                </span>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-blue-600">
                    ${product.price}
                  </span>
                  {product.discount && (
                    <span className="text-lg text-gray-400 line-through">
                      $
                      {(product.price * (1 + product.discount / 100)).toFixed(
                        2,
                      )}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Tax included. Free shipping available.
                </p>
              </div>

              <div className="prose prose-sm text-gray-600 mb-8">
                <p>
                  Experience premium quality with our {product.title}. Designed
                  for comfort and durability, this product features high-grade
                  materials and expert craftsmanship. Perfect for your daily
                  needs.
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside">
                  <li>Premium build quality</li>
                  <li>1-year warranty included</li>
                  <li>Eco-friendly packaging</li>
                  <li>24/7 customer support</li>
                </ul>
              </div>

              {/* Actions */}
              <div className="space-y-4 border-t pt-8">
                <div className="flex items-center gap-6">
                  <span className="font-semibold text-gray-700">Quantity</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange("decrease")}
                      className="p-3 hover:bg-gray-50 text-gray-600 transition-colors"
                      disabled={quantity <= 1}
                    >
                      <FaMinus size={12} />
                    </button>
                    <span className="w-12 text-center font-medium">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange("increase")}
                      className="p-3 hover:bg-gray-50 text-gray-600 transition-colors"
                      disabled={quantity >= 10}
                    >
                      <FaPlus size={12} />
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-blue-600 text-white py-3.5 px-6 rounded-full font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5">
                    <FaShoppingCart />
                    Add to Cart
                  </button>
                  <button className="p-3.5 border border-gray-300 rounded-full hover:bg-red-50 hover:border-red-200 hover:text-red-500 transition-all">
                    <FaHeart size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
              Similar Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
