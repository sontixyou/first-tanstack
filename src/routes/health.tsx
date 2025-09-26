import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { testConnection, query } from '../lib/database'

const checkDatabase = createServerFn({
  method: 'GET',
}).handler(async () => {
  try {
    const isConnected = await testConnection()
    if (!isConnected) {
      return { status: 'error', message: 'Database connection failed' }
    }

    const [result] = await query('SELECT VERSION() as version')
    return {
      status: 'ok',
      message: 'Database connection successful',
      version: result.version,
      timestamp: new Date().toISOString(),
    }
  } catch (error) {
    return {
      status: 'error',
      message: error instanceof Error ? error.message : 'Unknown database error',
    }
  }
})

export const Route = createFileRoute('/health')(({
  component: HealthCheck,
  loader: async () => await checkDatabase(),
}))

function HealthCheck() {
  const healthData = Route.useLoaderData()

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Database Health Check</h1>
      <div style={{
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: healthData.status === 'ok' ? '#d4edda' : '#f8d7da',
        border: `1px solid ${healthData.status === 'ok' ? '#c3e6cb' : '#f5c6cb'}`,
        color: healthData.status === 'ok' ? '#155724' : '#721c24',
      }}>
        <strong>Status:</strong> {healthData.status.toUpperCase()}
        <br />
        <strong>Message:</strong> {healthData.message}
        {healthData.version && (
          <>
            <br />
            <strong>MySQL Version:</strong> {healthData.version}
          </>
        )}
        {healthData.timestamp && (
          <>
            <br />
            <strong>Checked at:</strong> {healthData.timestamp}
          </>
        )}
      </div>
    </div>
  )
}