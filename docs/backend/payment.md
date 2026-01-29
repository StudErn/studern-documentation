# Payments

StudErn includes a modular payment system for job posting and other paid modules.

## Overview

- One free job posting per user
- Paid packages required after the free posting is used
- Payments are tracked in payments and payment_gateways tables

## Data Model

- payment_gateways: gateway configuration
- payments: transaction records

## Job Posting Payment Flow

1. User starts a job posting
2. Backend checks free posting eligibility
3. If paid, the system initiates a gateway payment
4. Gateway callback completes the payment
5. Job becomes active after successful payment

## Payment Packages

- Basic (BDT 3,850)
- Standard (BDT 4,500)
- Premium (BDT 5,300)

## Key Endpoints

- POST /api/payments/initiate
- POST /api/payments/callback
- GET /api/payments/packages?module_type=job_posting

## Example: Initiate Payment

```json
{
	"module_type": "job_posting",
	"module_id": 123,
	"package_name": "Basic",
	"callback_url": "https://studern.com/api/payments/callback"
}
```

Example response:

```json
{
	"status": "success",
	"message": "Payment initiated successfully",
	"data": {
		"payment": {
			"id": 456,
			"amount": 3850,
			"status": "pending"
		},
		"bkash_url": "https://checkout.bkash.com/..."
	}
}
```

## Example: Callback

```json
{
	"paymentID": "BKASH_PAYMENT_ID",
	"status": "success",
	"trxID": "BKASH_TRANSACTION_ID"
}
```

## Gateways

- bKash tokenized checkout is supported
- Gateway configuration is stored in payment_gateways

## Configuration

Typical environment variables:

- BKASH_BASE_URL
- BKASH_APP_KEY
- BKASH_APP_SECRET
- BKASH_USERNAME
- BKASH_PASSWORD

See studern-backend/.wiki/Payment for detailed reference, configuration, and examples.
