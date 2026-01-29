# Architecture Overview

StudErn uses a classic client-server architecture with a RESTful API.

## System Components

- Frontend: React + Vite single-page application.
- Backend: Laravel API with JWT-based authentication.
- Database: SQLite (local) or MySQL (production-ready).
- Queue: Laravel queue with database driver for local development.

## Data Flow

1. The frontend authenticates the user and stores a JWT token.
2. API requests include the token to access protected endpoints.
3. The backend validates the token, authorizes the user, and returns data.
4. Some actions (such as job posting payments) trigger payment flows and queue jobs.

## Key Domain Areas

- Companies and company memberships
- Hiring details (jobs and internships)
- Payments and free-posting logic
- Applications and interviews

## Technology Decisions

- Laravel provides rapid development and a stable ecosystem.
- React + Vite offers fast iteration and modern UI patterns.
- Database queue driver ensures reliable background work in local environments.