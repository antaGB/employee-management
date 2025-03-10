import Sidebar from "../components/Sidebar/Sidebar";
import "../AdminDashboad.css";

function Dashboard() {
  return (
    <div>
      <Sidebar />
      <div class="dashboard">
        <div class="welcome-banner">
          <div class="welcome-text">
            <h1>Welcome back, John Doe</h1>
            <p>Here's your dashboard overview</p>
          </div>
          <div class="welcome-stats">
            <div class="stat-pill">Employee ID: 12345</div>
            <div class="stat-pill">HR Department</div>
          </div>
        </div>

        <div class="stats-overview">
          <div class="stat-card">
            <i class="fas fa-calendar"></i>
            <div class="stat-info">
              <span class="stat-label">Last Payslip</span>
              <span class="stat-value">$2,500.00</span>
              <span class="stat-date">January 31, 2024</span>
            </div>
          </div>
          <div class="stat-card">
            <i class="fas fa-file-alt"></i>
            <div class="stat-info">
              <span class="stat-label">Pending Documents</span>
              <span class="stat-value">2</span>
              <span class="stat-date">Approval Required</span>
            </div>
          </div>
          <div class="stat-card">
            <i class="fas fa-clock"></i>
            <div class="stat-info">
              <span class="stat-label">Total OT Hours</span>
              <span class="stat-value">10h</span>
              <span class="stat-date">January 2024</span>
            </div>
          </div>
        </div>

        <div class="main-grid">
          <div class="time-tracking-section">
            <div class="time-card">
              <div class="current-time" id="currentTime">
                2:30 PM
              </div>
              <div class="date-display">
                <div id="currentDay">Thursday</div>
                <div id="currentDate">February 1, 2024</div>
              </div>
              <div class="clock-buttons">
                <button class="clock-btn clock-in-btn" onclick="clockIn()">
                  Clock In
                </button>
                <button class="clock-btn clock-out-btn" onclick="clockOut()">
                  Clock Out
                </button>
              </div>
            </div>

            <div class="recent-records">
              <h3>Recent Clock Records</h3>
              <div class="record-item">
                <div class="record-main">
                  <span class="record-date">Jan 31</span>
                  <span class="record-time">8:00 AM - 5:00 PM</span>
                </div>
                <span class="record-location">Office</span>
              </div>
              <div class="record-item">
                <div class="record-main">
                  <span class="record-date">Jan 30</span>
                  <span class="record-time">8:15 AM - 5:10 PM</span>
                </div>
                <span class="record-location">Remote</span>
              </div>
              <div class="record-item">
                <div class="record-main">
                  <span class="record-date">Jan 29</span>
                  <span class="record-time">8:05 AM - 5:00 PM</span>
                </div>
                <span class="record-location">Office</span>
              </div>
            </div>

            <div class="geo-tracking">
              <h3>Geo Tracking</h3>
              <div class="geo-records">
                <div class="geo-item">
                  <span class="geo-date">Jan 31</span>
                  <span class="geo-time">8:00 AM - 5:00 PM</span>
                  <span class="geo-location">
                    Office - 37.7749° N, 122.4194° W
                  </span>
                </div>
                <div class="geo-item">
                  <span class="geo-date">Jan 30</span>
                  <span class="geo-time">8:15 AM - 5:10 PM</span>
                  <span class="geo-location">
                    Remote - 34.0522° N, 118.2437° W
                  </span>
                </div>
                <div class="geo-item">
                  <span class="geo-date">Jan 29</span>
                  <span class="geo-time">8:05 AM - 5:00 PM</span>
                  <span class="geo-location">
                    Office - 37.7749° N, 122.4194° W
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="summary-section">
            <div class="summary-card purple">
              <h3>Days Worked</h3>
              <div class="summary-value">22</div>
              <div class="summary-label">This Month</div>
            </div>
            <div class="summary-card teal">
              <h3>Total Hours</h3>
              <div class="summary-value">176</div>
              <div class="summary-label">Regular Hours</div>
            </div>
            <div class="summary-card indigo">
              <h3>OT Hours</h3>
              <div class="summary-value">10</div>
              <div class="summary-label">This Month</div>
            </div>
          </div>

          <div class="notification-section">
            <h3>Recent Updates</h3>
            <div class="notification-list">
              <div class="notification-item">
                <div class="notification-icon purple">P</div>
                <div class="notification-content">
                  <div class="notification-title">Payslip Ready</div>
                  <div class="notification-desc">
                    January 2024 payslip is ready for viewing
                  </div>
                </div>
              </div>
              <div class="notification-item">
                <div class="notification-icon teal">D</div>
                <div class="notification-content">
                  <div class="notification-title">Document Update</div>
                  <div class="notification-desc">
                    2 documents pending approval
                  </div>
                </div>
              </div>
              <div class="notification-item">
                <div class="notification-icon warning">!</div>
                <div class="notification-content">
                  <div class="notification-title">Upload Required</div>
                  <div class="notification-desc">
                    Please upload pending documents
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="additional-info-grid">
        <div class="info-card payroll-summary">
          <h3>Payroll Summary</h3>
          <div class="payroll-details">
            <div class="payroll-item">
              <span class="payroll-label">Basic Salary</span>
              <span class="payroll-value">$2,000.00</span>
            </div>
            <div class="payroll-item">
              <span class="payroll-label">Allowances</span>
              <span class="payroll-value">$300.00</span>
            </div>
            <div class="payroll-item">
              <span class="payroll-label">Overtime</span>
              <span class="payroll-value">$200.00</span>
            </div>
            <div class="payroll-item total">
              <span class="payroll-label">Net Salary</span>
              <span class="payroll-value">$2,500.00</span>
            </div>
          </div>
        </div>

        <div class="info-card document-status">
          <h3>Document Status</h3>
          <div class="document-list">
            <div class="document-item">
              <div class="doc-info">
                <span class="doc-name">Annual Review</span>
                <span class="doc-date">Submitted: Jan 25, 2024</span>
              </div>
              <span class="status pending">Pending</span>
            </div>
            <div class="document-item">
              <div class="doc-info">
                <span class="doc-name">Training Certificate</span>
                <span class="doc-date">Submitted: Jan 20, 2024</span>
              </div>
              <span class="status approved">Approved</span>
            </div>
            <div class="document-item">
              <div class="doc-info">
                <span class="doc-name">Leave Application</span>
                <span class="doc-date">Required</span>
              </div>
              <span class="status required">Upload</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
