import React from "react";

const Badge = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles = {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "9999px",
    fontWeight: "500",
    textAlign: "center",
    whiteSpace: "nowrap",
  };

  const variants = {
    default: {
      background: "#f3f4f6",
      color: "#374151",
    },
    primary: {
      background: "#dbeafe",
      color: "#1d4ed8",
    },
    success: {
      background: "#d1fae5",
      color: "#065f46",
    },
    warning: {
      background: "#fef3c7",
      color: "#92400e",
    },
    error: {
      background: "#fee2e2",
      color: "#991b1b",
    },
    gradient: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
    },
  };

  const sizes = {
    sm: {
      padding: "4px 8px",
      fontSize: "12px",
    },
    md: {
      padding: "6px 12px",
      fontSize: "14px",
    },
    lg: {
      padding: "8px 16px",
      fontSize: "16px",
    },
  };

  const badgeStyle = {
    ...baseStyles,
    ...variants[variant],
    ...sizes[size],
  };

  return (
    <span style={badgeStyle} className={className} {...props}>
      {children}
    </span>
  );
};

export default Badge;
