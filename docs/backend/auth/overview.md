# Authentication Overview

StudErn uses JWT-based authentication with optional device fingerprint validation.

## JWT Basics

- Tokens are issued during login and sent with every protected request.
- The token is passed in the Authorization header:
    - Authorization: Bearer <token>
- Tokens expire and can be refreshed using the refresh endpoint.

## Device Payload

For security, authenticated requests can include a devicePayload in the request body. This enables device-based session validation.

Recommended fields:

- timezone
- screen
- platform
- ua

Note: Some endpoints accept requests without devicePayload, but providing it improves security and session tracking.

## Authorization & Privileges

- Company actions require company membership and specific privileges (e.g., can_post_jobs).
- Admin endpoints require elevated privileges (e.g., manage_privileges_of_users).

## Related Pages

- Endpoint details: [auth/endpoints.md](endpoints.md)
