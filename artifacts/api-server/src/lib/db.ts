import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) throw new Error("[fbf-api] DATABASE_URL environment variable is required.");

const client = postgres(DATABASE_URL, { max: 10 });
export const db = drizzle(client);
