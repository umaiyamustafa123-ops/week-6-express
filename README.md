# Week 6 - Products REST API

A RESTful CRUD API built with Node.js and Express.js for managing products.

## Technologies Used

- Node.js
- Express.js
- Swagger UI
- Swagger JSDoc
- Postman
## Features

- Get all products
- Get a product by ID
- Create a new product
- Update a product
- Delete a product
- Swagger API documentation
- Postman API collection
- Modular Express controller structure
## Project Structure

```text
week-6-express/
├── controllers/
│   └── productController.js
├── routes/
│   └── productRoutes.js
├── postman/
│   └── products.postman_collection.json
├── server.js
├── package.json
└── README.md
## Installation

Install all project dependencies:

```bash
npm install
## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /products | Get all products |
| GET | /products/:id | Get product by ID |
| POST | /products | Create a new product |
| PUT | /products/:id | Update a product |
| DELETE | /products/:id | Delete a product |
## Swagger API Documentation

Swagger UI is available at:

http://localhost:3000/api-docs/

Use Swagger to view and test all Products API endpoints.

## Postman Collection

The Postman collection is located at:

postman/products.postman_collection.json

Import this file into Postman to test the CRUD APIs.
## REST API Status Codes

- 200 - Request successful
- 201 - Product created successfully
- 400 - Bad request
- 404 - Product not found

## Learning Outcome

This project demonstrates modular REST API development using Express.js controllers, routes, structured JSON responses, HTTP status codes, Swagger documentation, and Postman testing.