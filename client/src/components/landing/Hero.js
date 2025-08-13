import React from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section style={styles.hero}>
      <Container>
        <div style={styles.heroContent}>
          <div style={styles.heroText}>
            <div style={styles.badge}>
              <span style={styles.badgeIcon}>✨</span>
              New: AI-Powered Financial Insights
            </div>

            <h1 style={styles.title}>
              Take control of your{" "}
              <span style={styles.highlight}>financial future</span> with smart
              money management
            </h1>

            <p style={styles.subtitle}>
              TrackWise helps you manage expenses, create budgets, and achieve
              your financial goals with intelligent insights and beautiful
              analytics. Start your journey to financial freedom today.
            </p>

            <div style={styles.heroButtons}>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button variant="primary" size="lg">
                  Get Started Free
                </Button>
              </Link>

              <button style={styles.secondaryButton}>
                <span style={styles.playIcon}>▶</span>
                Watch Demo
              </button>
            </div>

            <div style={styles.socialProof}>
              <div style={styles.trustIndicators}>
                <div style={styles.rating}>
                  <div style={styles.stars}>★★★★★</div>
                  <span style={styles.ratingText}>4.9/5 from 2,500+ users</span>
                </div>
                <div style={styles.security}>
                  <span style={styles.securityIcon}>🔒</span>
                  <span style={styles.securityText}>Bank-level security</span>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.heroVisual}>
            <div style={styles.phoneContainer}>
              <div style={styles.phone}>
                <div style={styles.phoneScreen}>
                  <div style={styles.appHeader}>
                    <div style={styles.appTime}>9:41</div>
                    <div style={styles.appSignal}>📶 🔋</div>
                  </div>

                  <div style={styles.appContent}>
                    <div style={styles.greeting}>
                      <h3 style={styles.greetingText}>Good morning, Alex!</h3>
                      <p style={styles.greetingSubtext}>
                        Here's your financial overview
                      </p>
                    </div>

                    <div style={styles.balanceCard}>
                      <div style={styles.balanceLabel}>Total Balance</div>
                      <div style={styles.balanceAmount}>$24,580.00</div>
                      <div style={styles.balanceChange}>
                        <span style={styles.changeIcon}>↗</span>
                        <span style={styles.changeText}>
                          +12.5% from last month
                        </span>
                      </div>
                    </div>

                    <div style={styles.quickActions}>
                      <div style={styles.actionButton}>
                        <div style={styles.actionIcon}>💸</div>
                        <span style={styles.actionText}>Send</span>
                      </div>
                      <div style={styles.actionButton}>
                        <div style={styles.actionIcon}>💰</div>
                        <span style={styles.actionText}>Receive</span>
                      </div>
                      <div style={styles.actionButton}>
                        <div style={styles.actionIcon}>📊</div>
                        <span style={styles.actionText}>Analytics</span>
                      </div>
                      <div style={styles.actionButton}>
                        <div style={styles.actionIcon}>🎯</div>
                        <span style={styles.actionText}>Goals</span>
                      </div>
                    </div>

                    <div style={styles.recentTransactions}>
                      <h4 style={styles.sectionTitle}>Recent Transactions</h4>
                      <div style={styles.transactionItem}>
                        <div style={styles.transactionIcon}>☕</div>
                        <div style={styles.transactionDetails}>
                          <div style={styles.transactionName}>
                            Starbucks Coffee
                          </div>
                          <div style={styles.transactionDate}>
                            Today, 2:30 PM
                          </div>
                        </div>
                        <div style={styles.transactionAmount}>-$4.50</div>
                      </div>
                      <div style={styles.transactionItem}>
                        <div style={styles.transactionIcon}>🛒</div>
                        <div style={styles.transactionDetails}>
                          <div style={styles.transactionName}>
                            Grocery Store
                          </div>
                          <div style={styles.transactionDate}>
                            Yesterday, 6:15 PM
                          </div>
                        </div>
                        <div style={styles.transactionAmount}>-$85.20</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div style={{ ...styles.floatingCard, top: "15%", right: "-5%" }}>
              <div style={styles.floatingCardContent}>
                <div style={styles.floatingIcon}>📈</div>
                <div style={styles.floatingTitle}>Savings Goal</div>
                <div style={styles.floatingValue}>$8,500 / $10,000</div>
                <div style={styles.progressBar}>
                  <div style={styles.progressFill}></div>
                </div>
              </div>
            </div>

            <div
              style={{ ...styles.floatingCard, bottom: "20%", left: "-10%" }}
            >
              <div style={styles.floatingCardContent}>
                <div style={styles.floatingIcon}>💡</div>
                <div style={styles.floatingTitle}>Smart Insight</div>
                <div style={styles.floatingText}>
                  You saved 15% more this month!
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
  hero: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    paddingTop: "100px",
    paddingBottom: "100px",
  },
  heroContent: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "5rem",
    alignItems: "center",
  },
  heroText: {
    color: "white",
    maxWidth: "600px",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "50px",
    padding: "8px 16px",
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "2rem",
    color: "white",
  },
  badgeIcon: {
    fontSize: "16px",
  },
  title: {
    fontSize: "4rem",
    fontWeight: "700",
    lineHeight: "1.1",
    marginBottom: "1.5rem",
    margin: 0,
  },
  highlight: {
    background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  subtitle: {
    fontSize: "1.25rem",
    lineHeight: "1.6",
    marginBottom: "3rem",
    opacity: 0.9,
    margin: 0,
  },
  heroButtons: {
    display: "flex",
    gap: "1.5rem",
    marginBottom: "3rem",
    alignItems: "center",
  },
  primaryButton: {
    background: "white",
    color: "#1f2937",
    border: "none",
    borderRadius: "12px",
    padding: "16px 32px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)",
  },
  secondaryButton: {
    background: "transparent",
    color: "white",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "12px",
    padding: "14px 28px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  playIcon: {
    fontSize: "14px",
  },
  socialProof: {
    marginTop: "2rem",
  },
  trustIndicators: {
    display: "flex",
    gap: "2rem",
    alignItems: "center",
  },
  rating: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  stars: {
    color: "#fbbf24",
    fontSize: "16px",
  },
  ratingText: {
    fontSize: "14px",
    opacity: 0.9,
  },
  security: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  securityIcon: {
    fontSize: "14px",
  },
  securityText: {
    fontSize: "14px",
    opacity: 0.9,
  },
  heroVisual: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  phoneContainer: {
    position: "relative",
    transform: "perspective(1000px) rotateY(-15deg) rotateX(5deg)",
  },
  phone: {
    width: "300px",
    height: "600px",
    background: "linear-gradient(135deg, #1f2937, #374151)",
    borderRadius: "40px",
    padding: "20px",
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
    position: "relative",
  },
  phoneScreen: {
    width: "100%",
    height: "100%",
    background: "white",
    borderRadius: "30px",
    overflow: "hidden",
    position: "relative",
  },
  appHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px 10px",
    background: "#f8fafc",
  },
  appTime: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#1f2937",
  },
  appSignal: {
    fontSize: "14px",
  },
  appContent: {
    padding: "20px",
  },
  greeting: {
    marginBottom: "25px",
  },
  greetingText: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: "5px",
  },
  greetingSubtext: {
    fontSize: "14px",
    color: "#6b7280",
    margin: 0,
  },
  balanceCard: {
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    borderRadius: "20px",
    padding: "25px",
    marginBottom: "25px",
    color: "white",
  },
  balanceLabel: {
    fontSize: "14px",
    opacity: 0.8,
    marginBottom: "8px",
  },
  balanceAmount: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "10px",
  },
  balanceChange: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "14px",
  },
  changeIcon: {
    color: "#10b981",
    fontSize: "16px",
  },
  changeText: {
    opacity: 0.9,
  },
  quickActions: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "15px",
    marginBottom: "30px",
  },
  actionButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    padding: "15px 10px",
    background: "#f8fafc",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  actionIcon: {
    fontSize: "24px",
  },
  actionText: {
    fontSize: "12px",
    fontWeight: "500",
    color: "#374151",
  },
  recentTransactions: {
    marginTop: "20px",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "15px",
  },
  transactionItem: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "12px 0",
    borderBottom: "1px solid #f1f5f9",
  },
  transactionIcon: {
    width: "40px",
    height: "40px",
    background: "#f1f5f9",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
  },
  transactionDetails: {
    flex: 1,
  },
  transactionName: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "2px",
  },
  transactionDate: {
    fontSize: "12px",
    color: "#6b7280",
  },
  transactionAmount: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#ef4444",
  },
  floatingCard: {
    position: "absolute",
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(20px)",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    minWidth: "200px",
    animation: "float 6s ease-in-out infinite",
  },
  floatingCardContent: {
    textAlign: "center",
  },
  floatingIcon: {
    fontSize: "32px",
    marginBottom: "12px",
  },
  floatingTitle: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "8px",
  },
  floatingValue: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#667eea",
    marginBottom: "12px",
  },
  floatingText: {
    fontSize: "14px",
    color: "#6b7280",
    fontWeight: "500",
  },
  progressBar: {
    width: "100%",
    height: "6px",
    background: "#e5e7eb",
    borderRadius: "3px",
    overflow: "hidden",
  },
  progressFill: {
    width: "85%",
    height: "100%",
    background: "linear-gradient(135deg, #10b981, #059669)",
    borderRadius: "3px",
  },
};

export default Hero;
