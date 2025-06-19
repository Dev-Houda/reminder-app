const cron = require("node-cron");
const Reminder = require("../models/Reminder");
const sendReminderEmail = require("./mailer");

const startScheduler = () => {
  // Runs every hour
  cron.schedule("0 * * * *", async () => {
    console.log("Checking for reminders to send...");

    const now = new Date();

    const reminders = await Reminder.find({ reminded: false });

    for (let reminder of reminders) {
      const reminderDate = new Date(reminder.date);
      const diffInDays = Math.ceil(
        (reminderDate - now) / (1000 * 60 * 60 * 24)
      );

      if (diffInDays === reminder.reminderBefore) {
        await sendReminderEmail(
          reminder.email,
          `Reminder: ${reminder.title}`,
          `You have an upcoming event: ${
            reminder.title
          } on ${reminderDate.toDateString()}`
        );

        reminder.reminded = true;
        await reminder.save();
      }
    }
  });
};

module.exports = startScheduler;
