import * as React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    // <div className="home">
    //   <nav className="nav">
    //     <div>Home</div>
    //     <div className="nav-login-register">
    //       <Link to="/Register">Register</Link>
    //       <Link to="/Login">Login</Link>
    //     </div>
    //   </nav>
    // </div>

    <div>
      <nav class="navbar">
        <div class="container-custom">
          <Link href="#" class="logo">
            Employee Portal
          </Link>
          <div className="nav-links-custom">
            <Link to="/Login">Login</Link>
            <Link to="/Register">Register</Link>
          </div>
        </div>
      </nav>

      {/* <!-- Hero Section --> */}
      <section class="hero">
        <div class="container">
          <h1>Welcome to Employee Portal</h1>
          {/* <p>
            Streamline your tasks, collaborate with your team, and achieve more.
          </p>
          <Link href="#" class="btn-primary">
            Get Started
          </Link> */}
        </div>
      </section>
    </div>
  );
}

export default Home;
