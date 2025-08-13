import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Button from "../ui/Button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
  ];

  return (
    <nav
      style={{
        ...styles.nav,
        background: isScrolled
          ? "rgba(255, 255, 255, 0.95)"
          : "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(20px)",
        borderBottom: isScrolled
          ? "1px solid rgba(0, 0, 0, 0.05)"
          : "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Container>
        <div style={styles.navContent}>
          {/* Logo */}
          <Link to="/" style={styles.logo}>
            <div style={styles.logoIcon}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="url(#gradient)" />
                <path
                  d="M8 12h16v2H8v-2zm0 4h16v2H8v-2zm0 4h12v2H8v-2z"
                  fill="white"
                />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32">
                    <stop stopColor="#667eea" />
                    <stop offset="1" stopColor="#764ba2" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span
              style={{
                ...styles.logoText,
                color: isScrolled ? "#1f2937" : "white",
              }}
            >
              TrackWise
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div style={styles.desktopNav}>
            <div style={styles.navLinks}>
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  style={{
                    ...styles.navLink,
                    color: isScrolled ? "#374151" : "rgba(255, 255, 255, 0.9)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = isScrolled ? "#667eea" : "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = isScrolled
                      ? "#374151"
                      : "rgba(255, 255, 255, 0.9)";
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div style={styles.navActions}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button
                  variant={isScrolled ? "outline" : "ghost"}
                  size="sm"
                  style={{
                    color: isScrolled ? "#374151" : "rgba(255, 255, 255, 0.9)",
                    borderColor: isScrolled
                      ? "#e5e7eb"
                      : "rgba(255, 255, 255, 0.3)",
                  }}
                >
                  Sign In
                </Button>
              </Link>

              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button variant="primary" size="sm">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            style={{
              ...styles.mobileMenuButton,
              color: isScrolled ? "#374151" : "white",
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div style={styles.hamburger}>
              <span
                style={{
                  ...styles.hamburgerLine,
                  background: isScrolled ? "#374151" : "white",
                  transform: isMobileMenuOpen
                    ? "rotate(45deg) translate(5px, 5px)"
                    : "none",
                }}
              ></span>
              <span
                style={{
                  ...styles.hamburgerLine,
                  background: isScrolled ? "#374151" : "white",
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
              ></span>
              <span
                style={{
                  ...styles.hamburgerLine,
                  background: isScrolled ? "#374151" : "white",
                  transform: isMobileMenuOpen
                    ? "rotate(-45deg) translate(7px, -6px)"
                    : "none",
                }}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div style={styles.mobileMenu}>
            <div style={styles.mobileNavLinks}>
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  style={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div style={styles.mobileNavActions}>
              <Link
                to="/login"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <button style={styles.mobileLoginButton}>Sign In</button>
              </Link>

              <Link
                to="/register"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <button style={styles.mobileCTAButton}>Get Started</button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: "all 0.3s ease",
    padding: "1rem 0",
  },
  navContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    textDecoration: "none",
    transition: "transform 0.2s ease",
  },
  logoIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontSize: "1.5rem",
    fontWeight: "700",
    transition: "color 0.3s ease",
  },
  desktopNav: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
  },
  navLink: {
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "15px",
    transition: "color 0.2s ease",
    cursor: "pointer",
    padding: "8px 0",
    position: "relative",
  },
  navActions: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  loginButton: {
    background: "transparent",
    borderRadius: "8px",
    padding: "10px 20px",
    fontSize: "15px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  ctaButton: {
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s ease",
    boxShadow: "0 2px 8px rgba(102, 126, 234, 0.3)",
  },
  mobileMenuButton: {
    display: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "0.5rem",
  },
  hamburger: {
    width: "24px",
    height: "18px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  hamburgerLine: {
    width: "100%",
    height: "2px",
    transition: "all 0.3s ease",
    transformOrigin: "center",
  },
  mobileMenu: {
    display: "block",
    marginTop: "1rem",
    padding: "1.5rem",
    background: "rgba(255, 255, 255, 0.95)",
    borderRadius: "16px",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
  },
  mobileNavLinks: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginBottom: "1.5rem",
  },
  mobileNavLink: {
    textDecoration: "none",
    color: "#374151",
    fontWeight: "500",
    fontSize: "16px",
    padding: "0.75rem",
    borderRadius: "8px",
    transition: "background-color 0.2s ease",
  },
  mobileNavActions: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  mobileLoginButton: {
    width: "100%",
    background: "transparent",
    color: "#374151",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    padding: "12px",
    fontSize: "15px",
    fontWeight: "500",
    cursor: "pointer",
  },
  mobileCTAButton: {
    width: "100%",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "12px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default Navigation;
