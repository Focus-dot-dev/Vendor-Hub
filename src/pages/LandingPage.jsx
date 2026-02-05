import React, { useState, useEffect } from "react";
import LandingNav from "../components/LandingNav";
import HeroImage1 from "../assets/ecommerce_hero.png";
import HeroImage2 from "../assets/ecommerce_hero_fashion.png";
import HeroImage3 from "../assets/ecommerce_hero_tech.png";
import SectionHeader from "../components/SectionHeader";
import ProductCard from "../components/ProductCard";
import {
  FaLaptop,
  FaTshirt,
  FaCouch,
  FaFutbol,
  FaSpa,
  FaCar,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { allProducts } from "../data/products";

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [HeroImage1, HeroImage2, HeroImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);
  const categories = [
    {
      name: "Electronics",
      icon: <FaLaptop size={30} />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Fashion",
      icon: <FaTshirt size={30} />,
      color: "bg-pink-100 text-pink-600",
    },
    {
      name: "Home",
      icon: <FaCouch size={30} />,
      color: "bg-green-100 text-green-600",
    },
    {
      name: "Sports",
      icon: <FaFutbol size={30} />,
      color: "bg-orange-100 text-orange-600",
    },
    {
      name: "Beauty",
      icon: <FaSpa size={30} />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      name: "Auto",
      icon: <FaCar size={30} />,
      color: "bg-gray-100 text-gray-600",
    },
  ];

  const products = [
    {
      id: 1,
      title: "Wireless Noise Cancelling Headphones",
      price: 299.99,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
      discount: 15,
    },
    {
      id: 2,
      title: "Smart Fitness Watch Series 5",
      price: 199.5,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
      discount: null,
    },
    {
      id: 3,
      title: "Ergonomic Office Chair",
      price: 159.0,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&auto=format&fit=crop&q=60",
      discount: 10,
    },
    {
      id: 4,
      title: "4K Digital Camera Professional",
      price: 850.0,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60",
      discount: 5,
    },
  ];

  const techProducts = [
    {
      id: 5,
      title: "Gaming Laptop Pro X",
      price: 1299.99,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format&fit=crop&q=60",
      discount: 20,
    },
    {
      id: 6,
      title: "Smartphone 15 Pro Max",
      price: 1199.0,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60",
      discount: null,
    },
    {
      id: 7,
      title: "VR Headset Reality",
      price: 399.0,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&auto=format&fit=crop&q=60",
      discount: null,
    },
    {
      id: 8,
      title: "Wireless Earbuds Pro",
      price: 149.0,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60",
      discount: 15,
    },
  ];

  const fashionProducts = [
    {
      id: 9,
      title: "Men's Casual Jacket",
      price: 59.99,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60",
      discount: 30,
    },
    {
      id: 10,
      title: "Women's Summer Dress",
      price: 45.0,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60",
      discount: null,
    },
    {
      id: 11,
      title: "Designer Leather Bag",
      price: 120.0,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop&q=60",
      discount: 10,
    },
    {
      id: 12,
      title: "Running Sneakers",
      price: 89.99,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60",
      discount: null,
    },
  ];

  return (
    <>
      <LandingNav />
      {/* Hero Section */}
      <div className="relative px-4 md:px-12 lg:px-24 py-12 md:py-24 lg:py-32 flex items-center bg-gray-100 overflow-hidden">
        {/* Carousel Background Images */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
        ))}

        {/* Dark Mode Overlay */}
        <div className="absolute inset-0 bg-black opacity-0 dark:opacity-50 transition-opacity duration-300 pointer-events-none"></div>

        {/* Content overlay */}
        <div className="relative z-10 w-full">
          <section className="flex justify-between items-center px-4 md:px-12 lg:px-24 py-8 md:py-12 mt-6 md:mt-10">
            <div>
              <div className="flex flex-col items-start w-fit justify-center mb-6 md:mb-10 mt-6 md:mt-10 gap-3 md:gap-5">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white">
                  Discover the Top Products <br /> from trusted vendors
                </h1>
                <p className="text-white text-sm md:text-base">
                  Shop from the comfort of your home with{" "}
                  <br className="hidden md:block" /> our wide range of products
                </p>
              </div>
              <div className="flex items-center gap-3 md:gap-5">
                <Link to="/shop">
                  <button className="bg-white text-black px-4 md:px-6 py-2 md:py-3 font-serif cursor-pointer rounded-full hover:bg-gray-100 transition-colors text-sm md:text-base">
                    Shop Now
                  </button>
                </Link>
                <Link to="/vendorSignup">
                  <button className="bg-transparent border border-white text-white font-serif cursor-pointer px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-white/10 transition-colors text-sm md:text-base">
                    Sell Now
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Categories Section */}
      <section className="px-4 md:px-12 lg:px-24 py-12 md:py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <SectionHeader title="Shop by Category" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer hover:-translate-y-1"
            >
              <div className={`p-4 rounded-full ${cat.color} mb-2`}>
                {cat.icon}
              </div>
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Flash Sales Section */}
      <section className="px-4 md:px-12 lg:px-24 py-12 md:py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <SectionHeader title="Flash Sales" linkTo="/shop" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Technology & Gadgets Section */}
      <section className="px-4 md:px-12 lg:px-24 py-12 md:py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <SectionHeader
          title="Technology & Gadgets"
          linkTo="/category/electronics"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {techProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Fashion Section */}
      <section className="px-4 md:px-12 lg:px-24 py-12 md:py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <SectionHeader title="Fashion" linkTo="/category/fashion" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {fashionProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Beauty & Health Section */}
      <section className="px-4 md:px-12 lg:px-24 py-12 md:py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <SectionHeader title="Beauty & Health" linkTo="/category/beauty" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <ProductCard
            id={13}
            title="Luxury Skin Care Set"
            price={89.99}
            rating={5}
            image="https://images.unsplash.com/photo-1596462502278-27bfdd403348?w=500&auto=format&fit=crop&q=60"
            discount={15}
          />
          <ProductCard
            id={14}
            title="Premium Hair Dryer"
            price={129.0}
            rating={4}
            image="https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&auto=format&fit=crop&q=60"
            discount={null}
          />
          <ProductCard
            id={15}
            title="Organic Face Serum"
            price={45.0}
            rating={5}
            image="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=60"
            discount={20}
          />
          <ProductCard
            id={16}
            title="Massage Gun Pro"
            price={199.0}
            rating={4}
            image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&auto=format&fit=crop&q=60"
            discount={10}
          />
        </div>
      </section>

      {/* From Top Sellers Section */}
      <section className="px-4 md:px-12 lg:px-24 py-12 md:py-16 bg-white transition-colors duration-300">
        <SectionHeader title="From Top Sellers" linkTo="/shop" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {allProducts
            .filter((p) => p.rating === 5 && p.reviews && p.reviews.length > 0)
            .slice(0, 4)
            .map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
        </div>
      </section>

      {/* Join as Vendor CTA Section */}
      <section className="px-4 md:px-12 lg:px-24 py-12 md:py-20 bg-blue-600 relative overflow-hidden">
        <div className="relative z-10 flex flex-col items-center text-center gap-4 md:gap-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-serif italic">
            Start Selling on Vendora Today
          </h2>
          <p className="text-blue-100 max-w-2xl text-sm md:text-base lg:text-lg px-4">
            Join thousands of vendors who are growing their business with us.
            Get access to millions of customers, powerful tools, and 24/7
            support.
          </p>
          <Link to="/vendorSignup">
            <button className="mt-2 md:mt-4 bg-white text-blue-600 px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-base md:text-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Become a Vendor
            </button>
          </Link>
        </div>
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 md:py-16 px-4 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h1 className="text-2xl font-bold font-serif italic text-white mb-4">
              Vendora
            </h1>
            <p className="text-sm">
              Your one-stop shop for everything you need. Quality products, best
              prices.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Fashion
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home & Garden
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sports
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>support@vendora.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Commerce St, New York, NY</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          &copy; 2026 Vendora. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
