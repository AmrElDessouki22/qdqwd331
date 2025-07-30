import '@/app/globals.css';
import { ReactNode } from 'react';
import { NotesProvider } from '@/contexts/NotesContext';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

export const metadata = {
  title: 'Note Taking App',
  description: 'An app to take notes',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <NotesProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NotesProvider>
      </body>
    </html>
  );
};

export default RootLayout;
