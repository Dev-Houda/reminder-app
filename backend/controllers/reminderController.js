const Reminder = require("../models/Reminder");

// GET all reminders
const getReminders = async (req, res) => {
  const reminders = await Reminder.find();
  res.json(reminders);
};

// POST new reminder
const addReminder = async (req, res) => {
  const { title, date, email, reminderBefore } = req.body;
  try {
    const reminder = new Reminder({
      title,
      email,
      date,
      reminderBefore,
    });
    await reminder.save();
    res.status(201).json(reminder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// PUT update reminder
const updateReminder = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await Reminder.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE reminder
const deleteReminder = async (req, res) => {
  const { id } = req.params;
  try {
    await Reminder.findByIdAndDelete(id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getReminders,
  addReminder,
  updateReminder,
  deleteReminder,
};
