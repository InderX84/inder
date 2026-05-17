export default function SkeletonCard() {
  return (
    <div className="glass-card animate-pulse rounded-[2rem] border-white/10 p-6">
      <div className="mb-4 h-6 w-32 rounded-full bg-slate-700/80" />
      <div className="mb-3 h-5 w-48 rounded-full bg-slate-700/80" />
      <div className="space-y-3">
        <div className="h-4 rounded-full bg-slate-700/80" />
        <div className="h-4 rounded-full bg-slate-700/80" />
        <div className="h-4 w-3/4 rounded-full bg-slate-700/80" />
      </div>
      <div className="mt-6 h-3 w-24 rounded-full bg-slate-700/80" />
    </div>
  );
}
