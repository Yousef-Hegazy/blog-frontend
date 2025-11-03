# Blog Frontend

A beautiful, responsive blog frontend built with Next.js 16, PrimeReact, and Zustand.

## Features

- 🎨 Beautiful UI with PrimeReact components
- 🔍 Real-time search and filtering
- 📱 Fully responsive design
- ⚡ Server-side rendering
- 🎯 TypeScript
- 🔄 Zustand state management

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
blog-frontend/
├── app/              # Pages & components
├── lib/
│   ├── api/         # API functions
│   └── types/       # TypeScript types
└── presentation/
    └── store/       # Zustand store
```

## Connect Your API

1. Create `.env.local`:
   ```
   NEXT_PUBLIC_API_URL=https://your-api.com/api
   ```

2. Update `lib/api/blog.ts` with real API calls

3. Your API needs these endpoints:
   - `GET /posts` → BlogPost[]
   - `GET /categories` → string[]
   - `GET /tags` → string[]

See `API_INTEGRATION.md` for details.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- PrimeReact
- Zustand
- Tailwind CSS
