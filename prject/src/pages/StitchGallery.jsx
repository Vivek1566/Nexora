import { useMemo } from 'react';
import { Link } from 'react-router-dom';

const stitchFiles = import.meta.glob('../../stitch/**/code.html?raw', { eager: true });

function normalizeName(slug) {
  return slug
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function StitchGallery() {
  const examples = useMemo(() => {
    return Object.entries(stitchFiles)
      .map(([filePath]) => {
        const normalizedPath = filePath.replace(/\\/g, '/');
        const match = normalizedPath.match(/stitch\/([^/]+)\/code\.html\?raw$/i);
        const slug = match?.[1];
        return slug ? { slug, name: normalizeName(slug) } : null;
      })
      .filter(Boolean)
      .sort((a, b) => a.slug.localeCompare(b.slug));
  }, []);

  return (
    <main className="min-h-screen bg-background text-on-surface px-6 py-12 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Stitch UI Library</h1>
          <p className="text-on-surface-variant max-w-2xl">
            Browse the converted Stitch examples rendered inside your React + Tailwind app.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map((example) => (
            <Link
              key={example.slug}
              to={`/stitch/${example.slug}`}
              className="block rounded-2xl border border-outline bg-surface-container p-6 transition hover:-translate-y-1 hover:border-primary"
            >
              <h2 className="text-xl font-semibold text-primary mb-2">{example.name}</h2>
              <p className="text-sm text-on-surface-variant">View the Stitch HTML example in React.</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
