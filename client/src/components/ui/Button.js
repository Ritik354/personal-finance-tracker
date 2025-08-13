import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  onClick,
  type = "button",
  ...props
}) => {
  const baseStyles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "12px",
    fontWeight: "600",
    transition: "all 0.2s ease",
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    gap: "8px",
    outline: "none",
    fontFamily: "inherit",
  };

  const variants = {
    primary: {
      background: "linear-gradient(135deg, #2563eb, #3b82f6)",
      color: "white",
      boxShadow: "0 4px 14px 0 rgba(37, 99, 235, 0.3)",
    },
    secondary: {
      background: "transparent",
      color: "#2563eb",
      border: "2px solid #2563eb",
    },
    outline: {
      background: "transparent",
      color: "#374151",
      border: "2px solid #e5e7eb",
    },
    ghost: {
      background: "transparent",
      color: "#374151",
      border: "none",
    },
  };

  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: "14px",
    },
    md: {
      padding: "12px 24px",
      fontSize: "16px",
    },
    lg: {
      padding: "16px 32px",
      fontSize: "18px",
    },
  };

  const hoverStyles = {
    primary: {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px 0 rgba(37, 99, 235, 0.4)",
    },
    secondary: {
      background: "#2563eb",
      color: "white",
    },
    outline: {
      background: "#f9fafb",
      borderColor: "#d1d5db",
    },
    ghost: {
      background: "#f9fafb",
    },
  };

  const buttonStyle = {
    ...baseStyles,
    ...variants[variant],
    ...sizes[size],
    opacity: disabled ? 0.6 : 1,
  };

  const handleMouseEnter = (e) => {
    if (!disabled) {
      Object.assign(e.target.style, hoverStyles[variant]);
    }
  };

  const handleMouseLeave = (e) => {
    if (!disabled) {
      Object.assign(e.target.style, { ...variants[variant], ...sizes[size] });
    }
  };

  return (
    <button
      type={type}
      style={buttonStyle}
      className={className}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
