# Backend Overview

The StudErn backend is a Laravel API that powers authentication, authorization, hiring workflows, and payment processing.

## Architecture Snapshot

- Framework: Laravel
- Auth: JWT with optional device payload validation
- Data: Eloquent models backed by SQLite/MySQL
- Async: Laravel queues (database driver recommended for local dev)

## Core Concepts

- **Authentication**: JWT tokens are required for protected routes.
- **Authorization**: Company membership and privilege checks gate company actions.
- **Hiring**: Jobs and internships share a unified hiring_details model with type-specific details.
- **Payments**: A free-posting rule with package-based paid upgrades.

## Key Modules

- **Auth**: login, registration, verification, password reset
- **Companies**: creation, membership, privileges, links
- **Hiring**: create, browse, update, delete, and public browse
- **Payments**: gateway integration and package logic
- **Queue**: background work, retries, and failed jobs

## Request & Response Conventions

- JSON requests with Authorization header for protected routes
- Standard response envelope:
	- status, message, data/messages
- Validation errors return messages per field

## API Structure

Routes live in routes/api.php and are grouped into:

- **Public**: welcome, browse listings
- **Protected**: company, hiring, payments
- **Admin**: privilege management and system operations