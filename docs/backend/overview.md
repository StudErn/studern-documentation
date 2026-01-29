# Backend Overview

The backend is a Laravel API that handles authentication, authorization, and all business logic.

## Core Concepts

- JWT authentication with device validation middleware
- Company membership and privilege checks
- Job and internship postings with payment gating
- Payment integration with package selection

## Key Modules

- Auth: login, registration, password reset
- Companies: management, users, privileges
- Hiring: create, list, update, browse
- Payments: free and paid posting flows
- Queue: asynchronous work for background tasks

## API Structure

Routes are defined in routes/api.php and grouped by public, protected, and admin access levels.