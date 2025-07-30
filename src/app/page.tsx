import NoteList from '@/components/features/NoteList';
import NoteForm from '@/components/features/NoteForm';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center">Notes</h1>
      <NoteForm />
      <NoteList />
    </div>
  );
};

export default HomePage;
