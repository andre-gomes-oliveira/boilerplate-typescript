# ARCHITECTURE

- DEVELOPMENT MUST FOLLOW THIS STANDARD

### Sistema de pastas

- Server: source for lambda api
  -- app/
        /src
        /tests

### Premises and Responsibilities

- Business:
  - They are responsible for the business.
  - Must have unit tests
  - Can use other services or business
  - Must have a single responsibility, focused on a segment (eg user) or functionality (eg auth)
  - Use the repositories to access the bank data.
  - They receive the complete and validated data.
  - If any requirements are not met, launch a ServiceError with the details, as this is the fault of the user
- Repositories:
  - Are responsible for access to the bank
  - Business logic should not contain only bank logic.
  - Receive a transaction to maintain the scope of whoever uses it.
  - Should have a single responsibility, focused on a table (eg user) or functionality (eg auth)
  - One repository should not call another.
- Services:
  - Used to access external services
  - Can use other services or business
  - Must have a single responsibility, focused on a segment (eg user) or functionality (eg auth)
  - Use the repositories to access the bank data.
  - They receive the complete and validated data.
  - If any requirements are not met, launch a ServiceError with the details, as this is the fault of the user
- Validators:
  - Used to validate data, types, functions or models on project
  - Must have your unit tests

### Best practices

- The repositories return the model and not the interface.
- Put **ENVIRONMENTS PARAMS** in paramenterStore, set your default value if you have one.
- Always work with **async await (promisses)**, avoid callback.
- Keep the ** files small and focused ** in a functionality.
- I named the functions correctly, **avoid unnecessary comments**.

