import postgres from "postgres";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("DATABASE_URL is required");
  process.exit(1);
}

const client = postgres(DATABASE_URL, { max: 1 });

async function main() {
  console.log("[migrate] Running FBF unified database migration...");
  const migrationSql = readFileSync(resolve(__dirname, "db-migration.sql"), "utf-8");
  await client.unsafe(migrationSql);
  console.log("[migrate] Migration complete — all tables created.");
  process.exit(0);
}

main().catch((err) => {
  console.error("[migrate] Error:", err);
  process.exit(1);
});
