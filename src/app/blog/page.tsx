import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on engineering, quality, and the journey from QA to SWE.",
};

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
    <div className="animate-slide-up">
      <header className="content-header">
        <h1 className="text-2xl font-bold">📝 Blog</h1>
      </header>

      <div className="content-body prose-notes">
        <p className="text-muted-foreground mb-8">
          Thoughts on engineering, quality, automation, and the occasional win (and failure) along the way.
        </p>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group p-4 -mx-4 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <h2 className="text-lg font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
                      {post.title}
                    </h2>
                    <time className="text-sm text-muted-foreground shrink-0">
                      {formatDate(post.date)}
                    </time>
                  </div>

                  <p className="text-muted-foreground text-sm mb-3">
                    {post.description}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.readingTime}</span>
                    {post.tags.length > 0 && (
                      <>
                        <span>·</span>
                        <div className="flex gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 bg-muted rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
