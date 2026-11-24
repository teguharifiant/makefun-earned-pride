import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line entry for make.fun "One Line of Earned Pride":
// a quiet, earned moment of pride — an apprentice welder whose
// weld finally holds, and the old welder's silent approval.
const text =
  "On his eleventh try, the apprentice's weld held, and the old welder said nothing \u2014 he just handed him the next piece.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate: the entry must be a single line of 1-240 characters.
if ([...text].length < 1 || [...text].length > 240) {
  throw new Error(
    `entry must be 1-240 characters, got ${[...text].length}`,
  );
}
if (text.includes("\n") || text.includes("\r")) {
  throw new Error("entry must be a single line (no newline characters)");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
