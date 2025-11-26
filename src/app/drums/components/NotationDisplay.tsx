'use client';

import { useEffect, useRef } from 'react';
import { Note } from '../types';

interface NotationDisplayProps {
  notes: (Note & { id: number })[];
  currentIndex?: number;
  rudimentName?: string;
}

export default function NotationDisplay({ notes, rudimentName }: NotationDisplayProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Convert our note types to sticking labels
  const getSticking = (note: Note): string => {
    const type = note.type;
    if (type === 'R' || type === 'FR' || type === 'DR' || type === 'r') return 'R';
    if (type === 'L' || type === 'FL' || type === 'DL' || type === 'l') return 'L';
    if (type === 'B') return 'B';
    return '';
  };

  useEffect(() => {
    if (!containerRef.current || notes.length === 0) return;

    // Dynamically import VexFlow (client-side only)
    const renderNotation = async () => {
      const { Renderer, Stave, StaveNote, Voice, Formatter, Beam, Annotation, AnnotationVerticalJustify } = await import('vexflow');

      // Clear previous render
      containerRef.current!.innerHTML = '';

      // Calculate dimensions based on number of notes
      const notesToShow = Math.min(notes.length, 16);
      const noteWidth = 35;
      const width = Math.max(400, notesToShow * noteWidth + 80);
      const height = 150;

      // Create renderer
      const renderer = new Renderer(containerRef.current!, Renderer.Backends.SVG);
      renderer.resize(width, height);
      const context = renderer.getContext();
      context.setFont('Arial', 10);

      // Create a stave (staff)
      const stave = new Stave(10, 40, width - 20);
      stave.addClef('percussion');
      stave.setContext(context).draw();

      // Create notes
      const staveNotes: InstanceType<typeof StaveNote>[] = [];
      const displayNotes = notes.slice(0, notesToShow);

      displayNotes.forEach((note, idx) => {
        const isFirst = idx === 0;
        const sticking = getSticking(note);

        // Create the note - "c/5" is middle of percussion staff
        const staveNote = new StaveNote({
          keys: ['c/5'],
          duration: '8', // eighth note
          stem_direction: 1, // stems up
        });

        // Add sticking annotation above the note
        const annotation = new Annotation(sticking);
        annotation.setVerticalJustification(AnnotationVerticalJustify.TOP);
        annotation.setFont('Arial', 14, 'bold');
        staveNote.addModifier(annotation);

        // Highlight first note
        if (isFirst) {
          staveNote.setStyle({ fillStyle: '#2563eb', strokeStyle: '#2563eb' });
        }

        // Add accent if needed
        if (note.accent) {
          staveNote.addModifier(new Annotation('>').setVerticalJustification(AnnotationVerticalJustify.TOP));
        }

        staveNotes.push(staveNote);
      });

      // Create beams (connect every 2 or 4 notes)
      const beams: InstanceType<typeof Beam>[] = [];
      for (let i = 0; i < staveNotes.length; i += 4) {
        const group = staveNotes.slice(i, Math.min(i + 4, staveNotes.length));
        if (group.length > 1) {
          beams.push(new Beam(group));
        }
      }

      // Create voice and add notes
      const voice = new Voice({ num_beats: staveNotes.length, beat_value: 8 });
      voice.setStrict(false);
      voice.addTickables(staveNotes);

      // Format and draw
      new Formatter().joinVoices([voice]).format([voice], width - 60);
      voice.draw(context, stave);

      // Draw beams
      beams.forEach(beam => beam.setContext(context).draw());
    };

    renderNotation();
  }, [notes]);

  return (
    <div className="w-full max-w-2xl mx-auto px-2">
      {/* Rudiment name */}
      {rudimentName && (
        <h2 className="text-lg sm:text-xl font-bold text-center text-white mb-3">
          {rudimentName}
        </h2>
      )}

      {/* VexFlow container */}
      <div className="bg-white rounded-lg p-2 sm:p-4 shadow-lg overflow-x-auto">
        <div ref={containerRef} className="min-w-max" />

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-2 pt-2 border-t border-gray-200 text-[10px] sm:text-xs text-gray-500">
          <span className="text-blue-600 font-medium">Next note highlighted</span>
        </div>
      </div>
    </div>
  );
}
