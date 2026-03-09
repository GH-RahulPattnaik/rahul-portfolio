'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/components/Themeprovider';

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <nav style={{
        maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem',
        height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <a href="#hero" style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text)', textDecoration: 'none', letterSpacing: '-0.02em' }}>
          Rahul<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex" style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', alignItems: 'center' }}>
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-mono"
                style={{ fontSize: '0.78rem', textDecoration: 'none', color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{ width: '38px', height: '38px', borderRadius: '50%', border: '1px solid var(--border)', background: 'var(--bg-secondary)', color: 'var(--text)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', transition: 'border-color 0.2s' }}
          >
            {theme === 'dark' ? '☀' : '◑'}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="flex md:hidden"
            style={{ width: '38px', height: '38px', border: '1px solid var(--border)', background: 'transparent', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px', borderRadius: '6px' }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: '16px', height: '2px', background: 'var(--text)', transition: 'all 0.3s',
                opacity: menuOpen && i === 1 ? 0 : 1,
                transform: menuOpen ? i === 0 ? 'translateY(7px) rotate(45deg)' : i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'none' : 'none',
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '1.5rem' }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {navLinks.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono"
                  style={{ fontSize: '0.82rem', textDecoration: 'none', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}