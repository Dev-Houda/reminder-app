async function fetchReminders() {
  const list = document.getElementById("reminderList");
  try {
    const res = await fetch("http://localhost:5000/api/reminders");
    const reminders = await res.json();

    list.innerHTML = reminders
      .map(
        (r) => `
        <tr>
          <td>${new Date(r.date).toLocaleDateString()}</td>
          <td>${r.title}</td>
          <td>${r.email}</td>
          <td>${r.reminderBefore} Tag(e)</td>
          <td>
            <button onclick="editReminder('${r._id}', '${r.title}'
        , '${r.date}', '${r.email}', '${r.reminderBefore}')">Bearbeiten</button>
            <button onclick="deleteReminder('${r._id}')">Löschen</button>
          </td>
        </tr>
      `
      )
      .join("");
  } catch (err) {
    console.error("Fehler beim Laden der Erinnerungen:", err);
  }
}

async function deleteReminder(id) {
  try {
    await fetch(`http://localhost:5000/api/reminders/${id}`, {
      method: "DELETE",
    });
    fetchReminders();
  } catch (err) {
    console.error("Fehler beim Löschen:", err);
  }
}

function editReminder(id, title, email, date, reminderBefore) {
  document.getElementById("reminderId").value = id;
  document.getElementById("title").value = title;
  document.getElementById("email").value = email;
  document.getElementById("date").value = new Date(date)
    .toISOString()
    .split("T")[0];
  document.getElementById("reminderBefore").value = reminderBefore;
}

document
  .getElementById("reminderForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const id = document.getElementById("reminderId").value;
    const title = document.getElementById("title").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const reminderBefore = document.getElementById("reminderBefore").value;

    const method = id ? "PUT" : "POST";
    const url = id
      ? `http://localhost:5000/api/reminders/${id}`
      : "http://localhost:5000/api/reminders";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, date, email, reminderBefore }),
      });

      if (!res.ok) throw new Error("Speichern fehlgeschlagen");
      this.reset();
      fetchReminders();
    } catch (err) {
      alert("Fehler beim Speichern: " + err.message);
    }
  });

window.onload = fetchReminders;
