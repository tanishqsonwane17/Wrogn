// Drag.js
import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import { RxHamburgerMenu } from "react-icons/rx";

const Drag = ({ leftImage, rightImage }) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const startDrag = () => {
    isDragging.current = true;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  const handleMove = (clientX) => {
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const offsetX = clientX - container.getBoundingClientRect().left;
    const newPos = (offsetX / containerWidth) * 100;
    if (newPos >= 0 && newPos <= 100) {
      setPosition(newPos);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", stopDrag);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", stopDrag);
    };
  }, []);

  return (
<div
  ref={containerRef}
  className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden md:bg-[#e3e4e3]"
>
  <div
    className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-center md:bg-contain"
    style={{
      backgroundImage: `url(${rightImage})`,
    }}
  />

  <div
    className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-center md:bg-contain "
    style={{
      backgroundImage: `url(${leftImage})`,
      clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`,
    }}
  />

<div
  className="absolute top-0 h-full flex flex-col items-center"
  style={{ left: `${position}%` }}
>
  {/* Line */}
  <div className="w-[2px] h-full bg-white opacity-60" />

  {/* Drag Icon */}
<div
  className="h-10 w-10 bg-white flex justify-center items-center rounded-full translate-x-[-50%] translate-y-[50%] cursor-pointer"
  style={{ position: 'absolute', top: '50%', left: '50%' }}
  onMouseDown={startDrag}
  onTouchStart={startDrag}
>
  <RxHamburgerMenu className="text-xl rotate-90 text-black" />
</div>
</div>
</div>
  );
};

export default Drag;
