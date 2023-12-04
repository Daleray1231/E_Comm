# Simple E-commerce Backend

## About

This project is the backbone of an online store. A strong backend is crucial for any online business, especially in the growing world of e-commerce.

- **Why I did this?**
  - To practice ORM, work with Sequelize, and gear up for a backend development career.

- **What it tackles?**
  - It offers an API for an e-commerce platform's backend.

- **Key Takeaways**
  - Setting up a Sequelize project, integrating it into an Express.js API, and creating different types of API routes.

## Setup Guide

1. Clone this GitHub repository
   [CLONE ME](https://github.com/Daleray1231/E_Comm)
  
2. Go to the project folder in your terminal and install required npm packages.
cd <Your-Project-Directory>
npm install express sequelize mysql2 dotenv
npm install --save-dev jest

3. Create a .env file in the root directory for your MySQL username, password, and database name.
DB_NAME='your_database_name'
DB_USER='your_username'
DB_PASS='your_password'

4. Run this command to seed your MySQL database.
`npm run seed`

5. Start the Express.js server with this command.
`npm start`

## How to Use

Use tools like Insomnia Core to test the API endpoints. The API enables you to:

- Manage Categories, Products, and Tags with functions like fetching, creating, updating, and deleting.

[E-commerce Backend Demo]()

## Credits

- [Sequelize](https://sequelize.org/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Express.js](https://expressjs.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- Starter Code and Usage .gif: [University of Texas at Austin Coding Bootcamp](https://bootcamp.cvn.utexas.edu/)

## License

MIT

---

## Contributing

Fork the project and submit your changes via pull request.

## Testing

1. Run `npm run seed` to fill the database with test data.
2. Use Insomnia Core to test all API routes.