const attendanceRecords = [];
    let latestClockInLocation = '';
    let latestClockOutLocation = '';

    function clockIn() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successClockIn, error);
        } else {
            displayError("Geolocation is not supported by this browser.");
        }
    }

    function clockOut() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successClockOut, error);
        } else {
            displayError("Geolocation is not supported by this browser.");
        }
    }

    function successClockIn(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const timestamp = new Date().toLocaleString();

        // Record attendance
        attendanceRecords.push({
            action: 'Clock In',
            timestamp: timestamp,
            latitude: latitude,
            longitude: longitude
        });
        updateAttendanceList();

        // Update latest clock-in location
        latestClockInLocation = `Clocked In at ${timestamp} (Lat: ${latitude}, Lon: ${longitude})`;
        displayLatestLocations();

        // Display success message
        const message = `Clocked In at ${timestamp}`;
        displayNotification(message);
        
        // Send data to server
        sendData('clock_in', latitude, longitude, timestamp);
    }

    function successClockOut(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const timestamp = new Date().toLocaleString();

        // Record attendance
        attendanceRecords.push({
            action: 'Clock Out',
            timestamp: timestamp,
            latitude: latitude,
            longitude: longitude
        });
        updateAttendanceList();

        // Update latest clock-out location
        latestClockOutLocation = `Clocked Out at ${timestamp} (Lat: ${latitude}, Lon: ${longitude})`;
        displayLatestLocations();

        // Display success message
        const message = `Clocked Out at ${timestamp}`;
        displayNotification(message);
        
        // Send data to server
        sendData('clock_out', latitude, longitude, timestamp);
    }

    function error() {
        displayError("Unable to retrieve your location.");
    }

    function displayError(message) {
        const statusDiv = document.getElementById('status');
        statusDiv.innerHTML = `<span class="error">${message}</span>`;
    }

    function displayNotification(message) {
        const notificationDiv = document.getElementById('notification');
        notificationDiv.textContent = message;
        notificationDiv.style.display = 'block';
        setTimeout(() => {
            notificationDiv.style.display = 'none';
        }, 3000); // Hide after 3 seconds
    }

    function updateAttendanceList() {
        const attendanceList = document.getElementById('attendanceList');
        attendanceList.innerHTML = ''; // Clear existing records

        // Show only the latest three records
        const latestRecords = attendanceRecords.slice(-3);
        latestRecords.forEach(record => {
            const listItem = document.createElement('li');
            listItem.textContent = `${record.action} at ${record.timestamp}`;
            const info = document.createElement('div');
            info.className = 'attendance-info';
            info.textContent = `Location: (Lat: ${record.latitude}, Lon: ${record.longitude})`;
            listItem.appendChild(info);
            attendanceList.appendChild(listItem);
        });
    }
