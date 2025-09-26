# First TanStack

A TanStack Start application with MySQL database integration.

## Features

- **TanStack Start**: Full-stack React framework with SSR capabilities
- **TanStack Router**: File-based routing with type safety
- **MySQL 8.4**: Database integration for persistent data storage
- **Server Functions**: Type-safe server endpoints for database operations

## Getting Started

### Prerequisites

- Node.js (version 22.12.0+ recommended)
- Docker and Docker Compose (for MySQL database)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd first-tanstack
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env
```

4. Start the MySQL database:
```bash
docker compose up -d
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at http://localhost:3000

### Database Setup

The MySQL database is automatically initialized with the required schema when you start the Docker container for the first time. The initialization script creates:

- A `counter` table for storing application state
- Proper user permissions for the application

### Health Check

Visit http://localhost:3000/health to check the database connection status.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `docker compose up -d` - Start MySQL database
- `docker compose down` - Stop MySQL database

## Database Configuration

Database settings can be configured via environment variables:

- `DB_HOST` - MySQL host (default: localhost)
- `DB_PORT` - MySQL port (default: 3306)
- `DB_NAME` - Database name (default: first_tanstack)
- `DB_USER` - Database user (default: app_user)
- `DB_PASSWORD` - Database password (default: app_password)

## Project Structure

```
├── src/
│   ├── lib/
│   │   └── database.ts      # Database connection and utilities
│   ├── routes/
│   │   ├── __root.tsx       # Root layout
│   │   ├── index.tsx        # Home page with counter
│   │   ├── health.tsx       # Database health check
│   │   └── posts/           # Example posts routes
│   ├── router.tsx           # Router configuration
│   └── start.tsx            # Start configuration
├── database/
│   └── init/
│       └── 01-init.sql      # Database initialization script
├── docker-compose.yml       # MySQL container configuration
└── package.json
```