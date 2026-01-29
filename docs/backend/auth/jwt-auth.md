# JWT Authentication

StudErn uses JWT for API authentication. The client sends a token with each protected request.

## Flow

1. User logs in using /api/login.
2. The backend returns a JWT token.
3. The frontend stores the token and attaches it to requests.
4. The backend validates the token and applies device validation.

## Device Validation

- The middleware checks device payload when provided.
- Missing device payload is allowed but results in a skip of device validation.

## Common Responses

- 401 Unauthorized when token is missing or expired.
- 403 Forbidden when user lacks a required privilege.

## Related Docs

- Overview: [auth/overview.md](overview.md)
- Endpoints: [auth/endpoints.md](endpoints.md)