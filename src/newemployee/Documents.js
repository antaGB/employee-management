import Sidebar from "../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";

function Documents() {
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
                <button className="tab-btn active">Personal Documents</button>
              </Link>
              <Link to="/Documents/EmploymentDocuments">
                <button className="tab-btn">Employment Documents</button>
              </Link>
            </div>

            <div id="personal-docs" className="tab-content active">
              <div className="info-card">
                <p className="section-info">
                  Upload your personal documents for verification
                </p>
                <div className="document-grid">
                  <div className="document-card">
                    <h3>Identity Card - Front</h3>
                    <div className="document-upload">
                      <input
                        type="file"
                        id="id-front"
                        accept="image/*,.pdf"
                        onchange="handleUpload('id-front')"
                      ></input>
                      <label for="id-front">
                        <i className="fas fa-upload"></i>
                        <span>Upload ID Front</span>
                      </label>
                      <div className="document-status" id="id-front-status">
                        <div className="status-info">
                          <span className="upload-time">
                            Uploaded: Not yet uploaded
                          </span>
                          <span className="status-badge">Status: Pending</span>
                        </div>
                        <div className="admin-remarks">
                          Remarks: Please upload clear image
                        </div>
                        <button
                          className="view-btn"
                          onClick="viewDocument('id-front')"
                          // style={{ display: "none" }}
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="document-card">
                    <h3>Identity Card - Back</h3>
                    <div className="document-upload">
                      <input
                        type="file"
                        id="id-back"
                        accept="image/*,.pdf"
                        onchange="handleUpload('id-back')"
                      ></input>
                      <label for="id-back">
                        <i className="fas fa-upload"></i>
                        <span>Upload ID Back</span>
                      </label>
                      <div className="document-status" id="id-back-status">
                        <div className="status-info">
                          <span className="upload-time">
                            Uploaded: Not yet uploaded
                          </span>
                          <span className="status-badge">Status: Pending</span>
                        </div>
                        <div className="admin-remarks">
                          Remarks: Please upload clear image
                        </div>
                        <button
                          className="view-btn"
                          onClick="viewDocument('id-back')"
                          // style={{ display: "none" }}
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="document-card">
                    <h3>Education Certificate</h3>
                    <div className="document-upload">
                      <input
                        type="file"
                        id="education-cert"
                        accept="image/*,.pdf"
                        onchange="handleUpload('education-cert')"
                      ></input>
                      <label for="education-cert">
                        <i className="fas fa-upload"></i>
                        <span>Upload Certificate</span>
                      </label>
                      <div
                        className="document-status"
                        id="education-cert-status"
                      >
                        <div className="status-info">
                          <span className="upload-time">
                            Uploaded: Not yet uploaded
                          </span>
                          <span className="status-badge">Status: Pending</span>
                        </div>
                        <div className="admin-remarks">
                          Remarks: Please upload complete certificate
                        </div>
                        <button
                          className="view-btn"
                          onClick="viewDocument('education-cert')"
                          // style={{ display: "none" }}
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
    </div>
  );
}

export default Documents;
