import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";

let _db: PostgresJsDatabase | null = null;

export function getDb(): PostgresJsDatabase {
  if (!_db) {
    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error("[fbf-api] DATABASE_URL is not set. Database features are unavailable.");
    }
    const client = postgres(url, { max: 10 });
    _db = drizzle(client);
  }
  return _db;
}

export const db = new Proxy({} as PostgresJsDatabase, {
  get(_target, prop) {
    return (getDb() as any)[prop];
  },
});
