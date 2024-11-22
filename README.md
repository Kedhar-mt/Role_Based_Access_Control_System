User Management Dashboard
Project Overview
The User Management Dashboard is a web application built using React that allows admins to manage users. The dashboard provides functionalities such as adding, editing, and deleting user profiles, along with sorting, filtering, and searching users. All the data is handled with mock APIs, making it a fully functional frontend application without the need for a backend server.

This project demonstrates how to build a user-friendly, responsive admin dashboard with mock data and a focus on UI/UX.

Features
User Management: Admins can view, add, edit, and delete user profiles.
Sorting: Users can be sorted by name or role.
Filtering: Filter users by role (Admin or User).
Search: Search users by name or email.
Pagination: Efficient pagination to display a limited set of users per page.
Responsive Design: The table layout adjusts based on screen size, making the app mobile-friendly.
Technologies Used
Frontend: React, Bootstrap/Tailwind CSS (for responsive styling)
Mock APIs: Data is handled by mock APIs, simulating backend data operations.
Libraries:
React Toastify: For displaying success/error notifications.
React Router: For routing and navigation between pages.
Axios (optional): For API requests if you decide to expand with real APIs.
Setup Instructions
Prerequisites
Node.js and npm (Node Package Manager) must be installed. You can download Node.js from the official website: https://nodejs.org/.
Installation
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/user-management-dashboard.git
Navigate to the project directory:


cd user-management-dashboard
Install dependencies:


npm install
Running the Project
Start the React development server:


npm run dev
This will start the React app on http://localhost:3000.

Visit http://localhost:3000 in your browser to view the application.

Folder Structure

user-management-dashboard/
│
├── public/                  # Static assets (HTML, images)
├── src/                     # React components and application logic
│   ├── components/          # Reusable React components (User List, Add/Edit Form)
│   ├── styles/              # Custom CSS files or Bootstrap for styling
│   ├── App.js               # Main React app component
│   ├── index.js             # Entry point for the React app
│   └── mockData.js          # Mock API data (simulated user data)
│
├── .gitignore               # Git ignore file
└── README.md                # Project documentation
Mock Data
In this project, mock APIs are used to simulate interactions with a backend. You can find the mock data in the mockData.js file, which contains predefined user data. These mock APIs allow for user CRUD operations (Create, Read, Update, Delete) without requiring an actual backend.

Screenshots
Desktop View

Mobile View

Troubleshooting
Error: "App not loading": Ensure all dependencies are correctly installed by running npm install.
Error: "Data not showing": Check the mockData.js file to ensure it has valid mock user data.
Error: "API call failed": Since mock APIs are being used, ensure that the data is correctly imported and used in the components.
Contributing
Fork the repository.
Create a new branch (git checkout -b feature-name).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-name).
Create a new pull request.
License

This project is licensed under the MIT License - see the LICENSE file for details.
