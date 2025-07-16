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
    <div className="container" ref={containerRef}>
      <div
        className="image-layer red"
        style={{
          backgroundImage: `url(${leftImage})`,
          clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`,
        }}
      />
      <div
        className="image-layer blue"
        style={{ backgroundImage: `url(${rightImage})` }}
      />
      <div className="drag-line" style={{ left: `${position}%` }}>
        <div
          className="drag-icon h-10 w-10 flex justify-center items-center rounded-full bg-white"
          onMouseDown={startDrag}
          onTouchStart={startDrag}
        >
          <RxHamburgerMenu className="text-xl " />
        </div>
      </div>
    </div>
  );
};

export default Drag;
