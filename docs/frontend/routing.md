# Routing

Routing is handled by React Router.

## Public Routes

- /login
- /signup
- /find-jobs
- /jobs/:id
- /courses
- /job-fair
- /internship-sprint
- /book-session

## Protected Routes

- /dashboard
- /dashboard/jobs
- /dashboard/jobs/create
- /applications
- /interviews
- /saved-jobs
- /profile
- /settings

## Admin Routes

- /control-panel
- /control-panel/users
- /control-panel/companies
- /control-panel/hiring
- /control-panel/settings

## Route Guards

- ProtectedRoute wraps authenticated views
- Control panel routes require admin privileges

## Navigation Notes

- /post-job redirects based on authentication state
- /dashboard switches between applicant and recruiter dashboards