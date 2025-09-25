// src/lib/database.ts
import mysql from 'mysql2/promise'

interface DatabaseConfig {
  host: string
  port: number
  database: string
  user: string
  password: string
}

function getDatabaseConfig(): DatabaseConfig {
  return {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306', 10),
    database: process.env.DB_NAME || 'first_tanstack',
    user: process.env.DB_USER || 'app_user',
    password: process.env.DB_PASSWORD || 'app_password',
  }
}

let connectionPool: mysql.Pool | null = null

function getConnectionPool(): mysql.Pool {
  if (!connectionPool) {
    const config = getDatabaseConfig()
    connectionPool = mysql.createPool({
      ...config,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    })
  }
  return connectionPool
}

export async function query<T = any>(sql: string, values?: any[]): Promise<T[]> {
  const pool = getConnectionPool()
  const [results] = await pool.execute(sql, values)
  return results as T[]
}

export async function queryFirst<T = any>(sql: string, values?: any[]): Promise<T | null> {
  const results = await query<T>(sql, values)
  return results.length > 0 ? results[0] : null
}

// Counter-specific database operations
export interface Counter {
  id: number
  name: string
  value: number
  created_at: Date
  updated_at: Date
}

export async function getCounter(name: string = 'default'): Promise<number> {
  const counter = await queryFirst<Counter>(
    'SELECT value FROM counter WHERE name = ?',
    [name]
  )
  return counter?.value ?? 0
}

export async function updateCounter(name: string = 'default', increment: number = 1): Promise<number> {
  await query(
    'INSERT INTO counter (name, value) VALUES (?, ?) ON DUPLICATE KEY UPDATE value = value + ?',
    [name, increment, increment]
  )
  
  const counter = await queryFirst<Counter>(
    'SELECT value FROM counter WHERE name = ?',
    [name]
  )
  
  return counter?.value ?? increment
}

export async function testConnection(): Promise<boolean> {
  try {
    await query('SELECT 1')
    return true
  } catch (error) {
    console.error('Database connection test failed:', error)
    return false
  }
}