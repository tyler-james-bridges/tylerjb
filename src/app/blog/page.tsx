import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';

const description =
  'Engineering notes by Tyler James-Bridges on developer tooling, quality systems, automation, and software delivery.';

export const metadata: Metadata = buildPageMetadata({
  title: 'Writing',
  description,
  path: '/blog',
});

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="page-shell">
      <header className="page-intro">
        <p className="kicker reveal">Writing</p>
        <h1 className="page-title reveal reveal-delay-1">
          Notes from systems I have built.
        </h1>
        <p className="lede reveal reveal-delay-2">
          Developer tooling, test infrastructure, CI/CD, and the engineering
          decisions behind them.
        </p>
      </header>

      <section className="section-row" aria-labelledby="posts-title">
        <div className="section-index">
          <strong>01</strong>
          Articles
        </div>
        <div className="section-body">
          <h2 id="posts-title" className="section-title">
            Field notes
          </h2>
          {posts.length === 0 ? (
            <p className="section-copy">No articles published yet.</p>
          ) : (
            <div className="work-list">
              {posts.map((post, index) => (
                <article key={post.slug} className="work-item">
                  <span className="work-number tabular">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <div className="work-meta mt-2 flex flex-wrap gap-x-3 gap-y-1">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                  <div>
                    <p>{post.description}</p>
                    <div className="tag-list mt-3">
                      {post.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-link mt-3"
                    >
                      Read article
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
