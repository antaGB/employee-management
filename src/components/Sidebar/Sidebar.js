import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="side-nav">
      <div className="profile-section">
        <div className="profile-info">
          <h2>John Doe</h2>
          <p className="designation">Software Engineer</p>
          <p className="employee-id">EMP12345</p>
        </div>
      </div>
      <nav className="nav-menu">
        <Link to="/Dashboard">
          <div className="nav-item" onclick="showContent('dashboard')">
            <i className="fas fa-th-large"></i>
            Dashboard
          </div>
        </Link>

        <Link to="/PersonalData">
          <div className="nav-item" onclick="showContent('personal-data')">
            <i className="fas fa-user"></i>
            Personal Data
          </div>
        </Link>

        <Link to="/EmploymentData">
          <div className="nav-item" onclick="showContent('employment-data')">
            <i className="fas fa-briefcase"></i>
            Employment Data
          </div>
        </Link>

        <Link to="/Attendance">
          <div className="nav-item" onclick="showContent('attendance')">
            <i className="fas fa-clock"></i>
            Attendance
          </div>
        </Link>

        <Link to="/PayrollData">
          <div className="nav-item" onclick="showContent('payroll-data')">
            <i className="fas fa-money-bill"></i>
            Payroll Data
          </div>
        </Link>

        <Link to="/PolicyAnnouncements">
          <div className="nav-item" onclick="showContent('policy')">
            <i className="fas fa-book"></i>
            Policy & Announcements
          </div>
        </Link>

        <Link to="/Documents">
          <div className="nav-item" onclick="showContent('documents')">
            <i className="fas fa-folder"></i>
            Documents
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
