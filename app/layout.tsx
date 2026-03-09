import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '../components/Themeprovider';

export const metadata: Metadata = {
  title: 'Rahul Pattnaik — UI Developer',
  description: 'Portfolio of Rahul Pattnaik, a UI Developer specialising in Next.js, React.js, and Tailwind CSS.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}