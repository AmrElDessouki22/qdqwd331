'use client';

import { useNotes } from '@/contexts/NotesContext';
import NoteItem from './NoteItem';

const NoteList = () => {
  const { notes } = useNotes();

  return (
    <div className="mt-6 space-y-4">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
