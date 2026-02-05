# Company APIs

Company endpoints manage organizations, members, and privileges.

## Core Flows

1. Create a company
2. Add users to the company
3. Manage company-level privileges
4. Maintain company links

## Membership & Privileges

- Users must belong to a company to manage hiring
- Privileges are stored in company_user_privileges
- Common privileges: can_post_jobs, can_manage_jobs, can_manage_users

## Key Endpoints

- POST /api/companies
    - Create a company
- GET /api/companies/my
    - List companies for the authenticated user
- POST /api/companies/{companyId}/users
    - Add a user to a company
- GET /api/companies/{companyId}/users
    - List users in a company
- POST /api/companies/{companyId}/users/{userId}/privileges
    - Grant or revoke company privileges
- POST /api/companies/{companyId}/links
    - Add a company link

## Permissions

- Most endpoints require company membership.
- Managing users or privileges typically requires can_manage_users or admin privilege.

## Example: Create Company

Request:

```json
{
  "name": "Tech Solutions Inc",
  "address": "Dhaka, Bangladesh",
  "website": "https://example.com"
}
```

Response:

```json
{
  "status": "success",
  "message": "Company created successfully",
  "data": {
    "id": 12,
    "name": "Tech Solutions Inc"
  }
}
```

See studern-backend/.wiki/Company for detailed request and response examples.
