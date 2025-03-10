export function updateTime() {
  const now = new Date();
  const currentTimeElement = document.getElementById("currentTime");
  const currentDateElement = document.getElementById("currentDate");

  if (currentTimeElement) {
    currentTimeElement.textContent = now.toLocaleTimeString();
  } else {
    console.error('Element with ID "currentTime" not found.');
  }

  if (currentDateElement) {
    currentDateElement.textContent = now.toLocaleDateString();
  } else {
    console.error('Element with ID "currentDate" not found.');
  }
}

// Initialize clock after DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  setInterval(updateTime, 1000);
});

// Initialize clock
setInterval(updateTime, 1000);
