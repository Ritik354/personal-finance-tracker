import React from "react";
import Container from "../ui/Container";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      avatar: "👩‍💼",
      rating: 5,
      text: "TrackWise transformed how I manage my business finances. The AI insights helped me identify spending patterns I never noticed before.",
      company: "Creative Studio",
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      avatar: "👨‍💻",
      rating: 5,
      text: "Finally, a finance app that actually makes sense! The interface is beautiful and the categorization is spot-on.",
      company: "Tech Corp",
    },
    {
      name: "Emily Rodriguez",
      role: "Freelance Designer",
      avatar: "👩‍🎨",
      rating: 5,
      text: "I love how TrackWise helps me set and achieve my financial goals. The progress tracking keeps me motivated!",
      company: "Design Studio",
    },
  ];

  const stats = [
    { number: "10K+", label: "Happy Users" },
    { number: "4.9/5", label: "App Rating" },
    { number: "$2M+", label: "Money Tracked" },
    { number: "99.9%", label: "Uptime" },
  ];

  return (
    <section style={styles.section}>
      <Container>
        {/* Stats Section */}
        <div style={styles.statsSection}>
          <div style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} style={styles.statItem}>
                <div style={styles.statNumber}>{stat.number}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Header */}
        <div style={styles.header}>
          <Badge variant="success" size="md">
            ⭐ Testimonials
          </Badge>
          <h2 style={styles.title}>Loved by thousands of users worldwide</h2>
          <p style={styles.subtitle}>
            See what our users have to say about their experience with TrackWise
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              variant="default"
              padding="lg"
              hover={true}
              style={styles.testimonialCard}
            >
              {/* Rating Stars */}
              <div style={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} style={styles.star}>
                    ⭐
                  </span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p style={styles.testimonialText}>"{testimonial.text}"</p>

              {/* User Info */}
              <div style={styles.userInfo}>
                <div style={styles.userAvatar}>{testimonial.avatar}</div>
                <div style={styles.userDetails}>
                  <div style={styles.userName}>{testimonial.name}</div>
                  <div style={styles.userRole}>
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
                <div style={styles.verified}>
                  <Badge variant="success" size="sm">
                    ✓ Verified
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div style={styles.trustSection}>
          <div style={styles.trustText}>
            <h3 style={styles.trustTitle}>
              Trusted by professionals worldwide
            </h3>
            <p style={styles.trustSubtitle}>
              Join thousands of users who trust TrackWise with their financial
              data
            </p>
          </div>

          <div style={styles.trustLogos}>
            <div style={styles.trustLogo}>
              <div style={styles.logoPlaceholder}>🏦</div>
              <span style={styles.logoText}>Bank Grade Security</span>
            </div>
            <div style={styles.trustLogo}>
              <div style={styles.logoPlaceholder}>🔒</div>
              <span style={styles.logoText}>256-bit Encryption</span>
            </div>
            <div style={styles.trustLogo}>
              <div style={styles.logoPlaceholder}>🛡️</div>
              <span style={styles.logoText}>SOC 2 Compliant</span>
            </div>
            <div style={styles.trustLogo}>
              <div style={styles.logoPlaceholder}>⚡</div>
              <span style={styles.logoText}>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const styles = {
  section: {
    padding: "6rem 0",
    background: "white",
  },
  statsSection: {
    marginBottom: "4rem",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "2rem",
    textAlign: "center",
  },
  statItem: {
    padding: "1.5rem",
  },
  statNumber: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#2563eb",
    marginBottom: "0.5rem",
  },
  statLabel: {
    fontSize: "1rem",
    color: "#6b7280",
    fontWeight: "500",
  },
  header: {
    textAlign: "center",
    marginBottom: "4rem",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: "1rem",
    marginTop: "1rem",
  },
  subtitle: {
    fontSize: "1.125rem",
    color: "#6b7280",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
  testimonialsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "2rem",
    marginBottom: "4rem",
  },
  testimonialCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  rating: {
    display: "flex",
    gap: "4px",
    marginBottom: "1.5rem",
  },
  star: {
    fontSize: "18px",
  },
  testimonialText: {
    fontSize: "1.125rem",
    lineHeight: "1.6",
    color: "#374151",
    marginBottom: "2rem",
    flex: 1,
    fontStyle: "italic",
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  userAvatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "4px",
  },
  userRole: {
    fontSize: "0.875rem",
    color: "#6b7280",
  },
  verified: {
    marginLeft: "auto",
  },
  trustSection: {
    textAlign: "center",
    padding: "3rem 0",
    background: "#f9fafb",
    borderRadius: "20px",
    margin: "2rem 0",
  },
  trustText: {
    marginBottom: "2.5rem",
  },
  trustTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "0.5rem",
  },
  trustSubtitle: {
    color: "#6b7280",
    fontSize: "1rem",
  },
  trustLogos: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "2rem",
    maxWidth: "800px",
    margin: "0 auto",
  },
  trustLogo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.75rem",
  },
  logoPlaceholder: {
    width: "60px",
    height: "60px",
    background: "linear-gradient(135deg, #e5e7eb, #d1d5db)",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
  },
  logoText: {
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "#374151",
  },
};

export default Testimonials;
