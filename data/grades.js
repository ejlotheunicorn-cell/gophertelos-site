// ---------------------------------------------------------------------------
// GRADE DATA — drives the Shop grade cards and the Scope & Sequence table.
//
// The `skills` lists are the real "New skills introduced" content from the
// Parent & Teacher Guide. The card `blurb:` lines are short marketing summaries
// (tweak freely). Adding a new grade later = add one object here — nothing else
// to touch. The `hex` values are the Depth Color System, teal -> plum.
// ---------------------------------------------------------------------------

export const depthColors = {
  prek: '#15807F', // teal (shallow, transparent spelling)
  g1: '#3A9D9D',
  g2: '#5A8A9D',
  g3: '#7A7A9D',
  g4: '#8A6A9D',
  g5: '#9A5A9D',
  g6: '#7A2E56', // plum (full irregular English)
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

// Scope & Sequence page — one row per grade band. `skills` is a list of the
// new skills introduced at that grade.
export const scopeRows = [
  {
    grade: 'Pre-K / K',
    hex: depthColors.prek,
    skills: ['CVC words', 'one sound per letter'],
  },
  {
    grade: 'Grade 1',
    hex: depthColors.g1,
    skills: ['Blends & digraphs (bl, cr, st, sh, ch, th)', 'simple past -ed'],
  },
  {
    grade: 'Grade 2',
    hex: depthColors.g2,
    skills: ['Silent-e (CVCe)', 'vowel teams (ai, ee, oa, ea)', 'r-controlled (ar, er, ir, or, ur)'],
  },
  {
    grade: 'Grade 3',
    hex: depthColors.g3,
    skills: ['Multisyllabic decoding', 'prefixes/suffixes (un-, re-, -ing, -tion)', 'soft c/g'],
  },
  {
    grade: 'Grade 4',
    hex: depthColors.g4,
    skills: ['Advanced vowel teams', 'homophones', 'compound words', 'subordinate clauses'],
  },
  {
    grade: 'Grade 5',
    hex: depthColors.g5,
    skills: ['Latin/Greek roots', 'derivational morphology (-able, -ous, -ist)', 'multisyllabic fluency'],
  },
  {
    grade: 'Grade 6',
    hex: depthColors.g6,
    skills: ['Advanced roots', 'academic vocabulary', 'complex sentences across all three tiers'],
  },
];
