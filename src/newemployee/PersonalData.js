import Sidebar from "../components/Sidebar/Sidebar";
import useScript from "../hooks/useScript";

function PersonalData() {
  //   useScript("/js/admin.js");

  return (
    <div>
      <div className="container">
        <Sidebar />
        <div
          id="personal-data"
          className="content-section"
          //   style={{ display: "none" }}
        >
          <div className="section-header">
            <h2>
              <i className="fas fa-user"></i> Personal Data
            </h2>
          </div>
          <div className="section-content">
            <div className="info-grid">
              <div className="info-card">
                <h3>Basic Information</h3>
                <div className="info-group">
                  <label>Date of Birth</label>
                  <span>January 15, 1990</span>
                </div>
                <div className="info-group">
                  <label>Gender</label>
                  <span>Male</span>
                </div>
                <div className="info-group">
                  <label>Nationality</label>
                  <span>Indonesian</span>
                </div>
                <div className="info-group">
                  <label>Marital Status</label>
                  <span>Single</span>
                </div>
              </div>

              <div className="info-card">
                <h3>Contact Information</h3>
                <div className="info-group">
                  <label>Mobile Phone</label>
                  <span>+62 812 3456 7890</span>
                </div>
                <div className="info-group">
                  <label>Work Email</label>
                  <span>john.doe@company.com</span>
                </div>
                <div className="info-group">
                  <label>Personal Email</label>
                  <span>john.doe@email.com</span>
                </div>
              </div>

              <div className="info-card">
                <h3>Current Address</h3>
                <div className="info-group">
                  <label>Street Address</label>
                  <span>Jl. Sudirman No. 123</span>
                </div>
                <div className="info-group">
                  <label>City</label>
                  <span>Jakarta</span>
                </div>
                <div className="info-group">
                  <label>Province</label>
                  <span>DKI Jakarta</span>
                </div>
                <div className="info-group">
                  <label>Postal Code</label>
                  <span>12345</span>
                </div>
              </div>

              <div className="info-card">
                <h3>Emergency Contact</h3>
                <div className="info-group">
                  <label>Contact Name</label>
                  <span>Jane Doe</span>
                </div>
                <div className="info-group">
                  <label>Relationship</label>
                  <span>Spouse</span>
                </div>
                <div className="info-group">
                  <label>Phone Number</label>
                  <span>+62 812 9876 5432</span>
                </div>
              </div>

              <div className="info-card">
                <h3>Identity Information</h3>
                <div className="info-group">
                  <label>ID Type</label>
                  <span>KTP</span>
                </div>
                <div className="info-group">
                  <label>ID Number</label>
                  <span>3171234567890001</span>
                </div>
                <div className="info-group">
                  <label>Tax ID (NPWP)</label>
                  <span>98.765.432.1-012.345</span>
                </div>
              </div>

              <div className="info-card">
                <h3>Bank Information</h3>
                <div className="info-group">
                  <label>Bank Name</label>
                  <span>Bank Central Asia</span>
                </div>
                <div className="info-group">
                  <label>Account Number</label>
                  <span>1234567890</span>
                </div>
                <div className="info-group">
                  <label>Account Holder</label>
                  <span>John Doe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalData;
