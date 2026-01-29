# Authentication Endpoints

This section summarizes the authentication endpoints documented in the backend wiki.

## Login

POST /api/login

Purpose:
- Authenticate via email or phone and return a JWT.

Key fields:
- identifier (email or phone)
- password
- devicePayload (recommended)
	- timezone
	- screen
	- platform
	- ua

Validation notes:

- identifier must map to a verified contact
- password is validated against stored hash

Example request:

```json
{
	"identifier": "john.doe@example.com",
	"password": "SecurePass123!",
	"devicePayload": {
		"timezone": "Asia/Dhaka",
		"screen": "1920x1080",
		"platform": "Win32",
		"ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
	}
}
```

Example success response:

```json
{
	"status": "success",
	"message": "Login successful.",
	"data": {
		"token": "<jwt>",
		"token_type": "bearer",
		"expires_in": 3600,
		"user": {
			"id": 1,
			"firstname": "John",
			"lastname": "Doe"
		}
	}
}
```

## Token Refresh

POST /api/refresh

Purpose:
- Issue a new token from a valid existing token.

Notes:

- Requires a valid token in Authorization header

Example curl:

```bash
curl -X POST http://localhost:8000/api/refresh \
	-H "Authorization: Bearer <jwt>"
```

## Logout

POST /api/logout

Purpose:
- Invalidate the current token.

Notes:

- Token is blacklisted server-side

Example curl:

```bash
curl -X POST http://localhost:8000/api/logout \
	-H "Authorization: Bearer <jwt>"
```

## Registration

POST /api/register

Purpose:
- Create a new user account and begin verification.

Common fields:

- firstname, lastname
- contact (email or phone)
- password

## Contact Verification

POST /api/contact-verification
POST /api/contact-verification/resend

Purpose:
- Verify email or phone for account activation.

Notes:

- Verification token is required

## Password Reset

POST /api/reset-password/request
POST /api/reset-password/verify
POST /api/reset-password/reset

Purpose:
- Request, verify, and complete password resets.

Common fields:

- contact
- reset token
- new password

## Common Responses

- 200 OK for success
- 401 Unauthorized for invalid credentials or tokens
- 422 Unprocessable Entity for validation failures

For detailed payloads and examples, refer to the backend wiki files under studern-backend/.wiki/auth.
