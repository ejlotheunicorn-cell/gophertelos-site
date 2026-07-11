import { scopeRows } from '@/data/grades';

// Real, responsive table: header + grid rows on desktop, stacked on mobile.
export default function ScopeTable() {
  return (
    <div className="overflow-hidden rounded-2xl ring-1 ring-black/5">
      {/* Header (desktop only) */}
      <div className="hidden grid-cols-[220px_1fr] bg-brand-tealDark text-brand-cream sm:grid">
        <div className="px-6 py-3 font-display text-sm uppercase tracking-wide">Grade</div>
        <div className="px-6 py-3 font-display text-sm uppercase tracking-wide">
          New skills introduced
        </div>
      </div>

      <div className="divide-y divide-brand-sand bg-white">
        {scopeRows.map((r) => (
          <div
            key={r.grade}
            className="grid gap-2 p-5 sm:grid-cols-[220px_1fr] sm:items-center sm:gap-6 sm:p-0"
          >
            <div className="flex items-center gap-3 sm:px-6 sm:py-5">
              <span
                className="h-4 w-4 flex-none rounded-full"
                style={{ backgroundColor: r.hex }}
                aria-hidden
              />
              <span className="font-display text-lg font-semibold text-brand-ink">{r.grade}</span>
            </div>
            <div className="text-sm leading-relaxed text-brand-ink/75 sm:px-6 sm:py-5">
              {r.skills}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
