# Queue Processing

StudErn uses Laravel queues for asynchronous tasks.

## Recommended Driver for Local Dev

- database (set QUEUE_CONNECTION=database)

## Why Database Driver

- No external services required
- Stable local development experience
- Transparent job storage in the database

## Common Tasks

- Start a worker: php artisan queue:work
- Inspect failed jobs: php artisan queue:failed