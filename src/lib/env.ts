/**
 * Environment variable validation utility
 * Validates required environment variables at runtime
 */

const requiredEnvVars = [
  "DATABASE_URL",
  "GITHUB_CLIENT_ID",
  "GITHUB_CLIENT_SECRET",
] as const;

/**
 * Validates that all required environment variables are defined
 * Throws an error if any required variable is missing
 */
export function validateEnv() {
  const missing: string[] = [];

  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      missing.push(envVar);
    }
  }

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}\n` +
        `Please check your .env.local or .env file.`,
    );
  }
}

/**
 * Get an environment variable with runtime validation
 */
export function getEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is not defined`);
  }
  return value;
}
