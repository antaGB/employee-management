import Sidebar from "../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";

function Policy() {
  return (
    <div className="container">
      <Sidebar />
      <div id="policy" className="content-section">
        <div className="section-header">
          <h2>
            <i className="fas fa-book"></i> Policy & Announcements
          </h2>
        </div>
        <div className="section-content">
          <div className="tab-container">
            <div className="tab-navigation">
              <Link to="/PolicyAnnouncements">
                <button className="tab-btn active">Policy</button>
              </Link>
              <Link to="/PolicyAnnouncements/Announcement">
                <button className="tab-btn">Announcement</button>
              </Link>
            </div>

            <div id="policy-tab" className="tab-content active">
              <div className="document-list">
                <div className="document-item">
                  <div className="doc-icon">
                    <i className="fas fa-file-pdf"></i>
                  </div>
                  <div className="doc-info">
                    <h4>Company Policy</h4>
                    <span className="doc-date">Last Updated: Jan 2024</span>
                  </div>
                  <button
                    className="view-btn"
                    onclick="viewDocument('company-policy.pdf')"
                  >
                    View
                  </button>
                </div>
                <div className="document-item">
                  <div className="doc-icon">
                    <i className="fas fa-file-pdf"></i>
                  </div>
                  <div className="doc-info">
                    <h4>Employee Handbook</h4>
                    <span className="doc-date">Last Updated: Jan 2024</span>
                  </div>
                  <button
                    className="view-btn"
                    onclick="viewDocument('handbook.pdf')"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Policy;
