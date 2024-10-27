import React, { useEffect, useState } from "react";
import ProductGrid from "./ProductGrid";
import SvgAnimation from "./SvgAnimation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HorizontalScrollText from "./HorizontalScrollingText";
import GamingText from "./GamingText";

const HomePage = ({ products, onAddToCart, onToggleWishlist, wishlist }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 23,
    minutes: 59,
    seconds: 35,
  });
  useEffect(() => {
    const targetTime = new Date().getTime()+24*60*60*1000;
    const timer = setInterval(() =>{
      const now = new Date().getTime();
      const distance=targetTime-now;
      if (distance<0) {
        clearInterval(timer);
        setTimeRemaining({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const hours=Math.floor((distance % (1000*60*60*24))/(1000*60*60));
      const minutes=Math.floor((distance % (1000*60* 60))/ (1000 * 60));
      const seconds=Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  },[]);

  const handleAddToCart = (product) => {
    onAddToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="space-y-8">
      <ToastContainer />
      <GamingText />
      <section>
        <div className="text-1xl font-bold flex items-center gap-4">
          <div className="w-3 h-8 bg-red-500 border-collapse rounded-sm"></div>
          Today's
        </div>
        <h2 className="text-2xl font-bold mb-6 mt-4">Flash Sales</h2>
        <ProductGrid
          products={products}
          onAddToCart={handleAddToCart} // Use the handleAddToCart function
          onToggleWishlist={onToggleWishlist}
          wishlist={wishlist}
        />
      </section>
      <div className="flex flex-col items-center space-y-6">
        <div className="flex space-x-4 mt-4">
          <button className="flex items-center justify-center w-10 h-10 rounded-full arrow-container-bg  shadow"> {/* Use the CSS variable for arrow container background color */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 arrow-svg" 
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-full arrow-container-bg shadow"> {/* Use the CSS variable for arrow container background color */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 arrow-svg" 
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <button className="px-6 py-3 view-all-button-bg text-white font-semibold rounded-md shadow-lg">
          View All Products
        </button>
      </div>
      <SvgAnimation />
      <section>
        <div className="text-1xl font-bold flex items-center gap-4">
          <div className="w-3 h-8 bg-red-500 border-collapse rounded-sm"></div>
          This month
        </div>
        <h2 className="text-2xl font-bold mb-6 mt-4">Best Selling Products</h2>
        <ProductGrid
          products={products}
          onAddToCart={handleAddToCart}
          onToggleWishlist={onToggleWishlist}
          wishlist={wishlist}
        />
      </section>
      <HorizontalScrollText /> 
      <div className="bg-white">
        <section className="bg-black text-white py-12 px-4 lg:px-20 flex flex-col lg:flex-row items-center mt-30 ">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Enhance Your Gaming Experience
            </h1>
            <div className="flex space-x-6 justify-center lg:justify-start">
              <div className="text-center">
                <p className="text-3xl font-bold">{String(timeRemaining.hours).padStart(2, '0')}</p>
                <p className="text-sm">Hours</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">{String(timeRemaining.minutes).padStart(2, '0')}</p>
                <p className="text-sm">Minutes</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">{String(timeRemaining.seconds).padStart(2, '0')}</p>
                <p className="text-sm">Seconds</p>
              </div>
            </div>
            <button className="buy-now-button-bg text-white py-3 px-8 rounded-md">
              Buy Now!
            </button>
          </div>
          <div className="flex-1 mt-8 lg:mt-0 lg:ml-12">
            <img
              src="https://fdn.gsmarena.com/imgroot/news/24/02/apple-vision-pro-pre-order/-1200/gsmarena_000.jpg"
              alt="JBL Speaker"
              className="w-full object-contain"
            />
          </div>
        </section>
        <section className="py-12 bg-gray-400">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 p-10">
            <div className="text-center">
              <div className="arrow-container-bg p-4 rounded-full inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12h18m-2 6h-6M3 6h10l2 8h4m-4 0v6m0 0H7"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg mt-4 features-text">FREE AND FAST DELIVERY</h3> 
              <p className="text-sm text-gray-500 features-text">Free delivery for all orders over $140</p>
            </div>
            <div className="text-center">
              <div className="arrow-container-bg p-4 rounded-full inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 arrow-svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14h.01M21 12a9 9 0 11-9-9 9 9 0 019 9z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg mt-4 features-text">24/7 CUSTOMER SERVICE</h3>
              <p className="text-sm text-gray-500 features-text">Friendly 24/7 customer support</p>
            </div>
            <div className="text-center">
              <div className="arrow-container-bg p-4 rounded-full inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 arrow-svg" 
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M12 4a8 8 0 100 16 8 8 0 000-16z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg mt-4 features-text">MONEY BACK GUARANTEE</h3> {/* Use the CSS variable for features text color */}
              <p className="text-sm text-gray-500 features-text">We return money within 30 days</p> {/* Use the CSS variable for features text color */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;