# API Integration

The frontend talks to the backend API through axios.

## Base URL

- Configured using VITE_API_BASE_URL
- Defaults to http://localhost:8000/api

## Error Handling

- API responses map to success/error objects
- Validation errors surface as field messages

## Authentication

- JWT tokens are required for protected endpoints
- Token is attached to each request via the auth layer