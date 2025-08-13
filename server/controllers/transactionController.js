const Transaction = require("../models/Transaction");

// POST /api/transactions
exports.addTransaction = async (req, res) => {
  try {
    const { title, amount, type, category, note, date } = req.body;

    // Debug logging
    console.log("=== TRANSACTION CREATION DEBUG ===");
    console.log("Request body:", req.body);
    console.log("User from token:", req.user);
    console.log("User ID:", req.user?.id);

    // Validation checks
    if (!req.user || !req.user.id) {
      console.error("No user ID found in token");
      return res.status(401).json({ msg: "User authentication failed" });
    }

    if (!title || !amount || !type || !category) {
      console.error("Missing required fields:", {
        title,
        amount,
        type,
        category,
      });
      return res.status(400).json({
        msg: "Missing required fields",
        required: ["title", "amount", "type", "category"],
        received: { title, amount, type, category },
      });
    }

    // Validate type
    if (!["income", "expense"].includes(type)) {
      console.error("Invalid transaction type:", type);
      return res.status(400).json({
        msg: "Invalid transaction type",
        validTypes: ["income", "expense"],
        received: type,
      });
    }

    // Validate amount
    const numericAmount = Number(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      console.error("Invalid amount:", amount);
      return res.status(400).json({
        msg: "Amount must be a positive number",
        received: amount,
      });
    }

    console.log("Creating transaction with data:", {
      userId: req.user.id,
      title,
      amount: numericAmount,
      type,
      category,
      note: note || "",
      date: date || new Date(),
    });

    const newTransaction = new Transaction({
      userId: req.user.id,
      title,
      amount: numericAmount,
      type,
      category,
      note: note || "",
      date: date || new Date(),
    });

    const savedTransaction = await newTransaction.save();
    console.log("Transaction saved successfully:", savedTransaction._id);

    res.status(201).json(savedTransaction);
  } catch (err) {
    console.error("=== TRANSACTION CREATION ERROR ===");
    console.error("Error type:", err.name);
    console.error("Error message:", err.message);
    console.error("Full error:", err);

    // Handle specific MongoDB validation errors
    if (err.name === "ValidationError") {
      const validationErrors = Object.keys(err.errors).map((key) => ({
        field: key,
        message: err.errors[key].message,
      }));

      return res.status(400).json({
        msg: "Validation failed",
        errors: validationErrors,
      });
    }

    // Handle duplicate key errors
    if (err.code === 11000) {
      return res.status(400).json({
        msg: "Duplicate entry",
        error: err.message,
      });
    }

    res.status(500).json({
      msg: "Failed to add transaction",
      error: err.message,
      type: err.name,
    });
  }
};

// GET /api/transactions
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });
    res.status(200).json(transactions);
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Failed to fetch transactions", error: err.message });
  }
};

// PUT /api/transactions/:id
exports.updateTransaction = async (req, res) => {
  try {
    const updated = await Transaction.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ msg: "Transaction not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ msg: "Failed to update", error: err.message });
  }
};

// DELETE /api/transactions/:id
exports.deleteTransaction = async (req, res) => {
  try {
    const deleted = await Transaction.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });
    if (!deleted) return res.status(404).json({ msg: "Transaction not found" });
    res.status(200).json({ msg: "Transaction deleted" });
  } catch (err) {
    res.status(500).json({ msg: "Failed to delete", error: err.message });
  }
};
