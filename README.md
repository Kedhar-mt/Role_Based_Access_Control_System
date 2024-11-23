# User Management Dashboard

## Project Overview
The User Management Dashboard is a web application built using React that allows admins to manage users. The dashboard provides functionalities such as adding, editing, and deleting user profiles, along with sorting, filtering, and searching users. All the data is handled with mock APIs, making it a fully functional frontend application without the need for a backend server.

This project demonstrates how to build a user-friendly, responsive admin dashboard with mock data and a focus on UI/UX.

## Features
- **User Management**: Admins can view, add, edit, and delete user profiles.
- **Sorting**: Users can be sorted by name or role.
- **Filtering**: Filter users by role (Admin or User).
- **Search**: Search users by name or email.
- **Pagination**: Efficient pagination to display a limited set of users per page.
- **Responsive Design**: The table layout adjusts based on screen size, making the app mobile-friendly.

##User Credentials to login:
  username-user
  password-user123

##admin credentials to login:
  username-admin
  password-admin123

## Technologies Used
- **Frontend**: React, Bootstrap/Tailwind CSS (for responsive styling)
- **Mock APIs**: Data is handled by mock APIs, simulating backend data operations.
- **Libraries**:
  - React Toastify: For displaying success/error notifications.
  - React Router: For routing and navigation between pages.
  - Axios (optional): For API requests if you decide to expand with real APIs.

## Setup Instructions

### Prerequisites
- Node.js and npm (Node Package Manager) must be installed. You can download Node.js from the official website: [https://nodejs.org/](https://nodejs.org/).

### Installation
1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/user-management-dashboard.git
    ```

2. Navigate to the project directory:

    ```bash
    cd user-management-dashboard
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Running the Project
Start the React development server:

```bash
npm run dev
```

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

Example of mockData.js (simulated user data):

const mockData = [
  { id: 1, name: "Virat Kohli", email: "Virat@gmail.com", role: "Admin", status: "Active" },
  { id: 2, name: "Rohit Sharma", email: "Rohit@gmail.com", role: "User", status: "Inactive" },
  // More mock users...
];

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


### Notes:
- Make sure to replace the `path/to/desktop-view.png` and `path/to/mobile-view.png` with the actual paths to your screenshots.
- The `mockData.js` file should contain mock user data (the format can be customized if needed).
- You can modify and expand the troubleshooting section if you encounter any specific errors or challenges during the setup or usage of the app.

This README file will help users understand the purpose of the project, how to set it up, and how to contribute. It also provides guidance on how to use the app without exposing real credentials or sensitive data.




