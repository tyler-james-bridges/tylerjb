# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is Tyler James-Bridges' personal portfolio website built with Next.js 15, featuring a modern design with Tailwind CSS and TypeScript. The site showcases Tyler's work as a senior quality engineer, educator, and musician with interactive elements and responsive design.

## Development Commands

- `npm run dev` - Start development server with Turbopack for fast hot reloading
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality (Note: ESLint is disabled during builds via next.config.ts)

## Architecture & Structure

### Core Technologies
- **Next.js 15** with App Router architecture
- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom configurations
- **React 19** with modern hooks and patterns
- **Vercel Analytics** for performance monitoring

### Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── components/         # Reusable React components
│   │   └── MobileNav.tsx   # Mobile navigation component
│   ├── api/               # API routes
│   │   └── contact/       # Contact form handling
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── experience/        # Experience/resume page
│   ├── services/          # Services page (feature-flagged)
│   ├── layout.tsx         # Root layout with footer and analytics
│   ├── page.tsx           # Homepage with hero section and manifesto
│   └── globals.css        # Global styles and Tailwind imports
└── middleware.ts          # Next.js middleware for feature flags
```

### Key Features
- **Feature Flagging**: The `/services` route is controlled by the `FEATURE_SERVICES` environment variable via middleware
- **Interactive Elements**: Homepage includes a flippable profile card with Matrix-style animation
- **Responsive Design**: Mobile-first approach with custom breakpoints
- **Custom Animations**: CSS animations for Matrix rain effect, bouncing elements, and hover states
- **Social Integration**: Direct links to GitHub, LinkedIn, and X (Twitter)
- **Contact System**: API route for handling contact form submissions using Resend

### Styling Architecture
- **CSS Custom Properties**: Defined in tailwind.config.js for theming
- **Dark Mode Ready**: Color scheme configured with CSS variables
- **Font Configuration**: Uses Nanum Myeongjo serif font as primary typeface
- **Component-Scoped Styles**: Tailwind utility classes with custom animations

### Configuration Notes
- ESLint is configured but disabled during builds for faster deployment
- Image optimization disabled for `img` elements (uses regular `<img>` tags instead of Next.js Image component)
- Turbopack enabled for development for faster build times
- TypeScript strict mode enabled via tsconfig.json

## Development Workflow

1. Content updates are primarily made in `src/app/page.tsx` for homepage changes
2. New pages follow the App Router convention in `src/app/[page-name]/page.tsx`
3. Shared components go in `src/app/components/`
4. API routes follow the pattern `src/app/api/[endpoint]/route.ts`
5. Feature flags are managed through middleware.ts for conditional routing

## Environment Variables
- `FEATURE_SERVICES` - Controls visibility of services page (boolean)
- Other environment variables may be needed for contact form functionality (Resend integration)