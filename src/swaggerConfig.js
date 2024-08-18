const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API DOC",
    version: "1.0.0",
    description:
      "This API provides CRUD operations for managing users, roles, and tasks within a role-based authorization system.",
  },
  servers: [
    {
      url: "https://localhost:3000",
      description: "Development Server",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: [
    "./src/users/*.js",
    "./src/roles/*.js",
    "./src/auth/*.js",
    "./src/tasks/*.js",
  ], // Path to the API routes folder
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };
