# Getting Started

This guide helps you run the StudErn backend and frontend locally.

## Prerequisites

- PHP 8.3+
- Composer
- Node.js 18+
- npm
- SQLite or MySQL (the repository currently uses SQLite by default)

## Repositories

StudErn is split into two main applications:

- Backend: Laravel API in studern-backend
- Frontend: React + Vite in studern-frontend

## High-Level Steps

1. Install dependencies for both projects.
2. Configure environment variables for backend and frontend.
3. Run migrations and seed data as needed.
4. Start the backend API.
5. Start the frontend dev server.

## Environment Basics

- Backend uses .env for database and queue configuration.
- Frontend uses VITE_API_BASE_URL to point to the API.
- For local development, database queue is recommended.

Continue to [local-development.md](local-development.md) for detailed steps.