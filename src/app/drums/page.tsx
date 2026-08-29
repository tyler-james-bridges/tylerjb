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
        <h1>Percussion</h1>
        <p className="lede">
          Pulse Percussion · Snareline · 2012–2014
          <br />
          Blue Stars · Snareline instructor · 2014–2018
          <br />
          Flux Indoor Percussion · Battery consultant · 2024–present
        </p>
      </header>

      <section className="content-section" aria-labelledby="archive-title">
        <div className="section-heading">
          <h2 id="archive-title">Performance archive</h2>
        </div>
        <div className="media-grid">
          {videos.map((video) => {
            const label = `${video.title}: ${video.subtitle}`;
            return (
              <article key={video.videoId} className="video-card">
                <div className="video-frame">
                  <VideoEmbed videoId={video.videoId} title={label} />
                </div>
                <h3>{video.title}</h3>
                <p className="record-meta">{video.subtitle}</p>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
