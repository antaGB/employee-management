import Sidebar from "../../components/Sidebar/Sidebar";
import "../../App.css";
import { Link } from "react-router-dom";

const EmployeePayroll = () => {
  return (
    <div className="container">
      <Sidebar />
      <div
        id="employee-payroll"
        className="content-section"
        //   style={{ display: "none" }}
      >
        <div className="section-header">
          <h2>Payroll Data</h2>
        </div>
        <div className="section-content">
          <div className="payroll-nav">
            <div className="nav-tabs">
              <Link to="/PayrollData">
                <button className="tab-btn">Payslip</button>
              </Link>
              <Link to="/PayrollData/EmployeePayroll">
                <button className="tab-btn active">Employee Payroll</button>
              </Link>
              <Link to="/PayrollData/TaxLocation">
                <button className="tab-btn">Tax Location</button>
              </Link>
            </div>
          </div>
          <div id="employee-payroll-tab" className="payroll-tab-content">
            <div className="dashboard-overview">
              <h3>Current Salary Information</h3>
              <div className="payroll-tab">
                <div className="salary-details">
                  <div className="detail-group">
                    <span className="label">Basic Salary:</span>
                    <span className="value">IDR 15,000,000</span>
                  </div>
                  <div className="detail-group">
                    <span className="label">Effective Date:</span>
                    <span className="value">01 January 2024</span>
                  </div>
                </div>
              </div>

              <h3>Salary History</h3>
              <div className="dashboard-grid">
                <table>
                  <thead>
                    <tr>
                      <th>Effective Date</th>
                      <th>Basic Salary</th>
                      <th>Change Type</th>
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

export default EmployeePayroll;
