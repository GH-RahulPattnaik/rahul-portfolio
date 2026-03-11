'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const roles = ['UI Developer', 'React Developer', 'Next.js Engineer', 'Full-Stack Dev'];
const skills = ['Next.js', 'React.js', 'Tailwind CSS', 'MongoDB', 'TypeScript', 'Node.js', 'REST APIs', 'Git'];

export default function Hero() {
  const [ri, setRi]     = useState(0);
  const [text, setText] = useState('');
  const [fwd, setFwd]   = useState(true);

  useEffect(() => {
    const cur = roles[ri];
    if (fwd) {
      if (text.length < cur.length) {
        const t = setTimeout(() => setText(cur.slice(0, text.length + 1)), 75);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setFwd(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (text.length > 0) {
        const t = setTimeout(() => setText(t => t.slice(0, -1)), 45);
        return () => clearTimeout(t);
      } else {
        setRi(p => (p + 1) % roles.length);
        setFwd(true);
      }
    }
  }, [text, fwd, ri]);

  return (
    <section id="hero" style={{ background: 'var(--bg)', paddingTop: '72px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Main content */}
      <div style={{ flex: 1, maxWidth: '1280px', margin: '0 auto', width: '100%', padding: '4rem 1.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2.5rem' }}>

        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'start' }}>
          {/* Name block */}
          <div>
            <div className="anim d1" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
              <div style={{ width: '36px', height: '3px', background: 'var(--accent)' }} />
              <span className="gs-mono" style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)' }}>Available for work</span>
            </div>

            <h1 className="gs-display anim d2" style={{ fontSize: 'clamp(3.5rem, 11vw, 8.5rem)', fontWeight: 700, lineHeight: 0.88, letterSpacing: '-0.04em', color: 'var(--text)' }}>
              Rahul<br />
              <span style={{ WebkitTextStroke: '2px var(--text)', color: 'transparent' }}>Pattnaik</span>
            </h1>

            {/* Role typewriter */}
            <div className="anim d3" style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '2px', height: '2.2rem', background: 'var(--accent)' }} />
              <span className="gs-mono" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', color: 'var(--text-muted)', minWidth: '240px' }}>
                {text}<span className="blink" style={{ color: 'var(--accent)' }}>_</span>
              </span>
            </div>
          </div>

          {/* Photo */}
          <div className="anim d2 hidden md:block" style={{ display: 'block' }}>
            <div className="hover-lift" style={{ width: '200px', aspectRatio: '3/4', position: 'relative', border: '2px solid var(--border)', overflow: 'hidden' }}>
              <Image src="/hero-pic.png" alt="Rahul Pattnaik" fill style={{ objectFit: 'cover' }} priority />
              {/* Red/blue corner tag */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'var(--accent)', padding: '0.4rem 0.6rem' }}>
                <span className="gs-mono" style={{ fontSize: '0.6rem', color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>UI Developer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bio + stats */}
        <div className="anim d4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', borderTop: '2px solid var(--border)', paddingTop: '2rem' }}>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-muted)', maxWidth: '480px' }}>
            Building responsive, intuitive web interfaces with Next.js &amp; React.
            Currently at <strong style={{ color: 'var(--text)' }}>Bluecorp Software</strong>, Hyderabad.
            Based in <strong style={{ color: 'var(--text)' }}>Berhampur, Odisha</strong>.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'var(--border)' }}>
            {[['2+', 'Years exp'], ['3+', 'Projects'], ['5', 'Templates'], ['4', 'Languages']].map(([n, l]) => (
              <div key={l} style={{ background: 'var(--bg)', padding: '1rem', transition: 'background 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'var(--accent)'; (e.currentTarget as HTMLDivElement).querySelectorAll('span').forEach((s: Element) => (s as HTMLElement).style.color = '#fff'); }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'var(--bg)'; (e.currentTarget as HTMLDivElement).querySelectorAll('span').forEach((s: Element) => (s as HTMLElement).style.color = ''); }}
              >
                <span className="gs-display" style={{ display: 'block', fontSize: '2rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1 }}>{n}</span>
                <span className="gs-mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="anim d5" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {[{ l: 'View Projects →', h: '#projects', fill: true }, { l: 'Get In Touch →', h: '#contact', fill: false }].map(b => (
            <a key={b.l} href={b.h} className="gs-mono hover-lift"
              style={{ padding: '0.85rem 2rem', background: b.fill ? 'var(--text)' : 'transparent', color: b.fill ? 'var(--bg)' : 'var(--text)', border: '2px solid var(--border)', textDecoration: 'none', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'background 0.2s, color 0.2s, border-color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = b.fill ? 'var(--text)' : 'transparent'; e.currentTarget.style.color = b.fill ? 'var(--bg)' : 'var(--text)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
            >{b.l}</a>
          ))}
        </div>
      </div>

      {/* Skills marquee strip */}
      <div style={{ borderTop: '2px solid var(--border)', overflow: 'hidden', background: 'var(--bg-alt)', padding: '0.85rem 0' }}>
        <div className="marquee-track">
          {[...skills, ...skills].map((s, i) => (
            <span key={i} className="gs-mono" style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ color: 'var(--accent)', fontSize: '0.5rem' }}>◆</span>{s}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}