import { scopeRows } from '@/data/grades';

// The Depth Color System bar (teal -> plum), used as a visual header.
export default function DepthBar() {
  return (
    <div className="overflow-hidden rounded-full ring-1 ring-black/5">
      <div className="flex h-4">
        {scopeRows.map((r) => (
          <div key={r.grade} className="flex-1" style={{ backgroundColor: r.hex }} />
        ))}
      </div>
    </div>
  );
}
