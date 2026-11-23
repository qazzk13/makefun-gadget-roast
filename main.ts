import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Angle: the phone is selectively lazy — it quits early on you, but
// mysteriously revives itself for the one job nobody asked it to do.
const line =
  "My phone dies at 4 p.m. every day like it has a train to catch, yet somehow always finds the energy to demand a software update at midnight.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
