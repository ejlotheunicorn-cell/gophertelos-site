// ---------------------------------------------------------------------------
// GRADE DATA — drives the Shop grade cards and the Scope & Sequence table.
//
// ⚠️  IMPORTANT: The `skills` descriptions below are PLACEHOLDERS written from
//     the build brief. They are NOT copied from your Parent & Teacher Guide.
//     Replace each `skills:` line with the real "New skills introduced" text
//     from your guide before publishing. Same for the card `blurb:` lines.
//
// Adding a new grade later = add one object here. Nothing else to touch.
// The `hex` values are the Depth Color System (teal -> plum).
// ---------------------------------------------------------------------------

export const depthColors = {
  prek: '#159A9C',
  g1: '#1E88A8',
  g2: '#3A6EA5',
  g3: '#5B57A0',
  g4: '#7A4A94',
  g5: '#8C3A7A',
  g6: '#7A2E56',
};

// Shop page — grade cards.
export const gradeCards = [
  {
    id: 'prek',
    name: 'Pre-K / K',
    hex: depthColors.prek,
    status: 'available',
    blurb:
      'Fully transparent, one-letter-one-sound words — a foundation of decoding confidence before English gets tricky.',
    sampleUrl: null, // no Pre-K sample listing yet — the sample link is hidden until one exists
    etsyKey: 'prek',
  },
  {
    id: 'g1',
    name: 'Grade 1',
    hex: depthColors.g1,
    status: 'available',
    blurb:
      'The first controlled irregular spellings, still anchored in real sentence structure through the 3×7 Matrix.',
    sampleUrl: 'https://www.etsy.com/listing/4535965128/grade-1-phonics-sample-trial-worksheet',
    etsyKey: 'g1',
  },
  // Grade 2 isn't listed on Etsy yet — shown as "Coming soon". When it launches,
  // set status: 'available', add a blurb, sampleUrl, and etsyKey: 'g2' (and add
  // the g2 listing URL back into data/site.js).
  { id: 'g2', name: 'Grade 2', hex: depthColors.g2, status: 'coming' },
  { id: 'g3', name: 'Grade 3', hex: depthColors.g3, status: 'coming' },
  { id: 'g4', name: 'Grade 4', hex: depthColors.g4, status: 'coming' },
  { id: 'g5', name: 'Grade 5', hex: depthColors.g5, status: 'coming' },
  { id: 'g6', name: 'Grade 6', hex: depthColors.g6, status: 'coming' },
];

// Scope & Sequence page — one row per grade band.
// ⚠️  Replace `skills` with the real text from your Parent & Teacher Guide.
export const scopeRows = [
  {
    grade: 'Pre-K / K',
    hex: depthColors.prek,
    skills:
      'Transparent one-letter-one-sound words; letter–sound foundations; the Simple sentence tier introduced.',
  },
  {
    grade: 'Grade 1',
    hex: depthColors.g1,
    skills:
      'Short vowels consolidated; first controlled irregular spellings; the Compound sentence tier introduced.',
  },
  {
    grade: 'Grade 2',
    hex: depthColors.g2,
    skills:
      'Common vowel teams and digraphs; early morphology; the Complex sentence tier introduced.',
  },
  {
    grade: 'Grade 3',
    hex: depthColors.g3,
    skills: 'Multi-syllable decoding; prefixes and suffixes; deeper orthographic patterns.',
  },
  {
    grade: 'Grade 4',
    hex: depthColors.g4,
    skills: 'Greek and Latin roots; advanced vowel patterns; richer syntax across all three tiers.',
  },
  {
    grade: 'Grade 5',
    hex: depthColors.g5,
    skills: 'Full morphological analysis; irregular and low-frequency spellings; nuanced semantics.',
  },
  {
    grade: 'Grade 6',
    hex: depthColors.g6,
    skills: "Full English orthographic depth; fluent navigation of the language's trickiest patterns.",
  },
];
