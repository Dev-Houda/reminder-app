const express = require("express");
const router = express.Router();
const {
  getReminders,
  addReminder,
  deleteReminder,
  updateReminder,
} = require("../controllers/reminderController");

// All routes prefixed with /api/reminders
router.get("/", getReminders);
router.post("/", addReminder);
router.put("/:id", updateReminder);
router.delete("/:id", deleteReminder);

module.exports = router;
