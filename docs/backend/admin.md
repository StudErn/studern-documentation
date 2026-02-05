# Admin APIs

Admin endpoints provide system-level privilege management.

## Key Endpoints

- GET /api/admin/privileges
    - List all system privileges
- POST /api/admin/privileges
    - Create a new privilege
- POST /api/admin/assign-privilege
    - Assign a privilege to a user
- POST /api/admin/remove-privilege
    - Remove a privilege from a user
- GET /api/admin/users/{userId}/privileges
    - Fetch a user's privileges

## Access Control

- Requires manage_privileges_of_users privilege.
- Designed for system administrators only.

For payloads and responses, see studern-backend/.wiki/Admin.
