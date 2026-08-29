'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoEmbedProps {
  videoId: string;
  title: string;
}

export default function VideoEmbed({ videoId, title }: VideoEmbedProps) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      className="group relative h-full w-full overflow-hidden bg-[#151514] text-left"
      onClick={() => setActive(true)}
      aria-label={`Play ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover opacity-80 transition-opacity duration-150 group-hover:opacity-95"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <span className="absolute bottom-4 left-4 right-4 flex items-center gap-3 text-sm font-semibold text-white">
        <span className="grid h-10 w-10 shrink-0 place-items-center border border-white/70 bg-black/35 text-white">
          <Play
            className="h-5 w-5 translate-x-px"
            fill="currentColor"
            aria-hidden="true"
          />
        </span>
        Play performance
      </span>
    </button>
  );
}
