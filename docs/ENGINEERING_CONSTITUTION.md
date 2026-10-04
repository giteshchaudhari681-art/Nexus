# Nexus Engineering Constitution

This document defines the core standards for all future development in the Nexus project.

## 1. Code Quality
- **Readability:** Code must be clear, understandable, and self-documenting.
- **Modularity:** Adhere to single responsibility principles. Keep modules focused.
- **No Dead Code:** Remove unused code, magic numbers, and commented-out production code.
- **Dependencies:** Explicitly define and justify dependencies. Avoid unnecessary abstractions.

## 2. Architecture
- **Service Boundaries:** Respect domain and infrastructure separation.
- **Coupling:** Avoid circular dependencies and accidental coupling.
- **Communication:** Use explicit inter-service communication. Avoid cross-service database access.

## 3. Security
- **No Secrets in Source:** Never commit secrets, credentials, or private keys to the repository.
- **Configuration:** Use environment variables for sensitive configuration (`.env`).
- **Logging:** Never log secrets or sensitive PII.
- **Boundaries:** Respect authentication and authorization boundaries.

## 4. Testing
- **New Behavior:** Must include automated tests.
- **Bug Fixes:** Must include regression tests.
- **Integrations:** Critical distributed behavior requires integration testing.
- **Reliability:** Avoid flaky tests; test failure scenarios extensively.

## 5. Observability
- Systems must eventually support structured logging, metrics, and distributed tracing.

## 6. Git Protocol
- **Branch Naming:** `feature/pr-XXX-description`, `bugfix/description`
- **Commits:** Descriptive, logical, and without accidental secrets. No meaningless commits.
- **Pull Requests:** Adhere to explicit PR boundaries. Avoid scope creep.
- **History:** No force pushing to protected or shared branches without explicit justification.
