import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import useScript from "../hooks/useScript";

function EmploymentData() {
  useScript("/js/admin.js");

  return (
    <div className="container">
      <Sidebar />
      <div id="employment-data" className="content-section">
        <div className="section-header">
          <h2>
            <i className="fas fa-briefcase"></i> Employment Data
          </h2>
        </div>
        <div className="section-content">
          <div className="info-grid">
            <div className="info-card">
              <h3>Employment Details</h3>
              <div className="info-group">
                <label>Employment Status</label>
                <span>Permanent</span>
              </div>
              <div className="info-group">
                <label>Join Date</label>
                <span>01 January 2023</span>
              </div>
              <div className="info-group">
                <label>Years of Service</label>
                <span>1 year 2 months</span>
              </div>
              <div className="info-group">
                <label>Contract End Date</label>
                <span>N/A</span>
              </div>
            </div>

            <div className="info-card">
              <h3>Work Location</h3>
              <div className="info-group">
                <label>Office Location</label>
                <span>Jakarta HQ</span>
              </div>
              <div className="info-group">
                <label>Work Area</label>
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="info-group">
                <label>Floor/Section</label>
                <span>4th Floor, Tech Wing</span>
              </div>
            </div>

            <div className="info-card">
              <h3>Work Schedule</h3>
              <div className="info-group">
                <label>Work Days</label>
                <span>Monday - Friday</span>
              </div>
              <div className="info-group">
                <label>Work Hours</label>
                <span>09:00 - 18:00</span>
              </div>
              <div className="info-group">
                <label>Time Zone</label>
                <span>GMT+7 (WIB)</span>
              </div>
            </div>

            <div className="info-card">
              <h3>Reporting Line</h3>
              <div className="info-group">
                <label>Direct Supervisor</label>
                <span>Jane Smith</span>
              </div>
              <div className="info-group">
                <label>Supervisor Position</label>
                <span>Tech Lead</span>
              </div>
              <div className="info-group">
                <label>Department Head</label>
                <span>Robert Johnson</span>
              </div>
            </div>

            <div className="info-card">
              <h3>Additional Information</h3>
              <div className="info-group">
                <label>Cost Center</label>
                <span>CC-TECH-001</span>
              </div>
              <div className="info-group">
                <label>Employee Category</label>
                <span>Full-Time</span>
              </div>
              <div className="info-group">
                <label>Work Location Type</label>
                <span>Office-Based</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmploymentData;
