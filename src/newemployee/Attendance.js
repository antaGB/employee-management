import Sidebar from "../components/Sidebar/Sidebar";

function Attendance() {
  return (
    <div className="container">
      <Sidebar />
      <div
        id="attendance"
        className="content-section"
        // style={{ display: "none" }}
      >
        <div className="section-header">
          <h2>Attendance</h2>
        </div>
        <div className="section-content">
          <div className="attendance-filters">
            <div className="filter-group">
              <label>Filter by:</label>
              <input
                type="month"
                id="monthFilter"
                className="form-control"
              ></input>
              <input
                type="date"
                id="dateFilter"
                className="form-control"
              ></input>
              <select id="statusFilter" className="form-control">
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
              <button onClick="applyFilters()" className="btn-primary">
                Apply
              </button>
            </div>
          </div>

          <table className="attendance-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Clock In</th>
                <th>Clock Out</th>
                <th>Total Hours</th>
                <th>Status</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody id="attendanceRecords"></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Attendance;
