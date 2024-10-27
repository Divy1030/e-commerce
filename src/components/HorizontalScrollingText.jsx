import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const HorizontalScrollText = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const animation = gsap.to(textRef.current, {
      x: '-90%',
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'top -50%', 
        scrub: 1.5,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1
      }
    });
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-[75vh] bg-white overflow-hidden relative page-bg"
      style={{ marginTop: '4rem' }}
    >
      <h1 
        ref={textRef}
        className="absolute whitespace-nowrap font-semibold"
        style={{
          fontSize: '35vw',
          lineHeight: '1',
          color: '#000',
          top: '50%',
          transform: 'translateY(-50%)',
          willChange: 'transform'
        }}
      >
        EXPERIENCE THE BEST WAY OF GAMING
      </h1>
    </div>
  );
};

export default HorizontalScrollText;