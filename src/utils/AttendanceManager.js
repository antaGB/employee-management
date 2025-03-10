class AttendanceManager {
    static async clockIn() {
        const record = this.createAttendanceRecord('in');
        await this.saveAttendanceRecord(record);
        this.updateAttendanceDisplay();
    }

    static async clockOut() {
        const record = this.createAttendanceRecord('out');
        await this.saveAttendanceRecord(record);
        this.updateAttendanceDisplay();
    }

    static createAttendanceRecord(type) {
        const now = new Date();
        return {
            id: `att_${Date.now()}`,
            userId: localStorage.getItem('currentUser'),
            date: now.toISOString().split('T')[0],
            time: now.toLocaleTimeString(),
            type,
            status: 'pending',
            remarks: ''
        };
    }

    static async saveAttendanceRecord(record) {
        const attendance = JSON.parse(localStorage.getItem('attendance') || '[]');
        attendance.push(record);
        localStorage.setItem('attendance', JSON.stringify(attendance));
    }

    static updateAttendanceDisplay() {
        const records = this.getFilteredRecords();
        const tbody = document.getElementById('attendanceRecords');
        
        tbody.innerHTML = records.map(record => `
            <tr>
                <td>${record.date}</td>
                <td>${record.type === 'in' ? record.time : '-'}</td>
                <td>${record.type === 'out' ? record.time : '-'}</td>
                <td>${this.calculateHours(record)}</td>
                <td class="status-${record.status.toLowerCase()}">${record.status}</td>
                <td>${record.remarks || '-'}</td>
            </tr>
        `).join('');
    }

    static getFilteredRecords() {
        const attendance = JSON.parse(localStorage.getItem('attendance') || '[]');
        const monthFilter = document.getElementById('monthFilter').value;
        const dateFilter = document.getElementById('dateFilter').value;
        const statusFilter = document.getElementById('statusFilter').value;

        return attendance.filter(record => {
            const matchesMonth = !monthFilter || record.date.startsWith(monthFilter);
            const matchesDate = !dateFilter || record.date === dateFilter;
            const matchesStatus = statusFilter === 'all' || record.status.toLowerCase() === statusFilter;
            return matchesMonth && matchesDate && matchesStatus;
        });
    }

    static calculateHours(record) {
        // Add logic to calculate hours between clock in and out
        return '8:00';
    }
}

    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
        AttendanceManager.updateAttendanceDisplay();
    });