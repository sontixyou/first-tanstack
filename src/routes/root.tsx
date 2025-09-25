import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/root')({
  component: RouteComponent,
})

function RouteComponent() {
  const appName = import.meta.env.VITE_APP_NAME

  return <>
    <h1>{appName}</h1>
    <div>Hello "/root"!</div>
  </>
}
