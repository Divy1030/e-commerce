import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

const GamingText = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const textRef = useRef(null);
  const intervalRef = useRef(null);

  const [springProps, setSpring] = useSpring(() => ({
    from: { scale: 1 },
    to: { scale: 1.1 },
    config: { tension: 300, friction: 10 },
    loop: true
  }));

  useEffect(() => {
    const target = textRef.current;
    let iteration = 0;
    
    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      const text = "TRUE GAMING";
      target.innerText = text
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return text[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }
      
      iteration += 1/3;
    }, 30);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="w-full min-h-[200px] bg-black flex flex-col items-center justify-center py-12">
      <div className="relative">
        {/* Main animated text */}
        <h1 
          ref={textRef}
          className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 pb-4"
        >
          TRUE GAMING
        </h1>

        {/* Animated underline */}
        <div className="w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 animate-pulse" />

        {/* Floating elements */}
        <animated.div
          style={springProps}
          className="absolute -top-8 -right-8 w-6 h-6 bg-purple-500 rounded-full opacity-50"
        />
        <animated.div
          style={springProps}
          className="absolute -bottom-8 -left-8 w-6 h-6 bg-red-500 rounded-full opacity-50"
        />
      </div>
      {/* Animated subtitle */}
      <div className="mt-6 space-y-2">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-200"></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-300"></div>
        </div>
        <p className="text-xl text-gray-400 animate-pulse">
          Level Up Your Experience
        </p>
      </div>
      {/* Animated border */}
      <div className="mt-8 p-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 animate-pulse opacity-20 rounded-lg"></div>
        <p className="text-gray-300 relative z-10">
          Discover the Future of Gaming
        </p>
      </div>
    </div>
  );
};

export default GamingText;