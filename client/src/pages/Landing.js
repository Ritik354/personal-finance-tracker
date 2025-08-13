/**
 * @typedef {import('react')} React
 */
import React from "react";
import Navigation from "../components/landing/Navigation";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import Stats from "../components/landing/Stats";
import Testimonials from "../components/landing/Testimonials";
import Pricing from "../components/landing/Pricing";

const Landing = () => {
  return (
    <div style={styles.landingPage}>
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <Pricing />

      {/* CTA Section */}
      <section style={styles.cta}>
        <div style={styles.ctaContainer}>
          <h2 style={styles.ctaTitle}>
            Ready to Transform Your Financial Life?
          </h2>
          <p style={styles.ctaSubtitle}>
            Join thousands of users who have taken control of their finances
            with TrackWise.
          </p>
          <div style={styles.ctaButtons}>
            <a href="/register" style={styles.ctaButton}>
              <span>🚀</span>
              Get Started Free
            </a>
            <a href="/login" style={styles.ctaButtonSecondary}>
              <span>👋</span>
              Sign In
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerContent}>
            <div style={styles.footerBrand}>
              <div style={styles.footerLogo}>
                <span style={styles.footerLogoIcon}>💰</span>
                <span style={styles.footerLogoText}>TrackWise</span>
              </div>
              <p style={styles.footerDescription}>
                Your intelligent personal finance companion for a better
                financial future.
              </p>
              <div style={styles.socialLinks}>
                <a
                  href="https://facebook.com/trackwise"
                  style={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                >
                  �
                </a>
                <a
                  href="https://twitter.com/trackwise"
                  style={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Twitter"
                >
                  🐦
                </a>
                <a
                  href="https://instagram.com/trackwise"
                  style={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                >
                  📷
                </a>
                <a
                  href="https://linkedin.com/company/trackwise"
                  style={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with us on LinkedIn"
                >
                  💼
                </a>
              </div>
            </div>

            <div style={styles.footerLinks}>
              <div style={styles.footerColumn}>
                <h4 style={styles.footerColumnTitle}>Product</h4>
                <a href="#features" style={styles.footerLink}>
                  Features
                </a>
                <a href="#pricing" style={styles.footerLink}>
                  Pricing
                </a>
                <a href="#security" style={styles.footerLink}>
                  Security
                </a>
                <a href="#integrations" style={styles.footerLink}>
                  Integrations
                </a>
              </div>

              <div style={styles.footerColumn}>
                <h4 style={styles.footerColumnTitle}>Company</h4>
                <a href="#about" style={styles.footerLink}>
                  About Us
                </a>
                <a href="#careers" style={styles.footerLink}>
                  Careers
                </a>
                <a href="#blog" style={styles.footerLink}>
                  Blog
                </a>
                <a href="#press" style={styles.footerLink}>
                  Press
                </a>
              </div>

              <div style={styles.footerColumn}>
                <h4 style={styles.footerColumnTitle}>Support</h4>
                <a href="#help" style={styles.footerLink}>
                  Help Center
                </a>
                <a href="#contact" style={styles.footerLink}>
                  Contact
                </a>
                <a href="#privacy" style={styles.footerLink}>
                  Privacy Policy
                </a>
                <a href="#terms" style={styles.footerLink}>
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          <div style={styles.footerBottom}>
            <p style={styles.footerCopyright}>
              &copy; 2025 TrackWise. All rights reserved. Made with ❤️ for
              better financial health.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  landingPage: {
    minHeight: "100vh",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
  },
  cta: {
    padding: "6rem 0",
    background: "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
    color: "white",
    textAlign: "center",
  },
  ctaContainer: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "0 2rem",
  },
  ctaTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "1rem",
    margin: 0,
  },
  ctaSubtitle: {
    fontSize: "1.25rem",
    opacity: 0.9,
    marginBottom: "2.5rem",
    lineHeight: "1.6",
  },
  ctaButtons: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  ctaButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "16px 32px",
    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
    color: "white",
    textDecoration: "none",
    borderRadius: "12px",
    fontWeight: "600",
    fontSize: "18px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 14px 0 rgba(37, 99, 235, 0.3)",
  },
  ctaButtonSecondary: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "16px 32px",
    background: "transparent",
    color: "white",
    textDecoration: "none",
    borderRadius: "12px",
    fontWeight: "600",
    fontSize: "18px",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    transition: "all 0.3s ease",
  },
  footer: {
    background: "#111827",
    color: "white",
    padding: "4rem 0 2rem",
  },
  footerContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 2rem",
  },
  footerContent: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr",
    gap: "3rem",
    marginBottom: "3rem",
  },
  footerBrand: {
    maxWidth: "300px",
  },
  footerLogo: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "1rem",
  },
  footerLogoIcon: {
    fontSize: "2rem",
  },
  footerLogoText: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#2563eb",
  },
  footerDescription: {
    color: "#9ca3af",
    lineHeight: "1.6",
    marginBottom: "1.5rem",
  },
  socialLinks: {
    display: "flex",
    gap: "1rem",
  },
  socialLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    background: "#374151",
    borderRadius: "10px",
    textDecoration: "none",
    fontSize: "18px",
    transition: "all 0.3s ease",
  },
  footerColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  footerColumnTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "white",
    marginBottom: "0.5rem",
  },
  footerLink: {
    color: "#9ca3af",
    textDecoration: "none",
    fontSize: "14px",
    transition: "color 0.3s ease",
  },
  footerLinks: {
    display: "contents",
  },
  footerBottom: {
    borderTop: "1px solid #374151",
    paddingTop: "2rem",
    textAlign: "center",
  },
  footerCopyright: {
    color: "#9ca3af",
    fontSize: "14px",
    margin: 0,
  },
};

export default Landing;
