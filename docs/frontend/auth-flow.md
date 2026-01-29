# Frontend Auth Flow

The frontend handles authentication through AuthContext and JWT storage.

## Login Sequence

1. User submits identifier and password.
2. AuthContext sends POST /api/login with devicePayload.
3. On success, token and user are stored in localStorage.
4. Axios Authorization header is set for future requests.
5. User privileges are fetched.

Example login payload:

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

## Logout Sequence

1. Frontend calls POST /api/logout.
2. Token and user data are cleared from storage.
3. Authorization header is removed.

## Token Expiration

- Axios response interceptor clears auth state on 401.
- UI redirects to login when unauthenticated.

## Contact Verification

- Signup initiates verification flow.
- Verify contact pages handle OTP or email verification.
