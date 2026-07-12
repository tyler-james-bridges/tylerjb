import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/metadata';
import VideoEmbed from '../components/VideoEmbed';

const description =
  'Performance archive from Tyler James-Bridges’ years in indoor percussion and drum corps.';

export const metadata: Metadata = buildPageMetadata({
  title: 'Drums',
  description,
  path: '/drums',
});

const videos = [
  {
    title: 'Pulse Percussion 2014',
    subtitle: 'That Which Confines Us · Snareline',
    videoId: '-gapbxJ4BFk',
  },
  {
    title: 'Pulse Percussion 2013',
    subtitle: 'Renegade · Snareline',
    videoId: '62fP_00dHig',
  },
  {
    title: 'Pulse Percussion 2012',
    subtitle: 'Coming and Going · Snareline',
    videoId: '9LZSvRP6gKQ',
  },
  {
    title: 'Blue Stars 2013',
    subtitle: 'Voodoo: I Put a Spell on You',
    videoId: 'uQX_WrVjrXs',
  },
];

export default function DrumsPage() {
  return (
    <div className="page-shell">
      <header className="page-intro">
        <p className="kicker reveal">Drums</p>
        <h1 className="page-title reveal reveal-delay-1">
          I played snare before I wrote code
        </h1>
        <p className="lede reveal reveal-delay-2">
          I marched Pulse Percussion from 2012 to 2014, taught the Blue Stars,
          and still work with percussion programs in Arizona. These are a few
          performances I&apos;m glad are still online.
        </p>
      </header>

      <section className="section-row" aria-labelledby="archive-title">
        <div className="section-index">Archive</div>
        <div className="section-body">
          <h2 id="archive-title" className="section-title">
            Selected performances
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {videos.map((video) => {
              const label = `${video.title}: ${video.subtitle}`;
              return (
                <article key={video.videoId}>
                  <div className="video-frame aspect-video">
                    <VideoEmbed videoId={video.videoId} title={label} />
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                    {video.title}
                  </h2>
                  <p className="work-meta mt-1">{video.subtitle}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
