import { drizzle } from "drizzle-orm/neon-http";
import { validateEnv, getEnv } from "@/lib/env";

// Validate required environment variables
validateEnv();

export const db = drizzle(getEnv("DATABASE_URL"));
