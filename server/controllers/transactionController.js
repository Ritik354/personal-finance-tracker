const Transaction = require("../models/Transaction");

// POST /api/transactions
exports.addTransaction = async (req, res) => {
  try {
    const { title,amount, type, category, note, date } = req.body;
    const newTransaction = new Transaction({
      userId: req.user.userId,
      title,
      amount,
      type,
      category,
      note,
      date
    });
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(500).json({ msg: "Failed to add transaction", error: err.message });
  }
};

// GET /api/transactions
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user.userId }).sort({ createdAt: -1 });
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch transactions", error: err.message });
  }
};

// PUT /api/transactions/:id
exports.updateTransaction = async (req, res) => {
  try {
    const updated = await Transaction.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
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
      userId: req.user.userId,
    });
    if (!deleted) return res.status(404).json({ msg: "Transaction not found" });
    res.status(200).json({ msg: "Transaction deleted" });
  } catch (err) {
    res.status(500).json({ msg: "Failed to delete", error: err.message });
  }
};
