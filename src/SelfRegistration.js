import "./SelfRegistration.css";

function SelfRegistration() {
  return (
    <div class="container">
      <h2>Employee Profile</h2>

      <h3>Personal Data</h3>
      <div class="form-group">
        <label>Employee Name:</label>{" "}
        <input type="text" id="employeeName"></input>
      </div>
      <div class="form-group">
        <label>Official Name:</label>{" "}
        <input type="text" id="officialName"></input>
      </div>
      <div class="form-group">
        <label>Nationality:</label> <input type="text" id="nationality"></input>
      </div>
      <div class="form-group">
        <label>ID Number:</label> <input type="text" id="idNumber"></input>
      </div>
      <div class="form-group">
        <label>Birth Date:</label> <input type="date" id="birthDate"></input>
      </div>
      <div class="form-group">
        <label>Gender:</label> <input type="text" id="gender"></input>
      </div>

      <h3>Employment Data</h3>
      <div class="form-group">
        <label>Employee No:</label> <input type="text" id="employeeNo"></input>
      </div>
      <div class="form-group">
        <label>Join Date:</label> <input type="date" id="joinDate"></input>
      </div>
      <div class="form-group">
        <label>Terminate Date:</label>{" "}
        <input type="date" id="terminateDate"></input>
      </div>
      <div class="form-group">
        <label>Employment Status:</label>{" "}
        <input type="text" id="employmentStatus"></input>
      </div>
      <div class="form-group">
        <label>Current Position:</label>{" "}
        <input type="text" id="currentPosition"></input>
      </div>
      <div class="form-group">
        <label>Work Location:</label>{" "}
        <input type="text" id="workLocation"></input>
      </div>
      <div class="form-group">
        <label>Direct Supervisor:</label>{" "}
        <input type="text" id="directSupervisor"></input>
      </div>

      <button onclick="saveProfile()">Save Changes</button>
    </div>
  );
}

export default SelfRegistration;
