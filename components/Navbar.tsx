'use client';
import { useState, useEffect } from 'react';
import { useTheme } from '@/components/Themeprovider';
import Image from 'next/image';

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled,  setScrolled]  = useState(false);
  const [open,      setOpen]      = useState(false);
  const [isMobile,  setIsMobile]  = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    if (!isMobile) setOpen(false);
  }, [isMobile]);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'var(--nav-bg)',
      borderBottom: scrolled ? '2px solid var(--border)' : '2px solid transparent',
      backdropFilter: 'blur(12px)',
      transition: 'border-color 0.3s',
    }}>
      <div style={{
        maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem',
        height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '42px', height: '42px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--accent)', flexShrink: 0, position: 'relative' }}>
            <Image src="/avatar.png" alt="Rahul Pattnaik" width={42} height={42} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
          </div>
          <span className="gs-display" style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em' }}>
            Rahul Pattnaik
          </span>
        </a>

        {/* Desktop nav */}
        {!isMobile && (
          <nav style={{ display: 'flex', gap: '0', alignItems: 'center' }}>
            {links.map(l => (
              <a key={l.label} href={l.href} className="gs-mono"
                style={{ padding: '0.4rem 1.1rem', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none', borderRight: '1px solid var(--border-light)', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'var(--hover)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'transparent'; }}
              >{l.label}</a>
            ))}
            <button onClick={toggleTheme} className="gs-mono"
              style={{ marginLeft: '1.2rem', padding: '0.4rem 1rem', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', border: '2px solid var(--border)', background: 'transparent', color: 'var(--text)', cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'inherit' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
            >{theme === 'dark' ? '☀ Light' : '◑ Dark'}</button>
          </nav>
        )}

        {/* Mobile controls */}
        {isMobile && (
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <button onClick={toggleTheme}
              style={{ padding: '0.35rem 0.8rem', border: '2px solid var(--border)', background: 'transparent', color: 'var(--text)', cursor: 'pointer', fontSize: '0.7rem', fontFamily: 'inherit' }}
            >{theme === 'dark' ? '☀' : '◑'}</button>
            <button onClick={() => setOpen(!open)}
              style={{ padding: '0.35rem 0.8rem', border: '2px solid var(--border)', background: open ? 'var(--accent)' : 'transparent', color: open ? '#fff' : 'var(--text)', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.7rem', letterSpacing: '0.08em', transition: 'all 0.2s' }}
            >{open ? '✕ Close' : '☰ Menu'}</button>
          </div>
        )}
      </div>

      {/* Mobile menu dropdown */}
      {isMobile && open && (
        <div style={{ borderTop: '2px solid var(--border)', background: 'var(--bg)' }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="gs-mono"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem', borderBottom: '1px solid var(--border-light)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', color: 'var(--text-muted)', transition: 'all 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--hover)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.paddingLeft = '2rem'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.paddingLeft = '1.5rem'; }}
            >
              {l.label}
              <span style={{ fontSize: '0.65rem', opacity: 0.5 }}>→</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
}