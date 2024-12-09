import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Coders Boutique</h1>
      <p>Your one-stop shop for all things tech!</p>
      <nav>
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/assessments">Assessments</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
