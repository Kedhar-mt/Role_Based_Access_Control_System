import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import homeImage from "../assets/home.webp"; // Adjust path if necessary
import "../styles/Home.css"; // Import custom CSS

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleStartManagingUsers = () => {
    // Navigate to login page when button is clicked
    navigate("/login");
  };

  return (
    <div className="home-container container mt-5">
      <h1 className="home-heading">Welcome to the Role-Based Access Control (RBAC) System</h1>
      <p className="lead mt-4">
        This system allows administrators to manage users, assign roles, and control access permissions in an organized and efficient manner.
      </p>

      {/* Insert the image above the "Key Features" section */}
      <div className="text-center">
        <img
          src={homeImage} // Path to your image
          alt="RBAC System"
          className="home-image img-fluid mt-4"
        />
      </div>

      <section>
        <h2 className="mt-5">Key Features</h2>
        <ul>
          <li><strong>User Management:</strong> Add, edit, and delete users.</li>
          <li><strong>Role Management:</strong> Assign roles to users based on their responsibilities.</li>
          <li><strong>Permissions Control:</strong> Define what users can and cannot do within the system based on their roles.</li>
        </ul>
      </section>

      <section className="mt-5">
        <h2>Getting Started</h2>
        <p>
          Begin by adding users to the system and assigning them appropriate roles. Each role will have specific permissions that define what actions the user can perform.
        </p>
        <button
          className="btn btn-primary btn-lg mt-3"
          onClick={handleStartManagingUsers} // Add click handler for button
        >
          Start Managing Users
        </button>
      </section>

      <section className="mt-5">
        <h2>About RBAC</h2>
        <p>
          Role-Based Access Control (RBAC) is an approach to restrict system access to authorized users. It is widely used in enterprise applications to ensure that individuals only have access to the information necessary for their roles.
        </p>
      </section>
    </div>
  );
};

export default Home;
