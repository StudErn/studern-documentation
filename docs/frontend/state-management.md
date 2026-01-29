# State Management

StudErn uses React Context for shared state.

## Providers

- AuthContext: user session and token handling
- CompanyContext: company selection and privileges
- HiringContext: hiring CRUD and browsing
- ViewContext: applicant vs recruiter view selection
- ToastContext: global notifications

## Patterns

- Contexts expose async actions and loading states
- Components consume hooks like useCompany and useHiring
- Local storage is used to persist selected company
- API errors are converted to user-friendly messages