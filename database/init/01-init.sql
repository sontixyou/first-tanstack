-- Initialize database schema for first-tanstack application

CREATE DATABASE IF NOT EXISTS first_tanstack CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE first_tanstack;

-- Counter table to replace the file-based counter
CREATE TABLE IF NOT EXISTS counter (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    value INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert default counter
INSERT INTO counter (name, value) VALUES ('default', 0) ON DUPLICATE KEY UPDATE name=name;

-- Create app user with proper permissions
-- Note: This script runs as root, so we can create users
GRANT SELECT, INSERT, UPDATE, DELETE ON first_tanstack.* TO 'app_user'@'%';
FLUSH PRIVILEGES;