# Space Tracker App

## Overview
The Space Tracker App is a RESTful API designed for the Advanced Server-side Languages class (WDV442). It's built to manage and store information about celestial bodies, including galaxies, stars, and planets. This project emphasizes the use of Sequelize ORM for database interaction and Express.js for route management.

## Features
- CRUD operations for galaxies, stars, and planets.
- Association handling between different celestial bodies (e.g., planets belonging to many stars).
- RESTful API design for intuitive interaction and integration.

## Getting Started

### Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js installed on your machine.
- A MySQL database set up and running.

### Installation
Follow these steps to get your development environment running:

1. **Clone the repository**
   ```sh
   git clone [repository_url]
   cd space-tracker-app


1. **Install the required packages**

npm install

2. **Set up your environment variables**

    Rename .env.example to .env.
    Adjust the variables to match your database configuration.
3. **Initialize the database**
    Make sure your MySQL service is running.
    Use the Sequelize CLI to create the database and migrate the models:
4. **Terminal**
npx sequelize db:create
npx sequelize db:migrate

5. **Start the application**
npm start

