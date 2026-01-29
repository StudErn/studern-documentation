# Local Development

Use this page to set up the backend and frontend on a local machine.

## Backend Setup

1. Install dependencies:
   - Run composer install in studern-backend.
2. Copy environment file:
   - Duplicate .env.example to .env if needed.
3. Configure the database:
   - SQLite is supported out-of-the-box.
4. Run migrations:
   - php artisan migrate
5. Start the API server:
   - php artisan serve

## Frontend Setup

1. Install dependencies:
   - Run npm install in studern-frontend.
2. Configure API base URL:
   - Set VITE_API_BASE_URL in the frontend .env if needed.
3. Start the dev server:
   - npm run dev

## Default URLs

- Backend API: http://localhost:8000/api
- Frontend: http://localhost:5173

## Common Issues

- Authentication failures usually come from missing or expired JWT tokens.
- Posting jobs may require a payment package after the free posting is used.
- Queue processing depends on QUEUE_CONNECTION (database is recommended for local dev).