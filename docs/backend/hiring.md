# Hiring & Payments

Hiring creation supports both job and internship postings. The flow is gated by payment eligibility.

## Free vs Paid Posting

- Each user can post one free job.
- After the free posting is used, a payment package must be selected.

## Posting Flow

1. Frontend submits hiring data.
2. Backend checks if payment is required.
3. If paid, a payment is initiated and the response includes a payment URL.
4. If free, the hiring record is created immediately.

## Supported Packages

- Basic
- Standard
- Premium

These map to backend pricing in the payment service.