const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema({
  title: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, required: true },
  reminderBefore: { type: Number, required: true }, // in days
  reminded: { type: Boolean, default: false },
});

module.exports = mongoose.model("Reminder", reminderSchema);
