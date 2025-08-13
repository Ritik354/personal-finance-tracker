import React from "react";
import Container from "../ui/Container";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Sign Up & Connect",
      description:
        "Create your account in seconds and securely connect your bank accounts with 256-bit encryption.",
      icon: "🔗",
      features: ["Bank-level security", "Instant setup", "Multiple accounts"],
    },
    {
      step: "02",
      title: "Track Automatically",
      description:
        "Our AI automatically categorizes your transactions and identifies spending patterns in real-time.",
      icon: "🤖",
      features: ["Auto-categorization", "Smart insights", "Real-time sync"],
    },
    {
      step: "03",
      title: "Set Goals & Budgets",
      description:
        "Define your financial goals and create budgets that adapt to your lifestyle and spending habits.",
      icon: "🎯",
      features: ["Custom goals", "Smart budgets", "Progress tracking"],
    },
    {
      step: "04",
      title: "Achieve Financial Freedom",
      description:
        "Get personalized insights and recommendations to optimize your finances and reach your goals faster.",
      icon: "🚀",
      features: ["Personal insights", "Optimization tips", "Goal achievement"],
    },
  ];

  return (
    <section style={styles.section}>
      <Container>
        <div style={styles.header}>
          <Badge variant="success" size="md">
            🎯 How It Works
          </Badge>
          <h2 style={styles.title}>Get started in 4 simple steps</h2>
          <p style={styles.subtitle}>
            Transform your financial life in minutes, not months. Our
            intelligent platform makes money management effortless and
            effective.
          </p>
        </div>

        <div style={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div key={index} style={styles.stepWrapper}>
              <Card
                variant="default"
                padding="xl"
                hover={true}
                style={styles.stepCard}
              >
                <div style={styles.stepHeader}>
                  <div style={styles.stepNumber}>{step.step}</div>
                  <div style={styles.stepIcon}>{step.icon}</div>
                </div>

                <h3 style={styles.stepTitle}>{step.title}</h3>
                <p style={styles.stepDescription}>{step.description}</p>

                <div style={styles.stepFeatures}>
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} style={styles.feature}>
                      <span style={styles.featureIcon}>✨</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </Card>

              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div style={styles.connectionLine}>
                  <div style={styles.arrow}>→</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Demo Section */}
        <div style={styles.demoSection}>
          <Card variant="glass" padding="xl" style={styles.demoCard}>
            <div style={styles.demoContent}>
              <div style={styles.demoText}>
                <h3 style={styles.demoTitle}>See TrackWise in action</h3>
                <p style={styles.demoDescription}>
                  Watch how easy it is to take control of your finances with our
                  intelligent platform. No credit card required.
                </p>
                <div style={styles.demoButtons}>
                  <Button variant="primary" size="lg">
                    <span>▶️</span>
                    Watch 2-min Demo
                  </Button>
                  <Button variant="secondary" size="lg">
                    <span>🚀</span>
                    Try Free Now
                  </Button>
                </div>
              </div>

              <div style={styles.demoVisual}>
                <div style={styles.demoScreen}>
                  <div style={styles.demoHeader}>
                    <div style={styles.demoDots}>
                      <span
                        style={{ ...styles.demoDot, background: "#ff5f57" }}
                      ></span>
                      <span
                        style={{ ...styles.demoDot, background: "#ffbd2e" }}
                      ></span>
                      <span
                        style={{ ...styles.demoDot, background: "#28ca42" }}
                      ></span>
                    </div>
                    <div style={styles.demoTitle}>TrackWise Dashboard</div>
                  </div>

                  <div style={styles.demoBody}>
                    <div style={styles.demoMetrics}>
                      <div style={styles.demoMetric}>
                        <div style={styles.metricIcon}>💰</div>
                        <div style={styles.metricValue}>$4,250</div>
                        <div style={styles.metricLabel}>This Month</div>
                      </div>
                      <div style={styles.demoMetric}>
                        <div style={styles.metricIcon}>📈</div>
                        <div style={styles.metricValue}>+12%</div>
                        <div style={styles.metricLabel}>vs Last Month</div>
                      </div>
                    </div>

                    <div style={styles.demoChart}>
                      <div style={styles.chartBars}>
                        <div
                          style={{
                            ...styles.chartBar,
                            height: "40%",
                            background: "#3b82f6",
                          }}
                        ></div>
                        <div
                          style={{
                            ...styles.chartBar,
                            height: "70%",
                            background: "#10b981",
                          }}
                        ></div>
                        <div
                          style={{
                            ...styles.chartBar,
                            height: "55%",
                            background: "#f59e0b",
                          }}
                        ></div>
                        <div
                          style={{
                            ...styles.chartBar,
                            height: "85%",
                            background: "#ef4444",
                          }}
                        ></div>
                        <div
                          style={{
                            ...styles.chartBar,
                            height: "60%",
                            background: "#8b5cf6",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div
                  style={{
                    ...styles.floatingElement,
                    top: "10%",
                    right: "10%",
                  }}
                >
                  <div style={styles.floatingIcon}>🎯</div>
                  <div style={styles.floatingText}>Goal: 85%</div>
                </div>

                <div
                  style={{
                    ...styles.floatingElement,
                    bottom: "15%",
                    left: "5%",
                  }}
                >
                  <div style={styles.floatingIcon}>💡</div>
                  <div style={styles.floatingText}>Smart Tip</div>
                </div>
              </div>
            </div>
          </Card>
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
  stepsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    marginBottom: "4rem",
    position: "relative",
  },
  stepWrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stepCard: {
    width: "100%",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
  },
  stepHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "1.5rem",
  },
  stepNumber: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.25rem",
    fontWeight: "700",
  },
  stepIcon: {
    fontSize: "2.5rem",
  },
  stepTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "1rem",
  },
  stepDescription: {
    color: "#6b7280",
    lineHeight: "1.6",
    marginBottom: "1.5rem",
  },
  stepFeatures: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  feature: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "0.875rem",
    color: "#374151",
  },
  featureIcon: {
    fontSize: "1rem",
  },
  connectionLine: {
    position: "absolute",
    top: "50%",
    right: "-1rem",
    transform: "translateY(-50%)",
    zIndex: 1,
  },
  arrow: {
    fontSize: "2rem",
    color: "#2563eb",
    opacity: 0.3,
  },
  demoSection: {
    marginTop: "4rem",
  },
  demoCard: {
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))",
    border: "1px solid rgba(255,255,255,0.3)",
  },
  demoContent: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3rem",
    alignItems: "center",
  },
  demoText: {
    textAlign: "left",
  },
  demoTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: "1rem",
  },
  demoDescription: {
    fontSize: "1.125rem",
    color: "#6b7280",
    lineHeight: "1.6",
    marginBottom: "2rem",
  },
  demoButtons: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  },
  demoButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px 24px",
    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontWeight: "600",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  demoButtonSecondary: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px 24px",
    background: "transparent",
    color: "#2563eb",
    border: "2px solid #2563eb",
    borderRadius: "12px",
    fontWeight: "600",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  demoVisual: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  demoScreen: {
    background: "white",
    borderRadius: "16px",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    width: "300px",
  },
  demoHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px",
    borderBottom: "1px solid #e5e7eb",
    background: "#f9fafb",
  },
  demoDots: {
    display: "flex",
    gap: "6px",
  },
  demoDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
  },
  demoBody: {
    padding: "20px",
  },
  demoMetrics: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginBottom: "20px",
  },
  demoMetric: {
    textAlign: "center",
    padding: "12px",
    background: "#f9fafb",
    borderRadius: "8px",
  },
  metricIcon: {
    fontSize: "20px",
    marginBottom: "8px",
  },
  metricValue: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: "4px",
  },
  metricLabel: {
    fontSize: "12px",
    color: "#6b7280",
  },
  demoChart: {
    height: "80px",
    background: "#f9fafb",
    borderRadius: "8px",
    padding: "12px",
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
  },
  chartBars: {
    display: "flex",
    alignItems: "end",
    gap: "6px",
    height: "60px",
  },
  chartBar: {
    width: "16px",
    borderRadius: "2px 2px 0 0",
  },
  floatingElement: {
    position: "absolute",
    background: "rgba(255, 255, 255, 0.95)",
    borderRadius: "8px",
    padding: "8px 12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "12px",
    fontWeight: "500",
    animation: "float 3s ease-in-out infinite",
  },
  floatingIcon: {
    fontSize: "14px",
  },
  floatingText: {
    color: "#374151",
  },
};

export default HowItWorks;
