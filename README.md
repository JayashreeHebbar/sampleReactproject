# ShopSmart - Full-Stack eCommerce Web Application

ShopSmart is a full-stack eCommerce web application built with React, TypeScript, Node.js, Express, and MongoDB. It includes user authentication, product listings, a shopping cart, and an admin dashboard for managing products, categories, and orders.

## Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS, Redux Toolkit, React Router
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Authentication:** JWT-based login/signup/logout
- **CI/CD:** GitHub Actions
- **Deployment:** Docker

## Local Setup

### Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)
- MongoDB

### Backend Setup

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file and add the following environment variables:
    ```
    MONGO_URI=mongodb://localhost:27017/shopsmart
    JWT_SECRET=your_jwt_secret
    ```
4.  Run the database seeder to populate the database with sample data:
    ```bash
    npm run data:import
    ```
5.  Start the backend server:
    ```bash
    npm run start
    ```

### Frontend Setup

1.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the frontend development server:
    ```bash
    npm run dev
    ```

## Docker-Based Setup

### Prerequisites

- Docker
- Docker Compose

### Instructions

1.  Clone the repository and navigate to the root directory.
2.  Run the following command to build and start the services:
    ```bash
    docker-compose up -d
    ```
3.  The frontend will be available at `http://localhost:3000`, and the backend will be available at `http://localhost:5000`.

## Available Scripts

### Backend

- `npm run start`: Starts the backend server.
- `npm run build`: Compiles the TypeScript code.
- `npm run data:import`: Imports sample data into the database.
- `npm run data:destroy`: Destroys all data in the database.

### Frontend

- `npm run dev`: Starts the frontend development server.
- `npm run build`: Builds the frontend for production.
- `npm run preview`: Previews the production build.
