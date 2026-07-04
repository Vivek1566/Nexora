import React from 'react';

export function AnimatedChart({ data, label = 'Momentum' }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">{label}</p>
          <p className="text-white font-semibold">Weekly momentum</p>
        </div>
        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
          +18%
        </span>
      </div>

      <div className="flex h-36 items-end gap-3">
        {data.map((item, index) => (
          <div key={item.label} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex h-28 w-full items-end">
              <div
                className="animated-bar w-full rounded-t-xl bg-gradient-to-t from-blue-500 via-violet-500 to-cyan-400"
                style={{ height: `${item.value}%`, animationDelay: `${index * 120}ms` }}
              />
            </div>
            <span className="text-[11px] uppercase tracking-[0.24em] text-slate-500">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
