# 🧵 Style Loom

A modern fashion e-commerce platform built with **Next.js** and **Sanity CMS**.

## Tech Stack

| Layer     | Technology                           |
| --------- | ------------------------------------ |
| Frontend  | Next.js 16, React 19, Tailwind CSS 4 |
| CMS       | Sanity v5 (Studio + Content Lake)    |
| Language  | TypeScript                           |
| Connector | next-sanity                          |

## Project Structure

```
style-loom/
├── client/          # Next.js frontend application
│   ├── src/
│   │   ├── app/     # App Router pages & layouts
│   │   └── sanity/  # Sanity client configuration
│   └── public/      # Static assets
├── studio/          # Sanity Content Studio
│   └── schemaTypes/ # Content schema definitions
└── README.md
```

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** (or yarn / pnpm)
- A [Sanity](https://www.sanity.io/) project (project ID: configure via `.env`)

### 1. Clone the repository

```bash
git clone <repository-url>
cd style-loom
```

### 2. Set up environment variables

Copy the example env files and fill in your values:

```bash
# Client
cp client/.env.example client/.env.local

# Studio
cp studio/.env.example studio/.env.local
```

### 3. Install dependencies

```bash
# Install client dependencies
cd client && npm install

# Install studio dependencies
cd ../studio && npm install
```

### 4. Run development servers

```bash
# Terminal 1 — Next.js frontend (http://localhost:3000)
cd client && npm run dev

# Terminal 2 — Sanity Studio (http://localhost:3333)
cd studio && npm run dev
```

## Scripts

### Client (`client/`)

| Command         | Description             |
| --------------- | ----------------------- |
| `npm run dev`   | Start dev server        |
| `npm run build` | Build for production    |
| `npm run start` | Start production server |
| `npm run lint`  | Run ESLint              |

### Studio (`studio/`)

| Command                  | Description                     |
| ------------------------ | ------------------------------- |
| `npm run dev`            | Start Sanity Studio locally     |
| `npm run build`          | Build Studio for deployment     |
| `npm run deploy`         | Deploy Studio to Sanity hosting |
| `npm run deploy-graphql` | Deploy GraphQL API              |

## License

Private — All rights reserved.
