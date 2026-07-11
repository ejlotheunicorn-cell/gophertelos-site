import { site } from '@/data/site';

// One reusable card. Adding Grades 3–6 later = just flip `status` to 'available'
// and fill in the blurb / sampleUrl / etsyKey in data/grades.js.
export default function GradeCard({ grade }) {
  const coming = grade.status === 'coming';
  const etsyUrl = grade.etsyKey ? site.etsy[grade.etsyKey] : null;
  const hasSample = grade.sampleUrl && grade.sampleUrl !== '#';

  return (
    <div
      className={`flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 ${
        coming ? 'opacity-80' : ''
      }`}
    >
      <div className="h-2 w-full" style={{ backgroundColor: grade.hex }} />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-brand-ink">{grade.name}</h3>
          {coming ? (
            <span className="rounded-full bg-brand-sand px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-ink/60">
              Coming soon
            </span>
          ) : (
            <span
              className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white"
              style={{ backgroundColor: grade.hex }}
            >
              Available
            </span>
          )}
        </div>

        {grade.blurb && (
          <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-ink/75">{grade.blurb}</p>
        )}

        {!coming && (
          <div className="mt-6 flex flex-col gap-3">
            {hasSample && (
              <a
                href={grade.sampleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-brand-teal hover:underline"
              >
                Try a free Day 1 sample →
              </a>
            )}
            <a
              href={etsyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold text-white transition hover:brightness-110"
              style={{ backgroundColor: grade.hex }}
            >
              Shop the full program
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
