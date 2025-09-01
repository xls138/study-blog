# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

```bash
# Development
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production 
npm start           # Start production server
npm run lint        # Run ESLint

# No test command configured in this project
```

## Project Architecture

### Core Technology Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript + React 19
- **Styling**: Tailwind CSS 4 with Tailwind Typography
- **Content**: MDX for course content with syntax highlighting
- **UI Components**: Radix UI primitives + custom components
- **Icons**: Lucide React

### Application Structure

This is a study blog platform focused on displaying course content. The application follows a hybrid static/dynamic approach:

**Static Marketing Pages**: Homepage and course listings are static pages that showcase available courses

**Dynamic Course Content**: Individual courses are rendered from MDX files with enhanced features like table of contents, breadcrumbs, and responsive layouts

### Key Architectural Patterns

#### MDX-First Course System
Courses are stored as MDX files in `src/app/courses/[course-slug]/page.mdx`. Each course file exports:
- `course` object with metadata (title, description, author, date, imageUrl)  
- `metadata` object for Next.js head generation
- Default export uses `CourseLayout` wrapper component

#### Dynamic Course Discovery
The `src/lib/courses.ts` module uses `fast-glob` to automatically discover course MDX files and extract metadata, enabling automatic course listing without manual registration.

#### Enhanced MDX Processing  
- `mdx-components.tsx` automatically generates IDs for all headings (h1-h4) to enable table of contents navigation
- Integrated syntax highlighting via rehype-prism
- GitHub Flavored Markdown support via remark-gfm

#### Responsive Table of Contents
The `TableOfContents` component dynamically extracts headings from rendered MDX content and provides:
- Desktop: Fixed sidebar navigation  
- Mobile: Sheet overlay triggered by floating button
- Smooth scrolling with `scroll-pt-16` HTML class for proper anchor positioning

#### Component Organization
- `src/components/ui/`: Radix UI-based primitive components (button, card, sheet, etc.)
- `src/components/`: Application-specific components (Header, CourseLayout, etc.)
- Layout components use composition pattern with `children` props

### File System Routing
Uses Next.js App Router with:
- Course routes: `src/app/courses/[slug]/page.mdx`
- Static pages: `src/app/page.tsx` (homepage), `src/app/courses/page.tsx` (course listing)
- Global layout: `src/app/layout.tsx` with minimal HTML structure

### Styling Architecture  
- Global styles in `src/app/globals.css` import Tailwind and custom Prism syntax highlighting
- No CSS modules or styled-components - pure Tailwind approach
- Typography styles handled by `@tailwindcss/typography` plugin for MDX content

## Development Notes

### Adding New Courses
1. Create new directory: `src/app/courses/[course-name]/`  
2. Add `page.mdx` with required `course` export object
3. Course will be automatically discovered and displayed in course listing

### MDX Content Guidelines
- All headings automatically get anchor IDs for table of contents
- Use standard Markdown syntax - enhanced features are handled by plugins
- Images should use Next.js Image component (automatically configured in MDX components)

### UI Component Pattern
UI components follow Radix + Tailwind pattern:
- Use Radix primitives for functionality
- Style with Tailwind classes
- Compose using `className` prop and `clsx` for conditional styles
- Export as default from individual files in `src/components/ui/`