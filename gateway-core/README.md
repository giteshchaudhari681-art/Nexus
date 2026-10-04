# Nexus Gateway Core

This is the core foundation for the Nexus API Gateway.

## Purpose
Provides the executable HTTP lifecycle, configuration mechanisms, and minimal routing framework required to safely introduce future gateway features (such as routing, rate limiting, and authentication).

## Installation
\`\`\`bash
npm install
\`\`\`

## Development
\`\`\`bash
npm run dev
\`\`\`

## Build
\`\`\`bash
npm run build
\`\`\`

## Production
\`\`\`bash
npm start
\`\`\`

## Tests
\`\`\`bash
npm test
\`\`\`

## Current Endpoints
- \`GET /api/v1/health\` - Returns machine-readable health status.

## Current Limitations
This is a foundational service. Authentication, rate limiting, service discovery, routing logic, and advanced resilience patterns are not yet implemented.
