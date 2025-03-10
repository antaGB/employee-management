import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Dashboard from "./Dashboard";
import NewEmployee from "./newemployee/Dashboard";
import PersonalData from "./newemployee/PersonalData";
import EmploymentData from "./newemployee/EmploymentData";
import Attendance from "./newemployee/Attendance";
import Documents from "./newemployee/Documents";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="NewEmployee" element={<NewEmployee />} />
          <Route
            path="PersonalData"
            element={<PersonalData to="/PersonalData" />}
          />
          <Route
            path="/EmploymentData"
            element={<EmploymentData to="/EmploymentData" />}
          />
          <Route path="/Attendance" element={<Attendance to="/Attendance" />} />
          <Route path="/Documents" element={<Documents to="/Documents" />} />
        </Route>
        <Route path="*" element={"not found"} />
      </Routes>
    </div>
  );
}

export default App;
