const messages = [
  "📩 3 New Emails",
  "📅 Meeting starts in 5 minutes",
  "🔔 12 New Notifications",
  "📰 Breaking News Alert",
  "📞 Missed Call",
  "⚠ Battery Low",
  "📱 Instagram Notification",
  "🎵 New Playlist Available",
  "📦 Package Arriving Today",
  "💬 5 Unread Messages",
];

const container = document.getElementById("notification-container");

let index = 0;

function addNotification() {
  if (!container) return;

  if (index >= messages.length) {
    setTimeout(() => {
      container.innerHTML = "";
      index = 0;
    }, 1500);

    return;
  }

  const notif = document.createElement("div");

  notif.classList.add("notification");

  notif.textContent = messages[index];

  const top = Math.random() * 75 + 5;
  const left = Math.random() * 55 + 5;

  notif.style.top = `${top}%`;
  notif.style.left = `${left}%`;

  container.appendChild(notif);

  setTimeout(() => {
    notif.classList.add("show");
  }, 100);

  index++;
}

setInterval(addNotification, 1000);

addNotification();
