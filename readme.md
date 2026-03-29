# Pikachu Problem Service

A scalable backend system for an online coding platform where users can solve problems, submit code, and get evaluated securely using a Docker-based execution engine.

---

## Features

* JWT-based Authentication and Authorization
* Problem Management (CRUD APIs)
* Code Submission and Execution Pipeline
* Public and Hidden Test Case Evaluation
* Submission Status (Accepted, Wrong Answer, TLE, Runtime Error)
* Docker-based Sandboxed Execution
* Centralized Custom Error Handling
* User Submission History Tracking

---

## Tech Stack

* Backend: Node.js, Express.js
* Database: MongoDB (Mongoose ODM)
* Authentication: JWT
* Execution Engine: Docker (Custom Runner)
* Error Handling: Custom Middleware

---

## Project Structure

```id="3q9l6y"
├── src
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── services
│   ├── middlewares
│   ├── utils
│   ├── config
│   └── docker
├── tests
├── .env
├── package.json
└── README.md
```

---

## Installation and Setup

### 1. Clone Repository

```id="x2b6ha"
git clone https://github.com/cyph3rms1n/Pikachu-Problem-Service
cd Pikachu-Problem-Service
```

### 2. Install Dependencies

```id="tn48l7"
npm install
```

### 3. Setup Environment Variables

Create a `.env` file:

```id="03p6u7"
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
DOCKER_TIMEOUT=5000
```

### 4. Run the Server

```id="3cbdqz"
npm run dev
```

---

## Routing Architecture

Example endpoint:

```id="e3b6tw"
/api/v1/problems/ping
```

Routing flow:

```id="vps2i8"
/api        → /v1        → /problems        → /ping
apiRouter   → v1Router   → problemRouter    → controller → service
```

Explanation:

* **apiRouter** handles base routing
* **v1Router** manages versioning
* **problemRouter** handles domain-specific routes
* **controller layer** processes requests
* **service layer** contains business logic

This layered routing structure ensures scalability, modularity, and clean separation of concerns.

---

## Authentication Flow

1. User registers or logs in
2. Server generates JWT token
3. Token is sent in request headers
4. Middleware verifies token
5. Access is granted to protected routes

---

## Code Execution Flow

```id="0tqk3v"
User Submission
      ↓
API (Express Server)
      ↓
Controller Layer
      ↓
Service Layer
      ↓
Docker Execution Engine
      ↓
Run Against Test Cases
      ↓
Compare Output
      ↓
Store Result (MongoDB)
      ↓
Return Response
```

---

## Architecture Diagram

### High-Level Architecture

```id="0eh2yk"
             ┌───────────────┐
             │   Client UI   │
             └──────┬────────┘
                    │ HTTP API
                    ▼
          ┌────────────────────┐
          │   Express Server   │
          │ (Node.js Backend)  │
          └──────┬─────────────┘
                 │
     ┌───────────┼───────────┐
     ▼           ▼           ▼
Controllers   Middlewares   Services
                 │              │
         (JWT, Error)     Business Logic
                                │
                                ▼
                     ┌──────────────────┐
                     │ Docker Executor  │
                     │ (Sandbox Env)    │
                     └────────┬─────────┘
                              │
                              ▼
                     ┌──────────────────┐
                     │   MongoDB DB     │
                     └──────────────────┘
```

---

## Security Features

* Docker-based sandboxing
* Execution timeout limits
* Input validation and sanitization
* JWT authentication
* Centralized error handling

---

## Custom Error Handling

All errors are handled using a centralized middleware.

Example response:

```id="rqql9q"
{
  "success": false,
  "message": "Invalid input",
  "error": "VALIDATION_ERROR"
}
```

---

## API Endpoints

### Auth

* POST /api/auth/register
* POST /api/auth/login

### Problems

* GET /api/problems
* GET /api/problems/:id
* POST /api/problems
* PUT /api/problems/:id
* DELETE /api/problems/:id

### Submissions

* POST /api/submissions
* GET /api/submissions/:id
* GET /api/submissions/user/:userId

---

## Future Improvements

* Async job queue (Redis + BullMQ)
* Contest system
* Leaderboard
* Performance analytics
* Real-time updates using WebSockets

