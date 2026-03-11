import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '../components/Themeprovider';
import BodyGuard from '../components/BodyGuard';

export const metadata: Metadata = {
  title: 'Rahul Pattnaik — UI Developer',
  description: 'Portfolio of Rahul Pattnaik — UI Developer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <BodyGuard>
            {children}
          </BodyGuard>
        </ThemeProvider>
      </body>
    </html>
  );
}