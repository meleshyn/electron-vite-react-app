## Full Stack Demo App (Electron + NestJS)

This is a full-stack demo application that demonstrates a front-end built with **Electron, React, and TypeScript**, and a back-end using **NestJS with JWT-based authentication and Sequelize for MySQL database**.

## Getting Started

### Step 1: Clone the Electron Front-End Repository

```bash
git clone https://github.com/meleshyn/electron-vite-react-app.git
cd electron-vite-react-app
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Ensure the Back-End API is Running

> ⚠️ This Electron application communicates with the back-end API, which handles user authentication and data management. Make sure you have the **back-end API** running by following the instructions in the [**nestjs-jwt-sequelize-app README**](https://github.com/meleshyn/nestjs-jwt-sequelize-app).

### Step 4: Start the Electron Application

```bash
npm run dev
```

---

## Features of the Demo Application

- **Register**: Create a new user account via the `/register` endpoint.
- **Login**: Log in with your credentials via the `/login` endpoint, receiving a JWT token.
- **User Dashboard**: After logging in, you can access the user dashboard, which fetches and displays your user data.
- **JWT Authorization**: All authenticated requests require a valid JWT token, passed in the `Authorization` header.
