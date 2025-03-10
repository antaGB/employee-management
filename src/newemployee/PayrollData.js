import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

function PayrollData() {
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
              <button className="tab-btn active">
                <Link to="/PayrollData">Payslip</Link>
              </button>
              <button className="tab-btn">
                <Link to="/PayrollData/EmployeePayroll">Employee Payroll</Link>
              </button>
              <button className="tab-btn">
                <Link to="/PayrollData/TaxLocation">Tax Location</Link>
              </button>
            </div>
          </div>

          <div id="payslip-tab" className="payroll-tab-content active">
            <h3>Latest Payslip</h3>
            <div className="containe-payslip">
              <div className="payslip-details">
                <div className="detail-group">
                  <span className="label">Period:</span>
                  <span className="value">February 2024</span>
                </div>
                <div className="detail-group">
                  <span className="label">Basic Salary:</span>
                  <span className="value">IDR 15,000,000</span>
                </div>
                <div className="detail-group">
                  <span className="label">Allowances:</span>
                  <span className="value">IDR 2,000,000</span>
                </div>
                <div className="detail-group">
                  <span className="label">Deductions:</span>
                  <span className="value">IDR 1,200,000</span>
                </div>
                <div className="detail-group total">
                  <span className="label">Net Pay:</span>
                  <span className="value">IDR 15,800,000</span>
                </div>
              </div>
              <div className="action-buttons">
                <button onclick="downloadPayslip()">Download</button>
                <button onclick="printPayslip()">Print</button>
              </div>
            </div>

            <h3>Payslip History</h3>
            <div className="dashboard-grid">
              <table>
                <thead>
                  <tr>
                    <th>Period</th>
                    <th>Basic Salary</th>
                    <th>Net Pay</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayrollData;
