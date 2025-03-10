import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./newemployee/Dashboard";
import PersonalData from "./newemployee/PersonalData";
import EmploymentData from "./newemployee/EmploymentData";
import Attendance from "./newemployee/Attendance";
import PayrollData from "./newemployee/PayrollData";
import Policy from "./newemployee/Policy";
import Documents from "./newemployee/Documents";
import EmployeePayroll from "./newemployee/PayrollData/EmployeePayroll";
import TaxLocation from "./newemployee/PayrollData/TaxLocation";
import Announcement from "./newemployee/Policy/Announcement";
import EmploymentDocuments from "./newemployee/Documents/EmploymentDocuments";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import SelfRegistration from "./SelfRegistration";
// import AdminDashboard from "./newemployee/AdminDashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />}></Route>
      </Route>
      <Route path="/Register">
        <Route index element={<Register />}></Route>
      </Route>
      <Route path="/Login">
        <Route index element={<Login />}></Route>
      </Route>
      <Route path="/Dashboard">
        <Route index element={<Dashboard />}></Route>
      </Route>
      <Route path="PersonalData">
        <Route index element={<PersonalData />} />
      </Route>
      <Route path="EmploymentData">
        <Route index element={<EmploymentData />}></Route>
      </Route>
      <Route path="Attendance">
        <Route index element={<Attendance />} />
      </Route>
      <Route path="PayrollData">
        <Route index element={<PayrollData />}></Route>
        <Route path="EmployeePayroll" element={<EmployeePayroll />} />
        <Route path="TaxLocation" element={<TaxLocation />} />
      </Route>
      <Route path="PolicyAnnouncements">
        <Route index element={<Policy />} />
        <Route path="Announcement" element={<Announcement />} />
      </Route>
      <Route path="Documents">
        <Route index element={<Documents />} />
        <Route
          path="EmploymentDocuments"
          element={<EmploymentDocuments />}
        ></Route>
      </Route>
      <Route path="SelfRegistration">
        <Route index element={<SelfRegistration />} />
      </Route>
      {/* <Route path="AdminDashboard">
        <Route index element={<AdminDashboard />} />
      </Route> */}
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
