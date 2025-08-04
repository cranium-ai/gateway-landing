# Cranium AI Gateway Landing Page

This is the landing page for Cranium AI Gateway, a platform for publishing AI systems securely.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

## Supabase Integration

The landing page is integrated with Supabase for storing waitlist entries. 

### Database Migrations

To run database migrations:

1. Set the Supabase service key as an environment variable:
```bash
export SUPABASE_SERVICE_KEY=your_service_key_here
```

2. Run the migration script:
```bash
npm run migrate
```

Note: You need to get the service key from the Supabase dashboard. This is different from the anon key used in the client.

## Deployment

1. Build the project:
```bash
npm run build
```

2. Preview the build:
```bash
npm run preview
```

## Environment Variables

- `SUPABASE_URL` - Supabase project URL (defaults to the project URL)
- `SUPABASE_SERVICE_KEY` - Supabase service key (required for migrations)

## Database Schema

The application uses a single table:

### Waitlist Table

- `id` - UUID, primary key
- `email` - TEXT, not null, unique
- `company_name` - TEXT, optional
- `ai_systems_count` - INTEGER, optional
- `selected_plan` - TEXT, not null ('free', 'standard', or 'enterprise')
- `created_at` - TIMESTAMP WITH TIME ZONE, default now() 