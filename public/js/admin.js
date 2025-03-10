function showTab(tabId) {
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach((tab) => tab.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
}

function updateTime() {
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

function clockIn() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  document.getElementById(
    "attendanceStatus"
  ).textContent = `Clocked In at ${timeString}`;
}

function clockOut() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  document.getElementById(
    "attendanceStatus"
  ).textContent = `Clocked Out at ${timeString}`;
}

function viewPayslip() {
  alert("Opening latest payslip...");
  // Add logic to view/download payslip
}

// Initialize clock
setInterval(updateTime, 1000);

// Attendance Management
// class AttendanceManager {
//     static async clockIn() {
//         const record = this.createAttendanceRecord('in');
//         await this.saveAttendanceRecord(record);
//         this.updateAttendanceDisplay();
//     }

//     static async clockOut() {
//         const record = this.createAttendanceRecord('out');
//         await this.saveAttendanceRecord(record);
//         this.updateAttendanceDisplay();
//     }

//     static createAttendanceRecord(type) {
//         const now = new Date();
//         return {
//             id: `att_${Date.now()}`,
//             userId: localStorage.getItem('currentUser'),
//             date: now.toISOString().split('T')[0],
//             time: now.toLocaleTimeString(),
//             type,
//             status: 'pending',
//             remarks: ''
//         };
//     }

//     static async saveAttendanceRecord(record) {
//         const attendance = JSON.parse(localStorage.getItem('attendance') || '[]');
//         attendance.push(record);
//         localStorage.setItem('attendance', JSON.stringify(attendance));
//     }

//     static updateAttendanceDisplay() {
//         const records = this.getFilteredRecords();
//         const tbody = document.getElementById('attendanceRecords');

//         tbody.innerHTML = records.map(record => `
//             <tr>
//                 <td>${record.date}</td>
//                 <td>${record.type === 'in' ? record.time : '-'}</td>
//                 <td>${record.type === 'out' ? record.time : '-'}</td>
//                 <td>${this.calculateHours(record)}</td>
//                 <td class="status-${record.status.toLowerCase()}">${record.status}</td>
//                 <td>${record.remarks || '-'}</td>
//             </tr>
//         `).join('');
//     }

//     static getFilteredRecords() {
//         const attendance = JSON.parse(localStorage.getItem('attendance') || '[]');
//         const monthFilter = document.getElementById('monthFilter').value;
//         const dateFilter = document.getElementById('dateFilter').value;
//         const statusFilter = document.getElementById('statusFilter').value;

//         return attendance.filter(record => {
//             const matchesMonth = !monthFilter || record.date.startsWith(monthFilter);
//             const matchesDate = !dateFilter || record.date === dateFilter;
//             const matchesStatus = statusFilter === 'all' || record.status.toLowerCase() === statusFilter;
//             return matchesMonth && matchesDate && matchesStatus;
//         });
//     }

//     static calculateHours(record) {
//         // Add logic to calculate hours between clock in and out
//         return '8:00';
//     }
// }

// Document Management
// class DocumentSystem {
//     static showUploadModal(type) {
//         // Implementation for document upload modal
//     }

//     static async uploadDocument(type, file, metadata) {
//         // Implementation for document upload
//     }

//     static showDocTab(tabId) {
//         document.querySelectorAll('.doc-content').forEach(tab =>
//             tab.classList.remove('active'));
//         document.querySelectorAll('.doc-tab').forEach(tab =>
//             tab.classList.remove('active'));

//         document.getElementById(`${tabId}-docs`).classList.add('active');
//         document.querySelector(`[onclick="showDocTab('${tabId}')"]`).classList.add('active');
//     }
// }

// Initialize
// document.addEventListener('DOMContentLoaded', () => {
//     AttendanceManager.updateAttendanceDisplay();
// });

function switchPayrollTab(tabId) {
  // Hide all tabs
  document.querySelectorAll(".payroll-tab-content").forEach((tab) => {
    tab.classList.remove("active");
  });
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Show selected tab
  document.getElementById(tabId + "-tab").classList.add("active");
  event.target.classList.add("active");
}

function showContent(contentId) {
  // Hide all content sections
  document.querySelectorAll(".content-section").forEach((content) => {
    content.style.display = "none";
  });

  // Remove active class from all nav items
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active");
  });

  // Show selected content
  document.getElementById(contentId).style.display = "block";

  // Add active class to clicked nav item
  event.currentTarget.classList.add("active");
}

// Handle Clock In/Out
function handleClockAction() {
  const btn = document.getElementById("clockBtn");
  const status = document.getElementById("clockStatus");

  if (btn.textContent === "Clock In") {
    btn.textContent = "Clock Out";
    status.textContent = "Clocked In at " + new Date().toLocaleTimeString();
    btn.style.background = "#dc3545";
  } else {
    btn.textContent = "Clock In";
    status.textContent = "Clocked Out at " + new Date().toLocaleTimeString();
    btn.style.background = "#0078d4";
  }
}

function openDocTab(tabId) {
  // Hide all document tab contents
  document.querySelectorAll("#documents .tab-content").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Remove active class from all document tab buttons
  document.querySelectorAll("#documents .tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Show selected document tab content
  document.getElementById(tabId).classList.add("active");

  // Add active class to clicked button
  event.currentTarget.classList.add("active");
}

function viewDocument(documentPath) {
  window.open(documentPath, "_blank");
}

function handleUpload(docId) {
  const input = document.getElementById(docId);
  const file = input.files[0];

  if (file) {
    const statusDiv = document.getElementById(`${docId}-status`);
    const timestamp = new Date().toLocaleString();

    // Update upload time
    statusDiv.querySelector(
      ".upload-time"
    ).textContent = `Uploaded: ${timestamp}`;

    // Show view button
    statusDiv.querySelector(".view-btn").style.display = "block";

    // Update status to pending review
    statusDiv.querySelector(".status-badge").textContent =
      "Status: Pending Review";
    statusDiv.querySelector(".status-badge").className = "status-badge pending";
  }
}
// JavaScript for Geo-Tracking Attendance

// const attendanceRecords = [];
// let latestClockInLocation = '';
// let latestClockOutLocation = '';

// function clockIn() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(successClockIn, error);
//     } else {
//         displayError("Geolocation is not supported by this browser.");
//     }
// }

// function clockOut() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(successClockOut, error);
//     } else {
//         displayError("Geolocation is not supported by this browser.");
//     }
// }

// function successClockIn(position) {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     const timestamp = new Date().toLocaleString();

//     // Record attendance
//     attendanceRecords.push({
//         action: 'Clock In',
//         timestamp: timestamp,
//         latitude: latitude,
//         longitude: longitude
//     });
//     updateAttendanceList();

//     // Update latest clock-in location
//     latestClockInLocation = `Clocked In at ${timestamp} (Lat: ${latitude}, Lon: ${longitude})`;
//     displayLatestLocations();

//     // Display success message
//     const message = `Clocked In at ${timestamp}`;
//     displayNotification(message);

//     // Send data to server
//     sendData('clock_in', latitude, longitude, timestamp);
// }

// function successClockOut(position) {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     const timestamp = new Date().toLocaleString();

//     // Record attendance
//     attendanceRecords.push({
//         action: 'Clock Out',
//         timestamp: timestamp,
//         latitude: latitude,
//         longitude: longitude
//     });
//     updateAttendanceList();

//     // Update latest clock-out location
//     latestClockOutLocation = `Clocked Out at ${timestamp} (Lat: ${latitude}, Lon: ${longitude})`;
//     displayLatestLocations();

//     // Display success message
//     const message = `Clocked Out at ${timestamp}`;
//     displayNotification(message);

//     // Send data to server
//     sendData('clock_out', latitude, longitude, timestamp);
// }

// function error() {
//     displayError("Unable to retrieve your location.");
// }

// function displayError(message) {
//     const statusDiv = document.getElementById('status');
//     statusDiv.innerHTML = `<span class="error">${message}</span>`;
// }

// function displayNotification(message) {
//     const notificationDiv = document.getElementById('notification');
//     notificationDiv.textContent = message;
//     notificationDiv.style.display = 'block';
//     setTimeout(() => {
//         notificationDiv.style.display = 'none';
//     }, 3000); // Hide after 3 seconds
// }

// function updateAttendanceList() {
//     const attendanceList = document.getElementById('attendanceList');
//     attendanceList.innerHTML = ''; // Clear existing records

//     // Show only the latest three records
//     const latestRecords = attendanceRecords.slice(-3);
//     latestRecords.forEach(record => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${record.action} at ${record.timestamp}`;
//         const info = document.createElement('div');
//         info.className = 'attendance-info';
//         info.textContent = `Location: (Lat: ${record.latitude}, Lon: ${record.longitude})`;
//         listItem.appendChild(info);
//         attendanceList.appendChild(listItem);
//     });
// }

function displayLatestLocations() {
  const latestClockInDiv = document.getElementById("latestClockInLocation");
  const latestClockOutDiv = document.getElementById("latestClockOutLocation");

  latestClockInDiv.textContent =
    latestClockInLocation || "No clock-in recorded yet.";
  latestClockOutDiv.textContent =
    latestClockOutLocation || "No clock-out recorded yet.";
}

function sendData(action, latitude, longitude, timestamp) {
  // Example: Send data to server (uncomment and modify the URL)
  /*
        fetch('https://your-server.com/api/attendance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: action,
                latitude: latitude,
                longitude: longitude,
                timestamp: timestamp
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
            displayError("Failed to send data to the server.");
        });
        */
}
