import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const SvgAnimation = () => {
  const svgRef = useRef(null);
  useEffect(() => {
    const svgElement = svgRef.current;
    if (!svgElement) {
      console.error("SVG element not found");
      return;
    }
    const pathElement = svgElement.querySelector("path");
    if (!pathElement) {
      console.error("Path element not found");
      return;
    }

    console.log("SVG element found:", svgElement);
    console.log("Path element found:", pathElement);

    const handleMouseMove = (e) => {
      const rect = svgElement.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      console.log("Mouse move:", mouseX, mouseY);

      const newPath = `M 0 100 Q ${mouseX} ${mouseY} 2000 100`;
      gsap.to(pathElement, {
        attr: { d: newPath },
        duration: 1,
        ease: "power3.out",
      });
    };
    const handleMouseLeave = () => {
      const finalPath = `M 0 100 Q 250 100 2000 100`;
      console.log("Mouse leave");
      gsap.to(pathElement, {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)",
      });
    };
    svgElement.addEventListener("mousemove", handleMouseMove);
    svgElement.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      svgElement.removeEventListener("mousemove", handleMouseMove);
      svgElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="animation">
      <svg
        ref={svgRef}
        width="100%"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0 100 Q 250 100 2000 100"
          className="stroke-color"
          fill="transparent"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
  
};

export default SvgAnimation;