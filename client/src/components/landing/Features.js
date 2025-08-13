import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

const Features = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Insights",
      description:
        "Get personalized financial advice and spending pattern analysis powered by advanced machine learning algorithms.",
      gradient: "linear-gradient(135deg, #667eea, #764ba2)",
    },
    {
      icon: "📊",
      title: "Smart Analytics",
      description:
        "Beautiful charts and comprehensive reports that help you understand your financial health at a glance.",
      gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
    },
    {
      icon: "🎯",
      title: "Goal Tracking",
      description:
        "Set and achieve financial goals with intelligent progress tracking and milestone celebrations.",
      gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
    },
    {
      icon: "🔒",
      title: "Bank-Level Security",
      description:
        "256-bit encryption and multi-factor authentication keep your financial data completely secure.",
      gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
    },
    {
      icon: "📱",
      title: "Mobile First",
      description:
        "Seamless experience across all devices with offline capability and real-time synchronization.",
      gradient: "linear-gradient(135deg, #fa709a, #fee140)",
    },
    {
      icon: "⚡",
      title: "Auto Categorization",
      description:
        "Automatically categorize transactions using AI to save time and improve financial accuracy.",
      gradient: "linear-gradient(135deg, #a8edea, #fed6e3)",
    },
  ];

  return (
    <section style={styles.section}>
      <Container>
        <div style={styles.header}>
          <div style={styles.badge}>
            <span style={styles.badgeIcon}>✨</span>
            Features
          </div>
          <h2 style={styles.title}>
            Everything you need to master your finances
          </h2>
          <p style={styles.subtitle}>
            Powerful tools and intelligent insights designed to make financial
            management effortless and effective for everyone.
          </p>
        </div>

        <div style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} style={styles.featureCard}>
              <div
                style={{
                  ...styles.featureIcon,
                  background: feature.gradient,
                }}
              >
                <span style={styles.iconEmoji}>{feature.icon}</span>
              </div>

              <div style={styles.featureContent}>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDescription}>{feature.description}</p>
              </div>

              <div style={styles.featureArrow}>
                <span style={styles.arrow}>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div style={styles.highlight}>
          <div style={styles.highlightCard}>
            <div style={styles.highlightContent}>
              <div style={styles.highlightText}>
                <h3 style={styles.highlightTitle}>
                  Ready to transform your financial life?
                </h3>
                <p style={styles.highlightDescription}>
                  Join thousands of users who have already taken control of
                  their finances with TrackWise's intelligent platform.
                </p>
                <div style={styles.highlightStats}>
                  <div style={styles.stat}>
                    <div style={styles.statNumber}>$2.5M+</div>
                    <div style={styles.statLabel}>Money Tracked</div>
                  </div>
                  <div style={styles.stat}>
                    <div style={styles.statNumber}>15K+</div>
                    <div style={styles.statLabel}>Transactions</div>
                  </div>
                  <div style={styles.stat}>
                    <div style={styles.statNumber}>98%</div>
                    <div style={styles.statLabel}>Satisfaction</div>
                  </div>
                </div>
                <Button variant="primary" size="lg">
                  Get Started Free
                </Button>
              </div>

              <div style={styles.highlightVisual}>
                <div style={styles.dashboardPreview}>
                  <div style={styles.previewHeader}>
                    <div style={styles.previewDots}>
                      <span
                        style={{ ...styles.previewDot, background: "#ff5f57" }}
                      ></span>
                      <span
                        style={{ ...styles.previewDot, background: "#ffbd2e" }}
                      ></span>
                      <span
                        style={{ ...styles.previewDot, background: "#28ca42" }}
                      ></span>
                    </div>
                    <div style={styles.previewTitle}>TrackWise Dashboard</div>
                  </div>

                  <div style={styles.previewContent}>
                    <div style={styles.previewChart}>
                      <div style={styles.chartBars}>
                        <div
                          style={{
                            ...styles.chartBar,
                            height: "40%",
                            background: "#667eea",
                          }}
                        ></div>
                        <div
                          style={{
                            ...styles.chartBar,
                            height: "70%",
                            background: "#f093fb",
                          }}
                        ></div>
                        <div
                          style={{
                            ...styles.chartBar,
                            height: "55%",
                            background: "#4facfe",
                          }}
                        ></div>
                        <div
                          style={{
                            ...styles.chartBar,
                            height: "85%",
                            background: "#43e97b",
                          }}
                        ></div>
                        <div
                          style={{
                            ...styles.chartBar,
                            height: "60%",
                            background: "#fa709a",
                          }}
                        ></div>
                      </div>
                    </div>

                    <div style={styles.previewMetrics}>
                      <div style={styles.previewMetric}>
                        <div style={styles.metricIcon}>💰</div>
                        <div style={styles.metricValue}>$4,250</div>
                        <div style={styles.metricLabel}>This Month</div>
                      </div>
                      <div style={styles.previewMetric}>
                        <div style={styles.metricIcon}>📈</div>
                        <div style={styles.metricValue}>+12%</div>
                        <div style={styles.metricLabel}>Growth</div>
                      </div>
                    </div>
                  </div>
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
    padding: "100px 0",
    background: "#f8fafc",
  },
  header: {
    textAlign: "center",
    marginBottom: "80px",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    borderRadius: "50px",
    padding: "8px 20px",
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "24px",
  },
  badgeIcon: {
    fontSize: "16px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: "20px",
    lineHeight: "1.2",
  },
  subtitle: {
    fontSize: "1.25rem",
    color: "#6b7280",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "30px",
    marginBottom: "100px",
  },
  featureCard: {
    background: "white",
    borderRadius: "20px",
    padding: "40px 30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "20px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    border: "1px solid #f1f5f9",
    transition: "all 0.3s ease",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
  },
  featureIcon: {
    width: "80px",
    height: "80px",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px",
  },
  iconEmoji: {
    fontSize: "32px",
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: "12px",
    lineHeight: "1.3",
  },
  featureDescription: {
    color: "#6b7280",
    lineHeight: "1.6",
    fontSize: "16px",
  },
  featureArrow: {
    alignSelf: "flex-end",
    opacity: 0,
    transition: "all 0.3s ease",
  },
  arrow: {
    fontSize: "20px",
    color: "#667eea",
    fontWeight: "bold",
  },
  highlight: {
    marginTop: "60px",
  },
  highlightCard: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    borderRadius: "30px",
    padding: "60px",
    color: "white",
    position: "relative",
    overflow: "hidden",
  },
  highlightContent: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    alignItems: "center",
  },
  highlightText: {
    maxWidth: "500px",
  },
  highlightTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "20px",
    lineHeight: "1.2",
  },
  highlightDescription: {
    fontSize: "1.125rem",
    lineHeight: "1.6",
    marginBottom: "40px",
    opacity: 0.9,
  },
  highlightStats: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
    marginBottom: "40px",
  },
  stat: {
    textAlign: "center",
  },
  statNumber: {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "8px",
  },
  statLabel: {
    fontSize: "14px",
    opacity: 0.8,
    fontWeight: "500",
  },
  highlightButton: {
    background: "white",
    color: "#667eea",
    border: "none",
    borderRadius: "12px",
    padding: "16px 32px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)",
  },
  highlightVisual: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dashboardPreview: {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(20px)",
    borderRadius: "20px",
    padding: "0",
    width: "350px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    overflow: "hidden",
  },
  previewHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  },
  previewDots: {
    display: "flex",
    gap: "8px",
  },
  previewDot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
  },
  previewTitle: {
    fontSize: "14px",
    fontWeight: "600",
    opacity: 0.9,
  },
  previewContent: {
    padding: "30px 20px",
  },
  previewChart: {
    height: "120px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    padding: "20px",
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
    marginBottom: "25px",
  },
  chartBars: {
    display: "flex",
    alignItems: "end",
    gap: "8px",
    height: "80px",
  },
  chartBar: {
    width: "20px",
    borderRadius: "4px 4px 0 0",
    transition: "height 0.3s ease",
  },
  previewMetrics: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  previewMetric: {
    textAlign: "center",
    padding: "15px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
  },
  metricIcon: {
    fontSize: "24px",
    marginBottom: "8px",
  },
  metricValue: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "4px",
  },
  metricLabel: {
    fontSize: "12px",
    opacity: 0.8,
  },
};

export default Features;
