import React from "react";

const Card = ({
  children,
  className = "",
  variant = "default",
  padding = "md",
  hover = false,
  ...props
}) => {
  const baseStyles = {
    borderRadius: "16px",
    transition: "all 0.3s ease",
    border: "1px solid #e5e7eb",
    background: "white",
  };

  const variants = {
    default: {
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    },
    elevated: {
      boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1)",
    },
    glass: {
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
    },
  };

  const paddings = {
    none: { padding: "0" },
    sm: { padding: "16px" },
    md: { padding: "24px" },
    lg: { padding: "32px" },
    xl: { padding: "48px" },
  };

  const hoverStyles = hover
    ? {
        transform: "translateY(-4px)",
        boxShadow: "0 20px 40px -3px rgba(0, 0, 0, 0.15)",
      }
    : {};

  const cardStyle = {
    ...baseStyles,
    ...variants[variant],
    ...paddings[padding],
  };

  const handleMouseEnter = (e) => {
    if (hover) {
      Object.assign(e.target.style, hoverStyles);
    }
  };

  const handleMouseLeave = (e) => {
    if (hover) {
      Object.assign(e.target.style, cardStyle);
    }
  };

  return (
    <div
      style={cardStyle}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
