# Employee Management System

This is a web-based Employee Management System designed to handle the administrative tasks of managing employees, their details, and other organizational data efficiently. The system includes features like employee data management, authentication, salary management, and more.

1. Frontend : npm run dev
2. Server : npm start


## Features

- **Employee Management**: Add, update, delete, and view employee details.
- **Admin Management**: Manage admin users with distinct access rights.
- **Salary Management**: View and track employee salary information.
- **Authentication**: Secure login system using JWT for authentication.
- **User Roles**: Admins can manage employee data, while employees can view their profiles and log out securely.
- **Responsive Design**: User-friendly interface, responsive across devices with modern UI components.
- **Profile Management**: Employees can view their own details such as name, email, and salary.

## Screenshots

![](./Front-End%20Folder/public/Images/1.png)
Admin Login
![](./Front-End%20Folder/public/Images/2.png)
![](./Front-End%20Folder/public/Images/3.png)
Employee Login
![](./Front-End%20Folder/public/Images/4.png)


## Tech Stack

- **Frontend**: 
  - React.js: Handles dynamic UI rendering and frontend logic.
  - Bootstrap: Ensures responsive design and consistent layout across devices.
  - Ethers.js: Used for decentralized application communication (if any future upgrade planned).

- **Backend**: 
  - Express.js: Powers the backend server and REST API routing.
  - JWT: Handles authentication with JSON Web Tokens for user verification.
  - Cookie Parser: Middleware to handle cookies, primarily used for storing tokens.

- **Database**: 
  - MySQL: Stores all employee, admin, and salary data with proper relational models.

- **Deployment**: 
  - The project runs on **Node.js** and **MySQL**, tested locally.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/VoldsenJoy-git/Employee-Management-System.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Employee-Management-System
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

4. Set up your MySQL database. Create database and all the tables in Xampp control panel 

5. Run migrations (if any) and seeders to set up tables and default data (use an ORM like Sequelize if it's set up, or SQL scripts).

6. Start the server:

    ```bash
    npm start
    ```

    The backend will run on `http://localhost:3000` and the frontend on `http://localhost:5173`.

## Usage

- Navigate to the main page, log in with the credentials, and start managing employees.
- Admins can:
  - Add, update, delete employees.
  - View admin statistics, including total salary and employee counts.
  - Manage personal profiles and logout securely.

- Employees can:
  - View their own profile details (name, salary, email).
  - Securely log out.

## API Endpoints

- **Authentication Routes**:
  - `/auth/login` - Login for admins and employees.
  - `/auth/logout` - Logout the user and clear session.

- **Employee Routes**:
  - `/employee/add_employee` - Add a new employee.
  - `/employee/detail/:id` - Get details of a specific employee.
  - `/employee/update_employee` - Update employee details.
  
- **Admin Routes**:
  - `/auth/admin_records` - Fetch list of admins.
  - `/auth/admin_count` - Get total count of admins.

