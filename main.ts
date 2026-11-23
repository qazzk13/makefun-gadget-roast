import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Angle: the phone is selectively lazy — it quits early on you, but
// magically revives itself at midnight for the one job nobody asked it to do.
// Second pass: tightened from the 140-char draft — cut "every day" and
// "somehow always finds the energy to demand" for the punchier
// "magically revives just to nag me".
const line =
  "My phone dies at 4 p.m. like it has a train to catch, yet at midnight it magically revives just to nag me about a software update.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
