import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const Announcement = () => {
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
                <button className="tab-btn">Policy</button>
              </Link>
              <Link to="/PolicyAnnouncements/Announcement">
                <button className="tab-btn active">Announcement</button>
              </Link>
            </div>
            <div id="announcement-tab" className="tab-announcement">
              <div className="info-card">
                <div className="pdf-list">
                  <div className="pdf-item">
                    <div className="pdf-icon">
                      <i className="fas fa-file-pdf"></i>
                    </div>
                    <div className="pdf-details">
                      <span className="pdf-title">
                        Welcome to the Organization
                      </span>
                      <span className="pdf-date">Posted: Jan 15, 2024</span>
                    </div>
                    <button
                      className="view-btn"
                      onclick="viewPDF('welcome.pdf')"
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
    </div>
  );
};

export default Announcement;
