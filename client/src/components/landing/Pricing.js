import React, { useState } from "react";
import Container from "../ui/Container";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals getting started",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "Track up to 100 transactions/month",
        "Basic expense categorization",
        "Simple budget tracking",
        "Mobile app access",
        "Email support",
      ],
      popular: false,
      cta: "Get Started Free",
    },
    {
      name: "Pro",
      description: "Best for serious money managers",
      monthlyPrice: 9.99,
      annualPrice: 99.99,
      features: [
        "Unlimited transactions",
        "AI-powered insights",
        "Advanced analytics & reports",
        "Goal tracking & planning",
        "Bank-level security",
        "Priority support",
        "Export data",
        "Custom categories",
      ],
      popular: true,
      cta: "Start Pro Trial",
    },
    {
      name: "Business",
      description: "For small businesses and teams",
      monthlyPrice: 29.99,
      annualPrice: 299.99,
      features: [
        "Everything in Pro",
        "Multi-user access (up to 5)",
        "Business expense tracking",
        "Tax preparation tools",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced reporting",
      ],
      popular: false,
      cta: "Contact Sales",
    },
  ];

  const getPrice = (plan) => {
    if (plan.monthlyPrice === 0) return "Free";
    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    const period = isAnnual ? "/year" : "/month";
    return `$${price}${period}`;
  };

  const getSavings = (plan) => {
    if (plan.monthlyPrice === 0) return null;
    const monthlyCost = plan.monthlyPrice * 12;
    const savings = monthlyCost - plan.annualPrice;
    return Math.round((savings / monthlyCost) * 100);
  };

  return (
    <section style={styles.section}>
      <Container>
        <div style={styles.header}>
          <Badge variant="primary" size="md">
            💰 Pricing
          </Badge>
          <h2 style={styles.title}>Simple, transparent pricing</h2>
          <p style={styles.subtitle}>
            Choose the perfect plan for your financial journey. Start free,
            upgrade when you need more.
          </p>

          {/* Billing Toggle */}
          <div style={styles.billingToggle}>
            <span
              style={{
                ...styles.toggleLabel,
                color: !isAnnual ? "#2563eb" : "#6b7280",
              }}
            >
              Monthly
            </span>
            <button
              style={{
                ...styles.toggleButton,
                background: isAnnual ? "#2563eb" : "#e5e7eb",
              }}
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <div
                style={{
                  ...styles.toggleSlider,
                  transform: isAnnual ? "translateX(24px)" : "translateX(2px)",
                }}
              />
            </button>
            <span
              style={{
                ...styles.toggleLabel,
                color: isAnnual ? "#2563eb" : "#6b7280",
              }}
            >
              Annual
            </span>
            {isAnnual && (
              <Badge variant="success" size="sm" style={styles.savingsBadge}>
                Save up to 17%
              </Badge>
            )}
          </div>
        </div>

        <div style={styles.pricingGrid}>
          {plans.map((plan, index) => (
            <Card
              key={index}
              variant={plan.popular ? "elevated" : "default"}
              padding="xl"
              style={{
                ...styles.pricingCard,
                border: plan.popular
                  ? "2px solid #2563eb"
                  : "1px solid #e5e7eb",
                position: "relative",
              }}
            >
              {plan.popular && (
                <div style={styles.popularBadge}>
                  <Badge variant="primary" size="sm">
                    ⭐ Most Popular
                  </Badge>
                </div>
              )}

              <div style={styles.planHeader}>
                <h3 style={styles.planName}>{plan.name}</h3>
                <p style={styles.planDescription}>{plan.description}</p>
              </div>

              <div style={styles.priceSection}>
                <div style={styles.price}>{getPrice(plan)}</div>
                {isAnnual && getSavings(plan) && (
                  <div style={styles.savings}>
                    Save {getSavings(plan)}% annually
                  </div>
                )}
              </div>

              <ul style={styles.featuresList}>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={styles.feature}>
                    <span style={styles.checkIcon}>✅</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div style={styles.ctaSection}>
                <Button
                  variant={plan.popular ? "primary" : "secondary"}
                  size="lg"
                  style={{ width: "100%" }}
                >
                  {plan.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div style={styles.faqSection}>
          <h3 style={styles.faqTitle}>Frequently Asked Questions</h3>
          <div style={styles.faqGrid}>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>Can I change plans anytime?</h4>
              <p style={styles.faqAnswer}>
                Yes! You can upgrade, downgrade, or cancel your plan at any
                time. Changes take effect immediately.
              </p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>Is my financial data secure?</h4>
              <p style={styles.faqAnswer}>
                Absolutely. We use bank-level 256-bit encryption and never store
                your banking credentials. Your data is always protected.
              </p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>Do you offer refunds?</h4>
              <p style={styles.faqAnswer}>
                Yes, we offer a 30-day money-back guarantee. If you're not
                satisfied, we'll refund your payment, no questions asked.
              </p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>Can I export my data?</h4>
              <p style={styles.faqAnswer}>
                Yes, Pro and Business plans include data export in CSV, PDF, and
                Excel formats. Your data is always yours.
              </p>
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
    background: "#f9fafb",
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
    margin: "0 auto 2rem",
    lineHeight: "1.6",
  },
  billingToggle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "2rem",
  },
  toggleLabel: {
    fontSize: "1rem",
    fontWeight: "500",
    transition: "color 0.3s ease",
  },
  toggleButton: {
    width: "52px",
    height: "28px",
    borderRadius: "14px",
    border: "none",
    cursor: "pointer",
    position: "relative",
    transition: "background-color 0.3s ease",
  },
  toggleSlider: {
    width: "24px",
    height: "24px",
    borderRadius: "12px",
    background: "white",
    position: "absolute",
    top: "2px",
    transition: "transform 0.3s ease",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  savingsBadge: {
    marginLeft: "0.5rem",
  },
  pricingGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "2rem",
    marginBottom: "4rem",
  },
  pricingCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  popularBadge: {
    position: "absolute",
    top: "-12px",
    left: "50%",
    transform: "translateX(-50%)",
  },
  planHeader: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  planName: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: "0.5rem",
  },
  planDescription: {
    color: "#6b7280",
    fontSize: "1rem",
  },
  priceSection: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  price: {
    fontSize: "3rem",
    fontWeight: "700",
    color: "#2563eb",
    marginBottom: "0.5rem",
  },
  savings: {
    fontSize: "0.875rem",
    color: "#10b981",
    fontWeight: "500",
  },
  featuresList: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 2rem 0",
    flex: 1,
  },
  feature: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "0.75rem 0",
    fontSize: "1rem",
    color: "#374151",
  },
  checkIcon: {
    fontSize: "1rem",
    flexShrink: 0,
  },
  ctaSection: {
    marginTop: "auto",
  },
  faqSection: {
    marginTop: "4rem",
    textAlign: "center",
  },
  faqTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: "3rem",
  },
  faqGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    textAlign: "left",
  },
  faqItem: {
    background: "white",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
  faqQuestion: {
    fontSize: "1.125rem",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "1rem",
  },
  faqAnswer: {
    color: "#6b7280",
    lineHeight: "1.6",
    margin: 0,
  },
};

export default Pricing;
