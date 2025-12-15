# EventOS – Backend

EventOS Backend is the server-side application of a cloud-based Event Management Platform.  
It provides secure REST APIs for authentication, event management, registrations, and admin operations.

The backend is built using Node.js, Express, Sequelize ORM, and PostgreSQL, and is fully deployed on AWS with scalable cloud infrastructure.

---

## Project Description

The backend handles all core business logic for the EventOS platform, including user authentication, role-based authorization, event creation and management, event registration with capacity control, and image uploads.

It follows a modular MVC-style architecture and exposes RESTful APIs consumed by the React frontend.  
All sensitive operations are protected using JWT authentication and middleware-based access control.

---

## Project Vision

To provide a secure, scalable, and cloud-ready backend system that ensures data integrity, high availability, and seamless integration with modern frontend applications.

---

## Key Features

- JWT-based authentication and authorization
- Secure password hashing using bcrypt
- Role-based access control (Admin / User)
- Admin-only event CRUD operations
- Event registration with capacity enforcement
- Automatic waitlisting for full events
- Banner image uploads using AWS S3
- Pagination and filtering for event listings
- Centralized error handling middleware
- API documentation using Swagger

---

## Tech Stack

- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL
- JWT (JSON Web Tokens)
- bcrypt
- AWS EC2
- AWS RDS (PostgreSQL)
- AWS S3
- PM2
- Swagger

AWS_REGION=ap-southeast-2
S3_BUCKET_NAME=<s3_bucket_name>
