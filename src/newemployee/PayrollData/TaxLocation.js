import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const TaxLocation = () => {
  return (
    <div className="container">
      <Sidebar />
      <div
        id="payroll-data"
        className="content-section"
        //   style={{ display: "none" }}
      >
        <div className="section-header">
          <h2>Payroll Data</h2>
        </div>
        <div className="section-content">
          <div className="payroll-nav">
            <div className="nav-tabs">
              <button className="tab-btn">
                <Link to="/PayrollData">Payslip</Link>
              </button>
              <button className="tab-btn">
                <Link to="/PayrollData/EmployeePayroll">Employee Payroll</Link>
              </button>
              <button className="tab-btn active">
                <Link to="/PayrollData/TaxLocation">Tax Location</Link>
              </button>
            </div>
          </div>
          <div id="tax-location-tab" className="payroll-tab-content">
            <div className="dashboard-overview">
              <h3>Tax Information</h3>
              <div className="payroll-tab">
                <div className="tax-details">
                  <div className="detail-group">
                    <span className="label">Tax Office:</span>
                    <span className="value">KPP Pratama Jakarta</span>
                  </div>
                  <div className="detail-group">
                    <span className="label">NPWP:</span>
                    <span className="value">XX.XXX.XXX.X-XXX.XXX</span>
                  </div>
                </div>
              </div>

              <h3>Tax Location History</h3>
              <div className="dashboard-grid">
                <table>
                  <thead>
                    <tr>
                      <th>Effective Date</th>
                      <th>Tax Office</th>
                      <th>NPWP</th>
                      <th>Remarks</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxLocation;
