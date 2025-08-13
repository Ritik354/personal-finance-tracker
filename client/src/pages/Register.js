import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../utils/axios";
import { AuthContext } from "../context/AuthContext";

export default function Register() {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    return strength;
  };

  const getPasswordStrengthText = (strength) => {
    switch (strength) {
      case 0:
      case 1:
        return { text: "Very Weak", color: "#ef4444" };
      case 2:
        return { text: "Weak", color: "#f59e0b" };
      case 3:
        return { text: "Fair", color: "#eab308" };
      case 4:
        return { text: "Good", color: "#22c55e" };
      case 5:
        return { text: "Strong", color: "#16a34a" };
      default:
        return { text: "Very Weak", color: "#ef4444" };
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setForm({ ...form, [name]: newValue });

    // Clear errors when user starts typing
    if (error) setError("");
    if (fieldErrors[name]) {
      setFieldErrors({ ...fieldErrors, [name]: "" });
    }

    // Real-time validation
    if (name === "email" && value) {
      if (!validateEmail(value)) {
        setFieldErrors({
          ...fieldErrors,
          email: "Please enter a valid email address",
        });
      } else {
        setFieldErrors({ ...fieldErrors, email: "" });
      }
    }

    if (name === "password") {
      setPasswordStrength(calculatePasswordStrength(value));
      if (form.confirmPassword && value !== form.confirmPassword) {
        setFieldErrors({
          ...fieldErrors,
          confirmPassword: "Passwords don't match",
        });
      } else if (form.confirmPassword) {
        setFieldErrors({ ...fieldErrors, confirmPassword: "" });
      }
    }

    if (name === "confirmPassword") {
      if (value !== form.password) {
        setFieldErrors({
          ...fieldErrors,
          confirmPassword: "Passwords don't match",
        });
      } else {
        setFieldErrors({ ...fieldErrors, confirmPassword: "" });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setFieldErrors({});

    // Client-side validation
    const errors = {};

    if (!form.name.trim()) {
      errors.name = "Full name is required";
    } else if (form.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    if (!form.email) {
      errors.email = "Email is required";
    } else if (!validateEmail(form.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!form.password) {
      errors.password = "Password is required";
    } else if (form.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!form.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (form.password !== form.confirmPassword) {
      errors.confirmPassword = "Passwords don't match";
    }

    if (!form.agreeToTerms) {
      errors.agreeToTerms = "You must agree to the terms and conditions";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setLoading(false);
      return;
    }

    try {
      const res = await API.post("/auth/register", {
        name: form.name.trim(),
        email: form.email,
        password: form.password,
      });
      login(res.data);
      navigate("/dashboard");
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Registration failed";
      if (errorMessage.toLowerCase().includes("email")) {
        setFieldErrors({ email: "Email already exists" });
      } else {
        setError(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* Back to Home Button */}
      <Link to="/" style={styles.backButton}>
        <span>←</span> Back to Home
      </Link>

      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.iconContainer}>
            <span style={styles.icon}>🚀</span>
          </div>
          <h1 style={styles.title}>Join TrackWise</h1>
          <p style={styles.subtitle}>
            Create your account and start managing your finances
          </p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          {error && (
            <div style={styles.errorMessage}>
              <span style={styles.errorIcon}>⚠️</span>
              {error}
            </div>
          )}

          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name</label>
            <div style={styles.inputWrapper}>
              <input
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                style={{
                  ...styles.input,
                  borderColor: fieldErrors.name ? "#ef4444" : "#e5e7eb",
                }}
                required
              />
              <span style={styles.inputIcon}>👤</span>
            </div>
            {fieldErrors.name && (
              <span style={styles.fieldError}>{fieldErrors.name}</span>
            )}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <div style={styles.inputWrapper}>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                style={{
                  ...styles.input,
                  borderColor: fieldErrors.email ? "#ef4444" : "#e5e7eb",
                }}
                required
              />
              <span style={styles.inputIcon}>📧</span>
            </div>
            {fieldErrors.email && (
              <span style={styles.fieldError}>{fieldErrors.email}</span>
            )}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.inputWrapper}>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                value={form.password}
                onChange={handleChange}
                style={{
                  ...styles.input,
                  borderColor: fieldErrors.password ? "#ef4444" : "#e5e7eb",
                  paddingRight: "50px",
                }}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.passwordToggle}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {form.password && (
              <div style={styles.passwordStrength}>
                <div style={styles.strengthBar}>
                  <div
                    style={{
                      ...styles.strengthFill,
                      width: `${(passwordStrength / 5) * 100}%`,
                      backgroundColor:
                        getPasswordStrengthText(passwordStrength).color,
                    }}
                  />
                </div>
                <span
                  style={{
                    ...styles.strengthText,
                    color: getPasswordStrengthText(passwordStrength).color,
                  }}
                >
                  {getPasswordStrengthText(passwordStrength).text}
                </span>
              </div>
            )}
            {fieldErrors.password && (
              <span style={styles.fieldError}>{fieldErrors.password}</span>
            )}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Confirm Password</label>
            <div style={styles.inputWrapper}>
              <input
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={form.confirmPassword}
                onChange={handleChange}
                style={{
                  ...styles.input,
                  borderColor: fieldErrors.confirmPassword
                    ? "#ef4444"
                    : "#e5e7eb",
                  paddingRight: "50px",
                }}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={styles.passwordToggle}
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {fieldErrors.confirmPassword && (
              <span style={styles.fieldError}>
                {fieldErrors.confirmPassword}
              </span>
            )}
          </div>

          <div style={styles.checkboxGroup}>
            <label style={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={form.agreeToTerms}
                onChange={handleChange}
                style={styles.checkbox}
              />
              <span style={styles.checkboxText}>
                I agree to the{" "}
                <Link to="/terms" style={styles.termsLink}>
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" style={styles.termsLink}>
                  Privacy Policy
                </Link>
              </span>
            </label>
            {fieldErrors.agreeToTerms && (
              <span style={styles.fieldError}>{fieldErrors.agreeToTerms}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.submitButton,
              opacity: loading ? 0.7 : 1,
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? (
              <>
                <span style={styles.spinner}>⏳</span>
                Creating account...
              </>
            ) : (
              <>
                <span>✨</span>
                Create Account
              </>
            )}
          </button>

          <div style={styles.divider}>
            <span style={styles.dividerText}>or sign up with</span>
          </div>

          <div style={styles.socialButtons}>
            <button type="button" style={styles.socialButton}>
              <span>🔍</span>
              Google
            </button>
            <button type="button" style={styles.socialButton}>
              <span>📱</span>
              GitHub
            </button>
          </div>
        </form>

        <div style={styles.footer}>
          <p style={styles.footerText}>
            Already have an account?{" "}
            <Link to="/login" style={styles.link}>
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    position: "relative",
  },
  backButton: {
    position: "absolute",
    top: "20px",
    left: "20px",
    background: "rgba(255, 255, 255, 0.9)",
    color: "#374151",
    textDecoration: "none",
    padding: "12px 20px",
    borderRadius: "12px",
    fontSize: "14px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  card: {
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(20px)",
    borderRadius: "24px",
    padding: "40px",
    width: "100%",
    maxWidth: "500px",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  header: {
    textAlign: "center",
    marginBottom: "32px",
  },
  iconContainer: {
    width: "80px",
    height: "80px",
    background: "linear-gradient(135deg, #10b981, #059669)",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 24px",
    boxShadow: "0 8px 32px rgba(16, 185, 129, 0.3)",
  },
  icon: {
    fontSize: "32px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: "8px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#6b7280",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#374151",
  },
  inputWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: "16px",
    paddingRight: "50px",
    borderRadius: "12px",
    border: "2px solid #e5e7eb",
    fontSize: "16px",
    transition: "all 0.3s ease",
    background: "white",
    outline: "none",
  },
  inputIcon: {
    position: "absolute",
    right: "16px",
    fontSize: "16px",
    color: "#9ca3af",
    pointerEvents: "none",
  },
  passwordToggle: {
    position: "absolute",
    right: "12px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    padding: "4px",
    borderRadius: "4px",
    transition: "background-color 0.2s ease",
  },
  fieldError: {
    fontSize: "12px",
    color: "#ef4444",
    marginTop: "4px",
  },
  passwordStrength: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginTop: "8px",
  },
  strengthBar: {
    flex: 1,
    height: "4px",
    background: "#e5e7eb",
    borderRadius: "2px",
    overflow: "hidden",
  },
  strengthFill: {
    height: "100%",
    transition: "all 0.3s ease",
    borderRadius: "2px",
  },
  strengthText: {
    fontSize: "12px",
    fontWeight: "600",
    minWidth: "80px",
  },
  checkboxGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    cursor: "pointer",
    lineHeight: "1.5",
  },
  checkbox: {
    width: "16px",
    height: "16px",
    cursor: "pointer",
    marginTop: "2px",
  },
  checkboxText: {
    fontSize: "14px",
    color: "#374151",
  },
  termsLink: {
    color: "#10b981",
    textDecoration: "none",
    fontWeight: "600",
  },
  submitButton: {
    background: "linear-gradient(135deg, #10b981, #059669)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    padding: "16px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    marginTop: "8px",
  },
  divider: {
    position: "relative",
    textAlign: "center",
    margin: "24px 0",
  },
  dividerText: {
    background: "rgba(255, 255, 255, 0.95)",
    padding: "0 16px",
    fontSize: "14px",
    color: "#6b7280",
    position: "relative",
    zIndex: 1,
  },
  socialButtons: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
  },
  socialButton: {
    background: "white",
    border: "2px solid #e5e7eb",
    borderRadius: "12px",
    padding: "12px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    transition: "all 0.3s ease",
    color: "#374151",
  },
  errorMessage: {
    background: "#fef2f2",
    border: "1px solid #fecaca",
    borderRadius: "12px",
    padding: "12px 16px",
    color: "#dc2626",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  errorIcon: {
    fontSize: "16px",
  },
  spinner: {
    animation: "spin 1s linear infinite",
  },
  footer: {
    textAlign: "center",
    marginTop: "32px",
    paddingTop: "24px",
    borderTop: "1px solid #e5e7eb",
  },
  footerText: {
    fontSize: "14px",
    color: "#6b7280",
  },
  link: {
    color: "#10b981",
    textDecoration: "none",
    fontWeight: "600",
  },
};
