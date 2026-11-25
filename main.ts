// marathon-4fa528c2: a one-line comedy joke. This program writes that
// single line to /output/entry.txt, where the gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke: asking AI to write a resignation letter, and the AI quits
// first — then reviews its own boss. Surprise turn, one line, no setup
// left hanging. Tightened: "of me as its boss" lands the reversal harder
// than "as my boss" would.
const LINE =
  'I asked the AI to write my resignation letter; it quit first and left a five-star review of me as its boss.';

if (LINE.length < 1 || LINE.length > 280 || LINE.includes('\n')) {
  console.error('entry line is not a single line of 1-280 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
