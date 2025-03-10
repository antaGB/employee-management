import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const EmploymentDocuments = () => {
  return (
    <div className="container">
      <Sidebar />
      <div
        id="documents"
        className="content-section"
        // style={{ display: "none" }}
      >
        <div className="section-header">
          <h2>
            <i className="fas fa-folder"></i> Documents
          </h2>
        </div>
        <div className="section-content">
          <div className="tab-container">
            <div className="tab-navigation">
              <Link to="/Documents">
                <button className="tab-btn">Personal Documents</button>
              </Link>
              <Link to="/Documents/EmploymentDocuments">
                <button className="tab-btn active">Employment Documents</button>
              </Link>
            </div>
            <div id="employment-docs" className="tab-announcement">
              <div className="info-card">
                <p className="section-info">
                  Company documents uploaded by HR for your reference
                </p>
                <div className="document-grid">
                  <div className="document-card">
                    <h3>Employment Contract</h3>
                    <div className="document-info">
                      <div className="doc-details">
                        <p>
                          <i className="fas fa-upload"></i> Uploaded: Jan 1,
                          2024 10:30 AM
                        </p>
                        <p>
                          <i className="fas fa-eye"></i> Last Viewed: Jan 15,
                          2024 2:45 PM
                        </p>
                      </div>
                      <button
                        className="view-btn"
                        onClick="viewEmployeeDoc('contract.pdf')"
                      >
                        View
                      </button>
                    </div>
                  </div>

                  <div className="document-card">
                    <h3>Offer Letter</h3>
                    <div className="document-info">
                      <div className="doc-details">
                        <p>
                          <i className="fas fa-upload"></i> Uploaded: Jan 1,
                          2024 10:30 AM
                        </p>
                        <p>
                          <i className="fas fa-eye"></i> Last Viewed: Not viewed
                          yet
                        </p>
                      </div>
                      <button
                        className="view-btn"
                        onClick="viewEmployeeDoc('offer-letter.pdf')"
                      >
                        View
                      </button>
                    </div>
                  </div>

                  <div className="document-card">
                    <h3>Confidentiality Agreement</h3>
                    <div className="document-info">
                      <div className="doc-details">
                        <p>
                          <i className="fas fa-upload"></i> Uploaded: Jan 1,
                          2024 10:30 AM
                        </p>
                        <p>
                          <i className="fas fa-eye"></i> Last Viewed: Not viewed
                          yet
                        </p>
                      </div>
                      <button
                        className="view-btn"
                        onClick="viewEmployeeDoc('confidentiality.pdf')"
                      >
                        View
                      </button>
                    </div>
                  </div>

                  <div className="document-card">
                    <h3>Benefits Documentation</h3>
                    <div className="document-info">
                      <div className="doc-details">
                        <p>
                          <i className="fas fa-upload"></i> Uploaded: Jan 1,
                          2024 10:30 AM
                        </p>
                        <p>
                          <i className="fas fa-eye"></i> Last Viewed: Not viewed
                          yet
                        </p>
                      </div>
                      <button
                        className="view-btn"
                        onClick="viewEmployeeDoc('benefits.pdf')"
                      >
                        View
                      </button>
                    </div>
                  </div>

                  <div className="document-card">
                    <h3>Insurance Policy</h3>
                    <div className="document-info">
                      <div className="doc-details">
                        <p>
                          <i className="fas fa-upload"></i> Uploaded: Jan 1,
                          2024 10:30 AM
                        </p>
                        <p>
                          <i className="fas fa-eye"></i> Last Viewed: Not viewed
                          yet
                        </p>
                      </div>
                      <button
                        className="view-btn"
                        onClick="viewEmployeeDoc('insurance.pdf')"
                      >
                        View
                      </button>
                    </div>
                  </div>

                  <div className="document-card">
                    <h3>Performance Reviews</h3>
                    <div className="document-info">
                      <div className="doc-details">
                        <p>
                          <i className="fas fa-upload"></i> Uploaded: Jan 1,
                          2024 10:30 AM
                        </p>
                        <p>
                          <i className="fas fa-eye"></i> Last Viewed: Not viewed
                          yet
                        </p>
                      </div>
                      <button
                        className="view-btn"
                        onClick="viewEmployeeDoc('performance.pdf')"
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
    </div>
  );
};

export default EmploymentDocuments;
