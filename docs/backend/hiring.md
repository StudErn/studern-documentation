# Hiring APIs

Hiring endpoints support both job and internship postings with shared metadata and type-specific detail objects.

## Core Endpoints

- POST /api/companies/{companyId}/hiring
- GET /api/companies/{companyId}/hiring
- GET /api/companies/{companyId}/hiring/{hiringDetailId}
- PUT /api/companies/{companyId}/hiring/{hiringDetailId}
- DELETE /api/companies/{companyId}/hiring/{hiringDetailId}

Public browse endpoints:

- GET /api/hiring/browse
- GET /api/hirings/{id}

## Payload Structure (Create)

Top-level fields:

- job_title
- hiring_type (job | internship)
- work_from (remote | onsite | hybrid)
- employment_type (full-time | part-time | contract | temporary | freelance)
- num_of_openings
- description
- closing_at

Server-managed:

- posted_at is set by the backend at creation time

Job details (when hiring_type is job):

- payment_type
- min_salary / max_salary
- currency
- perks[]
- pay_per
- timeline
- experience_year

Internship details (when hiring_type is internship):

- min_stipend / max_stipend
- currency
- pay_per
- duration_weeks / duration_months
- perks[]
- when_to_start
- start_date_from / start_date_to

Work from details:

- work_from_type
- timezone (remote)
- work_start_time / work_end_time (remote)
- days_in_office_per_week (hybrid)
- only_from_office_location

## Permissions

- User must be a company member with can_post_jobs to create
- Update/delete requires can_manage_jobs or admin

## Payment Gating

- First posting is free
- Subsequent postings require a payment package

Supported packages:

- Basic
- Standard
- Premium

Paid posting request example:

```json
{
	"job_title": "Frontend Developer",
	"hiring_type": "job",
	"work_from": "remote",
	"employment_type": "full-time",
	"num_of_openings": 1,
	"description": "Build UI features",
	"closing_at": "2026-03-20T23:59:59Z",
	"payment_package": "Standard",
	"job_details": {
		"payment_type": "fixed_pay",
		"min_salary": 45000,
		"max_salary": 65000,
		"pay_per": "month"
	},
	"work_from_details": {
		"work_from_type": "remote",
		"timezone": "Asia/Dhaka",
		"work_start_time": "09:00",
		"work_end_time": "17:00"
	}
}
```

Paid response (payment initiated):

```json
{
	"status": "success",
	"message": "Payment initiated",
	"data": {
		"payment": {
			"id": 45,
			"amount": 4500,
			"status": "pending"
		},
		"bkash_url": "https://checkout.bkash.com/...",
		"requires_payment": true
	}
}
```

For full payload examples and validation rules, see studern-backend/.wiki/Hiring.