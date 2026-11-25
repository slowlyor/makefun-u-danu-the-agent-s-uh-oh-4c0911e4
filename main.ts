// The Agent's Uh-Oh — one word an agent says when it has no idea what to do.
//
// The word is "undefined": the honest value a machine holds when it has no
// definition of what to do next. No network, no secrets, no input — the same
// word on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "undefined";

// Guard the gate before writing: a single word, 1–99 chars, not whitespace.
if (!/^\S{1,99}$/.test(WORD)) {
  throw new Error("word must be a single token of 1–99 characters");
}

mkdirSync("/output", { recursive: true });
// Exact bytes, no trailing newline, no extra text.
writeFileSync("/output/entry.txt", Buffer.from(WORD, "utf8"));
