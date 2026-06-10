import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drums',
  description:
    'Performance videos from my years in drum corps and indoor percussion.',
};

export default function DrumsPage() {
  return (
    <div className="animate-slide-up">
      <div className="content-body prose-notes">
        <h1 className="sr-only">Drums</h1>
        <section className="stagger-1">
          <p className="text-muted-foreground mb-6">
            Some moments from the field that shaped who I became.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-video overflow-hidden glass-card card-lift">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/-gapbxJ4BFk?si=-daNqFpi5AZmqt-X"
                title="Pulse Percussion 2014: That Which Confines Us"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="aspect-video overflow-hidden glass-card card-lift">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/62fP_00dHig?si=RNOOy0d6hArguG91"
                title="Pulse Percussion 2013: Renegade"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="aspect-video overflow-hidden glass-card card-lift">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/9LZSvRP6gKQ?si=yBMltF7mFnpseBLo"
                title="Pulse Percussion 2012: Coming and Going"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="aspect-video overflow-hidden glass-card card-lift">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/uQX_WrVjrXs?si=EvX_yTJXj4BYgO1N"
                title="2013 Blue Stars - Voodoo: I Put A Spell On You"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
