import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rahul Pattnaik — Full Stack Developer',
  description:
    'Full Stack Developer specializing in Next.js, React, Node.js. Building fast, scalable, production-grade web apps.',
  keywords: [
    'Rahul Pattnaik',
    'Full Stack Developer',
    'Next.js Developer',
    'React Developer',
    'Node.js',
    'TypeScript',
    'UI Developer',
    'Flutter Developer',
  ],
  authors: [{ name: 'Rahul Pattnaik' }],
  openGraph: {
    title: 'Rahul Pattnaik — Full Stack Developer',
    description:
      'Full Stack Developer specializing in Next.js, React, Node.js. Building fast, scalable, production-grade web apps.',
    url: 'https://rahul-portfolio-gules-xi.vercel.app',
    siteName: 'Rahul Pattnaik Portfolio',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahul Pattnaik — Full Stack Developer',
    description:
      'Full Stack Developer specializing in Next.js, React, Node.js. Building fast, scalable, production-grade web apps.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}