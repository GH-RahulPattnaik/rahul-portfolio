'use client';

import { useState, useEffect } from 'react';

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

const socials = [
  { label: 'GitHub',   href: 'https://github.com/GH-RahulPattnaik' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rahul-pattnaik-9016241b0/' },
  { label: 'Email',    href: 'mailto:rpattnaik2001@gmail.com' },
];

export default function Footer() {
  const [year, setYear] = useState('2025');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative z-10 px-6 pt-16 pb-8"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-280 mx-auto">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div
              className="text-2xl font-bold tracking-tight"
              style={{
                fontFamily: 'var(--font-display)',
                color:      'var(--text-1)',
              }}
            >
              Rahul
              <span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <p
              className="text-sm leading-7 max-w-55"
              style={{ color: 'var(--text-2)' }}
            >
              Full Stack Developer building fast, scalable and production-grade
              web apps with Next.js & Node.js.
            </p>
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: 'var(--accent)',
                  boxShadow:  '0 0 6px var(--accent)',
                }}
              />
              <span
                className="text-xs"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color:      'var(--text-3)',
                }}
              >
                Open to work · Min 24 LPA
              </span>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <div
              className="text-xs tracking-widest uppercase mb-1"
              style={{
                fontFamily: 'var(--font-mono)',
                color:      'var(--text-3)',
              }}
            >
              Navigation
            </div>
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={e => scrollTo(e, link.href)}
                className="text-sm w-fit transition-colors duration-200 no-underline"
                style={{ color: 'var(--text-2)' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-2)';
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <div
              className="text-xs tracking-widest uppercase mb-1"
              style={{
                fontFamily: 'var(--font-mono)',
                color:      'var(--text-3)',
              }}
            >
              Get In Touch
            </div>
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="text-sm w-fit transition-colors duration-200 no-underline flex items-center gap-1.5 group"
                style={{ color: 'var(--text-2)' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-2)';
                }}
              >
                {s.label}
                <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>
            ))}

            {/* Resume link */}
            <a
              href="/Rahul_Pattnaik_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid w-fit mt-2 text-sm px-4 py-2"
            >
              Download CV ↗
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="divider mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-center sm:text-left"
            style={{
              fontFamily: 'var(--font-mono)',
              color:      'var(--text-3)',
            }}
          >
            © {year} Rahul Pattnaik · Built with Next.js & Tailwind CSS v4
          </p>

          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-xs transition-all duration-200 cursor-pointer group"
            style={{
              fontFamily:  'var(--font-mono)',
              color:       'var(--text-3)',
              background:  'none',
              border:      'none',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--accent)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-3)';
            }}
          >
            Back to top
            <span
              className="w-6 h-6 rounded-lg flex items-center justify-center text-xs transition-transform duration-200 group-hover:-translate-y-0.5"
              style={{
                border:     '1px solid var(--border-2)',
                background: 'var(--bg-card)',
              }}
            >
              ↑
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}