# Romantic Birthday Website

## Overview

This is a romantic birthday celebration website built for commemorating the 11th day of a girlfriend's birthday month. The application features a love letter, special gifts, and romantic animations. It's built as a full-stack application with a React frontend and Express backend, using PostgreSQL with Drizzle ORM for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Styling**: TailwindCSS with custom romantic color palette and CSS variables
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Fonts**: Google Fonts (Dancing Script, Poppins, Great Vibes) for romantic typography

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with `/api` prefix routing
- **Session Management**: Express sessions with connect-pg-simple for PostgreSQL session storage
- **Error Handling**: Centralized error middleware with structured error responses

### Database Architecture
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with TypeScript schema definitions
- **Schema Location**: Shared schema in `/shared/schema.ts`
- **Migrations**: Drizzle Kit for database migrations in `/migrations` directory

## Key Components

### Pages
1. **Home Page** (`/`) - Welcome page with romantic greeting and navigation buttons
2. **Love Letter** (`/letter`) - Personalized romantic letter with custom styling
3. **Special Gift** (`/gift`) - Interactive gift opening experience with animations
4. **404 Page** - Custom not found page with helpful messaging

### UI Components
- **Navigation**: Fixed header with glass effect and romantic color scheme
- **Floating Hearts**: Animated heart emojis with CSS keyframe animations
- **Interactive Elements**: Gift opening mechanics with flower animations

### Shared Components
- Complete Shadcn/ui component library including forms, dialogs, cards, etc.
- Custom romantic styling with CSS variables for consistent theming
- Responsive design optimized for both desktop and mobile

## Data Flow

### Current Implementation
- In-memory storage using `MemStorage` class for development
- User entity with basic username/password fields
- Storage interface (`IStorage`) designed for easy database integration

### Database Integration Ready
- Drizzle configuration pointing to PostgreSQL
- Schema definitions using Drizzle's type-safe approach
- Environment variable configuration for database connection

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Libraries**: Radix UI primitives, Lucide React icons
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Development**: Vite, TypeScript, ESBuild for production builds
- **Styling**: TailwindCSS, PostCSS, Autoprefixer

### Romantic Features
- Custom CSS animations for floating hearts
- Google Fonts integration for elegant typography
- Responsive image handling with Unsplash integration
- Interactive animations using vanilla JavaScript

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds to `dist/public` directory
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Development**: Hot module replacement with Vite dev server
- **Production**: Optimized builds with tree shaking and minification

### Environment Configuration
- Database URL configuration via environment variables
- Replit-specific optimizations and banner integration
- Mobile-responsive design considerations

### Server Setup
- Express serves both API routes and static frontend assets
- Middleware for request logging and JSON parsing
- Session management ready for authentication features
- Error handling with appropriate HTTP status codes

The application is designed as a romantic, personal website with a clean separation between frontend presentation and backend data management, ready for database integration while currently using in-memory storage for development.