'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive]     = useState('');
  const [theme, setTheme]       = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    navLinks.forEach(l => {
      const el = document.getElementById(l.href.replace('#', ''));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b backdrop-blur-xl'
            : 'border-b border-transparent'
        }`}
        style={{
          background: scrolled ? 'var(--bg)' : 'transparent',
          borderColor: scrolled ? 'var(--border)' : 'transparent',
        }}
      >
        <div className="max-w-280 mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            onClick={e => scrollTo(e, '#hero')}
            className="no-underline flex items-center"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              fontWeight: 800,
              color: 'var(--text-1)',
              letterSpacing: '-0.02em',
            }}
          >
            Rahul
            <span style={{ color: 'var(--accent)' }}>.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => {
              const isActive = active === link.href.replace('#', '');
              return (
                <a
                  key={i}
                  href={link.href}
                  onClick={e => scrollTo(e, link.href)}
                  className={`text-sm px-3 py-2 rounded-md no-underline transition-all duration-200 ${
                    isActive
                      ? 'font-semibold'
                      : 'font-normal hover:opacity-100'
                  }`}
                  style={{
                    fontFamily: 'var(--font-body)',
                    color:      isActive ? 'var(--accent)' : 'var(--text-2)',
                    background: isActive ? 'var(--accent-dim)' : 'transparent',
                  }}
                >
                  {link.label}
                </a>
              );
            })}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 w-9 h-9 rounded-lg flex items-center justify-center text-base transition-all duration-200 cursor-pointer"
              style={{
                border:     '1px solid var(--border-2)',
                background: 'transparent',
                color:      'var(--text-2)',
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀' : '☾'}
            </button>

            {/* Resume */}
            <a
              href="/Rahul_Pattnaik_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid ml-2 text-sm px-4 py-2"
            >
              Résumé ↗
            </a>
          </div>

          {/* Mobile right */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-base cursor-pointer"
              style={{
                border:     '1px solid var(--border-2)',
                background: 'transparent',
                color:      'var(--text-2)',
              }}
            >
              {theme === 'dark' ? '☀' : '☾'}
            </button>

            <button
              onClick={() => setMenuOpen(v => !v)}
              className="w-9 h-9 rounded-lg flex flex-col items-center justify-center gap-1.25 cursor-pointer"
              style={{
                border:     '1px solid var(--border-2)',
                background: 'transparent',
              }}
              aria-label="Toggle menu"
            >
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  className="block w-4 rounded-sm transition-all duration-200"
                  style={{
                    height:     '1.5px',
                    background: menuOpen
                      ? i === 1 ? 'transparent' : 'var(--accent)'
                      : 'var(--text-2)',
                    transform: menuOpen
                      ? i === 0 ? 'translateY(6.5px) rotate(45deg)'
                      : i === 2 ? 'translateY(-6.5px) rotate(-45deg)'
                      : 'none'
                      : 'none',
                  }}
                />
              ))}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className="overflow-hidden transition-all duration-300"
          style={{
            maxHeight:  menuOpen ? '400px' : '0',
            background: 'var(--bg)',
            borderTop:  menuOpen ? '1px solid var(--border)' : 'none',
          }}
        >
          <div className="px-6 pt-5 pb-6 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={e => scrollTo(e, link.href)}
                className="no-underline py-3 border-b text-[1.4rem] font-bold tracking-tight transition-colors duration-200"
                style={{
                  fontFamily:  'var(--font-display)',
                  color:       active === link.href.replace('#', '') ? 'var(--accent)' : 'var(--text-1)',
                  borderColor: 'var(--border)',
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Rahul_Pattnaik_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid mt-4 justify-center"
            >
              Résumé ↗
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}