import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllSlugs } from '@/lib/blog';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Simple markdown to HTML converter for basic formatting
function renderMarkdown(content: string): string {
  return (
    content
      // Code blocks (must come before inline code)
      .replace(
        /```(\w+)?\n([\s\S]*?)```/g,
        '<pre class="bg-muted p-4 rounded-lg overflow-x-auto my-4"><code>$2</code></pre>'
      )
      // Inline code
      .replace(
        /`([^`]+)`/g,
        '<code class="bg-muted px-1.5 py-0.5 rounded text-sm">$1</code>'
      )
      // Headers
      .replace(
        /^### (.*$)/gm,
        '<h3 class="text-lg font-semibold mt-8 mb-3">$1</h3>'
      )
      .replace(
        /^## (.*$)/gm,
        '<h2 class="text-xl font-semibold mt-8 mb-4">$1</h2>'
      )
      .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold mt-8 mb-4">$1</h1>')
      // Bold and italic
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      // Links
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>'
      )
      // Unordered lists
      .replace(/^\s*[-*] (.*$)/gm, '<li class="ml-4">$1</li>')
      // Ordered lists
      .replace(/^\s*\d+\. (.*$)/gm, '<li class="ml-4 list-decimal">$1</li>')
      // Blockquotes
      .replace(
        /^> (.*$)/gm,
        '<blockquote class="border-l-4 border-muted-foreground/30 pl-4 italic text-muted-foreground my-4">$1</blockquote>'
      )
      // Horizontal rules
      .replace(/^---$/gm, '<hr class="my-8 border-border" />')
      // Paragraphs (double newlines)
      .replace(/\n\n/g, '</p><p class="mb-4">')
      // Single newlines in paragraphs
      .replace(/\n/g, '<br />')
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const htmlContent = renderMarkdown(post.content);

  return (
    <div className="animate-slide-up">
      <header className="content-header">
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-2 inline-block"
        >
          ← Back to Blog
        </Link>
        <h1 className="text-2xl font-bold">{post.title}</h1>
      </header>

      <div className="content-body">
        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-8 pb-4 border-b border-border">
          <time>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-8 -mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-muted rounded-full text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Article content */}
        <article
          className="prose-notes"
          dangerouslySetInnerHTML={{
            __html: `<p class="mb-4">${htmlContent}</p>`,
          }}
        />

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-border">
          <Link
            href="/blog"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to all posts
          </Link>
        </div>
      </div>
    </div>
  );
}
