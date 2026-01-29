# Frontend Overview

The frontend is a React application built with Vite. It provides recruiter, applicant, and admin views.

## Key Areas

- Auth pages (login, signup, verification)
- Recruiter dashboard and job posting
- Applicant job browsing and applications
- Admin control panel

## Layout

- App layout wraps authenticated routes
- Context providers manage auth, company, and hiring state

## App Entry Points

- src/main.jsx: React root and provider setup
- src/App.jsx: Route definitions and layout

## State & Data

- AuthContext: session, token, user
- CompanyContext: selected company and privileges
- HiringContext: create, fetch, update, browse

## API Integration

- Axios is used for HTTP requests
- Base URL comes from VITE_API_BASE_URL