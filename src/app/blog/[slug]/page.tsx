import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft } from 'lucide-react';
import { getAllSlugs, getPostBySlug } from '@/lib/blog';
import { buildPageMetadata } from '@/lib/metadata';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: 'Post Not Found' };

  const base = buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
  });
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="page-shell">
      <header className="page-intro max-w-4xl">
        <Link href="/blog" className="text-link mb-7">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All writing
        </Link>
        <p className="kicker">Engineering note</p>
        <h1 className="page-title max-w-[16ch]">{post.title}</h1>
        <p className="lede">{post.description}</p>
        <div className="work-meta mt-6 flex flex-wrap gap-x-4 gap-y-2">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>{post.readingTime}</span>
        </div>
        <div className="tag-list mt-4">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <section className="section-row" aria-label="Article">
        <div className="section-index">
          <strong>01</strong>
          Article
        </div>
        <article className="section-body editorial-prose">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => <h2>{children}</h2>,
              h2: ({ children }) => <h2>{children}</h2>,
              h3: ({ children }) => <h3>{children}</h3>,
              a: ({ href = '', children }) => {
                const external = href.startsWith('http');
                return (
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                  >
                    {children}
                  </a>
                );
              },
              code: ({ className, children, ...props }) => (
                <code
                  className={
                    className
                      ? `${className} font-mono text-sm`
                      : 'bg-secondary px-1.5 py-0.5 font-mono text-[0.88em] text-foreground'
                  }
                  {...props}
                >
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="my-6 overflow-x-auto bg-[#171613] p-4 text-[#f0eadf] shadow-[0_0_0_1px_rgba(0,0,0,0.12)]">
                  {children}
                </pre>
              ),
              table: ({ children }) => (
                <div className="my-7 overflow-x-auto">
                  <table className="w-full min-w-[36rem] border-collapse text-left text-base">
                    {children}
                  </table>
                </div>
              ),
              th: ({ children }) => (
                <th className="border-b-2 border-foreground px-3 py-2 font-mono text-xs uppercase tracking-[0.08em]">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="border-b border-foreground/15 px-3 py-2 align-top">
                  {children}
                </td>
              ),
              hr: () => <hr className="my-10 border-foreground/20" />,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </section>

      <div className="section-row">
        <div className="section-index">
          <strong>02</strong>
          Continue
        </div>
        <div className="section-body">
          <Link href="/blog" className="button-secondary pressable">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to writing
          </Link>
        </div>
      </div>
    </div>
  );
}
