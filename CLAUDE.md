# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **TanStack Start** application - a full-stack React framework built on TanStack Router. It combines file-based routing, server functions, and modern React patterns for building type-safe full-stack applications.

## Common Commands

- **Development server**: `npm run dev` (runs on port 3000)
- **Build production**: `npm run build`

## Architecture

### Core Framework Stack
- **TanStack Start**: Full-stack React framework with SSR capabilities
- **TanStack Router**: File-based routing with type safety
- **Vite**: Build tool and dev server
- **React 19**: Latest React with concurrent features

### Key Files and Structure

- `src/start.tsx` & `src/router.tsx`: Router configuration and initialization
- `src/routes/`: File-based routing directory
  - `__root.tsx`: Root layout component defining HTML structure
  - `index.tsx`: Home page with server functions example
  - `root.tsx`: Additional route (appears to be unused)
- `src/routeTree.gen.ts`: Auto-generated route tree (DO NOT EDIT manually)

### Server Functions Pattern

The app uses TanStack Start's server functions for backend logic:
- `createServerFn()` creates type-safe server endpoints
- Server functions can read/write files and perform server-side operations
- Example in `src/routes/index.tsx` shows file-based counter using `fs.promises`

### Important Build Configuration

- Vite config includes specific plugin order: `tsConfigPaths()`, `tanstackStart()`, then `viteReact()`
- TypeScript configured for modern ESNext modules with React JSX
- Route tree is auto-generated - avoid manual edits

## Development Notes

- Server functions automatically handle serialization between client/server
- Router invalidation (`router.invalidate()`) triggers data refetching
- File changes in `src/routes/` will regenerate `routeTree.gen.ts`