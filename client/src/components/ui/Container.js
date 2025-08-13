import React from "react";

const Container = ({
  children,
  size = "default",
  className = "",
  ...props
}) => {
  const sizes = {
    sm: { maxWidth: "640px" },
    default: { maxWidth: "1200px" },
    lg: { maxWidth: "1400px" },
    xl: { maxWidth: "1600px" },
    full: { maxWidth: "100%" },
  };

  const containerStyle = {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    ...sizes[size],
  };

  return (
    <div style={containerStyle} className={className} {...props}>
      {children}
    </div>
  );
};

export default Container;
