// src/start.tsx
import { createRouter } from '@tanstack/react-router'
import { createStart } from '@tanstack/react-start'
import { routeTree } from './routeTree.gen'

export function getRouter() {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
  })

  return router
}

export const startInstance = createStart(() => {
  return {
    requestMiddleware: [],
  }
})

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
