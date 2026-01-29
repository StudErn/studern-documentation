# Response Codes

StudErn APIs return a consistent response envelope.

## Standard Format

- status: success or error
- message: human-readable message
- data or messages: payload or error details

## Common HTTP Codes

- 200 OK
- 201 Created
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 422 Unprocessable Entity
- 500 Internal Server Error

## Error Payloads

Validation errors typically return messages with field-specific arrays.

Example:

- messages.identifier: ["The identifier field is required."]
- messages.password: ["The password must be at least 8 characters."]

Use these codes to drive UI feedback and retry logic on the frontend.
