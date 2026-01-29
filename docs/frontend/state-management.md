# State Management

StudErn uses React Context for shared state.

## Providers

- AuthContext: user session and token handling
- CompanyContext: company selection and privileges
- HiringContext: hiring CRUD and browsing

## Patterns

- Contexts expose async actions and loading states
- Components consume hooks like useCompany and useHiring