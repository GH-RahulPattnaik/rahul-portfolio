'use client';

import { useEffect, useState } from 'react';

const roles = ['UI Developer', 'React Developer', 'Next.js Engineer', 'Full Stack Dev'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed]   = useState('');
  const [typing, setTyping]         = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
        return () => clearTimeout(t);
      } else {
        setRoleIndex(prev => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 1.5rem', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>

      {/* Big decorative letter */}
      <div className="font-display" aria-hidden="true" style={{ position: 'absolute', right: '-10px', top: '50%', transform: 'translateY(-50%)', fontSize: 'clamp(160px, 22vw, 360px)', color: 'var(--border)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', zIndex: 0 }}>
        R
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Tag */}
        <p className="font-mono animate-fade-up animate-delay-100" style={{ fontSize: '0.78rem', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
          ✦ Available for work
        </p>

        {/* Name */}
        <h1 className="animate-fade-up animate-delay-200" style={{ fontSize: 'clamp(3.2rem, 10vw, 7.5rem)', lineHeight: 0.95, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0.5rem' }}>
          Rahul<br />Pattnaik
        </h1>

        {/* Typewriter */}
        <div className="animate-fade-up animate-delay-300" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', margin: '1rem 0 2rem' }}>
          <span style={{ width: '28px', height: '3px', background: 'var(--accent)', display: 'inline-block', flexShrink: 0 }} />
          <span className="font-mono" style={{ fontSize: 'clamp(0.95rem, 2.2vw, 1.2rem)', color: 'var(--text-muted)', minWidth: '220px' }}>
            {displayed}<span className="cursor-blink" style={{ color: 'var(--accent)' }}>|</span>
          </span>
        </div>

        {/* Bio */}
        <p className="animate-fade-up animate-delay-400" style={{ maxWidth: '480px', lineHeight: 1.8, color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '2.5rem' }}>
          Building responsive, intuitive web interfaces with Next.js &amp; React.
          Based in <span style={{ color: 'var(--text)', fontWeight: 500 }}>Berhampur, Odisha</span>.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up animate-delay-500" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {[
            { label: 'View Projects', href: '#projects', filled: true },
            { label: 'Get In Touch',  href: '#contact',  filled: false },
          ].map(btn => (
            <a
              key={btn.label}
              href={btn.href}
              className="font-mono"
              style={{
                padding: '0.75rem 2rem',
                background: btn.filled ? 'var(--accent)' : 'transparent',
                color: btn.filled ? '#fff' : 'var(--text)',
                border: btn.filled ? 'none' : '1px solid var(--border)',
                textDecoration: 'none',
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                transition: 'opacity 0.2s, transform 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.82'; e.currentTarget.style.transform = 'translateY(-2px)'; if (!btn.filled) e.currentTarget.style.borderColor = 'var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; if (!btn.filled) e.currentTarget.style.borderColor = 'var(--border)'; }}
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ position: 'absolute', bottom: '2.5rem', left: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
        <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Scroll</span>
      </div>
    </section>
  );
}