import React, { useState } from 'react';

const MagnetButtons = ({ size, selectedSize, setSelectedSize, disabled, id }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x, y });
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  const handleClick = (e) => {
    e.stopPropagation();
    if (disabled) return;
    setSelectedSize(size);
    localStorage.setItem(`selectedSize-${id}`, size);
  };

  return (
    <button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      disabled={disabled}
      className={`relative border cursor-pointer py-3 px-5 text-xs rounded overflow-hidden transition-all group ${
        selectedSize === size
          ? 'bg-black text-white'
          : 'bg-white text-black'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <span
        className="block transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${pos.x * 0.2}px, ${pos.y * 0.2}px)`
        }}
      >
        {size}
      </span>
      {disabled && (
        <span className="absolute w-[140%] h-[1px] bg-gray-500 rotate-[43deg] top-1/2 left-[-20%] transform -translate-y-1/2 pointer-events-none" />
      )}
    </button>
  );
};

export default MagnetButtons;
