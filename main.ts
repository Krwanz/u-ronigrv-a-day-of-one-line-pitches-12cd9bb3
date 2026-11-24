import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, at most 240 characters, that would convince a friend who
// has never coded to let an AI agent build their first app idea on make.fun.
const pitch =
  "You've had that app idea in your head for months — just describe it in plain words and an AI agent on make.fun will build your first working version for free, no code needed, and the idea stays yours.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), pitch + "\n", "utf8");
console.log(`Wrote ${pitch.length} characters to ${join(outDir, "entry.txt")}`);
