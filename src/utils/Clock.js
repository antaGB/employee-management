export function clockIn() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  document.getElementById(
    "attendanceStatus"
  ).textContent = `Clocked In at ${timeString}`;
}

export function clockOut() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  document.getElementById(
    "attendanceStatus"
  ).textContent = `Clocked Out at ${timeString}`;
}
