'use client';

import { useState } from 'react';

export default function TextEditor() {
  const [content, setContent] = useState(`Welcome to TylerOS Text Editor!

This is a simple text editor built into the OS.
You can type, edit, and even use some basic formatting.

Try writing something here...`);

  const [fileName, setFileName] = useState('untitled.txt');
  const [wordCount, setWordCount] = useState(0);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setContent(text);
    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    setWordCount(words.length);
  };

  const handleSave = () => {
    // In a real app, this would save to a virtual filesystem
    alert(`Saved "${fileName}" with ${wordCount} words`);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Editor toolbar */}
      <div className="bg-gray-100 border-b px-2 md:px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-1 md:gap-2">
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            className="px-1 md:px-2 py-1 border rounded text-xs md:text-sm w-20 md:w-auto"
          />
          <button
            onClick={handleSave}
            className="px-2 md:px-3 py-1 bg-teal-500 text-white rounded text-xs md:text-sm hover:bg-teal-600"
          >
            Save
          </button>
        </div>
        <div className="text-xs md:text-sm text-gray-600 hidden sm:block">
          {wordCount} words | {content.length} characters
        </div>
      </div>

      {/* Editor content */}
      <textarea
        value={content}
        onChange={handleContentChange}
        className="flex-1 p-2 md:p-4 font-mono text-sm resize-none outline-none"
        placeholder="Start typing..."
        spellCheck={true}
      />
    </div>
  );
}
