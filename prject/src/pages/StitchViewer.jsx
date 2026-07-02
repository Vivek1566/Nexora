import { useMemo } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const stitchedFiles = import.meta.glob('../../stitch/**/code.html?raw', { eager: true });

function getSlugFromPath(filePath) {
  const normalizedPath = filePath.replace(/\\/g, '/');
  const match = normalizedPath.match(/stitch\/([^/]+)\/code\.html\?raw$/i);
  return match?.[1] || null;
}

function parseHtmlPage(rawHtml) {
  const styleMatch = rawHtml.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  const bodyMatch = rawHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const htmlMatch = rawHtml.match(/<html[^>]*>([\s\S]*?)<\/html>/i);

  const styleContent = styleMatch?.[1] ?? '';
  const bodyContent = bodyMatch?.[1] ?? htmlMatch?.[1] ?? rawHtml;

  return { styleContent, bodyContent };
}

export default function StitchViewer() {
  const { pageId } = useParams();
  const navigate = useNavigate();

  const pages = useMemo(() => {
    return Object.entries(stitchedFiles).reduce((acc, [filePath, rawHtml]) => {
      const slug = getSlugFromPath(filePath);
      if (slug) acc[slug] = rawHtml;
      return acc;
    }, {});
  }, []);

  const rawHtml = pages[pageId];
  const pageKeys = Object.keys(pages).sort();

  const parsed = useMemo(() => {
    if (!rawHtml) return { styleContent: '', bodyContent: '<div class="p-8">Example not found.</div>' };
    return parseHtmlPage(rawHtml);
  }, [rawHtml]);

  if (!rawHtml) {
    return (
      <main className="min-h-screen bg-background text-on-surface px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Example not found</h1>
          <p className="text-on-surface-variant mb-6">The requested Stitch example does not exist.</p>
          <button
            type="button"
            onClick={() => navigate('/stitch')}
            className="btn-primary px-5 py-3 rounded-xl text-white"
          >
            Back to Stitch gallery
          </button>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-background text-on-surface relative overflow-x-hidden">
      <div className="sticky top-0 z-50 bg-surface/95 backdrop-blur border-b border-outline-variant/10">
        <div className="max-w-container-max mx-auto flex flex-col gap-3 px-margin-mobile py-4 md:flex-row md:items-center md:justify-between md:px-margin-desktop">
          <div>
            <h1 className="text-2xl font-semibold">Stitch Viewer</h1>
            <p className="text-on-surface-variant text-sm">Rendering <span className="font-medium">{pageId}</span> as a React page.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/stitch" className="btn-secondary px-4 py-2 rounded-xl text-on-surface">Gallery</Link>
            <Link to={`/stitch/${pageKeys[(pageKeys.indexOf(pageId) + pageKeys.length - 1) % pageKeys.length]}`} className="btn-secondary px-4 py-2 rounded-xl text-on-surface">Previous</Link>
            <Link to={`/stitch/${pageKeys[(pageKeys.indexOf(pageId) + 1) % pageKeys.length]}`} className="btn-primary px-4 py-2 rounded-xl text-white">Next</Link>
          </div>
        </div>
      </div>

      <style>{parsed.styleContent}</style>

      <div className="max-w-container-max mx-auto px-margin-mobile py-8 md:px-margin-desktop">
        <div className="prose prose-invert max-w-full">
          <div dangerouslySetInnerHTML={{ __html: parsed.bodyContent }} />
        </div>
      </div>
    </div>
  );
}
