import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drums",
  description: "Performance videos from my years in drum corps and indoor percussion.",
};

export default function DrumsPage() {
  return (
    <div className="animate-slide-up">
      <header className="content-header">
        <h1 className="text-2xl font-bold">🥁 Drums</h1>
      </header>

      <div className="content-body prose-notes">
        <section className="stagger-1">
          <p className="text-muted-foreground mb-6">
            Some moments from the field that shaped who I became.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-video rounded-xl overflow-hidden border border-border card-lift">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/-gapbxJ4BFk?si=-daNqFpi5AZmqt-X"
                title="Performance video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden border border-border card-lift">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/62fP_00dHig?si=RNOOy0d6hArguG91"
                title="Performance video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden border border-border card-lift">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/9LZSvRP6gKQ?si=yBMltF7mFnpseBLo"
                title="Performance video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden border border-border card-lift">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/uQX_WrVjrXs?si=EvX_yTJXj4BYgO1N"
                title="Performance video"
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
