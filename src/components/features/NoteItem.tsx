'use client';

import { Note } from '@/types';
import Button from '@/components/ui/Button';
import { useNotes } from '@/contexts/NotesContext';

interface NoteItemProps {
  note: Note;
}

const NoteItem = ({ note }: NoteItemProps) => {
  const { deleteNote } = useNotes();

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold">{note.title}</h2>
      <p>{note.content}</p>
      <Button label="Delete" onClick={() => deleteNote(note.id)} />
    </div>
  );
};

export default NoteItem;
