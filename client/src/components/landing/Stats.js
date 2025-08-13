import React from "react";
import Container from "../ui/Container";

const Stats = () => {
  const stats = [
    {
      number: "50K+",
      label: "Active Users",
      description: "Trust TrackWise daily",
      icon: "👥",
      color: "#3b82f6",
    },
    {
      number: "$10M+",
      label: "Money Tracked",
      description: "Managed through our platform",
      icon: "💰",
      color: "#10b981",
    },
    {
      number: "500K+",
      label: "Transactions",
      description: "Processed this month",
      icon: "📊",
      color: "#f59e0b",
    },
    {
      number: "99.9%",
      label: "Uptime",
      description: "Reliable service guarantee",
      icon: "⚡",
      color: "#ef4444",
    },
  ];

  return (
    <section style={styles.section}>
      <Container>
        <div style={styles.content}>
          <div style={styles.header}>
            <h2 style={styles.title}>Trusted by thousands worldwide</h2>
            <p style={styles.subtitle}>
              Join a growing community of smart money managers who have
              transformed their financial lives with TrackWise.
            </p>
          </div>

          <div style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} style={styles.statCard}>
                <div
                  style={{
                    ...styles.statIcon,
                    background: `linear-gradient(135deg, ${stat.color}, ${stat.color}dd)`,
                  }}
                >
                  {stat.icon}
                </div>
                <div style={styles.statContent}>
                  <div style={{ ...styles.statNumber, color: stat.color }}>
                    {stat.number}
                  </div>
                  <div style={styles.statLabel}>{stat.label}</div>
                  <div style={styles.statDescription}>{stat.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievement Badges */}
          <div style={styles.achievements}>
            <div style={styles.achievementItem}>
              <div style={styles.achievementIcon}>🏆</div>
              <div style={styles.achievementText}>
                <div style={styles.achievementTitle}>Best Finance App 2024</div>
                <div style={styles.achievementSubtitle}>TechCrunch Awards</div>
              </div>
            </div>

            <div style={styles.achievementItem}>
              <div style={styles.achievementIcon}>⭐</div>
              <div style={styles.achievementText}>
                <div style={styles.achievementTitle}>4.9/5 Rating</div>
                <div style={styles.achievementSubtitle}>10,000+ Reviews</div>
              </div>
            </div>

            <div style={styles.achievementItem}>
              <div style={styles.achievementIcon}>🔒</div>
              <div style={styles.achievementText}>
                <div style={styles.achievementTitle}>SOC 2 Certified</div>
                <div style={styles.achievementSubtitle}>
                  Enterprise Security
                </div>
              </div>
            </div>

            <div style={styles.achievementItem}>
              <div style={styles.achievementIcon}>🚀</div>
              <div style={styles.achievementText}>
                <div style={styles.achievementTitle}>Featured by Apple</div>
                <div style={styles.achievementSubtitle}>
                  App Store Editors' Choice
                </div>
              </div>
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
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    position: "relative",
    overflow: "hidden",
  },
  content: {
    position: "relative",
    zIndex: 2,
  },
  header: {
    textAlign: "center",
    marginBottom: "4rem",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "1rem",
    color: "white",
  },
  subtitle: {
    fontSize: "1.125rem",
    opacity: 0.9,
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    marginBottom: "4rem",
  },
  statCard: {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(20px)",
    borderRadius: "20px",
    padding: "2rem",
    textAlign: "center",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  statIcon: {
    width: "80px",
    height: "80px",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    margin: "0 auto 1.5rem",
    color: "white",
  },
  statContent: {
    textAlign: "center",
  },
  statNumber: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "0.5rem",
    background: "linear-gradient(135deg, #ffffff, #f0f0f0)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  statLabel: {
    fontSize: "1.125rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
    color: "white",
  },
  statDescription: {
    fontSize: "0.875rem",
    opacity: 0.8,
    color: "white",
  },
  achievements: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
    marginTop: "3rem",
  },
  achievementItem: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "12px",
    padding: "1.5rem",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  achievementIcon: {
    fontSize: "2rem",
    width: "60px",
    height: "60px",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  achievementText: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: "1rem",
    fontWeight: "600",
    marginBottom: "0.25rem",
    color: "white",
  },
  achievementSubtitle: {
    fontSize: "0.875rem",
    opacity: 0.8,
    color: "white",
  },
};

export default Stats;
