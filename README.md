# Next.js Schools Management Application

This is a simple Next.js application for managing schools information, including CRUD operations. It uses MySQL as the database to store school data.

## Prerequisites

Before running the application, ensure that you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- MySQL Server: [Download MySQL](https://dev.mysql.com/downloads/)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kanhaiya8608/edufy_nxt.git
   cd edufy_nxt
   ```

2.  **Clone the repository:**

   ```bash
   git clone https://github.com/kanhaiya8608/edufy_nxt.git
   cd edufy_nxt
   ```
3. **Install Dependencies:**

   ```bash
   npm install
   ```
4. **Set Up MySQL Database:**

 Create a new MySQL database using the provided schools.sql file.

5. Update the db.js file in the project with your MySQL configuration:

```bash
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'schools',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  port: 3306
});

export default pool;
```
6. Run the Application:

```bash
npm run dev
```
The application will be accessible at http://localhost:3000.

## Usage
Open your browser and navigate to http://localhost:3000 to access the application.
Use the Admin page to add, view, and delete school information.

## Contributing
Feel free to contribute to this project. If you find any issues or have improvements, please submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.