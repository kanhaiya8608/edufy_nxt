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
2. **Install Dependencies:**

   ```bash
   npm install
   ```
3. **Set Up MySQL Database:**

    Create a new MySQL database using the provided schools.sql file.

4. **Update the db.js file in the project with your MySQL configuration:**

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
5. **Run the Application:**

   ```bash
   npm run dev
   ```
The application will be accessible at http://localhost:3000.

## APIs
The application provides the following APIs:

- GET /api/items: Retrieve a list of all schools.
- POST /api/items: Add a new school.
- DELETE /api/items/:id: Delete a school by ID.
- POST /api/deleteImage: Delete an image associated with a school.
Example:

- Retrieve all schools: GET http://localhost:3000/api/items
- Add a new school: POST http://localhost:3000/api/items
- Request Body: JSON data with school details
- Delete a school by ID: DELETE http://localhost:3000/api/items/:id
- Delete an image: POST http://localhost:3000/api/deleteImage
    -  Request Body: JSON data with imageName (e.g., {"imageName": "file_1.png"})

## Usage
Open your browser and navigate to http://localhost:3000 to access the application.
Use the Admin page to add, view, and delete school information.

## Contributing
Feel free to contribute to this project. If you find any issues or have improvements, please submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.