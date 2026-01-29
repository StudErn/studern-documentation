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
- Listen mode (dev only): php artisan queue:listen
- Inspect failed jobs: php artisan queue:failed
- Retry failed jobs: php artisan queue:retry all

## Tables Used

- jobs
- failed_jobs
- job_batches

## Operational Notes

- Use queue:work for production-style processing.
- Use queue:listen for quick local feedback.
- Tune retry behavior with --tries and --timeout flags.