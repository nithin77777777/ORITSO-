const { Sequelize } = require('sequelize');

// Database configuration (using your exact values)
const sequelize = new Sequelize('task_manager', 'root', 'yourpassword', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  logging: false, // Disables console SQL logging
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Test connection immediately
sequelize.authenticate()
  .then(() => console.log('✔️ Database connected successfully'))
  .catch(err => {
    console.error('❌ Database connection failed:', err.message);
    console.log('\nTROUBLESHOOTING:');
    console.log('1. Is MySQL running? (sudo service mysql start)');
    console.log('2. Did you create the database? (CREATE DATABASE task_manager;)');
    console.log('3. Check username/password matches your MySQL install');
    process.exit(1); // Exit if connection fails
  });

module.exports = sequelize;