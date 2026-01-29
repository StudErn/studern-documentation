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
- Token is attached to each request via axios default headers
- AuthContext clears tokens on 401 responses

## Device Payload

- Login requests include devicePayload for backend device validation
- Payload is generated from browser timezone, screen, platform, and user agent

## Error Mapping

- Validation errors (422) are converted into field-level messages
- Generic errors map to a fallback message for the UI

## Example: Authenticated Request

```js
import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

export const fetchCompanies = async () => {
	const response = await axios.get(`${API_BASE}/companies/my`);
	return response.data.data;
};
```