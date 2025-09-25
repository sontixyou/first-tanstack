// src/routes/index.tsx
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getCounter, updateCounter } from '../lib/database'

const getCount = createServerFn({
  method: 'GET',
}).handler(async () => {
  try {
    return await getCounter()
  } catch (error) {
    console.error('Error reading count from database:', error)
    return 0
  }
})

const incrementCount = createServerFn({ method: 'POST' })
  .inputValidator((d: number) => d)
  .handler(async ({ data }) => {
    try {
      return await updateCounter('default', data)
    } catch (error) {
      console.error('Error updating count in database:', error)
      throw new Error('Failed to update count')
    }
  })

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => await getCount(),
})

function Home() {
  const router = useRouter()
  const state = Route.useLoaderData()

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await incrementCount({ data: 1 })

          router.invalidate()
        } catch (error) {
          console.error('Error updating count:', error)
        }
      }}
    >
      Add 1 to {state}?
    </button>
  )
}
